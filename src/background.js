// Clipboard History - Background Service Worker
// Captures clipboard content and stores in IndexedDB

const DB_NAME = 'ClipboardHistory';
const DB_VERSION = 1;
const STORE_NAME = 'clips';
const MAX_CLIPS = 10000;

let db = null;

// Initialize database
async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const database = event.target.result;

            if (!database.objectStoreNames.contains(STORE_NAME)) {
                const store = database.createObjectStore(STORE_NAME, { keyPath: 'id' });
                store.createIndex('timestamp', 'timestamp', { unique: false });
                store.createIndex('starred', 'starred', { unique: false });
                store.createIndex('pinned', 'pinned', { unique: false });
                store.createIndex('type', 'type', { unique: false });
            }
        };
    });
}

// Add new clip
async function addClip(content, type = 'text') {
    if (!db) await initDB();

    // Check if duplicate of most recent
    const recentClip = await getMostRecentClip();
    if (recentClip && recentClip.content === content) {
        return null; // Skip duplicate
    }

    const clip = {
        id: crypto.randomUUID(),
        content: content.substring(0, 50000), // Max 50KB per clip
        type: detectType(content),
        timestamp: Date.now(),
        starred: false,
        pinned: false,
        usageCount: 0
    };

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const request = store.add(clip);
        request.onsuccess = () => {
            enforceClipLimit(MAX_CLIPS);
            resolve(clip);
        };
        request.onerror = () => reject(request.error);
    });
}

// Detect content type
function detectType(content) {
    const trimmed = content.trim();

    // URL
    if (/^https?:\/\//.test(trimmed)) return 'url';

    // Email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'email';

    // Code (heuristic)
    if (/[{}\[\]();]/.test(trimmed) && /\n/.test(trimmed)) return 'code';

    // JSON
    try {
        JSON.parse(trimmed);
        return 'json';
    } catch { }

    // Number
    if (/^\d+([.,]\d+)?$/.test(trimmed)) return 'number';

    return 'text';
}

// Get most recent clip
async function getMostRecentClip() {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index('timestamp');

        const request = index.openCursor(null, 'prev');
        request.onsuccess = () => {
            const cursor = request.result;
            resolve(cursor ? cursor.value : null);
        };
        request.onerror = () => reject(request.error);
    });
}

// Get all clips
async function getAllClips() {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);

        const request = store.getAll();
        request.onsuccess = () => {
            const clips = request.result.sort((a, b) => b.timestamp - a.timestamp);
            resolve(clips);
        };
        request.onerror = () => reject(request.error);
    });
}

// Update clip (star, pin, etc.)
async function updateClip(id, updates) {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const getRequest = store.get(id);
        getRequest.onsuccess = () => {
            const clip = getRequest.result;
            if (!clip) {
                reject(new Error('Clip not found'));
                return;
            }

            const updated = { ...clip, ...updates };
            const putRequest = store.put(updated);
            putRequest.onsuccess = () => resolve(updated);
            putRequest.onerror = () => reject(putRequest.error);
        };
        getRequest.onerror = () => reject(getRequest.error);
    });
}

// Delete clip
async function deleteClip(id) {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const request = store.delete(id);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

// Clear all clips
async function clearAllClips() {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

// Enforce clip limit (delete oldest non-pinned clips)
async function enforceClipLimit(maxClips) {
    const clips = await getAllClips();
    const nonPinned = clips.filter(c => !c.pinned);

    if (nonPinned.length > maxClips) {
        const toDelete = nonPinned.slice(maxClips);
        for (const clip of toDelete) {
            await deleteClip(clip.id);
        }
    }
}

// Search clips
async function searchClips(query) {
    const clips = await getAllClips();
    const lowerQuery = query.toLowerCase();

    return clips.filter(clip =>
        clip.content.toLowerCase().includes(lowerQuery)
    );
}

// Get usage stats
async function getStats() {
    const clips = await getAllClips();

    return {
        totalClips: clips.length,
        maxClips: MAX_CLIPS,
        starredCount: clips.filter(c => c.starred).length,
        pinnedCount: clips.filter(c => c.pinned).length
    };
}

// Message handler
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const handlers = {
        GET_CLIPS: async () => getAllClips(),
        ADD_CLIP: async () => addClip(message.content, message.type),
        UPDATE_CLIP: async () => updateClip(message.id, message.updates),
        DELETE_CLIP: async () => deleteClip(message.id),
        CLEAR_ALL: async () => clearAllClips(),
        SEARCH: async () => searchClips(message.query),
        GET_STATS: async () => getStats()
    };

    const handler = handlers[message.action];
    if (handler) {
        handler().then(sendResponse).catch(err => sendResponse({ error: err.message }));
        return true; // Async response
    }
});

// Context menu for quick paste
chrome.runtime.onInstalled.addListener(async (details) => {
    // Initialize database
    await initDB();

    // Create context menu
    chrome.contextMenus.create({
        id: 'paste-from-history',
        title: 'Paste from Clipboard History',
        contexts: ['editable']
    });

    // Show onboarding on first install
    if (details.reason === 'install') {
        chrome.tabs.create({
            url: chrome.runtime.getURL('onboarding/welcome.html')
        });

        chrome.storage.local.set({
            installedAt: Date.now(),
            onboardingComplete: false
        });
    }
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'paste-from-history') {
        chrome.action.openPopup();
    }
});

// Initialize on startup
async function initializeExtension() {
    await initDB();
}

initializeExtension().catch(console.error);
