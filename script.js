function chatAI(){

let input=document.getElementById("userInput");
let message=input.value.trim();

if(message==="") return;

let chat=document.getElementById("chatMessages");

chat.innerHTML +=
'<div class="user-message">'+message+'</div>';

setTimeout(() => {

chat.innerHTML +=
'<div class="bot-message">You said: '+message+'</div>';

chat.scrollTop=chat.scrollHeight;

},500);

input.value="";
}

let input =
document.getElementById("userInput");

let message = input.value.trim();

if(message==="") return;

let chat =
document.getElementById("chatMessages");

chat.innerHTML +=
'<div class="user-message">' +
message +
'</div>';

setTimeout(() => {

chat.innerHTML +=
'<div class="bot-message">' +
'You said: ' + message +
'<br><br>Real AI response will come later.' +
'</div>';

chat.scrollTop =
chat.scrollHeight;

},500);

input.value="";
}
if(message.includes("india")){
    reply = "India South Asia me sthit ek desh hai. Iski rajdhani New Delhi hai aur yah duniya ka sabse adhik jansankhya wala desh hai.";
}
else if(message.includes("taj mahal")){
    reply = "Taj Mahal Agra me sthit hai. Ise Mughal Badshah Shah Jahan ne apni patni Mumtaz Mahal ki yaad me banwaya tha.";
}
else if(message.includes("earth")){
    reply = "Earth Surya se teesra grah hai aur yah ekmatra gyaat grah hai jahan jeevan maujood hai.";
}
else if(message.includes("sun")){
    reply = "Sun ek tara (star) hai. Prithvi aur anya grah iske chakkar lagate hain.";
}
else if(message.includes("computer")){
    reply = "Computer ek electronic device hai jo data ko process karta hai aur calculations, programming aur internet jaise kaam karta hai.";
}
else if(message.includes("ai")){
    reply = "AI ka matlab Artificial Intelligence hai. Isme machines ko aise design kiya jata hai ki ve insano ki tarah sochne aur seekhne jaisa kaam kar saken.";
}
else if(message.includes("math")){
    reply = "Maths me Algebra, Geometry, Trigonometry aur Statistics jaise vishay aate hain. Apna sawaal bhejiye.";
}
else if(message.includes("science")){
    reply = "Science prakriti aur brahmand ka adhyayan hai. Isme Physics, Chemistry aur Biology shamil hain.";
}
else if(message.includes("history")){
    reply = "History manav sabhyata aur purani ghatnaon ka adhyayan hai. Aap kisi specific topic ke baare me puch sakte hain.";
}
if(message.includes("india")){
    reply = "India South Asia me sthit ek desh hai. Iski rajdhani New Delhi hai aur yah duniya ka sabse adhik jansankhya wala desh hai.";
}
else if(message.includes("taj mahal")){
    reply = "Taj Mahal Agra me sthit hai. Ise Mughal Badshah Shah Jahan ne apni patni Mumtaz Mahal ki yaad me banwaya tha.";
}
else if(message.includes("earth")){
    reply = "Earth Surya se teesra grah hai aur yah ekmatra gyaat grah hai jahan jeevan maujood hai.";
}
else if(message.includes("sun")){
    reply = "Sun ek tara (star) hai. Prithvi aur anya grah iske chakkar lagate hain.";
}
else if(message.includes("computer")){
    reply = "Computer ek electronic device hai jo data ko process karta hai aur calculations, programming aur internet jaise kaam karta hai.";
}
else if(message.includes("ai")){
    reply = "AI ka matlab Artificial Intelligence hai. Isme machines ko aise design kiya jata hai ki ve insano ki tarah sochne aur seekhne jaisa kaam kar saken.";
}
else if(message.includes("math")){
    reply = "Maths me Algebra, Geometry, Trigonometry aur Statistics jaise vishay aate hain. Apna sawaal bhejiye.";
}
else if(message.includes("science")){
    reply = "Science prakriti aur brahmand ka adhyayan hai. Isme Physics, Chemistry aur Biology shamil hain.";
}
else if(message.includes("history")){
    reply = "History manav sabhyata aur purani ghatnaon ka adhyayan hai. Aap kisi specific topic ke baare me puch sakte hain.";
}
function chatAI() {
...
}
