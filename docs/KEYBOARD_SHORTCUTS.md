# Keyboard Shortcuts Reference

## Opening Clipboard History

| Platform | Shortcut |
|----------|----------|
| macOS | `Cmd+Shift+V` |
| Windows | `Ctrl+Shift+V` |
| Linux | `Ctrl+Shift+V` |
| ChromeOS | `Ctrl+Shift+V` |

This opens the popup with the search bar focused, so you can immediately start typing to filter your clips.

## Customizing the Shortcut

Chrome allows you to change the keyboard shortcut for any extension:

1. Open `chrome://extensions/shortcuts` in Chrome
2. Find **Clipboard History** in the list
3. Click the pencil icon next to the current shortcut
4. Press your preferred key combination
5. The new shortcut takes effect immediately

### Conflict Resolution

If another extension or Chrome itself uses the same shortcut, Chrome will notify you of the conflict. Common conflicts:

- `Ctrl+Shift+V` is used by Google Docs for "Paste without formatting"
- Some terminal emulators and code editors also use `Ctrl+Shift+V`

In these cases, choose a different shortcut like `Alt+Shift+V` or `Ctrl+Shift+H`.

## Standard Chrome Shortcuts (for reference)

These are built-in Chrome shortcuts that work alongside Clipboard History:

| Shortcut | Action |
|----------|--------|
| `Cmd+C` / `Ctrl+C` | Copy selected text (triggers Clipboard History capture) |
| `Cmd+X` / `Ctrl+X` | Cut selected text (triggers Clipboard History capture) |
| `Cmd+V` / `Ctrl+V` | Paste from system clipboard |
| `Cmd+A` / `Ctrl+A` | Select all text |

## Workflow with Keyboard

The fastest way to use Clipboard History is entirely keyboard-driven:

### Quick Paste from History

1. `Cmd+C` / `Ctrl+C` -- Copy text as usual (captured automatically)
2. `Cmd+Shift+V` / `Ctrl+Shift+V` -- Open Clipboard History
3. Type a few characters to search
4. Click the clip you need (copies it to clipboard)
5. `Cmd+V` / `Ctrl+V` -- Paste

### Batch Copy Workflow

1. Copy multiple items in sequence (`Cmd+C` / `Ctrl+C` for each)
2. Switch to the destination
3. `Cmd+Shift+V` / `Ctrl+Shift+V` -- Open history
4. Click the first item to copy, `Cmd+V` / `Ctrl+V` to paste
5. Repeat for each item

## Popup Interaction

When the Clipboard History popup is open:

- The search bar is focused by default -- start typing to search
- Click any clip to copy it to your clipboard
- Hover over a clip to reveal star, pin, copy, and delete buttons
- Use the filter tabs (All, Starred, Pinned, Text, URL, Code) to narrow results

## Context Menu Alternative

If you prefer the mouse or want to avoid keyboard shortcuts entirely:

1. Right-click on any text input field, textarea, or contenteditable element
2. Select **Paste from Clipboard History**
3. The popup opens so you can choose a clip

The context menu option only appears on editable elements.

---

**[Install Clipboard History](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)** | [Back to README](../README.md)
