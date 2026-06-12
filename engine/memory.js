// Memory Module
const memory = {
    userData: {},
    chatHistory: [],
    sessionStart: Date.now(),
    
    // Save user message
    addUser(text) {
        this.chatHistory.push({
            role: 'user',
            content: text,
            time: Date.now()
        });
        this.save();
    },
    
    // Save bot response
    addBot(text) {
        this.chatHistory.push({
            role: 'bot',
            content: text,
            time: Date.now()
        });
        this.save();
    },
    
    // Get chat history
    getHistory() {
        return this.chatHistory;
    },
    
    // Clear history
    clear() {
        this.chatHistory = [];
        this.sessionStart = Date.now();
    },
    
    // Save to localStorage
    save() {
        try {
            localStorage.setItem('faizul_chat', JSON.stringify(this.chatHistory));
        } catch(e) {
            console.log('Save error:', e);
        }
    },
    
    // Load from localStorage
    load() {
        try {
            const saved = localStorage.getItem('faizul_chat');
            if(saved) {
                this.chatHistory = JSON.parse(saved);
            }
        } catch(e) {
            console.log('Load error:', e);
        }
    },
    
    // Get user preferences
    get(key) {
        return this.userData[key];
    },
    
    // Set user preference
    set(key, value) {
        this.userData[key] = value;
    }
};
