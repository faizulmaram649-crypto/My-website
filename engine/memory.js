// Memory Module
const memory = {

    userData: {},

    chatHistory: [],

    sessionStart: Date.now(),

    // Add user message
    addUser(text) {

        this.chatHistory.push({
            role: "user",
            content: text,
            time: Date.now()
        });

        this.save();

    },

    // Add bot message
    addBot(text) {

        this.chatHistory.push({
            role: "bot",
            content: text,
            time: Date.now()
        });

        this.save();

    },

    // Get history
    getHistory() {

        return this.chatHistory;

    },

    // Clear everything
    clear() {

        this.chatHistory = [];

        this.sessionStart = Date.now();

        try {

            localStorage.removeItem(
                "faizul_chat"
            );

        } catch (e) {

            console.error(e);

        }

    },

    // Save memory
    save() {

        try {

            localStorage.setItem(
                "faizul_chat",
                JSON.stringify(
                    this.chatHistory
                )
            );

            localStorage.setItem(
                "faizul_user",
                JSON.stringify(
                    this.userData
                )
            );

        } catch (e) {

            console.error(
                "Save Error:",
                e
            );

        }

    },

    // Load memory
    load() {

        try {

            const chat =
                localStorage.getItem(
                    "faizul_chat"
                );

            const user =
                localStorage.getItem(
                    "faizul_user"
                );

            if (chat) {

                this.chatHistory =
                    JSON.parse(chat);

            }

            if (user) {

                this.userData =
                    JSON.parse(user);

            }

        } catch (e) {

            console.error(
                "Load Error:",
                e
            );

        }

    },

    // Get preference
    get(key) {

        return this.userData[key];

    },

    // Set preference
    set(key, value) {

        this.userData[key] =
            value;

        this.save();

    }

};

// Auto Load
memory.load();
