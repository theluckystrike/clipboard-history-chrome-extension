// Clipboard History - Content Script
// Captures copy events and sends to background

// Listen for copy events
document.addEventListener('copy', async () => {
    // Small delay to let clipboard update
    setTimeout(async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text && text.trim()) {
                chrome.runtime.sendMessage({
                    action: 'ADD_CLIP',
                    content: text,
                    type: 'text'
                });
            }
        } catch (err) {
            // Clipboard access denied - ignore silently
        }
    }, 100);
});

// Listen for paste requests from background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'PASTE_CLIP') {
        const activeElement = document.activeElement;

        if (activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        )) {
            // Insert text at cursor
            if (activeElement.isContentEditable) {
                document.execCommand('insertText', false, message.content);
            } else {
                const start = activeElement.selectionStart;
                const end = activeElement.selectionEnd;
                const value = activeElement.value;

                activeElement.value = value.slice(0, start) + message.content + value.slice(end);
                activeElement.selectionStart = activeElement.selectionEnd = start + message.content.length;

                // Trigger input event
                activeElement.dispatchEvent(new Event('input', { bubbles: true }));
            }

            sendResponse({ success: true });
        } else {
            // Copy to clipboard if no editable element
            navigator.clipboard.writeText(message.content)
                .then(() => sendResponse({ success: true, copied: true }))
                .catch(() => sendResponse({ success: false }));
        }

        return true; // Async response
    }
});
