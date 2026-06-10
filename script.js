const knowledge = {
"hello":"Hello! Main Faizul AI hoon.",
"hi":"Hi! Main Faizul AI hoon.",
"india":"India South Asia me sthit ek desh hai.",
"taj mahal":"Taj Mahal Agra me sthit hai.",
"earth":"Earth Surya se teesra grah hai.",
"sun":"Sun ek tara hai.",
"computer":"Computer ek electronic device hai.",
"ai":"AI ka matlab Artificial Intelligence hai."
};

function chatAI(){

const input=document.getElementById("userInput");
const message=input.value.trim().toLowerCase();

if(!message) return;

const chat=document.getElementById("chatMessages");

chat.innerHTML += `

<div class="user-message">
🧑 ${message}
</div>
`;

let reply="Mujhe is topic ki jankari nahi hai.";

for(const key in knowledge){
if(message.includes(key)){
reply=knowledge[key];
break;
}
}

setTimeout(()=>{

chat.innerHTML += `

<div class="bot-message">
🤖 ${reply}
</div>
`;

chat.scrollTop=chat.scrollHeight;

},500);

input.value="";
}

document.getElementById("userInput").addEventListener("keypress",function(e){
if(e.key==="Enter"){
chatAI();
}
});
