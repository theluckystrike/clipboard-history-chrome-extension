# Frequently Asked Questions

## How do I access my clipboard history?

There are three ways to access your clipboard history:

1. **Click the icon** -- Click the Clipboard History icon in your Chrome toolbar to open the popup.
2. **Keyboard shortcut** -- Press `Cmd+Shift+V` on Mac or `Ctrl+Shift+V` on Windows/Linux to open the popup instantly.
3. **Context menu** -- Right-click on any text field and select **Paste from Clipboard History**.

If the extension icon is not visible in the toolbar, click the puzzle piece icon and pin Clipboard History.

## How many items can it store?

Clipboard History stores up to **10,000 items**. When the limit is reached, the oldest non-pinned clips are automatically removed to make room for new ones. Pinned clips are never automatically deleted, so you can pin anything you want to keep permanently.

Each individual clip can hold up to 50,000 characters (about 50KB) of text.

## Is it safe for sensitive data like passwords?

Clipboard History stores all data locally in your browser's IndexedDB. No data is ever sent to any server, cloud service, or third party. The extension makes zero network requests and contains no analytics or tracking code.

That said, the extension captures everything you copy, including passwords and other sensitive text. Here are some recommendations:

- **Clear sensitive clips** -- Delete individual clips by clicking the trash icon, or clear your entire history from Settings.
- **Review before exporting** -- If you export your history as JSON, be aware the file may contain sensitive content.
- **Use your OS password manager** -- Most password managers paste directly without using the system clipboard, which means those entries will not be captured.

The extension is fully open source, so you can [audit the code](https://github.com/theluckystrike/clipboard-history-chrome-extension) yourself.

## How do I pin items for quick access?

Hover over any clip in the popup and click the pin icon. Pinned clips have two special properties:

1. They appear when you select the **Pinned** filter tab
2. They are **never automatically deleted** when the 10,000-item limit is reached

To unpin a clip, click the pin icon again.

You can also **star** clips by clicking the star icon. Starred clips appear under the **Starred** filter tab. Stars and pins are independent -- you can use both on the same clip.

## What keyboard shortcuts are available?

| Shortcut | Action |
|----------|--------|
| `Cmd+Shift+V` (Mac) | Open Clipboard History popup |
| `Ctrl+Shift+V` (Windows/Linux) | Open Clipboard History popup |

Once the popup is open, you can type directly into the search bar to filter your clips. The search bar is focused automatically when the popup opens.

To customize the keyboard shortcut, go to `chrome://extensions/shortcuts` in Chrome.

## Does it sync across devices?

The free open source version stores all data locally in your browser. It does not sync across devices or browsers.

If you need cross-device sync, the [Pro version](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf) includes cloud sync as a premium feature.

## How do I export my clipboard history?

1. Open the Clipboard History popup
2. Click the **export icon** in the bottom-right corner of the popup (the upward arrow icon)
3. Your history will be downloaded as a JSON file named `clipboard-history-YYYY-MM-DD.json`

The exported file contains each clip's content, type, timestamp, and star/pin status. You can open it in any text editor or process it with a script.

## How do I clear my history?

There are two ways to clear your history:

**Delete individual clips:**
- Hover over a clip and click the trash icon to delete it.

**Clear all clips:**
1. Open the Clipboard History popup
2. Click the trash icon in the footer, or open **Settings** and click **Clear All**
3. Confirm the deletion

Clearing your history is permanent and cannot be undone. Consider exporting your history first if you might need it later.

## Does it work with images?

The current version of Clipboard History captures **text only**. When you copy an image, it will not be saved to your history. The extension detects and saves plain text, URLs, email addresses, code snippets, JSON, and numbers.

Image support may be added in a future release.

## Does it work in incognito mode?

By default, Chrome extensions are disabled in incognito mode. If you want Clipboard History to work in incognito:

1. Go to `chrome://extensions`
2. Click **Details** on the Clipboard History card
3. Enable **Allow in Incognito**

Keep in mind that clips captured in incognito mode will appear in your regular clipboard history.

## Can I change the keyboard shortcut?

Yes. Go to `chrome://extensions/shortcuts` in Chrome to customize the shortcut for opening Clipboard History. You can set any key combination that is not already in use by Chrome or another extension.

---

[Back to Home](Home)
