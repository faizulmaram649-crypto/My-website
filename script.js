const API_KEY = "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";

async function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

const message = input.value.trim();
if (!message) return;

chat.innerHTML += `<div class="user-message">🧑 ${message}</div>`;
input.value = "";

// loading message
const loading = document.createElement("div");
loading.className = "bot-message";
loading.innerText = "⏳ Faizul AI is thinking...";
chat.appendChild(loading);

chat.scrollTop = chat.scrollHeight;

try {

const res = await fetch("https://api.openai.com/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`
},
body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{
role: "system",
content: "You are Faizul AI, a helpful assistant that explains answers in simple Hindi + English mix."
},
{
role: "user",
content: message
}
]
})
});

const data = await res.json();

console.log("OpenAI Response:", data);

loading.remove();

let reply = data?.choices?.[0]?.message?.content;

if (!reply) {
reply = "⚠️ No response from AI. Check API key or billing.";
}

chat.innerHTML += `<div class="bot-message">${reply}</div>`;
chat.scrollTop = chat.scrollHeight;

} catch (error) {

loading.remove();

console.error(error);

chat.innerHTML += `<div class="bot-message">❌ Network Error / API Failed</div>`;
}

}
