// ===== CONFIG =====
// Yahan apni API key daalno
const API_KEY = "sk-YOUR-API-KEY-HERE";
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
// ===== VARIABLES =====
var mode = 'chat';
var isLoading = false;

// ===== DOM ELEMENTS =====
var messagesDiv = document.getElementById('messages');
var welcomeDiv = document.getElementById('welcome');
var chatInput = document.getElementById('chatInput');
var imageInput = document.getElementById('imageInput');
var imageSizeSelect = document.getElementById('imageSize');
var chatInputGroup = document.getElementById('chatInputGroup');
var imageInputGroup = document.getElementById('imageInputGroup');
var chatModeBtn = document.getElementById('chatModeBtn');
var imageModeBtn = document.getElementById('imageModeBtn');
var sendBtn = document.getElementById('sendBtn');

// ===== AUTO RESIZE =====
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

// ===== SET MODE =====
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

// ===== SEND MESSAGE =====
async function sendMessage() {
    if (isLoading) return;
    
    var text = "";
    
    if (mode === 'chat') {
        text = chatInput.value.trim();
    } else {
        text = imageInput.value.trim();
    }
    
    if (text === "") return;
    
    // Hide welcome
    welcomeDiv.style.display = 'none';
    
    // Add user message
    addMessage(text, 'user');
    
    // Clear input
    if (mode === 'chat') {
        chatInput.value = "";
        chatInput.style.height = "auto";
    } else {
        imageInput.value = "";
    }
    
    // Show loading
    isLoading = true;
    var loadingId = showLoading();
    
    try {
        if (mode === 'chat') {
            // Chat API
            var response = await fetch('https://api.openai.com/v1/chat/completions', {
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
            
            var data = await response.json();
            removeLoading(loadingId);
            
            if (data.error) {
                addMessage('Error: ' + data.error.message, 'bot');
            } else {
                addMessage(data.choices[0].message.content, 'bot');
            }
        } else {
            // Image API
            var response = await fetch('https://api.openai.com/v1/images/generations', {
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
            
            var data = await response.json();
            removeLoading(loadingId);
            
            if (data.error) {
                addMessage('Error: ' + data.error.message, 'bot');
            } else {
                addImageMessage(data.data[0].url);
            }
        }
    } catch (error) {
        removeLoading(loadingId);
        addMessage("Error: Failed to connect. Check API key.", 'bot');
        console.log(error);
    }
    
    isLoading = false;
}

// ===== ADD MESSAGE =====
function addMessage(text, sender) {
    var div = document.createElement('div');
    div.className = 'message ' + sender;
    
    var avatarIcon = sender === 'user' ? 'fa-user' : 'fa-robot';
    var avatarColor = sender === 'user' ? 'var(--accent)' : 'var(--purple)';
    
    div.innerHTML = '<div class="msg-avatar" style="background:' + avatarColor + '"><i class="fa-solid ' + avatarIcon + '"></i></div><div class="msg-content">' + text + '</div>';
    
    messagesDiv.appendChild(div);
    scrollBottom();
}

// ===== ADD IMAGE =====
function addImageMessage(url) {
    var div = document.createElement('div');
    div.className = 'message bot';
    
    div.innerHTML = '<div class="msg-avatar" style="background:var(--purple)"><i class="fa-solid fa-image"></i></div><div class="msg-content"><p>Generated Image:</p><img src="' + url + '" alt="AI Image" onclick="window.open(\'' + url + '\', \'_blank\')"></div>';
    
    messagesDiv.appendChild(div);
    scrollBottom();
}

// ===== LOADING =====
function showLoading() {
    var id = 'loading-' + Date.now();
    var div = document.createElement('div');
    div.id = id;
    div.className = 'message bot';
    div.innerHTML = '<div class="msg-avatar" style="background:var(--purple)"><i class="fa-solid fa-robot"></i></div><div class="loading"><span></span><span></span><span></span></div>';
    
    messagesDiv.appendChild(div);
    scrollBottom();
    return id;
}

function removeLoading(id) {
    var el = document.getElementById(id);
    if (el) el.remove();
}

function scrollBottom() {
    var chatArea = document.getElementById('chatArea');
    chatArea.scrollTop = chatArea.scrollHeight;
}

// ===== QUICK ACTIONS =====
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

// ===== CLEAR =====
function clearChat() {
    if (confirm('Clear all chat?')) {
        newChat();
    }
}
