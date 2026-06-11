// ===== CONFIGURATION =====
const API_KEY = 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""; // Replace with your actual OpenAI API Key

// ===== DOM ELEMENTS =====
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const messagesList = document.getElementById("messagesList");
const messagesContainer = document.getElementById("messagesContainer");
const welcomeScreen = document.getElementById("welcomeScreen");

// ===== AUTO-RESIZE TEXTAREA =====
userInput.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    
    // Limit max height
    if (this.scrollHeight > 200) {
        this.style.overflowY = "auto";
    }
});

// ===== SEND MESSAGE =====
async function sendMessage() {
    const messageText = userInput.value.trim();
    
    if (!messageText) return;
    
    // Hide welcome screen
    welcomeScreen.style.display = "none";
    
    // Add user message
    addMessage(messageText, "user");
    
    // Clear input
    userInput.value = "";
    userInput.style.height = "auto";
    
    // Show loading
    const loadingId = showLoading();
    
    // Disable send button
    sendBtn.disabled = true;
    
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions",
