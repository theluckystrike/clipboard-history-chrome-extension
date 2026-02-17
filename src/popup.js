// Clipboard History - Popup JavaScript
// Open source version — all features unlocked

// State
const state = {
    clips: [],
    filteredClips: [],
    filter: 'all',
    searchQuery: '',
    stats: null
};

// DOM Elements
const $ = id => document.getElementById(id);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        await loadClips();
        await loadStats();
        initEventListeners();
        updateUI();
    } catch (err) {
        console.error('[Popup] Init failed:', err);
        showError('Failed to load clipboard history');
    }
}

// Load clips from background
async function loadClips() {
    try {
        const response = await chrome.runtime.sendMessage({ action: 'GET_CLIPS' });
        if (response && Array.isArray(response)) {
            state.clips = response;
            state.filteredClips = [...state.clips];
        } else if (response?.error) {
            throw new Error(response.error);
        } else {
            state.clips = [];
            state.filteredClips = [];
        }
    } catch (err) {
        console.error('[Popup] Failed to load clips:', err);
        state.clips = [];
        state.filteredClips = [];
    }
}

// Load stats
async function loadStats() {
    try {
        state.stats = await chrome.runtime.sendMessage({ action: 'GET_STATS' });
    } catch (err) {
        console.error('[Popup] Failed to load stats:', err);
    }
}

// Initialize event listeners
function initEventListeners() {
    // Search
    const searchInput = $('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 200));
    }

    // Filters
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => handleFilter(tab.dataset.filter));
    });

    // Settings
    const settingsBtn = $('settingsBtn');
    const closeSettings = $('closeSettings');
    if (settingsBtn) settingsBtn.addEventListener('click', () => toggleSettings(true));
    if (closeSettings) closeSettings.addEventListener('click', () => toggleSettings(false));

    // Export
    const exportBtn = $('exportBtn');
    if (exportBtn) exportBtn.addEventListener('click', handleExport);

    // Clear all
    const clearBtn = $('clearBtn');
    const clearAllBtn = $('clearAllBtn');
    if (clearBtn) clearBtn.addEventListener('click', handleClearAll);
    if (clearAllBtn) clearAllBtn.addEventListener('click', handleClearAll);
}

// Search handler
function handleSearch() {
    const searchInput = $('searchInput');
    state.searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    applyFilters();
}

// Filter handler
function handleFilter(filter) {
    state.filter = filter;
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === filter);
    });
    applyFilters();
}

// Apply all filters
function applyFilters() {
    let filtered = [...state.clips];

    // Type filter
    if (state.filter === 'starred') {
        filtered = filtered.filter(c => c.starred);
    } else if (state.filter === 'pinned') {
        filtered = filtered.filter(c => c.pinned);
    } else if (state.filter !== 'all') {
        filtered = filtered.filter(c => c.type === state.filter);
    }

    // Search filter
    if (state.searchQuery) {
        filtered = filtered.filter(c =>
            c.content.toLowerCase().includes(state.searchQuery)
        );
    }

    state.filteredClips = filtered;
    renderClips();
}

// Update UI
function updateUI() {
    // Clip count
    const clipCount = $('clipCount');
    if (clipCount) clipCount.textContent = state.clips.length;

    renderClips();
}

// Render clips
function renderClips() {
    const clipsList = $('clipsList');
    const emptyState = $('emptyState');
    const noResultsState = $('noResultsState');

    if (!clipsList) return;

    // Clear
    clipsList.innerHTML = '';

    // Empty states
    if (state.clips.length === 0) {
        if (emptyState) emptyState.hidden = false;
        if (noResultsState) noResultsState.hidden = true;
        return;
    }

    if (emptyState) emptyState.hidden = true;

    if (state.filteredClips.length === 0) {
        if (noResultsState) noResultsState.hidden = false;
        return;
    }

    if (noResultsState) noResultsState.hidden = true;

    // Render clips
    state.filteredClips.forEach(clip => {
        const clipEl = createClipElement(clip);
        clipsList.appendChild(clipEl);
    });
}

