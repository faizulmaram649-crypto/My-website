const API_KEY = "AQ.Ab8RN6KQLgpZLRtyWS0_AO6Lq9bPzBsccyGooFViT-jrmCLkQA";

async function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

const message = input.value.trim();
if (!message) return;

chat.innerHTML += `<div class="user-message">${message}</div>`;

input.value = "";

chat.innerHTML += `<div class="bot-message">⏳ Thinking...</div>`;

try {

const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
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

const data = await res.json();

console.log(data);

let reply =
data?.candidates?.[0]?.content?.parts?.[0]?.text;

if (!reply) {
reply = "⚠️ No response from AI. Please try again.";
}

chat.innerHTML += `<div class="bot-message">${reply}</div>`;

chat.scrollTop = chat.scrollHeight;

} catch (err) {

console.error(err);

chat.innerHTML += `<div class="bot-message">❌ Error connecting to AI</div>`;
}

}
