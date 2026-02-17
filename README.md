# Clipboard History -- Free Open Source Chrome Extension

> Never lose copied text again. A powerful clipboard manager that automatically saves everything you copy, with instant search, pinned favorites, and keyboard shortcuts.

<p align="center">
  <a href="https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf"><img src="https://img.shields.io/chrome-web-store/users/ddmidpneacclepjmdjibmcdijedgdidf?label=Chrome%20Web%20Store%20Users&color=blue" alt="Chrome Web Store Users"></a>
  <a href="https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf"><img src="https://img.shields.io/chrome-web-store/rating/ddmidpneacclepjmdjibmcdijedgdidf?label=Rating&color=gold" alt="Chrome Web Store Rating"></a>
  <img src="https://img.shields.io/github/license/theluckystrike/clipboard-history-chrome-extension" alt="License">
  <img src="https://img.shields.io/github/last-commit/theluckystrike/clipboard-history-chrome-extension" alt="Last Commit">
</p>

---

## Why Clipboard History?

You copy something, then copy something else, and the first thing is gone forever. Sound familiar? Your operating system clipboard only holds one item at a time, and Chrome does not offer a built-in clipboard history.

**Clipboard History** fixes this by automatically saving everything you copy -- up to 10,000 items. Search through your entire clipboard history instantly, pin frequently used snippets, and paste anything with one click. Perfect for developers copying code snippets, writers juggling multiple pieces of text, researchers collecting quotes, and anyone who copies and pastes regularly.

Free, open source, and built on Manifest V3. All data stays local in your browser -- nothing is ever sent to any server.

## Features

- **Automatic clipboard capture** -- Saves everything you copy, up to 10,000 items
- **Instant search** -- Find any copied item in seconds with real-time filtering
- **Pin favorites** -- Keep frequently used snippets at the top of your list
- **Star important clips** -- Mark clips as favorites for quick access
- **One-click copy** -- Click any item to copy it back to your clipboard
- **Direct paste** -- Paste directly into text fields from your history
- **Keyboard shortcut** -- Open clipboard history with `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux)
- **Smart type detection** -- Automatically tags URLs, emails, code snippets, JSON, and numbers
- **Filter by type** -- View only text, URLs, code, starred, or pinned clips
- **Context menu integration** -- Right-click any text field to paste from history
- **Export history** -- Download your clipboard history as JSON
- **Dark and light themes** -- Choose your preferred appearance
- **Duplicate detection** -- Automatically skips consecutive identical copies
- **Local storage only** -- All data stored in IndexedDB, nothing leaves your browser
- **Internationalized** -- Available in English, Spanish, and Japanese
- **Accessible** -- Keyboard navigation, focus indicators, reduced motion support
- **Manifest V3** -- Built on Chrome's latest and most secure extension platform

## Install

### Chrome Web Store (Recommended)

**[Install from Chrome Web Store](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)**

### Manual Install (Developer Mode)

1. Download or clone this repository:
   ```bash
   git clone https://github.com/theluckystrike/clipboard-history-chrome-extension.git
   ```
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the cloned repository folder
6. The extension icon will appear in your toolbar

## Usage

1. **Copy text normally** -- the extension automatically captures everything you copy
2. **Open the popup** -- click the extension icon or press `Cmd+Shift+V` / `Ctrl+Shift+V`
3. **Search** -- type in the search bar to filter your history
4. **Click to copy** -- click any clip to copy it to your clipboard
5. **Star or pin** -- hover over a clip to see action buttons
6. **Filter** -- use the tabs (All, Starred, Pinned, Text, URL, Code) to narrow results
7. **Export** -- click the export button in the footer to download your history as JSON

## Privacy & Security

Clipboard data is inherently sensitive. This extension is designed with privacy as the top priority:

- **100% local storage** -- Your clipboard history is stored in your browser's IndexedDB. No data is ever transmitted to any server, cloud service, or third party.
- **No analytics** -- Zero tracking, zero telemetry, zero data collection.
- **No network requests** -- The extension makes absolutely no outbound connections.
- **Open source** -- Every line of code is publicly auditable in this repository.
- **Manifest V3** -- Uses Chrome's latest security model with strict Content Security Policy.
- **Minimal permissions** -- Only requests the permissions strictly necessary for core functionality.

For more details, see [SECURITY.md](SECURITY.md).

## Comparison

| Feature | Clipboard History (Zovo) | Clipboard Manager | Clipper | CopyFish |
|---------|------------------------|-------------------|---------|----------|
| Open Source | Yes | No | No | No |
| Free | Yes | Freemium | Yes | Freemium |
| Manifest V3 | Yes | No | No | Yes |
| 10,000+ Items | Yes | 100 | 50 | 200 |
| Instant Search | Yes | Yes | No | Yes |
| Pin Favorites | Yes | No | Yes | No |
| Keyboard Shortcuts | Yes | No | No | Yes |
| No Data Collection | Yes | Unknown | Unknown | No |
| Smart Type Detection | Yes | No | No | No |
| Export History | Yes | No | No | No |
| i18n Support | Yes | No | No | No |

## Pro Version

Want even more power? **[Clipboard History Pro](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)** includes:

- Cloud sync across devices
- Floating widget (always-on-top quick paste)
- Text expander with custom shortcuts
- Password protection for sensitive clips
- Advanced regex search
- Bulk operations
- Priority support

## Project Structure

```
clipboard-history-chrome-extension/
  _locales/              # Internationalization (en, es, ja)
  icons/                 # Extension icons
  onboarding/            # Welcome page
  src/
    background.js        # Service worker (IndexedDB, message handling)
    content.js           # Content script (clipboard capture, direct paste)
    popup.html           # Popup UI structure
    popup.js             # Popup logic (search, filter, render)
    popup.css            # Popup styles (Zovo design system)
  manifest.json          # Chrome extension manifest (MV3)
```

## More from Zovo

| Extension | Description |
|-----------|-------------|
| [Clipboard History Pro](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf) | Advanced clipboard manager with cloud sync |
| [Tab Suspender Pro](https://chromewebstore.google.com/detail/tab-suspender-pro-save-me/ofgncemnlblfnocjbojdhamacfffcpnm) | Save memory by suspending inactive tabs |
| [JSON Formatter Pro](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp) | Beautiful JSON viewer and formatter |
| [Cookie Manager](https://chromewebstore.google.com/detail/cookie-manager/ijolfnkijbagodcigeebgjhlkdgcebmf) | View, edit, and manage browser cookies |
| [Regex Tester Pro](https://chromewebstore.google.com/detail/regex-tester-pro-by-zovo/laljckjnohfcbhmlehjkcppkdfibldad) | Test and debug regular expressions |
| [Session Manager Pro](https://chromewebstore.google.com/detail/session-manager-pro-by-zo/mhbfbnmokccombamjdflafbakdlnehlh) | Save and restore browser sessions |

## Support

If this extension is useful to you:

- **[Install from Chrome Web Store](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf)** and leave a rating
- Star this repository on GitHub
- [Report bugs](https://github.com/theluckystrike/clipboard-history-chrome-extension/issues) or request features
- [Contribute](CONTRIBUTING.md) code or documentation

## License

[MIT](LICENSE) -- Copyright (c) 2024 [Zovo](https://zovo.one)

---

Made by [Zovo](https://zovo.one)
