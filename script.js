// ===== CONFIGURATION =====
const API_KEY = "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"; // <- YEH APNI API KEY SE BADALDO

// ===== STATE =====
let currentMode = 'chat';
let chatHistory = [];

// ===== DOM ELEMENTS =====
const chatContainer = document.getElementById('chatContainer');
const messagesWrapper = document.getElementById('messagesWrapper');
const welcomeSection = document.getElementById('welcomeSection');
const messageInput = document.getElementById('messageInput');
const imagePromptInput = document.getElementById('imagePromptInput');
const imageSizeSelect = document.getElementById('imageSizeSelect');
const chatInputField = document.getElementById('chatInputField');
const imageInputField = document.getElementById('imageInputField');
const sendButton = document.getElementById('sendButton');
const chatTab = document.getElementById('chatTab');
const imageTab = document.getElementById('imageTab');

// ===== AUTO RESIZE TEXTAREA =====
messageInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 150) + 'px';
});

messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});

// ===== SWITCH MODE =====
function switchTab(mode) {
    currentMode = mode;
    
    if (mode === 'chat') {
        chatTab.classList.add('active');
        imageTab.classList.remove('active');
        chatInputField.classList.add('active');
        imageInputField.classList.remove('active');
        messageInput.focus();
    } else {
        imageTab.classList.add('active');
        chatTab.classList.remove('active');
        imageInputField.classList.add('active');
        chatInputField.classList.remove('active');
        imagePromptInput.focus();
    }
}

// Show chat input by default
chatInputField.classList.add('active');

// ===== SEND MESSAGE =====
async function handleSend() {
    let message = '';
    let imagePrompt = '';
    
    if (currentMode === 'chat') {
        message = messageInput.value.trim();
        if (!message) return;
    } else {
        imagePrompt = imagePromptInput.value.trim();
        if (!imagePrompt) return;
    }
    
    // Hide welcome section
    welcomeSection.style.display = 'none';
    
    if (currentMode === 'chat') {
        // Add user message
        addUserMessage(message);
        messageInput.value = '';
        
        // Show typing indicator
        const loadingId = showTyping();
        
        // Send to API
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_KEY
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: message }],
                    temperature: 0.7
                })
            });
            
            const data = await response.json();
            
            // Remove typing
            removeTyping(loadingId);
            
            if (data.error) {
                addBotMessage('Error: ' + data.error.message);
            } else {
                addBotMessage(data.choices[0].message.content);
            }
        } catch (error) {
            removeTyping(loadingId);
            addBotMessage('Error: Failed to connect. Please check your API key.');
            console.error(error);
        }
    } else {
        // Image Generation
        addUserMessage('Generating image: ' + imagePrompt);
        imagePromptInput.value = '';
        
        const loadingId = showTyping();
        
        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_KEY
                },
                body: JSON.stringify({
                    prompt: imagePrompt,
                    n: 1,
                    size: imageSizeSelect.value
                })
            });
            
            const data = await response.json();
            
            removeTyping(loadingId);
            
            if (data.error) {
                addBotMessage('Error: ' + data.error.message);
            } else {
                addImageMessage(data.data[0].url);
            }
        } catch (error) {
            removeTyping(loadingId);
            addBotMessage('Error: Failed to generate image.');
            console.error(error);
        }
    }
    
    scrollToBottom();
}

// ===== ADD USER MESSAGE =====
function addUserMessage(text) {
    const html = `
        <div class="message-row user">
            <div class="message-icon"><i class="fa-solid fa-user"></i></div>
            <div class="message-bubble">${escapeHtml(text)}</div>
        </div>
    `;
    messagesWrapper.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
}

// ===== ADD BOT MESSAGE =====
function addBotMessage(text) {
    const html = `
        <div class="message-row bot">
            <div class="message-icon"><i class="fa-solid fa-robot"></i></div>
            <div class="message-bubble">${formatMessage(text)}</div>
        </div>
    `;
    messagesWrapper.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
}

// ===== ADD IMAGE MESSAGE =====
function addImageMessage(imageUrl) {
    const html = `
        <div class="message-row bot">
            <div class="message-icon"><i class="fa-solid fa-image"></i></div>
            <div class="message-bubble">
                <p>Here's the generated image:</p>
                <div class="image-grid">
                    <img src="${imageUrl}" alt="Generated Image" class="generated-image" onclick="window.open('${imageUrl}', '_blank')">
                </div>
            </div>
        </div>
    `;
    messagesWrapper.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
}

// ===== TYPING INDICATOR =====
function showTyping() {
    const id = 'typing-' + Date.now();
    const html = `
        <div class="message-row bot" id="${id}">
            <div class="message-icon"><i class="fa-solid fa-robot"></i></div>
            <div class="typing-indicator">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    `;
    messagesWrapper.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
    return id;
}

function removeTyping(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatMessage(text) {
    // Simple code block formatting
    text = escapeHtml(text);
    text = text.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    text = text.replace(/\n/g, '<br>');
    return text;
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ===== QUICK ACTIONS =====
function sendQuickMessage(prompt) {
    messageInput.value = prompt;
    currentMode = 'chat';
    switchTab('chat');
    handleSend();
}

function sendQuickImage(prompt) {
    imagePromptInput.value = prompt;
    currentMode = 'image';
    switchTab('image');
    handleSend();
}

// ===== NEW CHAT =====
function newChat() {
    messagesWrapper.innerHTML = '';
    welcomeSection.style.display = 'flex';
    messageInput.value = '';
    imagePromptInput.value = '';
}

// ===== CLEAR CHAT =====
function clearChat() {
    if (confirm('Clear all messages?')) {
        newChat();
    }
}
