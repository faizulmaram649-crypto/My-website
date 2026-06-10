function chatAI(){

const input = document.getElementById("userInput");
const message = input.value.trim();
const lower = message.toLowerCase();

if(message==="") return;

const chat = document.getElementById("chatMessages");

chat.innerHTML += `

<div class="user-message">
🧑 ${message}
</div>
`;

let reply = "";

if(
lower.includes("hello") ||
lower.includes("hi") ||
lower.includes("hey")
){
reply = "👋 Hello! Main Faizul AI hoon. Aapka swagat hai.";
}

else if(lower.includes("your name")){
reply = "🤖 Mera naam Faizul AI hai.";
}

else if(lower.includes("india")){
reply = "🇮🇳 India South Asia me sthit ek desh hai. Iski rajdhani New Delhi hai.";
}

else if(lower.includes("bihar")){
reply = "Bihar Bharat ka ek rajya hai. Iski rajdhani Patna hai.";
}

else if(lower.includes("taj mahal")){
reply = "🕌 Taj Mahal Agra me sthit hai aur Shah Jahan ne banwaya tha.";
}

else if(lower.includes("earth")){
reply = "🌍 Earth Surya se teesra grah hai.";
}

else if(lower.includes("sun")){
reply = "☀️ Sun ek tara hai aur Solar System ka kendra hai.";
}

else if(lower.includes("moon")){
reply = "🌙 Moon Prithvi ka prakritik upagrah hai.";
}

else if(lower.includes("science")){
reply = "🔬 Science me Physics, Chemistry aur Biology shamil hain.";
}

else if(lower.includes("physics")){
reply = "⚛️ Physics urja, bal aur gati ka adhyayan hai.";
}

else if(lower.includes("chemistry")){
reply = "🧪 Chemistry padarth aur unke gunon ka adhyayan hai.";
}

else if(lower.includes("biology")){
reply = "🧬 Biology jeevit praniyon ka adhyayan hai.";
}

else if(lower.includes("computer")){
reply = "💻 Computer ek electronic device hai jo data process karta hai.";
}

else if(lower.includes("internet")){
reply = "🌐 Internet duniya bhar ke computers ka network hai.";
}

else if(lower.includes("ai")){
reply = "🤖 AI ka matlab Artificial Intelligence hai.";
}

else if(lower.includes("history")){
reply = "📚 History purani ghatnaon aur sabhyataon ka adhyayan hai.";
}

else if(lower.includes("gandhi")){
reply = "Mahatma Gandhi Bharat ke swatantrata andolan ke mahan neta the.";
}

else if(lower.includes("ashoka")){
reply = "Samrat Ashoka Maurya vansh ke mahan shasak the.";
}

else if(lower.includes("virat kohli")){
reply = "🏏 Virat Kohli Bharat ke prasiddh cricketer hain.";
}

else if(lower.includes("dhoni")){
reply = "🏏 MS Dhoni Bharat ke safal kaptano me se ek hain.";
}

else if(lower.includes("cricket")){
reply = "🏏 Cricket Bharat ka bahut lokpriya khel hai.";
}

else if(lower.includes("football")){
reply = "⚽ Football duniya ka sabse lokpriya khel mana jata hai.";
}

else if(lower.includes("joke")){
reply = "😂 Teacher: Homework kahan hai? Student: Sir network issue tha, dimaag connect nahi hua.";
}

else if(lower.includes("motivation")){
reply = "💪 Safalta ka raaz hai roz thoda-thoda behtar banna.";
}

else if(lower.includes("date")){
reply = "📅 " + new Date().toLocaleDateString();
}

else if(lower.includes("time")){
reply = "⏰ " + new Date().toLocaleTimeString();
}

else{

try{

if(/^[0-9+-*/(). ]+$/.test(message)){
reply = "🧮 Answer = " + eval(message);
}
else{
reply = "🤔 Maaf kijiye, mujhe is topic ki jankari nahi hai.";
}

}catch{

reply = "❌ Invalid calculation.";
}

}

setTimeout(()=>{

chat.innerHTML += `

<div class="bot-message">
${reply}
</div>
`;

chat.scrollTop = chat.scrollHeight;

},500);

input.value="";
}

document.getElementById("userInput").addEventListener("keypress",function(e){

if(e.key==="Enter"){
chatAI();
}

});
