const API_KEY = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AQ.Ab8RN6KQLgpZLRtyWS0_AO6Lq9bPzBsccyGooFViT-jrmCLkQA";

async function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

const message = input.value.trim();
if (!message) return;

chat.innerHTML += `<div class="user-message">${message}</div>`;
input.value = "";

const loading = document.createElement("div");
loading.className = "bot-message";
loading.innerText = "⏳ Thinking...";
chat.appendChild(loading);

try {

const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AQ.Ab8RN6KQLgpZLRtyWS0_AO6Lq9bPzBsccyGooFViT-jrmCLkQA}`,
{
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({
contents: [{ parts: [{ text: message }] }]
})
}
);

const data = await res.json();

console.log(data);

loading.remove();

let reply =
data?.candidates?.[0]?.content?.parts?.[0]?.text;

if (!reply) reply = "⚠️ No response from AI";

chat.innerHTML += `<div class="bot-message">${reply}</div>`;
chat.scrollTop = chat.scrollHeight;

} catch (err) {

loading.remove();
chat.innerHTML += `<div class="bot-message">❌ API Error</div>`;

console.error(err);
}
}
const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AQ.Ab8RN6KQLgpZLRtyWS0_AO6Lq9bPzBsccyGooFViT-jrmCLkQA}`,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [
{
parts: [{ text: message }]
}
]
})
}
);
