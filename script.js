function chatAI(){

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
