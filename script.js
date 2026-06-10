const knowledge = {
"hello":"👋 Hello! Main Faizul AI hoon. Kaise madad kar sakta hoon?",
"hi":"👋 Hi! Main Faizul AI hoon.",
"india":"🇮🇳 India South Asia me sthit ek desh hai. Iski rajdhani New Delhi hai.",
"bihar":"Bihar Bharat ka ek rajya hai. Iski rajdhani Patna hai.",
"patna":"Patna Bihar ki rajdhani hai.",
"taj mahal":"🕌 Taj Mahal Agra me sthit hai aur Shah Jahan ne banwaya tha.",
"earth":"🌍 Earth Surya se teesra grah hai.",
"sun":"☀️ Sun ek tara hai aur Solar System ka kendra hai.",
"moon":"🌙 Moon Prithvi ka prakritik upagrah hai.",
"mars":"🔴 Mars ko Red Planet kaha jata hai.",
"science":"🔬 Science me Physics, Chemistry aur Biology shamil hain.",
"physics":"⚛️ Physics urja, bal aur gati ka adhyayan hai.",
"chemistry":"🧪 Chemistry padarth aur unke gunon ka adhyayan hai.",
"biology":"🧬 Biology jeevit praniyon ka adhyayan hai.",
"computer":"💻 Computer ek electronic device hai jo data process karta hai.",
"internet":"🌐 Internet duniya bhar ke computers ka network hai.",
"history":"📚 History manav sabhyata aur purani ghatnaon ka adhyayan hai.",
"gandhi":"Mahatma Gandhi Bharat ke swatantrata andolan ke mahan neta the.",
"ashoka":"Samrat Ashoka Maurya vansh ke mahan shasak the.",
"virat kohli":"🏏 Virat Kohli Bharat ke prasiddh cricketer hain.",
"dhoni":"🏏 MS Dhoni Bharat ke safal kaptano me se ek hain.",
"cricket":"🏏 Cricket Bharat ka bahut lokpriya khel hai.",
"football":"⚽ Football duniya ka sabse lokpriya khel mana jata hai.",
"ai":"🤖 AI ka matlab Artificial Intelligence hai.",
"chatgpt":"ChatGPT OpenAI dwara banaya gaya AI chatbot hai."
};

function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

if (!input || !chat) {
console.error("HTML IDs nahi mile.");
return;
}

const message = input.value.trim();

if (message === "") return;

const lower = message.toLowerCase();

chat.innerHTML += `

<div class="user-message">
🧑 ${message}
</div>
`;

let reply = "";

// Knowledge Search
for (let key in knowledge) {
if (lower.includes(key)) {
reply = knowledge[key];
break;
}
}

// Date
if (!reply && lower.includes("date")) {
reply = "📅 " + new Date().toLocaleDateString();
}

// Time
if (!reply && lower.includes("time")) {
reply = "⏰ " + new Date().toLocaleTimeString();
}

// Joke
if (!reply && lower.includes("joke")) {
reply = "😂 Teacher: Homework kahan hai? Student: Sir network issue tha, dimaag connect nahi hua.";
}

// Motivation
if (!reply && lower.includes("motivation")) {
reply = "💪 Safalta ka raaz hai roz thoda-thoda behtar banna.";
}

// Calculator
if (!reply) {

try {

if (/^[0-9+-*/().\s]+$/.test(message)) {
reply = "🧮 Answer = " + eval(message);
}

} catch (e) {
reply = "❌ Invalid calculation.";
}

}

// Default Reply
if (!reply) {
reply = "🤔 Maaf kijiye, mujhe is topic ki jankari nahi hai.";
}

setTimeout(() => {

chat.innerHTML += `

<div class="bot-message">
${reply}
</div>
`;

chat.scrollTop = chat.scrollHeight;

}, 400);

input.value = "";

}

// Enter Key Support
document.addEventListener("DOMContentLoaded", () => {

const input = document.getElementById("userInput");

if (input) {

input.addEventListener("keypress", function(e) {

if (e.key === "Enter") {
chatAI();
}

});

}

});
