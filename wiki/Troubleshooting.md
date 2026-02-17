# Troubleshooting

## The extension is not capturing my copies

**Check that the extension is installed and enabled:**
1. Go to `chrome://extensions`
2. Find Clipboard History in the list
3. Make sure the toggle is switched on (blue)

**Check the page you are copying from:**
- The content script needs to run on the page to detect copy events. Some special Chrome pages (`chrome://`, `chrome-extension://`, the Chrome Web Store) do not allow content scripts to run. Copies from these pages will not be captured.
- Try copying text from a regular website to confirm the extension is working.

**Check clipboard permissions:**
- Some websites use strict Content Security Policies that may block clipboard access. If copying does not work on a specific site, try another site to confirm.
- Make sure no other extension is interfering with clipboard access.

**Reload the extension:**
1. Go to `chrome://extensions`
2. Click the refresh icon on the Clipboard History card
3. Reload any open tabs

## The keyboard shortcut is not working

**Check for conflicts:**
1. Go to `chrome://extensions/shortcuts`
2. Find Clipboard History and check whether a shortcut is assigned
3. If another extension uses the same shortcut, there will be a conflict. Change one of them.

**Default shortcuts:**
- Mac: `Cmd+Shift+V`
- Windows/Linux: `Ctrl+Shift+V`

**Note:** Some applications and websites override `Ctrl+Shift+V` (for example, Google Docs uses it for "Paste without formatting"). In these cases, the extension shortcut may not work while that application is focused. You can change the shortcut at `chrome://extensions/shortcuts`.

## Clips are disappearing

Clipboard History stores up to 10,000 items. When this limit is reached, the oldest **non-pinned** clips are automatically deleted to make room for new ones.

If you want to keep a clip permanently, **pin it**. Pinned clips are never automatically deleted.

## The popup is empty even though I have been copying

**Wait a moment and try again:**
- There is a brief delay (about 100ms) between copying and the clip appearing in the history. If you open the popup immediately after copying, the new clip may not have been processed yet.

**Check the filter tabs:**
- If you have a filter active (such as Starred or URL), you may not see all your clips. Click the **All** tab to see everything.

**Check the search bar:**
- If there is text in the search bar, only matching clips will be shown. Clear the search to see all clips.

## The extension is using too much storage

Clipboard History stores data in IndexedDB, which has generous storage limits. With 10,000 text clips, the extension typically uses between 10 MB and 100 MB depending on clip sizes (each clip can hold up to 50,000 characters).

To reduce storage usage:
1. Delete clips you no longer need
2. Clear your entire history from Settings
3. Export your history first if you want a backup

## The context menu option is missing

The "Paste from Clipboard History" context menu option only appears when you right-click on an **editable element** (text input, textarea, or contenteditable element). It will not appear on regular text or images.

If it is missing even on editable elements:
1. Go to `chrome://extensions`
2. Click the refresh icon on the Clipboard History card
3. Reload the page

## The extension stopped working after a Chrome update

Chrome updates can occasionally affect extensions. Try these steps:

1. Go to `chrome://extensions`
2. Disable and re-enable Clipboard History
3. If that does not work, remove the extension and reinstall it from the [Chrome Web Store](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)

Note: Reinstalling will clear your stored clipboard history. Export your history first from the popup footer.

## Reporting a Bug

If none of the above solves your issue, please [open a GitHub issue](https://github.com/theluckystrike/clipboard-history-chrome-extension/issues) with:

- Your Chrome version (`chrome://version`)
- Your operating system
- Steps to reproduce the problem
- Any error messages from the Chrome DevTools console (right-click the popup > Inspect > Console tab)

---

[Back to Home](Home)
