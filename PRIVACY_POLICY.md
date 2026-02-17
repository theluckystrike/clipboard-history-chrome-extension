# Privacy Policy — Clipboard History

**Last updated:** February 2026

## Overview

Clipboard History is committed to protecting your privacy. This extension stores all clipboard data locally on your device and does not collect, transmit, or share any personal data.

## Data Access

Clipboard History accesses the following data solely to provide its core functionality:

- **Clipboard content** — The extension captures text that you copy (`Ctrl+C` / `Cmd+C`) or cut (`Ctrl+X` / `Cmd+X`) to maintain a searchable history.
- **Active tab URL** — Optionally used to tag clipboard entries with their source page.

## Data Storage

All data is stored locally on your device using `chrome.storage.local`:

| Data | Purpose | Location |
|------|---------|----------|
| Clipboard entries | Searchable history of copied text | Local storage |
| Pinned entries | Quick access to frequently used text | Local storage |
| Preferences | History limit, retention period, privacy settings | Local storage |

**No data is stored on external servers.**

## Data Transmission

Clipboard History does **not** transmit any data to external servers. Specifically:

- No clipboard content is sent anywhere
- No analytics or telemetry are collected
- No browsing history is recorded or shared
- No personal information is transmitted to third parties
- No network requests are made by the extension

## Third-Party Services

Clipboard History uses **no** third-party services, SDKs, or libraries that collect data.

## Permissions Explained

| Permission | Why it's needed |
|------------|----------------|
| `clipboardRead` | Read clipboard content when you copy or cut text |
| `activeTab` | Tag entries with the source page (optional feature) |
| `storage` | Store clipboard history and preferences locally |
| `alarms` | Periodic cleanup of expired entries |

## Sensitive Data Handling

We understand that clipboard data may contain sensitive information such as passwords or personal details. The extension:

- **Never transmits** clipboard data externally
- **Provides auto-expiry** so old entries are automatically deleted
- **Supports manual clearing** of individual entries or the entire history
- **Stores data only locally** — uninstalling the extension removes all data

## Data Retention

Clipboard entries are retained according to your configured settings (history size limit and retention period). Entries are automatically evicted when limits are exceeded, oldest-first (unpinned entries evicted before pinned ones).

## Children's Privacy

This extension does not knowingly collect any information from children under 13.

## Changes to This Policy

We may update this policy as the extension evolves. Changes will be reflected in the "Last updated" date above.

## Contact

If you have questions about this privacy policy, please open an issue on our [GitHub repository](https://github.com/theluckystrike/clipboard-history-chrome-extension/issues) or contact us at support@zovo.dev.
