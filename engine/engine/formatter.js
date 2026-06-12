// Formatter Module
const formatter = {
    // Format message for display
    format(text) {
        // Escape HTML
        text = this.escapeHtml(text);
        
        // Format newlines
        text = text.replace(/\n/g, '<br>');
        
        return text;
    },
    
    // Escape HTML special characters
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    },
    
    // Format user input
    formatInput(text) {
        return text.trim().toLowerCase();
    },
    
    // Get timestamp
    getTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
};
