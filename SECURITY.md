# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.x.x   | Yes       |

## Reporting a Vulnerability

If you discover a security vulnerability in Clipboard History, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email us at: **hello@zovo.one**

Include:
- A description of the vulnerability
- Steps to reproduce the issue
- The potential impact
- Any suggested fixes (if you have them)

We will acknowledge receipt within 48 hours and aim to provide a fix within 7 days for critical issues.

## Security Architecture

Clipboard History is designed with privacy and security as core principles:

- **Local-only storage**: All clipboard data is stored in your browser's local IndexedDB. Nothing is ever transmitted to any server.
- **No analytics**: The open source version contains zero tracking or analytics code.
- **No external connections**: The extension makes no network requests whatsoever.
- **Manifest V3**: Built on Chrome's latest and most secure extension platform.
- **Minimal permissions**: Only requests permissions that are strictly necessary for functionality.
- **Content Security Policy**: Strict CSP prevents code injection attacks.

## Permissions Explained

| Permission | Why It's Needed |
|-----------|----------------|
| `storage` | Store clipboard history locally in IndexedDB |
| `clipboardRead` | Read clipboard contents when you copy text |
| `clipboardWrite` | Write to clipboard when you paste from history |
| `contextMenus` | Add "Paste from Clipboard History" to right-click menu |
| `notifications` | Show notifications (optional, can be disabled) |
| `<all_urls>` (host) | Content script needs to detect copy events on all pages |

## Responsible Disclosure

We appreciate the security research community and will credit researchers who report valid vulnerabilities (unless they prefer to remain anonymous).
