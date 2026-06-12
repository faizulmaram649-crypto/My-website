// Intent Recognition Module
const intent = {
    // Analyze user's message and find best match
    analyze(text) {
        text = text.toLowerCase();
        
        // Check each keyword
        for(let keyword in response.responses) {
            if(text.includes(keyword)) {
                return {
                    found: true,
                    keyword: keyword,
                    response: response.responses[keyword]
                };
            }
        }
        
        // No match found
        return {
            found: false,
            keyword: null,
            response: this.getDefault()
        };
    },
    
    // Default responses
    getDefault() {
        const defaults = [
            "Interesting! Tell me more about that.",
            "I know many topics! Try asking about cricket, education, food, or health.",
            "I didn't get that. Can you ask differently?",
            "Ask me about Faizul, India, Bihar, countries, cricket, or any topic you want!"
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    },
    
    // Check for greetings
    isGreeting(text) {
        const greetings = ['hello', 'hi', 'hey', 'namaste', 'salam'];
        return greetings.some(g => text.includes(g));
    },
    
    // Check for questions
    isQuestion(text) {
        return text.includes('?') || 
               text.includes('what') || 
               text.includes('how') ||
               text.includes('why') ||
               text.includes('who');
    }
};
