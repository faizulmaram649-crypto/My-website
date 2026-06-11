// ===== SETTINGS =====
const API_KEY = "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"; // Change this to your key

// ===== VARS =====
let mode = 'chat';
const chatArea = document.getElementById('chatArea');
const messages = document.getElementById('messages');
const welcome = document.getElementById('welcome');
const chatInput = document.getElementById('chatInput');
const imageInput = document.getElementById('imageInput');
const imageSize = document.getElementById('imageSize');
const chatInputGroup = document.getElementById('chatInputGroup');
const imageInputGroup = document.getElementById('imageInputGroup');
const chatModeBtn = document.getElementById('chatModeBtn');
const imageModeBtn = document.getElementById('imageModeBtn');

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
    let text = '';
    
    if (mode === 'chat') {
        text = chatInput.value.trim();
    } else {
        text = imageInput.value.trim();
    }
    
    if (!text) return;
    
    // Hide welcome
    welcome.style.display = 'none';
    
    // Add user message
    addMessage(text, 'user');
    
    // Clear input
    if (mode === 'chat') {
        chatInput.value = '';
    } else {
        imageInput.value = '';
    }
    
    // Show loading
    const loadingId = showLoading();
    
    try {
        let response;
        
        if (mode === 'chat') {
            // Chat API
            response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
