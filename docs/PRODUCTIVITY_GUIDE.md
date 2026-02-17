# Productivity Guide

Get the most out of Clipboard History with these tips and workflows.

## Keyboard Shortcuts

### Default Shortcuts

| Platform | Shortcut | Action |
|----------|----------|--------|
| Mac | `Cmd+Shift+V` | Open Clipboard History popup |
| Windows | `Ctrl+Shift+V` | Open Clipboard History popup |
| Linux | `Ctrl+Shift+V` | Open Clipboard History popup |

When the popup opens, the search bar is automatically focused. Start typing to search immediately.

### Customizing the Shortcut

1. Navigate to `chrome://extensions/shortcuts`
2. Find **Clipboard History** in the list
3. Click the pencil icon and press your preferred key combination

### Full Keyboard Workflow

1. Copy text with `Cmd+C` / `Ctrl+C`
2. Open history with `Cmd+Shift+V` / `Ctrl+Shift+V`
3. Type to search
4. Click a clip to copy it
5. Paste with `Cmd+V` / `Ctrl+V`

This takes about two seconds with practice.

## Building a Pinned Snippet Library

Pinned clips are never automatically deleted, even at the 10,000-item limit. Use pins to build a personal snippet library.

### Recommended Pins

- **Email signature** -- Your standard email sign-off
- **Meeting link** -- Your personal video call URL
- **Boilerplate code** -- Import statements, utility functions, file headers
- **Mailing address** -- Home or office address for forms
- **Standard responses** -- Answers to questions you get repeatedly
- **Template text** -- Email templates, report headers, PR descriptions

### How to Pin

1. Open the popup
2. Hover over a clip to reveal action buttons
3. Click the **pin** icon
4. Access pinned clips anytime via the **Pinned** filter tab

### Stars vs. Pins

| Feature | Star | Pin |
|---------|------|-----|
| Purpose | Bookmark for later | Permanent snippet |
| Auto-delete protection | No | Yes |
| Filter tab | Starred | Pinned |

Use both together: pin your permanent snippets, star clips you need for the current task.

## Search Strategies

### Partial Match

Search matches any part of the clip. Typing `api` will find:
- `https://api.example.com/users`
- `const apiKey = "abc123"`
- `API rate limit exceeded`

### Filter Then Search

1. Click a filter tab (URL, Code, Text) to narrow the list
2. Then type in the search bar to search within that category

This is faster than searching through everything when you know the content type.

### Finding Old Clips

With 10,000 items of capacity, clips from days or weeks ago are still available. Search for any distinctive word you remember from the content.

## Workflow Patterns

### Batch Copy, Then Paste

Instead of copy-switch-paste-switch for each item:

1. Copy all items you need in sequence from the source
2. Switch to the destination once
3. Open Clipboard History
4. Paste each item from your history

This reduces tab switching and is faster for form filling, report writing, and multi-field data entry.

### Research Collection

When researching a topic across multiple sources:

1. Copy quotes, data points, and URLs as you read
2. Everything is saved automatically
3. When you are ready to write, open Clipboard History and search for specific pieces
4. Use the URL filter to find source links

### Daily Cleanup

At the end of each day:

1. Review your starred clips and unstar anything you no longer need
2. Pin any clips you want to keep long-term
3. Optionally export your history before clearing

### Context Menu Paste

Right-click on any text field to see "Paste from Clipboard History." This opens the popup for quick access without using the keyboard shortcut.

## Type Detection

The extension automatically classifies clips into types:

| Type | Detection |
|------|-----------|
| URL | Starts with `http://` or `https://` |
| Email | Matches standard email format |
| Code | Contains brackets, parentheses, or semicolons with line breaks |
| JSON | Valid JSON string |
| Number | Numeric content |
| Text | Everything else |

Use the filter tabs to view only clips of a specific type. This is especially useful for finding URLs or code snippets in a large history.

---

**[Install Clipboard History](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)** | [Back to README](../README.md)
