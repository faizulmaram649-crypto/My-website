// ===============================
// FAIZUL AI - PREMIUM SCRIPT
// Gemini 2.5 Flash Integration
// ===============================


const API_KEY = "AQ.Ab8RN6Len8MwlhZklUHmIrmyXHLOFhppRzBMoKP_Q_MmyL7ObA";

// Chat container
const chatBox = document.getElementById("chatMessages");
const inputBox = document.getElementById("userInput");

// ===============================
// SEND MESSAGE FUNCTION
// ===============================
async function chatAI() {

    const message = inputBox.value.trim();

    if (!message) return;

    // User message show
    chatBox.innerHTML += `
        <div class="user-message">🧑 ${message}</div>
    `;

    inputBox.value = "";

    // Loading message
    const loadingId = "loading_" + Date.now();
    chatBox.innerHTML += `
        <div class="bot-message" id="${loadingId}">
            🤖 Faizul AI is thinking...
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: message
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!reply) {
            reply = "❌ Sorry, AI response nahi mil paya.";
        }

        // Remove loading
        document.getElementById(loadingId).remove();

        // Bot reply show
        chatBox.innerHTML += `
            <div class="bot-message">🤖 ${reply}</div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {

        document.getElementById(loadingId).remove();

        chatBox.innerHTML += `
            <div class="bot-message">❌ Error: API connect nahi ho raha</div>
        `;

        console.error(error);
    }
}

// ===============================
// ENTER KEY SUPPORT
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    inputBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            chatAI();
        }
    });

});
