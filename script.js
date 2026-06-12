// ============================================
// FAIZUL AI - Complete Working Script
// ============================================

// ---- DATA ----
const data = {
    "hello": "Hello! Welcome to Faizul AI!\n\nAsk about:\n- Who is Faizul\n- India States & Bihar\n- Countries\n- Cricket Players\n- Education\n- Food & Health\n- Jokes & Facts\n\nWhat would you like to know?",
    "hi": "Hi! Welcome to Faizul AI!",
    "hey": "Hey! What's up!",
    "who is faizul": "FAIZUL MARAM - CREATOR\n\n━━━━━━━━━━━━━━━━━━━\n\nYouTube: @faizulmaram17\n\nContent:\n• Islamic status videos\n• Religious quotes\n• Short status updates\n• Prayers (Duas)\n• Motivational clips\n\nDeveloper:\n• Website Developer\n• AI Chatbot Creator\n• App Developer\n\nFollow:\nYouTube: @faizulmaram17",
    "faizul": "FAIZUL MARAM\n\nYouTube: @faizulmaram17\nContent: Islamic videos",
    "india": "INDIA - 28 STATES + 8 UT\n\n━━━━━━━━━━━━━━━━━━━\n\nNORTH:\nDelhi, Haryana, Punjab, HP, Uttarakhand, J&K\n\nWEST:\nRajasthan, Gujarat, Goa, Maharashtra\n\nEAST:\nWB, Odisha, Bihar, Jharkhand\n\nSOUTH:\nKarnataka, TN, Kerala, Telangana\n\nCENTRAL:\nMP, Chhattisgarh, UP\n\nNORTHEAST:\nAssam, Meghalaya, Manipur, Sikkim\n\nCapital: New Delhi\nPop: 140 Crore+",
    "bihar": "BIHAR - THE SACRED LAND\n\n━━━━━━━━━━━━━━━━━━━\n\nCapital: Patna\nCM: Nitish Kumar\nGovernor: Arif Mohammad Khan\n\nPop: 12.4 Crore\nArea: 94,163 sq km\n\nCities:\n1. Patna\n2. Gaya\n3. Bhagalpur\n4. Muzaffarpur\n5. Darbhanga\n\nFamous Places:\n• Mahabodhi Temple\n• Nalanda University\n• Takht Sri Patna Sahib\n\nFamous Food:\n• Litti Chokha\n• Sattu\n• Bhuna Khaja\n\nFamous: Litchi (World famous!)\nLord Buddha born in Gaya!",
    "countries": "COUNTRIES OF THE WORLD\n\n━━━━━━━━━━━━━━━━━━━\n\nASIA:\nIndia - Delhi\nChina - Beijing\nJapan - Tokyo\nPakistan - Islamabad\nBangladesh - Dhaka\nNepal - Kathmandu\nThailand - Bangkok\n\nEUROPE:\nUK - London\nFrance - Paris\nGermany - Berlin\nItaly - Rome\nSpain - Madrid\n\nAMERICAS:\nUSA - Washington\nCanada - Ottawa\nBrazil - Brasilia\nMexico - Mexico City\n\nAFRICA:\nEgypt - Cairo\nNigeria - Abuja\n\nAUSTRALIA:\nCanberra",
    "virat": "VIRAT KOHLI - KING KOHLI\n\n━━━━━━━━━━━━━━━━━━━\n\nJersey: 18\nBorn: 5 November 1988\nPlace: Delhi\nAge: 36\n\nRole: Batsman\nRuns: 25000+\nCenturies: 80+\n\nAchievements:\n✅ ICC World Cup: 2011\n✅ ICC Champions Trophy: 2013\n✅ ICC Cricketer of Year: 2017, 2018\n✅ Fastest to 10000 ODI runs",
    "dhoni": "MS DHONI - CAPTAIN COOL\n\n━━━━━━━━━━━━━━━━━━━\n\nJersey: 7\nBorn: 7 July 1981\nPlace: Ranchi, Jharkhand\nAge: 43\n\nRole: Wicket Keeper\nRuns: 10000+\n\nAchievements:\n✅ ICC World T20: 2007 (CAPTAIN!)\n✅ ICC World Cup: 2011 (CAPTAIN! 🏆)\n✅ IPL: 3 times\n\nNickname: Captain Cool!",
    "rohit": "ROHIT SHARMA - THE HITMAN\n\n━━━━━━━━━━━━━━━━━━━\n\nJersey: 45\nBorn: 30 April 1987\nPlace: Nagpur\nAge: 37\n\nRole: Opening Batsman\nHighest: 264 (World Record!)\n\nAchievements:\n✅ World Cup: 2019\n✅ 2 Double Centuries in ODIs",
    "math": "MATH FORMULAS\n\n━━━━━━━━━━━━━━━━━━━\n\nAlgebra:\n(a+b)² = a² + 2ab + b²\n(a-b)² = a² - 2ab + b²\na² - b² = (a+b)(a-b)\n\nGeometry:\nCircle = πr²\nTriangle = ½bh\nRectangle = lw\n\nPythagoras:\na² + b² = c²",
    "science": "SCIENCE FACTS\n\n━━━━━━━━━━━━━━━━━━━\n\nPhysics:\n• Light: 3×10⁸ m/s\n• Sound: 343 m/s\n• Gravity: 9.8 m/s²\n\nChemistry:\n• Water: H₂O\n• Oxygen: O₂\n• CO₂\n\nBiology:\n• Human: 60% water\n• DNA: Genetic code\n• Cell: Basic unit",
    "history": "INDIAN HISTORY\n\n━━━━━━━━━━━━━━━━━━━\n\nAncient:\n• Indus Valley: 3300 BCE\n• Maurya, Gupta\n\nMedieval:\n• Delhi Sultanate\n• Mughal Empire\n• Taj Mahal: 1653\n\nModern:\n• British: 1757-1947\n• Independence: 1947",
    "food": "INDIAN FOOD\n\n━━━━━━━━━━━━━━━━━━━\n\nNorth:\n• Paneer Tikka\n• Butter Naan\n• Biryani\n\nSouth:\n• Dosa\n• Idli\n• Sambar\n\nWest:\n• Dhokla\n• Pav Bhaji\n\nEast:\n• Rasgulla\n• Litti Chokha (Bihar!)",
    "health": "HEALTH TIPS\n\n━━━━━━━━━━━━━━━━━━━\n\n1. Water 8 glasses\n2. Sleep 8 hours\n3. Exercise 30 min\n4. Green vegetables\n5. Avoid junk food\n6. Fresh fruits\n7. Morning walk\n8. Stay happy!",
    "fruit": "FRUITS\nApple, Mango, Banana, Orange, Papaya, Pomegranate, Grapes",
    "jokes": "JOKES\n\n━━━━━━━━━━━━━━━━━━━\n\n1. Why chicken cross road?\n→ To get other side! 🐔\n\n2. Teacher: 2+2=?\nStudent: 4!\nTeacher: Think! 😂\n\n3. Ball comes...\n→ OUT doesn't come! 🏏",
    "facts": "INTERESTING FACTS\n\n━━━━━━━━━━━━━━━━━━━\n\n• Sun 330,000× Earth\n• Water = H₂O\n• Diamond hardest\n• Light fastest\n• Ocean 71% of Earth\n• Honey never spoils\n• Octopus 3 hearts",
    "thanks": "Welcome! 😊",
    "thank": "You're welcome! 🙏",
    "bye": "Goodbye! 👋 Come back anytime!",
    "ok": "Great! Ask more!",
    "who are you": "I am Faizul AI - smart chatbot created by Faizul Maram!"
};

