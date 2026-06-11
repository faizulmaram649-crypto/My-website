const API_KEY = "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";

var mode = 'chat';
var isLoading = false;

var messagesDiv = document.getElementById('messages');
var welcomeDiv = document.getElementById('welcome');
var chatInput = document.getElementById('chatInput');
var imageInput = document.getElementById('imageInput');
var imageSizeSelect = document.getElementById('imageSize');

function checkKey() {
    if (API_KEY === "" || API_KEY.length < 40) {
        alert("Invalid API key!");
        return false;
    }
    return true;
}

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

function setMode(newMode) {
    mode = newMode;
    document.getElementById('chatModeBtn').classList.toggle('active', mode === 'chat');
    document.getElementById('imageModeBtn').classList.toggle('active', mode === 'image');
    document.getElementById('chatInputGroup').classList.toggle('active', mode === 'chat');
    document.getElementById('imageInputGroup').classList.toggle('active', mode === 'image');
    if (mode === 'chat') chatInput.focus();
    else imageInput.focus();
}

async function sendMessage() {
    if (isLoading || !checkKey()) return;
    
    var text = mode === 'chat' ? chatInput.value.trim() : imageInput.value.trim();
    if (text === "") return;
    
    welcomeDiv.style.display = 'none';
    addMessage(text, 'user');
    
    if (mode === 'chat') chatInput.value = ""; 
    else imageInput.value = "";
    
    isLoading = true;
    var loadingId = showLoading();
    
    try {
        var url = mode === 'chat' ? 'https://api.openai.com/v1/chat/completions' : 'https://api.openai.com/v1/images/generations';
        var body = mode === 'chat' ? 
            { model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: text }] } :
            { prompt: text, n: 1, size: imageSizeSelect.value };
        
        var response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + API_KEY },
            body: JSON.stringify(body)
        });
        
        var data = await response.json();
        removeLoading(loadingId);
        
        if (data.error) addMessage("Error: " + data.error.message, 'bot');
        else if (mode === 'chat') addMessage(data.choices[0].message.content, 'bot');
        else addImageMessage(data.data[0].url);
    } catch (error) {
        removeLoading(loadingId);
        addMessage("Error: " + error.message, 'bot');
    }
    
    isLoading = false;
}

function addMessage(text, sender) {
    var div = document.createElement('div');
    div.className = 'message ' + sender;
    var icon = sender === 'user' ? 'fa-user' : 'fa-robot';
    var color = sender === 'user' ? 'var(--accent)' : 'var(--purple)';
    div.innerHTML = '<div class="msg-avatar" style="background:' + color + '"><i class="fa-solid ' + icon + '"></i></div><div class="msg-content">' + text + '</div>';
    messagesDiv.appendChild(div);
    scrollBottom();
}

function addImageMessage(url) {
    var div = document.createElement('div');
    div.className = 'message bot';
    div.innerHTML = '<div class="msg-avatar" style="background:var(--purple)"><i class="fa-solid fa-image"></i></div><div class="msg-content"><p>Generated:</p><img src="' + url + '"></div>';
    messagesDiv.appendChild(div);
    scrollBottom();
}

function showLoading() {
    var id = 'loading-' + Date.now();
    var div = document.createElement('div');
    div.id = id;
    div.className = 'message bot';
    div.innerHTML = '<div class="msg-avatar" style="background:var(--purple)"><i class="fa-solid fa-robot"></i></div><div class="loading"><span></span><span></span><span></span></div>';
    messagesDiv.appendChild(div);
    return id;
}

function removeLoading(id) {
    var el = document.getElementById(id);
    if (el) el.remove();
}

function scrollBottom() {
    document.getElementById('chatArea').scrollTop = document.getElementById('chatArea').scrollHeight;
}

function quickSend(text) { chatInput.value = text; sendMessage(); }
function quickImage(text) { imageInput.value = text; mode = 'image'; sendMessage(); }
function newChat() { messagesDiv.innerHTML = ''; welcomeDiv.style.display = 'flex'; }
function clearChat() { if (confirm('Clear?')) newChat(); }
