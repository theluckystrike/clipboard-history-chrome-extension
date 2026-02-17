# Contributing to Clipboard History

Thanks for your interest in contributing! We welcome all contributions -- bug reports, feature requests, documentation improvements, and code changes.

## Getting Started

1. **Fork** this repository
2. **Clone** your fork locally
3. **Load the extension** in Chrome:
   - Navigate to `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the repository root folder
4. Make your changes
5. Test thoroughly
6. Submit a **Pull Request**

## Development Setup

No build step required. The extension loads directly from source files.

### Project Structure

```
clipboard-history-chrome-extension/
  _locales/          # Internationalization (en, es, ja)
  icons/             # Extension icons (16, 32, 48, 128)
  onboarding/        # Welcome page shown on first install
  src/
    background.js    # Service worker (IndexedDB, message handling)
    content.js       # Content script (clipboard capture)
    popup.html       # Popup UI
    popup.js         # Popup logic
    popup.css        # Popup styles
  manifest.json      # Chrome extension manifest (MV3)
```

## Guidelines

### Code Style

- Use vanilla JavaScript (no frameworks or build tools)
- Follow existing code patterns and naming conventions
- Use `const` and `let` (never `var`)
- Use async/await for asynchronous operations
- Add comments for non-obvious logic

### Commits

- Write clear, concise commit messages
- Reference issue numbers when applicable (e.g., `Fix #12: Handle empty clipboard`)

### Pull Requests

- Keep PRs focused on a single change
- Describe what changed and why
- Include screenshots for UI changes
- Make sure the extension loads and works correctly in Chrome

### Reporting Bugs

Please include:
- Chrome version
- Operating system
- Steps to reproduce
- Expected vs. actual behavior
- Console errors (if any)

### Feature Requests

Open an issue with:
- A clear description of the feature
- Why it would be useful
- Any implementation ideas you have

## Code of Conduct

Be respectful and constructive. We are building something useful together.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