// Create clip element
function createClipElement(clip) {
    const div = document.createElement('div');
    div.className = 'clip-item';
    div.dataset.id = clip.id;

    const typeIcon = getTypeIcon(clip.type);
    const timeAgo = formatTimeAgo(clip.timestamp);
    const preview = escapeHtml(clip.content.substring(0, 100));

    div.innerHTML = `
        <div class="clip-main">
            <span class="clip-type-icon">${typeIcon}</span>
            <div class="clip-content">
                <div class="clip-preview">${preview}${clip.content.length > 100 ? '...' : ''}</div>
                <div class="clip-meta">${timeAgo}</div>
            </div>
        </div>
        <div class="clip-actions">
            <button class="btn-icon btn-star ${clip.starred ? 'active' : ''}" title="Star">&#9733;</button>
            <button class="btn-icon btn-pin ${clip.pinned ? 'active' : ''}" title="Pin">&#128204;</button>
            <button class="btn-icon btn-copy" title="Copy">&#128203;</button>
            <button class="btn-icon btn-delete" title="Delete">&#128465;&#65039;</button>
        </div>
    `;

    // Event listeners
    div.querySelector('.btn-copy').addEventListener('click', (e) => {
        e.stopPropagation();
        copyClip(clip);
    });

    div.querySelector('.btn-star').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStar(clip);
    });

    div.querySelector('.btn-pin').addEventListener('click', (e) => {
        e.stopPropagation();
        togglePin(clip);
    });

    div.querySelector('.btn-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteClip(clip);
    });

    // Click to copy
    div.addEventListener('click', () => copyClip(clip));

    return div;
}

// Get type icon
function getTypeIcon(type) {
    const icons = {
        url: '&#128279;',
        email: '&#128231;',
        code: '&#128187;',
        json: '{ }',
        number: '#',
        text: '&#128221;'
    };
    return icons[type] || '&#128221;';
}

// Format time ago
function formatTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

// Copy clip
async function copyClip(clip) {
    try {
        await navigator.clipboard.writeText(clip.content);
        showToast('Copied!');

        // Update usage count
        await chrome.runtime.sendMessage({
            action: 'UPDATE_CLIP',
            id: clip.id,
            updates: { usageCount: (clip.usageCount || 0) + 1 }
        });
    } catch (err) {
        console.error('Copy failed:', err);
        showToast('Copy failed');
    }
}

// Toggle star
async function toggleStar(clip) {
    const newStarred = !clip.starred;

    await chrome.runtime.sendMessage({
        action: 'UPDATE_CLIP',
        id: clip.id,
        updates: { starred: newStarred }
    });

    clip.starred = newStarred;
    renderClips();
}

// Toggle pin
async function togglePin(clip) {
    const newPinned = !clip.pinned;

    await chrome.runtime.sendMessage({
        action: 'UPDATE_CLIP',
        id: clip.id,
        updates: { pinned: newPinned }
    });

    clip.pinned = newPinned;
    renderClips();
}

// Delete clip
async function deleteClip(clip) {
    await chrome.runtime.sendMessage({
        action: 'DELETE_CLIP',
        id: clip.id
    });

    state.clips = state.clips.filter(c => c.id !== clip.id);
    applyFilters();
}

// Handle export
async function handleExport() {
    const data = state.clips.map(c => ({
        content: c.content,
        type: c.type,
        timestamp: new Date(c.timestamp).toISOString(),
        starred: c.starred,
        pinned: c.pinned
    }));

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clipboard-history-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Handle clear all
async function handleClearAll() {
    if (confirm('Delete all clipboard history? This cannot be undone.')) {
        await chrome.runtime.sendMessage({ action: 'CLEAR_ALL' });
        state.clips = [];
        state.filteredClips = [];
        renderClips();
        showToast('All clips cleared');
    }
}

// Toggle settings panel
function toggleSettings(show) {
    const settingsPanel = $('settingsPanel');
    if (settingsPanel) settingsPanel.hidden = !show;
}

// Show toast
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Show error
function showError(message) {
    const clipsList = $('clipsList');
    if (clipsList) {
        clipsList.innerHTML = `<div class="error-message">${escapeHtml(message)}</div>`;
    }
}

// Utility: Debounce
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Utility: Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
