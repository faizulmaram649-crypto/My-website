// Intent Recognition Module
const intent = {

    analyze(text) {

        text = text.toLowerCase().trim();

        if (!text) {
            return {
                found: false,
                keyword: null,
                response: "Please type something."
            };
        }

        // Direct Search
        const result = search.find(text);

        if (result) {

            return {
                found: true,
                keyword: result.keyword,
                response: result.data
            };

        }

        // Fuzzy Search
        const fuzzy =
            search.fuzzyFind(text, 2);

        if (
            fuzzy &&
            fuzzy.length > 0
        ) {

            return {
                found: true,
                keyword:
                    fuzzy[0].keyword,
                response:
                    fuzzy[0].data
            };

        }

        return {
            found: false,
            keyword: null,
            response:
                this.getDefault()
        };

    },

    getDefault() {

        const defaults = [

            "🤔 Mujhe is topic ki jankari nahi mili.",

            "📚 Main apne knowledge database me iska answer nahi dhoond paaya.",

            "🔍 Thoda aur clearly puchiye.",

            "💡 Try: physics, chemistry, biology, india, cricket, food, health."

        ];

        return defaults[
            Math.floor(
                Math.random() *
                defaults.length
            )
        ];

    },

    isGreeting(text) {

        const greetings = [
            "hello",
            "hi",
            "hey",
            "namaste",
            "salam"
        ];

        return greetings.some(
            g =>
                text
                    .toLowerCase()
                    .includes(g)
        );

    },

    isQuestion(text) {

        text =
            text.toLowerCase();

        return (
            text.includes("?") ||
            text.includes("what") ||
            text.includes("who") ||
            text.includes("why") ||
            text.includes("how") ||
            text.includes("when") ||
            text.includes("where")
        );

    }

};