// ---- ELEMENTS ----
const msgDiv = document.getElementById("msg");
const welDiv = document.getElementById("welcome");
const txtBox = document.getElementById("txt");

// ---- FUNCTIONS ----

// Send message
function send() {
    const text = txtBox.value.trim().toLowerCase();
    if (!text) return;
    
    welDiv.style.display = "none";
    addMessage(text, "user");
    txtBox.value = "";
    
    setTimeout(() => {
        addMessage(getResponse(text), "bot");
    }, 300);
}

// Get response from data
function getResponse(input) {
    for (let key in data) {
        if (input.includes(key)) {
            return data[key];
        }
    }
    return "Ask about Faizul, India, Bihar, countries, cricket, food, health, jokes!";
}

// Add message to chat
function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = "m " + sender;
    div.innerHTML = "<div class='av'>" + (sender === "user" ? "You" : "AI") + "</div><div class='ct'>" + text + "</div>";
    msgDiv.appendChild(div);
    document.getElementById("chatArea").scrollTop = 100000;
}

// Quick ask from button
function ask(topic) {
    txtBox.value = topic;
    send();
}

// Clear chat
function clearChat() {
    msgDiv.innerHTML = "";
    welDiv.style.style.display = "flex";
}

// ---- EVENTS ----
txtBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") send();
});

// ---- INIT ----
console.log("Faizul AI Ready! 🚀");
