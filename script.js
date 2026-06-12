window.onload = function () {

    console.log("Faizul AI Ready");

};
// FAIZUL AI - COMPLETE DATABASE
var db = {};

db["hello"] = "Hello! Welcome to Faizul AI!\n\nI can answer about:\n- Creator (Faizul)\n- India, Bihar, Countries\n- Cricket (Virat, Dhoni, Rohit)\n- Education (Math, Science, History)\n- Urdu, Hindi, English\n- Islam, Quran, Dua\n- Food, Health\n- Jokes & Facts\n\nWhat would you like to know?";
db["hi"] = "Hi! Welcome to Faizul AI!";
db["hey"] = "Hey! What's up!";
db["salam"] = "Salam! Asalamu Alaikum!";
db["thanks"] = "You're welcome!";
db["thank"] = "Welcome!";
db["bye"] = "Goodbye! Come back!";
db["who is faizul"] = "FAIZUL MARAM - CREATOR\n\nYouTube: @faizulmaram17\n\nContent:\n- Islamic status videos\n- Religious quotes\n- Duas\n- Motivational clips";
db["faizul"] = "FAIZUL MARAM\n\nYouTube: @faizulmaram17";
db["about"] = "I am Faizul AI!";
db["india"] = "INDIA - 28 STATES + 8 UT\n\nNorth: Delhi, Haryana, Punjab, HP\nWest: Rajasthan, Gujarat, Goa, Maharashtra\nEast: WB, Bihar, Jharkhand\nSouth: Karnataka, TN, Kerala\nCapital: New Delhi\nPop: 140 Crore+";
db["bihar"] = "BIHAR\n\nCapital: Patna\nCM: Nitish Kumar\nPop: 12.4 Crore\n\nFamous: Litti Chokha, Litchi\nSpecial: Buddha in Gaya!";
db["patna"] = "PATNA\n\nCapital of Bihar\nPop: 20 lakh+";
db["gaya"] = "GAYA\n\nMahabodhi Temple\nBuddha enlightenment!";
db["litti chokha"] = "LITTI CHOKHA\n\nBihar's famous food";
db["litchi"] = "LITCHI\n\nBihar's famous fruit";
db["countries"] = "COUNTRIES\n\nASIA: India, China, Japan\nEUROPE: UK, France\nAMERICAS: USA, Canada";
db["delhi"] = "DELHI\n\nCapital of India";
db["mumbai"] = "MUMBAI\n\nFinancial capital";
db["urdu"] = "URDU\n\n- Poetical language\n- Nastaliq script\n- Famous ghazals";
db["hindi"] = "HINDI\n\n- India's language\n- 600M speakers";
db["english"] = "ENGLISH\n\n- World's language\n- 1.5B speakers";
db["virat"] = "VIRAT KOHLI\n\nJersey: 18\nKing Kohli!";
db["dhoni"] = "MS DHONI\n\nJersey: 7\nCaptain Cool!";
db["rohit"] = "ROHIT SHARMA\n\nJersey: 45";
db["cricket"] = "CRICKET\n\nFormats: Test, ODI, T20";
db["math"] = "MATH\n\n(a+b)2 = a2+2ab+b2\na2-b2 = (a+b)(a-b)\nCircle = pr2";
db["science"] = "SCIENCE\n\nPhysics: Light, Gravity\nChemistry: H2O\nBiology: Human-60% water";
db["history"] = "HISTORY\n\nAncient: Indus Valley\nMedieval: Mughal\nModern: British 1757-1947";
db["geography"] = "GEOGRAPHY\n\nIndia: 3.28M km2";
db["islam"] = "ISLAM\n\nPillars:\n1. Shahada\n2. Salat\n3. Zakat\n4. Sawm\n5. Hajj";
db["quran"] = "QURAN\n\nVerses: 6236\nSurahs: 114";
db["hadith"] = "HADITH\n\nSayings of Prophet\nBukhari, Muslim";
db["dua"] = "DUA\n\nMorning: Subhanallaz\nNight: Astaghfirullah";
db["food"] = "FOOD\n\nNorth: Paneer, Naan\nSouth: Dosa, Idli\nBihar: Litti Chokha";
db["health"] = "HEALTH\n\n1. Water 8 glasses\n2. Sleep 8 hours\n3. Exercise";
db["fitness"] = "FITNESS\n\nDaily: Exercise 30 min";
db["technology"] = "TECHNOLOGY\n\nAI, Cloud, Data Science";
db["coding"] = "CODING\n\nPython, JavaScript, C++";
db["mobile"] = "MOBILE\n\nBrands: Apple, Samsung";
db["jokes"] = "JOKES\n\n1. Why chicken? Other side!\n2. 2+2=4!";
db["facts"] = "FACTS\n\nSun 330000x Earth\nWater = H2O\nDiamond hardest";
db["movies"] = "MOVIES\n\nBollywood: 3 Idiots\nHollywood: Avatar";
db["books"] = "BOOKS\n\nGitanjali\nHarry Potter";

var msgDiv = document.getElementById("msg");
var welDiv = document.getElementById("welcome");
var txtBox = document.getElementById("txt");

function sendMsg() {
    var text = txtBox.value.trim().toLowerCase();
    if (!text) return;
    welDiv.style.display = "none";
    addMsg(text, "user");
    txtBox.value = "";
    setTimeout(function() { addMsg(getReply(text), "bot"); }, 300);
}

function getReply(input) {
    for (var key in db) {
        if (input.indexOf(key) !== -1) return db[key];
    }
    return "Ask about Faizul, India, Bihar, cricket, food!";
}

function addMsg(text, sender) {
    var div = document.createElement("div");
    div.className = "m " + sender;
    div.innerHTML = "<div class='av'>" + (sender === "user" ? "You" : "AI") + "</div><div class='ct'>" + text + "</div>";
    msgDiv.appendChild(div);
    document.getElementById("chatArea").scrollTop = 100000;
}

function doClick(topic) {
    txtBox.value = topic;
    sendMsg();
}

function clearChat() {
    msgDiv.innerHTML = "";
    welDiv.style.display = "flex";
}

txtBox.onkeypress = function(e) {
    if (e.key === "Enter") sendMsg();
};

console.log("Faizul AI Ready!");
