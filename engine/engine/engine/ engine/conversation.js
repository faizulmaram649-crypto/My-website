// Conversation Module
const conversation = {

    // Send message
    send() {

        const input = document.getElementById("userInput");

        if (!input) return;

        const text = input.value.trim();

        if (text.length === 0) return;

        // Hide welcome section
        const welcome =
            document.getElementById("welcome");

        if (welcome) {
            welcome.style.display = "none";
        }

        // User message
        this.addUserMessage(text);

        // Save memory
        if (typeof memory !== "undefined") {
            memory.addUser(text);
        }

        input.value = "";

        let botReply =
            "Sorry, I don't know the answer.";

        try {

            const result =
                intent.analyze(text);

            if (
                result &&
                result.response
            ) {
                botReply =
                    result.response;
            }

        } catch (err) {

            console.error(
                "Conversation Error:",
                err
            );

            botReply =
                "⚠️ Something went wrong.";
        }

        // Bot reply delay
        setTimeout(() => {

            this.addBotMessage(botReply);

            if (
                typeof memory !== "undefined"
            ) {
                memory.addBot(botReply);
            }

        }, 400);

    },

    // Quick buttons
    sendQuick(topic) {

        const input =
            document.getElementById(
                "userInput"
            );

        if (!input) return;

        input.value = topic;

        this.send();

    },

    // User message
    addUserMessage(text) {

        const messages =
            document.getElementById(
                "messages"
            );

        if (!messages) return;

        const div =
            document.createElement("div");

        div.className =
            "message user";

        div.innerHTML = `
            <div class="avatar">You</div>
            <div class="content">
                ${formatter.format(text)}
            </div>
        `;

        messages.appendChild(div);

        this.scrollToBottom();

    },

    // Bot message
    addBotMessage(text) {

        const messages =
            document.getElementById(
                "messages"
            );

        if (!messages) return;

        const div =
            document.createElement("div");

        div.className =
            "message bot";

        div.innerHTML = `
            <div class="avatar">AI</div>
            <div class="content">
                ${formatter.format(text)}
            </div>
        `;

        messages.appendChild(div);

        this.scrollToBottom();

    },

    // Scroll
    scrollToBottom() {

        const chat =
            document.getElementById(
                "chatArea"
            );

        if (!chat) return;

        chat.scrollTop =
            chat.scrollHeight;

    },

    // Clear chat
    clear() {

        const messages =
            document.getElementById(
                "messages"
            );

        if (messages) {
            messages.innerHTML = "";
        }

        const welcome =
            document.getElementById(
                "welcome"
            );

        if (welcome) {
            welcome.style.display =
                "flex";
        }

        if (
            typeof memory !==
            "undefined"
        ) {
            memory.clear();
        }

    }

};
