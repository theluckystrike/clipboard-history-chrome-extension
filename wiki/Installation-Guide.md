# Installation Guide

## Chrome Web Store (Recommended)

The simplest way to install Clipboard History is from the Chrome Web Store.

1. Visit the **[Chrome Web Store listing](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)**
2. Click **Add to Chrome**
3. Click **Add extension** in the confirmation dialog
4. The Clipboard History icon will appear in your Chrome toolbar

If the icon is not visible, click the puzzle piece icon in the toolbar and pin Clipboard History.

### After Installation

Once installed, the extension begins working immediately. Copy any text on any webpage and it will be saved to your history. Click the extension icon or press `Cmd+Shift+V` (Mac) / `Ctrl+Shift+V` (Windows/Linux) to open the popup and see your clips.

A welcome page will open on first install to walk you through the basics.

## Manual Installation (Developer Mode)

If you want to run the open source version directly from the repository, or if you want to modify the code:

### Prerequisites

- Google Chrome (or any Chromium-based browser such as Brave, Edge, or Vivaldi)
- Git (optional, for cloning)

### Steps

1. **Download the source code**

   Clone the repository:
   ```bash
   git clone https://github.com/theluckystrike/clipboard-history-chrome-extension.git
   ```

   Or download the ZIP file from the [GitHub releases page](https://github.com/theluckystrike/clipboard-history-chrome-extension/releases) and extract it.

2. **Open Chrome Extensions**

   Navigate to `chrome://extensions` in your browser's address bar.

3. **Enable Developer Mode**

   Toggle the **Developer mode** switch in the top-right corner of the page.

4. **Load the Extension**

   Click **Load unpacked** and select the folder where you cloned or extracted the repository.

5. **Verify Installation**

   The Clipboard History icon should appear in your toolbar. Click it to open the popup and confirm everything is working.

### Updating a Manual Installation

If you installed from source, pull the latest changes and reload:

1. Run `git pull` in the repository folder
2. Go to `chrome://extensions`
3. Click the refresh icon on the Clipboard History card

## Supported Browsers

Clipboard History is built on Manifest V3 and works with any Chromium-based browser:

- Google Chrome (version 88 or later)
- Microsoft Edge
- Brave
- Vivaldi
- Opera

Firefox is not currently supported because it uses a different extension API.

## Permissions

During installation, Chrome will ask you to grant the following permissions:

| Permission | Purpose |
|-----------|---------|
| Read your clipboard | Capture text when you copy |
| Modify your clipboard | Write to clipboard when you paste from history |
| Context menus | Add "Paste from Clipboard History" to your right-click menu |
| Notifications | Show optional notifications when clips are saved |
| Access all websites | The content script needs to detect copy events on all pages |

All of these permissions are used locally. The extension makes no network requests and sends no data anywhere.

## Uninstalling

1. Right-click the Clipboard History icon in the toolbar
2. Select **Remove from Chrome**
3. Confirm removal

All clipboard history data stored in IndexedDB will be deleted when the extension is removed.

---

[Back to Home](Home)
