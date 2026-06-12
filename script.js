// Complete Data
const data = {
    "hello": "Hello! Welcome to Faizul AI!\n\nAsk about:\n- Who is Faizul\n- India States & Bihar\n- Countries\n- Cricket Players\n- Education\n- Food & Health\n- Jokes & Facts\n\nWhat would you like to know?",
    "who is faizul": "FAIZUL MARAM - CREATOR\n\nYouTube: @faizulmaram17\n\nContent: Islamic status videos, Religious quotes, Duas, Motivational clips\n\nDeveloper: Websites, AI Chatbots, Apps",
    "faizul": "FAIZUL MARAM\n\nYouTube: @faizulmaram17",
    "india": "INDIA - 28 STATES + 8 UT\n\nNorth: Delhi, Haryana, Punjab, HP, Uttarakhand, J&K\nWest: Rajasthan, Gujarat, Goa, Maharashtra\nEast: WB, Odisha, Bihar, Jharkhand\nSouth: Karnataka, TN, Kerala\nCentral: UP, MP\nNE: Assam, Sikkim\n\nCapital: New Delhi\nPop: 140 Crore+",
    "bihar": "BIHAR - THE SACRED LAND\n\nCapital: Patna\nCM: Nitish Kumar\nPop: 12.4 Crore\n\nCities: Patna, Gaya, Bhagalpur, Muzaffarpur\n\nFamous: Litti Chokha, Litchi\nLord Buddha born in Gaya!",
    "countries": "COUNTRIES\n\nAsia: India-Delhi, China-Beijing, Japan-Tokyo, Pakistan-Islamabad, Bangladesh-Dhaka\n\nEurope: UK-London, France-Paris, Germany-Berlin, Italy-Rome\n\nAmericas: USA-Washington, Canada-Ottawa, Brazil-Brasilia\n\nAfrica: Egypt-Cairo, Nigeria-Abuja\n\nAustralia: Canberra",
    "virat": "VIRAT KOHLI\nJersey: 18\nBorn: 5 Nov 1988\nKing Kohli!\nRuns: 25000+\nWorld Cup 2011!",
    "dhoni": "MS DHONI\nJersey: 7\nBorn: 7 July 1981\nCaptain Cool!\nWorld Cup 2011 (Captain)!",
    "rohit": "ROHIT SHARMA\nJersey: 45\nBorn: 30 April 1987\nHighest: 264 (World Record!)",
    "math": "MATH\n(a+b)² = a²+2ab+b²\na²-b² = (a+b)(a-b)\nCircle = πr²\na²+b² = c²",
    "science": "SCIENCE\nWater = H₂O\nLight = 3x10⁸ m/s\nGravity = 9.8 m/s2\nHuman = 60% water",
    "food": "INDIAN FOOD\n\nNorth: Paneer, Naan\nSouth: Dosa, Idli\nBihar: Litti Chokha\nBiryani famous!",
    "health": "HEALTH\n1. Water 8 glasses\n2. Sleep 8 hours\n3. Exercise\n4. Veggies\n5. No junk",
    "jokes": "JOKES\n1. Why chicken? Other side!\n2. 2+2=4!\n3. Ball comes, out doesn't!",
    "facts": "FACTS\nSun 330000x Earth\nWater = H₂O\nDiamond hardest",
    "thanks": "Welcome!",
    "bye": "Goodbye!"
};

const msgDiv = document.getElementById("msg");
const welDiv = document.getElementById("welcome");
const txtBox = document.getElementById("txt");

function send() {
    const text = txtBox.value.trim().toLowerCase();
    if (!text) return;
    welDiv.style.display = "none";
    add(text, "user");
    txtBox.value = "";
    setTimeout(() => { add(find(text), "bot"); }, 300);
}

function find(x) {
    for (let k in data) {
        if (x.includes(k)) return data[k];
    }
    return "Ask about Faizul, India, Bihar, countries, cricket, food, health!";
}

function add(t, s) {
    const d = document.createElement("div");
    d.className = "m " + s;
    d.innerHTML = "<div class='av'>" + (s=="user"?"You":"AI") + "</div><div class='ct'>" + t + "</div>";
    msgDiv.appendChild(d);
    document.getElementById("chatArea").scrollTop = 100000;
}

function ask(x) { txtBox.value = x; send(); }
function clearChat() { msgDiv.innerHTML = ""; welDiv.style.display = "flex"; }
txtBox.onkeypress = function(e) { if(e.key=="Enter") send(); };
