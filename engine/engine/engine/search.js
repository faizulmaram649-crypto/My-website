// Search Module - Advanced Search Functionality
const search = {
    // Search through all responses
    find(query) {
        query = query.toLowerCase().trim();
        
        if (!query) return null;
        
        // Direct match
        if (response.responses[query]) {
            return {
                type: 'direct',
                keyword: query,
                data: response.responses[query]
            };
        }
        
        // Partial match
        for (let key in response.responses) {
            if (key.includes(query) || query.includes(key)) {
                return {
                    type: 'partial',
                    keyword: key,
                    data: response.responses[key],
                    score: this.calculateScore(query, key)
                };
            }
        }
        
        // Word match
        const queryWords = query.split(' ');
        let bestMatch = null;
        let bestScore = 0;
        
        for (let key in response.responses) {
            const keyWords = key.split(' ');
            let matches = 0;
            
            for (let qWord of queryWords) {
                for (let kWord of keyWords) {
                    if (qWord.includes(kWord) || kWord.includes(qWord)) {
                        matches++;
                    }
                }
            }
            
            if (matches > bestScore) {
                bestScore = matches;
                bestMatch = {
                    type: 'word',
                    keyword: key,
                    data: response.responses[key],
                    score: matches
                };
            }
        }
        
        return bestMatch;
    },
    
    // Calculate match score
    calculateScore(query, keyword) {
        let score = 0;
        
        // Exact match
        if (query === keyword) score += 100;
        
        // Starts with
        if (keyword.startsWith(query)) score += 50;
        
        // Contains
        if (keyword.includes(query)) score += 30;
        
        // Same first letter
        if (query[0] === keyword[0]) score += 10;
        
        // Length similarity
        const lenDiff = Math.abs(query.length - keyword.length);
        score += Math.max(0, 10 - lenDiff);
        
        return score;
    },
    
    // Fuzzy search
    fuzzyFind(query, threshold = 3) {
        query = query.toLowerCase();
        let results = [];
        
        for (let key in response.responses) {
            const distance = this.levenshteinDistance(query, key);
            
            if (distance <= threshold) {
                results.push({
                    keyword: key,
                    data: response.responses[key],
                    distance: distance
                });
            }
        }
        
        // Sort by distance
        results.sort((a, b) => a.distance - b.distance);
        
        return results;
    },
    
    // Levenshtein distance for fuzzy matching
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str1.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str2.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                if (str1[i-1] === str2[j-1]) {
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i-1][j-1] + 1,
                        matrix[i][j-1] + 1,
                        matrix[i-1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str1.length][str2.length];
    },
    
    // Get suggestions
    getSuggestions(query, limit = 5) {
        query = query.toLowerCase();
        let suggestions = [];
        
        for (let key in response.responses) {
            if (key.startsWith(query)) {
                suggestions.push(key);
            }
        }
        
        return suggestions.slice(0, limit);
    },
    
    // Search in specific category
    searchInCategory(query, category) {
        const categoryKeywords = this.getCategoryKeywords(category);
        
        for (let key of categoryKeywords) {
            if (key.includes(query)) {
                return response.responses[key];
            }
        }
        
        return null;
    },
    
    // Get keywords for category
    getCategoryKeywords(category) {
        const categories = {
            'cricket': ['virat', 'dhoni', 'rohit', 'hardik', 'bumrah', 'jadeja', 'ashwin', 'rahul', 'ipl', 'cricket'],
            'education': ['math', 'science', 'history', 'geography', 'english', 'physics', 'chemistry', 'biology'],
            'food': ['food', 'recipe', 'dish', 'cuisine', 'eat', 'fruit', 'veg'],
            'health': ['health', 'fitness', 'exercise', 'diet', 'weight', 'disease'],
            'islamic': ['islam', 'muslim', 'quran', 'hadith', 'dua', 'prayer', 'ramadan'],
            'places': ['india', 'bihar', 'country', 'city', 'state', 'capital'],
            'fun': ['joke', 'fact', 'fun', 'haha']
        };
        
        return categories[category] || [];
    },
    
    // Get all keywords
    getAllKeywords() {
        return Object.keys(response.responses);
    },
    
    // Get random topic
    getRandomTopic() {
        const keywords = this.getAllKeywords();
        const randomIndex = Math.floor(Math.random() * keywords.length);
        return {
            keyword: keywords[randomIndex],
            response: response.responses[keywords[randomIndex]]
        };
    },
    
    // Search by starting letter
    startsWith(letter) {
        let results = [];
        
        for (let key in response.responses) {
            if (key.startsWith(letter.toLowerCase())) {
                results.push(key);
            }
        }
        
        return results;
    }
};
