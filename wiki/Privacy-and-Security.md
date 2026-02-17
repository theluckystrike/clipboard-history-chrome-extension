# Privacy and Security

Clipboard data is inherently sensitive. People copy passwords, personal information, financial details, private messages, and confidential work documents. A clipboard manager has access to all of this, which makes privacy the single most important design consideration.

Clipboard History is built with the principle that your clipboard data belongs to you and only you.

## Local-Only Storage

All clipboard history data is stored in your browser's **IndexedDB**, a local database built into Chrome. Your data never leaves your browser.

- No cloud storage
- No remote servers
- No sync service (in the open source version)
- No third-party services of any kind

When you uninstall the extension, all stored data is deleted along with it.

## No Network Requests

The extension makes **zero outbound network connections**. There is no analytics endpoint, no crash reporting service, no update check server, no telemetry of any kind. You can verify this by monitoring the extension's network activity in Chrome DevTools.

The `manifest.json` does not declare any external connection permissions beyond the host permissions needed for the content script to run on pages.

## No Analytics or Tracking

There is no Google Analytics, no Mixpanel, no Amplitude, no Sentry, no tracking pixels, and no fingerprinting. The extension does not know how many users it has, which features they use, or when they open it. It collects nothing.

## Open Source

The entire codebase is [publicly available on GitHub](https://github.com/theluckystrike/clipboard-history-chrome-extension) under the MIT license. Every line of code is auditable. You can read the source, build it yourself, and verify that it does exactly what it claims.

Key files to review:
- `src/background.js` -- Service worker that stores clips in IndexedDB
- `src/content.js` -- Content script that captures copy events
- `src/popup.js` -- Popup interface logic
- `manifest.json` -- Permissions and extension configuration

## Permissions Explained

The extension requests only the permissions strictly necessary for core functionality.

| Permission | Why It Is Needed |
|-----------|-----------------|
| `storage` | Access IndexedDB to store clipboard history locally |
| `clipboardRead` | Read clipboard contents when you copy text |
| `clipboardWrite` | Write to clipboard when you paste from history |
| `contextMenus` | Add "Paste from Clipboard History" to the right-click menu |
| `notifications` | Show optional notifications (can be disabled in settings) |
| `<all_urls>` (host) | The content script must run on all pages to detect copy events |

The `<all_urls>` host permission may look broad, but it is required because the content script needs to listen for copy events on every webpage you visit. The content script is minimal -- it only listens for the `copy` event and sends the copied text to the service worker for storage.

## Manifest V3

Clipboard History is built on Chrome's **Manifest V3** platform, which is Chrome's latest and most secure extension architecture. MV3 enforces:

- A strict Content Security Policy that prevents code injection
- Service workers instead of persistent background pages, reducing the extension's footprint
- Declarative APIs that limit what extensions can do without explicit user permission

## Handling Sensitive Data

Because the extension captures everything you copy, it may contain sensitive information. Here are recommendations:

### Passwords
Most password managers (1Password, Bitwarden, LastPass, etc.) paste credentials directly into form fields without using the system clipboard. If your password manager does use the clipboard, the copied password will appear in Clipboard History. Delete it manually or clear your history.

### Personal Information
If you copy sensitive personal information (Social Security numbers, credit card numbers, etc.), consider deleting those clips after use. Click the trash icon next to any clip to remove it immediately.

### Before Exporting
The JSON export contains all clip content in plain text. Before sharing or storing an export file, review it for sensitive content.

### Clearing History
You can clear your entire clipboard history at any time from Settings. This permanently deletes all stored clips from IndexedDB.

## Security Vulnerability Reporting

If you discover a security vulnerability, please do **not** open a public GitHub issue. Instead, email **hello@zovo.one** with details. See [SECURITY.md](https://github.com/theluckystrike/clipboard-history-chrome-extension/blob/main/SECURITY.md) for the full responsible disclosure policy.

---

[Back to Home](Home)
