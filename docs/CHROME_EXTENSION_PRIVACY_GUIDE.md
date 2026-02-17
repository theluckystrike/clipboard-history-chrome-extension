# Building Privacy-First Chrome Extensions — A Developer's Guide

A practical guide for building Chrome extensions that respect user privacy. Covers minimal permissions, local-only storage, avoiding common privacy mistakes, and earning user trust through transparency.

## The Privacy-First Mindset

Users grant extensions extraordinary access to their browser. A privacy-first extension earns that trust by following a simple principle: **collect the minimum data needed and keep it local**.

Extensions that follow these practices benefit from:
- Higher user trust and retention
- Easier Chrome Web Store reviews (fewer permission warnings)
- Simpler architecture (no servers to maintain)
- Compliance with regulations (GDPR, CCPA) by default

## Minimal Permissions

### Request Only What You Need

Chrome extensions declare permissions in `manifest.json`. Each permission triggers a warning during installation. Fewer permissions mean fewer warnings and higher install conversion.

```json
// BAD — overly broad permissions
{
  "permissions": ["<all_urls>", "tabs", "cookies", "webRequest", "storage"]
}

// GOOD — minimal permissions
{
  "permissions": ["storage", "activeTab"]
}
```

### Use `activeTab` Instead of Host Permissions

The `activeTab` permission grants temporary access to the current tab only when the user clicks the extension. It avoids the scary "Read and change all your data on all websites" warning.

```json
{
  "permissions": ["activeTab"]
}
```

### Use Optional Permissions

For features that not all users need, request permissions at runtime:

```javascript
chrome.permissions.request(
  { permissions: ['bookmarks'] },
  (granted) => {
    if (granted) {
      // Enable bookmarks feature
    }
  }
);
```

This way, users only see permission prompts for features they actually use.

## Local-Only Storage

### Keep Data on the Device

Use `chrome.storage.local` for all persistence. Never transmit user data to external servers unless there is a clear, disclosed reason (like account sync that the user explicitly enables).

```javascript
// Store locally
await chrome.storage.local.set({ preferences: { theme: 'dark' } });

// Retrieve locally
const { preferences } = await chrome.storage.local.get('preferences');
```

### Avoid `chrome.storage.sync`

While `chrome.storage.sync` syncs data across Chrome profiles, it transmits data through Google's servers. For privacy-sensitive data, prefer `local`.

### Implement Data Expiry

Don't store data indefinitely. Implement automatic cleanup:

```javascript
// Store with timestamp
await chrome.storage.local.set({
  entries: data.map(entry => ({
    ...entry,
    createdAt: Date.now()
  }))
});

// Periodic cleanup
chrome.alarms.create('cleanup', { periodInMinutes: 60 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'cleanup') {
    purgeExpiredEntries(maxAge);
  }
});
```

## No Analytics Patterns

### Skip Third-Party Analytics

Do not include Google Analytics, Mixpanel, Segment, or any third-party analytics SDK. These services collect IP addresses, user agents, and behavioral data that violate user privacy expectations.

### If You Need Usage Metrics

Count events locally and display them to the user (e.g., "You've formatted 142 JSON files"):

```javascript
// Local-only counter
const { stats = {} } = await chrome.storage.local.get('stats');
stats.formatCount = (stats.formatCount || 0) + 1;
await chrome.storage.local.set({ stats });
```

### No Crash Reporting Services

Avoid Sentry, Bugsnag, etc. Instead, surface errors in the extension UI and let users report issues via your GitHub repository.

## Content Security

### Avoid `innerHTML`

Never inject user-provided content using `innerHTML`. Use DOM APIs:

```javascript
// BAD — XSS risk
element.innerHTML = userInput;

// GOOD — safe text node
element.textContent = userInput;

// GOOD — structured DOM creation
const el = document.createElement('span');
el.textContent = userInput;
container.appendChild(el);
```

### Content Security Policy

Enforce a strict CSP in your manifest:

```json
{
  "content_security_policy": {
    "extension_pages": "script-src 'self'; object-src 'none'"
  }
}
```

This prevents inline scripts and remote code execution.

## Communicate Your Privacy Practices

### Publish a Privacy Policy

Every extension should have a clear privacy policy. Include it in your repository and link it from your Chrome Web Store listing.

Key sections:
1. What data the extension accesses (and why)
2. What data is stored (and where)
3. What data is transmitted (ideally nothing)
4. Third-party services (ideally none)

### Permission Justification

Add a section to your documentation explaining why each permission is needed. Users appreciate transparency.

## Chrome Web Store Review Checklist

Before submitting to the Chrome Web Store, verify:

- [ ] No unnecessary permissions in `manifest.json`
- [ ] No remote code execution (no `eval()`, no remote scripts)
- [ ] No third-party analytics SDKs
- [ ] No data transmission without user consent
- [ ] Privacy policy published and linked
- [ ] `content_security_policy` is restrictive
- [ ] `host_permissions` are as narrow as possible
- [ ] User data has a clear retention and deletion path

## Further Reading

- [Chrome Extension Privacy FAQ](https://developer.chrome.com/docs/webstore/program-policies/privacy-faq/) — Chrome Web Store policy requirements
- [Declare Permissions](https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions) — Permission reference and best practices
- [Minimum Permission Tutorial](https://developer.chrome.com/docs/extensions/develop/concepts/minimum-permissions) — Official guide to minimal permissions
- [Content Security Policy](https://developer.chrome.com/docs/extensions/develop/migrate/improve-security) — CSP best practices for extensions
