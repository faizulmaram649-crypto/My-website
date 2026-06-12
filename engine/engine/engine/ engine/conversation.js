// Conversation Module
const conversation = {
    // Send message
    send() {
        const input = document.getElementById('userInput');
        const text = input.value.trim();
        
        if (!text) return;
        
        // Hide welcome
        const welcome = document.getElementById('welcome');
        if (welcome) welcome.style.display = 'none';
        
        // Get response
        const result = intent.analyze(text);
        
        // Add messages
        this.addUserMessage(text);
        memory.addUser(text);
        
        input.value = '';
        
        // Show bot response after delay
        setTimeout(() => {
            this.addBotMessage(result.response);
            memory.addBot(result.response);
        }, 400);
    },
    
    // Send quick message (from buttons)
    sendQuick(topic) {
        const input = document.getElementById('userInput');
        input.value = topic;
        this.send();
    },
    
    // Add user message
    addUserMessage(text) {
        const messages = document.getElementById('messages');
        const div = document.createElement('div');
        div.className = 'message user';
        div.innerHTML = `
            <div class="avatar">You</div>
            <div class="content">${formatter.format(text)}</div>
        `;
        messages.appendChild(div);
        this.scrollToBottom();
    },
    
    // Add bot message
    addBotMessage(text) {
        const messages = document.getElementById('messages');
        const div = document.createElement('div');
        div.className = 'message bot';
        div.innerHTML = `
            <div class="avatar">AI</div>
            <div class="content">${formatter.format(text)}</div>
        `;
        messages.appendChild(div);
        this.scrollToBottom();
    },
    
    // Scroll to bottom
    scrollToBottom() {
        const chat = document.getElementById('chatArea');
        chat.scrollTop = chat.scrollHeight;
    },
    
    // Clear chat
    clear() {
        const messages = document.getElementById('messages');
        messages.innerHTML = '';
        
        const welcome = document.getElementById('welcome');
        if (welcome) welcome.style.display = 'flex';
        
        memory.clear();
    }
};
