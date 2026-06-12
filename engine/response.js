// Response Loader Module
const response = {
    responses: {},
    loaded: false,
    
    // Load all responses
    async load() {
        console.log('Loading responses...');
        
        // Default responses
        this.responses = {
            // Greetings
            "hello": "Hello! Welcome to Faizul AI!\n\nI can answer about:\n- Who is Faizul (Creator)\n- India States & Bihar\n- Countries\n- Cricket Players\n- Education\n- Food & Health\n- Jokes & Facts\n\nWhat would you like to know?",
            "hi": "Hi! Welcome to Faizul AI!",
            "hey": "Hey! What's up!",
            
            // Faizul Creator
            "who is faizul": "FAIZUL
