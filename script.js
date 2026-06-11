// ===== SETTINGS =====
const API_KEY = "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"; 

// ===== VARS =====
let mode = 'chat';
let isLoading = false);

// ===== DOM ELEMENTS =====
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
    
    console.log("Mode changed to:", mode); // Debug
    
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
    // Prevent multiple clicks
    if (isLoading) return;
    
    let text = '';
    
    if (mode === 'chat') {
        text = chatInput.value.trim();
    } else {
        text = imageInput.value.trim();
    }
    
    if (!text) return;
    
    // Hide welcome screen
    welcome.style.display = 'none';
    
    // Add user message
    addMessage(text, 'user');
    
    // Clear input
    if (mode
