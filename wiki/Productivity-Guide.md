# Productivity Guide

This guide covers practical tips for getting the most out of Clipboard History.

## Keyboard Shortcuts

The fastest way to use Clipboard History is with the keyboard.

### Opening the Popup

| Platform | Shortcut |
|----------|----------|
| Mac | `Cmd+Shift+V` |
| Windows / Linux | `Ctrl+Shift+V` |

This opens the popup with the search bar focused, so you can immediately start typing to search.

### Customizing the Shortcut

If the default shortcut conflicts with another extension or application:

1. Navigate to `chrome://extensions/shortcuts`
2. Find **Clipboard History** in the list
3. Click the pencil icon next to the shortcut
4. Press your preferred key combination
5. The new shortcut takes effect immediately

### Workflow with Keyboard

1. Copy text normally with `Cmd+C` / `Ctrl+C`
2. Press `Cmd+Shift+V` / `Ctrl+Shift+V` to open Clipboard History
3. Type a few characters to search
4. Click the clip you want to copy it back to your clipboard
5. Press `Cmd+V` / `Ctrl+V` to paste

The entire flow takes about two seconds once you are used to it.

## Setting Up Pinned Snippets

Pinned clips are never automatically deleted, even when you reach the 10,000-item limit. Use pins for content you access repeatedly.

### What to Pin

- **Email templates** -- Greeting, closing, or full templates you paste daily
- **Meeting links** -- Your personal Zoom, Meet, or Teams link
- **Code snippets** -- Boilerplate code, import statements, or utility functions
- **Addresses and contact info** -- Your mailing address, phone number, or company address
- **Common URLs** -- Links to documentation, dashboards, or tools you share frequently
- **Standard responses** -- Answers to common questions from colleagues or customers

### How to Pin

1. Open the Clipboard History popup
2. Hover over any clip to reveal the action buttons
3. Click the **pin icon** to pin the clip
4. The clip now appears under the **Pinned** filter tab

To unpin, click the pin icon again.

### Organizing with Stars and Pins

Stars and pins serve different purposes:

- **Pin** -- For permanent snippets you re-use regularly. Pinned clips are protected from auto-deletion.
- **Star** -- For clips you want to find again soon but may not need permanently. Stars act as bookmarks.

You can apply both to the same clip. Use the **Starred** and **Pinned** filter tabs to quickly access each category.

## Search Strategies

The search bar filters clips in real time as you type. Here are some tips for finding clips quickly.

### Partial Matches

Search matches anywhere in the clip content. Typing `def` will match:
- `def calculate_total(items):`
- `default settings`
- `defined in RFC 2616`

### Search by Content Type

Use the filter tabs to narrow results before searching:

1. Click the **URL** tab to show only URLs
2. Type part of the domain name to find a specific link
3. Click the **Code** tab and search for a function name

### Finding Old Clips

If you remember any distinctive word from a clip you copied days ago, search for it. Clipboard History keeps up to 10,000 items, so even older clips are likely still available.

## Workflow Tips

### Copy Multiple Items Before Pasting

Instead of copying one item, switching to the destination, pasting, switching back, and repeating, try this:

1. Copy all the items you need in sequence
2. Switch to your destination
3. Open Clipboard History with the keyboard shortcut
4. Paste each item from your history

This reduces context switching and is faster for tasks like filling forms or composing messages from multiple sources.

### Use the Context Menu

Right-click on any text field and select **Paste from Clipboard History** to open the popup. This is useful when both hands are on the mouse and you do not want to reach for the keyboard shortcut.

### Export Before Clearing

If you are cleaning up your clipboard history, export it first:

1. Click the **export icon** in the footer to download a JSON file
2. Then clear your history from Settings

The JSON export includes all content, timestamps, and pin/star status. You can search it later with any text editor.

### Use Type Detection

The extension automatically detects content types: text, URL, email, code, JSON, and numbers. Use the filter tabs to quickly find a specific type instead of scrolling through everything.

For example, if you copied a URL an hour ago but cannot remember which one, click the **URL** tab to see only URLs.

### Pin Your Most-Used Snippet First

Identify the one piece of text you paste most often -- your email signature, a common response, a boilerplate comment -- and pin it. This single pin can save minutes every day.

---

[Back to Home](Home)
