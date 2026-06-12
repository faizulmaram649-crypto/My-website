// FAIZUL AI - DATABASE
var db = {};

// GREETINGS
db["hello"] = "Hello! Welcome to Faizul AI!\n\nI can answer about:\n✅ Creator\n✅ India, Bihar, Countries\n✅ Cricket\n✅ Education\n✅ Urdu, Hindi, English\n✅ Islam, Quran\n✅ Food, Health\n✅ Jokes & Facts\n\nWhat would you like to know?";
db["hi"] = "Hi! Welcome!";
db["hey"] = "Hey! What's up!";
db["salam"] = "Salam! Asalamu Alaikum!";
db["thanks"] = "You're welcome!";
db["bye"] = "Goodbye!";

// CREATOR
db["who is faizul"] = "FAIZUL MARAM - CREATOR\n\nYouTube: @faizulmaram17\n\nContent:\n• Islamic status videos\n• Religious quotes\n• Duas\n• Motivational clips";

// INDIA
db["india"] = "INDIA - 28 STATES + 8 UT\n\nNorth: Delhi, Haryana, Punjab, HP\nWest: Rajasthan, Gujarat, Go Maharashtra\nEast: WB, Bihar, Jharkhand\nSouth: Karnataka, TN, Kerala\n\nCapital: New Delhi\nPop: 140 Crore+";
db["bihar"] = "BIHAR\n\nCapital: Patna\nCM: Nitish Kumar\nPop: 12.4 Crore\n\nFamous: Litti Chokha, Litchi";
db["countries"] = "COUNTRIES\n\nASIA: India, China, Japan\nEUROPE: UK, France\nAMERICAS: USA, Canada";
db["delhi"] = "DELHI - CAPITAL\nPop: 2 crore+";
db["mumbai"] = "MUMBAI\nPop: 2 crore+\nGateway of India";

// LANGUAGES
db["urdu"] = "URDU\n\n• Poetical language\n• Nastaliq script\n• Famous ghazals";
db["hindi"] = "HINDI\n\n• India's language\n• 600M speakers\n• Bollywood";
db["english"] = "ENGLISH\n\n• World's language\n• 1.5B speakers";

// CRICKET
db["virat"] = "VIRAT KOHLI\n\nJersey: 18\nBorn: 5 Nov 1988\nKing Kohli!";
db["dhoni"] = "MS DHONI\n\nJersey: 7\nBorn: 7 July 1981\nCaptain Cool!";
db["rohit"] = "ROHIT SHARMA\n\nJersey: 45\nHighest: 264";
db["cricket"] = "CRICKET\n\nFormats: Test, ODI, T20";

// EDUCATION
db["math"] = "MATH\n\n(a+b)² = a²+2ab+b²\na²-b² = (a+b)(a-b)\nCircle = πr²";
db["science"] = "SCIENCE\n\nPhysics: Light, Gravity\nChemistry: Water-H₂O\nBiology: Human-60% water";
db["history"] = "HISTORY\n\nAncient: Indus Valley\nMedieval: Mughal\nModern: British 1757-1947";
db["geography"] = "GEOGRAPHY\n\nIndia: 3.28M km²";

// ISLAMIC
db["islam"] = "ISLAM\n\nPillars:\n1. Shahada\n2. Salat\n3. Zakat\n4. Sawm\n5. Hajj";
db["quran"] = "QURAN\n\nVerses: 6236\nSurahs: 114";
db["hadith"] = "HADITH\n\nSayings of Prophet\nBukhari, Muslim";
db["dua"] = "DUA\n\nMorning: Subhanallaz\nNight: Astaghfirullah";

// LIFESTYLE
db["food"] = "INDIAN FOOD\n\nNorth: Paneer, Naan\nSouth: Dosa, Idli\nBihar: Litti Chokha";
db["health"] = "HEALTH TIPS\n\n1. Water 8 glasses\n2. Sleep 8 hours\n3. Exercise\n4. Veggies";
db["fitness"] = "FITNESS\n\nDaily: Exercise 30 min\nRun, Yoga, Gym";

// TECH
db["technology"] = "TECHNOLOGY\n\nAI, Cloud, Data Science\nWeb Dev, Mobile Apps";
db["coding"] = "CODING\n\nPython, JavaScript, C++\nWeb, Apps, Games";
db["mobile"] = "MOBILE\n\nBrands: Apple, Samsung\nOS: iOS, Android";

// FUN
db["jokes"] = "JOKES\n\n1. Why chicken? Other side!\n2. 2+2=4!\n3. Ball comes, out!";
db["facts"] = "FACTS\n\nSun 330000x Earth\nWater = H₂O\nDiamond hardest";
db["movies"] = "MOVIES\n\nBollywood: 3 Idiots, Dangal\nHollywood: Avatar, Titanic";
db["books"] = "BOOKS\n\nGitanjali, Ramayana\nHarry Potter";

// ELEMENTS
var msgDiv = document.getElementById("msg");
var welDiv = document.getElementById("welcome");
var txtBox = document.getElementById("txt");

// SEND MESSAGE
function sendMsg() {
    var text = txtBox.value.trim().toLowerCase();
    if (!text) return;
    welDiv.style.display = "none";
    addMsg(text, "user");
    txtBox.value = "";
    setTimeout(function() { addMsg(getReply(text), "bot"); }, 300);
}

// GET REPLY
function getReply(input) {
    for (var key in db) {
        if (input.indexOf(key) !== -1) return db[key];
    }
    return "Ask about Faizul, India, Bihar, cricket, food, jokes!";
}

// ADD MESSAGE
function addMsg(text, sender) {
    var div = document.createElement("div");
    div.className = "m " + sender;
    div.innerHTML = "<div class='av'>" + (sender === "user" ? "You" : "AI") + "</div><div class='ct'>" + text + "</div>";
    msgDiv.appendChild(div);
    document.getElementById("chatArea").scrollTop = 100000;
}

// BUTTON CLICK
function doClick(topic) {
    txtBox.value = topic;
    sendMsg();
}

// CLEAR CHAT
function clearChat() {
    msgDiv.innerHTML = "";
    welDiv.style.display = "flex";
}

// ENTER KEY
txtBox.onkeypress = function(e) {
    if (e.key === "Enter") sendMsg();
};

// INIT
console.log("Faizul AI Ready!");
