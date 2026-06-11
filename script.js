const API_KEY = "AQ.Ab8RN6Len8MwlhZklUHmIrmyXHLOFhppRzBMoKP_Q_MmyL7ObA";

async function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

const message = input.value.trim();
if (!message) return;

chat.innerHTML += `<div class="user-message">${message}</div>`;

input.value = "";

// loading message
const loading = document.createElement("div");
loading.className = "bot-message";
loading.innerText = "⏳ Thinking...";
chat.appendChild(loading);

chat.scrollTop = chat.scrollHeight;

try {

const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [{
parts: [{ text: message }]
}]
})
}
);

const data = await res.json();

console.log("FULL RESPONSE:", data);

// SAFE CHECK (important fix)
let reply =
data?.candidates?.[0]?.content?.parts?.[0]?.text;

if (!reply) {
reply = "⚠️ No response (API error or quota issue)";
}

loading.remove();

chat.innerHTML += `<div class="bot-message">${reply}</div>`;
chat.scrollTop = chat.scrollHeight;

} catch (err) {

loading.remove();

chat.innerHTML += `<div class="bot-message">❌ Network/API Error</div>`;

console.error(err);
}

}
