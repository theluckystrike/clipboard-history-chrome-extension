# Clipboard History — Technical Architecture

## High-Level Architecture

```
┌──────────────────────────────────────────────────────┐
│                    Chrome Browser                     │
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌─────────────────┐    │
│  │  Popup   │  │ Options  │  │ Content Script   │    │
│  │  (UI)    │  │  Page    │  │ (copy detection) │    │
│  └────┬─────┘  └────┬─────┘  └───────┬─────────┘    │
│       │              │                │               │
│       └──────────┬───┘────────────────┘               │
│                  │  Chrome Messages API               │
│           ┌──────▼──────┐                             │
│           │   Service   │                             │
│           │   Worker    │                             │
│           │ (background)│                             │
│           └──────┬──────┘                             │
│                  │                                    │
│           ┌──────▼──────┐                             │
│           │chrome.storage│                            │
│           │   .local     │                            │
│           └─────────────┘                             │
└──────────────────────────────────────────────────────┘
```

## Module Descriptions

| Module | File | Responsibility |
|--------|------|---------------|
| **Service Worker** | `background.js` | Clipboard entry management, deduplication, storage |
| **Content Script** | `content.js` | Listens for `copy` and `cut` events, sends text to service worker |
| **Popup UI** | `popup.js` | History list, search, click-to-copy, pin/delete actions |
| **Options Page** | `options.js` | History size limit, retention period, privacy settings |
| **Storage Manager** | `storage.js` | CRUD operations on clipboard entries, LRU eviction |

## Data Flow

1. **Capture**: The content script listens for `copy` and `cut` DOM events. When triggered, it reads `document.getSelection()` or clipboard data and sends the text to the service worker.
2. **Storage**: The service worker deduplicates the entry, timestamps it, and prepends it to the history array in `chrome.storage.local`. If the array exceeds the configured limit, the oldest unpinned entries are evicted.
3. **Display**: The popup reads history from storage, renders a searchable list, and provides click-to-copy functionality.
4. **Paste**: When the user clicks an entry, the text is written to the clipboard using `navigator.clipboard.writeText()` via the popup context.

## Chrome Extension APIs Used

| API | Purpose |
|-----|---------|
| `chrome.storage.local` | Persist clipboard history and user settings |
| `chrome.runtime` | Message passing between content scripts and service worker |
| `chrome.tabs` | Identify source tab for clipboard entries |
| `chrome.action` | Show popup, badge with entry count |
| `chrome.commands` | Keyboard shortcut to open clipboard history |
| `chrome.alarms` | Periodic cleanup of expired entries |

## Build & Development

```bash
# Clone the repository
git clone https://github.com/theluckystrike/clipboard-history-chrome-extension.git
cd clipboard-history-chrome-extension

# Load as unpacked extension
# 1. Open chrome://extensions
# 2. Enable Developer Mode
# 3. Click "Load unpacked" and select the project directory

# No build step — plain JavaScript, no bundler
```

### Project Structure

```
├── manifest.json        # Extension manifest (MV3)
├── background.js        # Service worker entry point
├── content/             # Content scripts (copy event listener)
├── popup/               # Popup UI (history list, search)
├── options/             # Settings page
├── icons/               # Extension icons
└── lib/                 # Storage manager, utilities
```

## Design Decisions

- **Event-Driven Capture**: Uses DOM `copy`/`cut` events rather than polling the clipboard, which is more efficient and privacy-respecting.
- **Local-Only Storage**: All clipboard data remains in `chrome.storage.local`. Nothing is transmitted externally.
- **LRU Eviction**: The oldest unpinned entries are removed first, keeping frequently-used snippets accessible.
- **Minimal Permissions**: Only requests `clipboardRead` and `activeTab` — no broad host permissions needed.
- **Deduplication**: Consecutive identical copies are merged into a single entry to keep history clean.
