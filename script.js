// ===== CONFIGURATION =====
// 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
const API_KEY = "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";

// ===== VARIABLES =====
let mode = 'chat';
let isLoading = false;

// ===== DOM ELEMENTS =====
const messagesDiv = document.getElementById('messages');
const welcomeDiv = document.getElementById('welcome');
const chatInput = document.getElementById('chatInput');
const imageInput = document.getElementById('imageInput');
const imageSizeSelect = document.getElementById('imageSize');
const chatInputGroup = document.getElementById('chatInputGroup');
const imageInputGroup = document.getElementById('imageInputGroup');
const chatModeBtn = document.getElementById('chatModeBtn');
const imageModeBtn = document.getElementById('imageModeBtn');
const sendBtn = document.getElementById('sendBtn');

// ===== AUTO RESIZE TEXTAREA =====
chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// ===== SET MODE FUNCTION =====
function setMode(newMode) {
    mode = newMode;
    
    if (mode === 'chat') {
        chatModeBtn.classList.add('active');
        imageModeBtn.classList.remove('active');
        chatInputGroup.classList.add('active');
        imageInputGroup.classList.remove('active');
        chatInput.focus();
    } else {
        imageModeBtn.classList.add('active');
        chatModeBtn.classList.remove('active');
        imageInputGroup.classList.add('active');
        chatInputGroup.classList.remove('active');
        imageInput.focus();
    }
}

// ===== SEND MESSAGE FUNCTION =====
async function sendMessage() {
    if (isLoading) return;
    
    let text = '';
    
    if (mode === 'chat') {
        text = chatInput.value.trim();
    } else {
        text = imageInput.value.trim();
    }
    
    if (!text) return;
    
    // Hide welcome
    welcomeDiv.style.display = 'none';
    
    // Add user message
    addMessage(text, 'user');
    
    // Clear input
    if (mode === 'chat') {
        chatInput.value = '';
        chatInput.style.height = 'auto';
    } else {
        imageInput.value = '';
    }
    
    // Show loading
    isLoading = true;
    const loadingId = showLoading();
    
    try {
        if (mode === 'chat') {
            // Chat API Call
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_KEY
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: text }],
                    temperature: 0.7
                })
            });
            
            const data = await response.json();
            
            // Remove loading
            removeLoading(loadingId);
            
            if (data.error) {
                addMessage('Error: ' + data.error.message, 'bot');
            } else {
                addMessage(data.choices[0].message.content, 'bot');
            }
        } else {
            // Image Generation API Call
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_KEY
                },
                body: JSON.stringify({
                    prompt: text,
                    n: 1,
                    size: imageSizeSelect.value
                })
            });
            
            const data = await response.json();
            
            // Remove loading
            removeLoading(loadingId);
            
            if (data.error) {
                addMessage('Error: ' + data.error.message, 'bot');
            } else {
                addImageMessage(data.data[0].url);
            }
        }
    } catch (error) {
        removeLoading(loadingId);
        addMessage('Error: Failed to connect. Please check your API key.', 'bot');
        console.error(error);
    }
    
    isLoading = false;
}

// ===== ADD MESSAGE TO UI =====
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = 'message ' + sender;
    
    const avatarIcon = sender === 'user' ? 'fa-user' : 'fa-robot';
    const avatarClass = sender === 'user' ? 'var(--accent)' : 'var(--purple)';
    
    div.innerHTML = `
        <div class="msg-avatar" style="background: ${avatarClass}">
            <i class="fa-solid ${avatarIcon}"></i>
        </div>
        <div class="msg-content">${escapeHtml(text)}</div>
    `;
    
    messagesDiv.appendChild(div);
    scrollToBottom();
}

// ===== ADD IMAGE TO UI =====
function addImageMessage(url) {
    const div = document.createElement('div');
    div.className = 'message bot';
    
    div.innerHTML = `
        <div class="msg-avatar" style="background: var(--purple)">
            <i class="fa-solid fa-image"></i>
        </div>
        <div class="msg-content">
            <p>Here's your generated image:</p>
            <img src="${url}" alt="Generated Image" onclick="window.open('${url}', '_blank')">
        </div>
    `;
    
    messagesDiv.appendChild(div);
    scrollToBottom();
}

// ===== SHOW LOADING =====
function showLoading() {
    const id = 'loading-' + Date.now();
    const div = document.createElement('div');
    div.id = id;
    div.className = 'message bot';
    div.innerHTML = `
        <div class="msg-avatar" style="background: var(--purple)">
            <i class="fa-solid fa-robot"></i>
        </div>
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    
    messagesDiv.appendChild(div);
    scrollToBottom();
    return id;
}

// ===== REMOVE LOADING =====
function removeLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

function scrollToBottom() {
    const chatArea = document.getElementById('chatArea');
    chatArea.scrollTop = chatArea.scrollHeight;
}

// ===== QUICK SEND =====
function quickSend(text) {
    chatInput.value = text;
    mode = 'chat';
    setMode('chat');
    sendMessage();
}

function quickImage(text) {
    imageInput.value = text;
    mode = 'image';
    setMode('image');
    sendMessage();
}

// ===== NEW CHAT =====
function newChat() {
    messagesDiv.innerHTML = '';
    welcomeDiv.style.display = 'flex';
}

// ===== CLEAR CHAT =====
function clearChat() {
    if (confirm('Clear all messages?')) {
        newChat();
    }
}
