# Frequently Asked Questions

## How do I access my clipboard history?

There are three ways:

1. **Click the icon** -- Click the Clipboard History icon in your Chrome toolbar.
2. **Keyboard shortcut** -- Press `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux).
3. **Context menu** -- Right-click on any text field and select "Paste from Clipboard History."

If the icon is not visible, click the puzzle piece icon in the Chrome toolbar and pin Clipboard History.

## How many items can it store?

Up to **10,000 items**. When the limit is reached, the oldest non-pinned clips are automatically removed. Pinned clips are never auto-deleted. Each clip can hold up to 50,000 characters.

## Is it safe for sensitive data like passwords?

All data is stored locally in your browser's IndexedDB. The extension makes zero network requests and contains no analytics or tracking. Nothing ever leaves your machine.

However, the extension does capture everything you copy, including passwords. We recommend deleting sensitive clips after use, or clearing your history periodically. Most password managers paste without using the system clipboard, so those entries are typically not captured.

The extension is fully [open source](https://github.com/theluckystrike/clipboard-history-chrome-extension) and auditable.

## How do I pin items for quick access?

Hover over any clip and click the pin icon. Pinned clips appear under the Pinned filter tab and are protected from automatic deletion when the 10,000-item limit is reached. Click the pin icon again to unpin.

You can also star clips for a second layer of organization. Stars and pins are independent.

## What keyboard shortcuts are available?

| Shortcut | Action |
|----------|--------|
| `Cmd+Shift+V` (Mac) | Open Clipboard History popup |
| `Ctrl+Shift+V` (Windows/Linux) | Open Clipboard History popup |

The search bar is focused automatically when the popup opens, so you can start typing immediately to search.

To customize the shortcut, visit `chrome://extensions/shortcuts`.

## Does it sync across devices?

The free open source version stores data locally only. There is no cross-device sync.

## How do I export my clipboard history?

Click the export icon (upward arrow) in the popup footer. Your history downloads as a JSON file containing each clip's content, type, timestamp, and pin/star status.

## How do I clear my history?

- **Single clip:** Hover over a clip and click the trash icon.
- **All clips:** Click the trash icon in the popup footer, or go to Settings and click Clear All. This is permanent.

Consider exporting your history before clearing.

## Does it work with images?

Not currently. Clipboard History captures text only. It detects and categorizes text, URLs, emails, code, JSON, and numbers. Image support may be added in the future.

## Can I change the keyboard shortcut?

Yes. Navigate to `chrome://extensions/shortcuts` in Chrome and set a custom shortcut for Clipboard History.

---

**[Install Clipboard History](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)** | [Back to README](README.md)
