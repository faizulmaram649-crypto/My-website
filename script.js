console.log("Faizul AI Script Loaded");

const knowledge = {
"hello":"👋 Hello! Main Faizul AI hoon.",
"hi":"👋 Hi! Main Faizul AI hoon.",
"india":"🇮🇳 India South Asia me sthit ek desh hai. Rajdhani New Delhi hai.",
"bihar":"Bihar Bharat ka ek rajya hai. Rajdhani Patna hai.",
"patna":"Patna Bihar ki rajdhani hai.",
"taj mahal":"🕌 Taj Mahal Agra me sthit hai.",
"earth":"🌍 Earth Surya se teesra grah hai.",
"sun":"☀️ Sun ek tara hai.",
"moon":"🌙 Moon Prithvi ka upagrah hai.",
"mars":"🔴 Mars ko Red Planet kaha jata hai.",
"science":"🔬 Science me Physics, Chemistry aur Biology shamil hain.",
"physics":"⚛️ Physics urja aur gati ka adhyayan hai.",
"chemistry":"🧪 Chemistry padarth aur unke gunon ka adhyayan hai.",
"biology":"🧬 Biology jeevit praniyon ka adhyayan hai.",
"computer":"💻 Computer ek electronic device hai.",
"internet":"🌐 Internet duniya bhar ke computers ka network hai.",
"history":"📚 History manav sabhyata ka adhyayan hai.",
"ai":"🤖 AI ka matlab Artificial Intelligence hai.",
"chatgpt":"ChatGPT ek AI chatbot hai.",
"virat kohli":"🏏 Virat Kohli Bharat ke prasiddh cricketer hain.",
"dhoni":"🏏 MS Dhoni Bharat ke safal kaptano me se ek hain."
};

function chatAI() {

const input = document.getElementById("userInput");
const chat = document.getElementById("chatMessages");

if (!input || !chat) {
console.error("HTML IDs not found");
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

for (let key in knowledge) {
if (lower.includes(key)) {
reply = knowledge[key];
break;
}
}

if (!reply && lower.includes("date")) {
reply = "📅 " + new Date().toLocaleDateString();
}

if (!reply && lower.includes("time")) {
reply = "⏰ " + new Date().toLocaleTimeString();
}

if (!reply && lower.includes("joke")) {
reply = "😂 Teacher: Homework kahan hai? Student: Sir network issue tha.";
}

if (!reply && lower.includes("motivation")) {
reply = "💪 Roz thoda behtar bano, safalta zaroor milegi.";
}

if (!reply) {
try {

```
  if (/^[0-9+\-*/(). ]+$/.test(message)) {
    reply = "🧮 Answer = " + eval(message);
  }

} catch {
  reply = "❌ Invalid calculation.";
}
```

}

if (!reply) {
reply = "🤔 Maaf kijiye, mujhe is topic ki jankari nahi hai.";
}

setTimeout(() => {

```
chat.innerHTML += `
<div class="bot-message">
  ${reply}
</div>
`;

chat.scrollTop = chat.scrollHeight;
```

}, 400);

input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {

const input = document.getElementById("userInput");

if (input) {

```
input.addEventListener("keypress", function(e) {

  if (e.key === "Enter") {
    chatAI();
  }

});
```

}

});
