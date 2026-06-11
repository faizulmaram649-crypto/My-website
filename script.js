const API_KEY = "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";

var mode = 'chat';
var isLoading = false;
var messagesDiv = document.getElementById('messages');
var welcomeDiv = document.getElementById('welcome');
var chatInput = document.getElementById('chatInput');
var imageInput = document.getElementById('imageInput');
var imageSizeSelect = document.getElementById('imageSize');

chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) sendMessage();
});

function setMode(newMode) {
    mode = newMode;
    var c1 = document.getElementById('chatInputGroup');
    var c2 = document.getElementById('imageInputGroup');
    var b1 = document.getElementById('chatModeBtn');
    var b2 = document.getElementById('imageModeBtn');
    if (mode === 'chat') { c1.classList.add('active'); c2.classList.remove('active'); b1.classList.add('active'); b2.classList.remove('active'); }
    else { c2.classList.add('active'); c1.classList.remove('active'); b2.classList.add('active'); b1.classList.remove('active'); }
}

async function sendMessage() {
    if (isLoading) return;
    var text = mode === 'chat' ? chatInput.value.trim() : imageInput.value.trim();
    if (!text) return;
    
    welcomeDiv.style.display = 'none';
    addMessage(text, 'user');
    if (mode === 'chat') chatInput.value = ''; else imageInput.value = '';
    
    isLoading = true;
    var lid = showLoading();
    
    try {
        var endpoint = mode === 'chat' ? 'https://api.openai.com/v1/chat/completions' : 'https://api.openai.com/v1/images/generations';
        var reqBody = mode === 'chat' ? { model: 'gpt-3.5-turbo', messages: [{role:'user',content:text}] } : {prompt:text,n:1,size:imageSizeSelect.value};
        
        var res = await fetch(endpoint, {
            method: 'POST',
            headers: {'Content-Type':'application/json','Authorization':'Bearer '+API_KEY},
            body: JSON.stringify(reqBody)
        });
        
        var data = await res.json();
        removeLoading(lid);
        
        if (data.error) addMessage('Error: '+data.error.message, 'bot');
        else if (mode === 'chat') addMessage(data.choices[0].message.content, 'bot');
        else addImageMessage(data.data[0].url);
    } catch (e) {
        removeLoading(lid);
        addMessage('Error: Network issue - use Live Server', 'bot');
    }
    isLoading = false;
}

function addMessage(txt, who) {
    var d = document.createElement('div');
    d.className = 'message '+who;
    var ico = who==='user'?'fa-user':'fa-robot';
    var col = who==='user'?'var(--accent)':'var(--purple)';
    d.innerHTML = '<div class="msg-avatar" style="background:'+col+'"><i class="fa-solid '+ico+'"></i></div><div class="msg-content">'+txt+'</div>';
    messagesDiv.appendChild(d);
    document.getElementById('chatArea').scrollTop = 1e9;
}

function addImageMessage(url) {
    var d = document.createElement('div');
    d.className = 'message bot';
    d.innerHTML = '<div class="msg-avatar" style="background:var(--purple)"><i class="fa-solid fa-image"></i></div><div class="msg-content"><img src="'+url+'"></div>';
    messagesDiv.appendChild(d);
    document.getElementById('chatArea').scrollTop = 1e9;
}

function showLoading() {
    var id = 'l'+Date.now();
    var d = document.createElement('div');
    d.id = id; d.className = 'message bot';
    d.innerHTML = '<div class="msg-avatar" style="background:var(--purple)"><i class="fa-solid fa-robot"></i></div><div class="loading"><span></span><span></span><span></span></div>';
    messagesDiv.appendChild(d);
    return id;
}

function removeLoading(id) { var e = document.getElementById(id); if(e) e.remove(); }
function quickSend(t) { chatInput.value = t; sendMessage(); }
function quickImage(t) { imageInput.value = t; mode='image'; sendMessage(); }
function newChat() { messagesDiv.innerHTML = ''; welcomeDiv.style.display = 'flex'; }
function clearChat() { if(confirm('Clear?')) newChat(); }
