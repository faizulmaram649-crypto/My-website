const personality = {

    name: "Faizul AI",

    creator: "Faizul Maram",

    getGreeting() {

        const hour =
            new Date().getHours();

        if (hour < 12)
            return "🌅 Good Morning!";

        if (hour < 17)
            return "☀️ Good Afternoon!";

        if (hour < 21)
            return "🌆 Good Evening!";

        return "🌙 Good Night!";
    },

    getStyle() {

        return {
            emoji: "🤖",
            color: "#00d48a"
        };

    },

    getInfo() {

        return `
${this.name}

Creator:
${this.creator}
`;

    }

};
