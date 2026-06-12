// Personality Module
const personality = {
    name: 'Faizul AI',
    creator: 'Faizul Maram',
    
    // Get greeting
    getGreeting() {
        const hour = new Date().getHours();
        
        if (hour < 12) return 'Good Morning!';
        if (hour < 17) return 'Good Afternoon!';
        if (hour < 21) return 'Good Evening!';
        return 'Good Night!';
    },
    
    // Get response style
    getStyle() {
        return {
            emoji: '🤖',
            color: '#00d48a'
        };
    },
    
    // Get bot info
    getInfo() {
        return `I am ${this.name}, created by ${this.creator}!`;
    }
};
