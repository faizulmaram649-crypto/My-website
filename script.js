const API_KEY = "AQ.Ab8RN6Len8MwlhZklUHmIrmyXHLOFhppRzBMoKP_Q_MmyL7ObA";

async function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

if (!input || !chat) {
console.log("Missing elements");
return;
}

const message = input.value.trim();
if (!message) return;

// show user
chat.innerHTML += `<div class="user-message">🧑 ${message}</div>`;
input.value = "";

// loading
chat.innerHTML += `<div class="bot-message">⏳ Thinking...</div>`;

try {

const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{
parts: [{ text: message }]
}]
})
}
);

const data = await res.json();

console.log("API RESPONSE:", data);

let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

if (!reply) {
reply = "⚠️ No response from AI";
}

// remove loading last message
chat.lastElementChild.remove();

chat.innerHTML += `<div class="bot-message">${reply}</div>`;

chat.scrollTop = chat.scrollHeight;

} catch (err) {

console.error(err);

chat.innerHTML += `<div class="bot-message">❌ API Error</div>`;
}

}
