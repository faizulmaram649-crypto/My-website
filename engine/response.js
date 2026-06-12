// Response Loader Module
const response = {
    responses: {},
    loaded: false,
    
    // Load all responses
    async load() {
        console.log('Loading responses...');
        
        this.responses = getDefaultResponses();
        this.loaded = true;
        console.log('Responses loaded!');
    },
    
    // Get response for keyword
    get(keyword) {
        return this.responses[keyword] || null;
    }
};

// Default Responses Database
function getDefaultResponses() {
    return {
        // === GREETINGS ===
        "hello": "Hello! Welcome to Faizul AI!\n\nI can answer about:\n- Who is Faizul (Creator)\n- India States & Bihar\n- Countries & Capitals\n- Cricket Players\n- Education (Math, Science)\n- Food & Health\n- Jokes & Facts\n\nWhat would you like to know?",
        "hi": "Hi! Welcome to Faizul AI! How can I help you?",
        "hey": "Hey! What's up! Ask me anything!",
        "namaste": "Namaste! Welcome to Faizul AI!",
        
        // === FAIUL MARAM CREATOR ===
        "who is faizul": "FAIZUL MARAM - CREATOR\n\n━━━━━━━━━━━━━━━━━━━━\n\nYouTube: @faizulmaram17\n\nContent Type:\n• Islamic status videos\n• Religious quotes\n• Short status updates\n• Prayers (Duas)\n• Motivational clips\n\nDeveloper:\n• Website Developer\n• AI Chatbot Creator\n• App Developer\n• Video Editor\n\nAbout:\nFaizul Maram is a popular Indian content creator and developer. He primarily focuses on Islamic status videos, religious quotes, and shorts.\n\nFollow:\nYouTube: @faizulmaram17",
        "faizul": "FAIZUL MARAM\n\nYouTube: @faizulmaram17\nIslamic content creator & Developer",
        
        // === INDIA STATES ===
        "india": "INDIA - 28 STATES + 8 UNION TERRITORIES\n\n━━━━━━━━━━━━━━━━━━━━\n\nNORTH:\n1. Delhi (UT)\n2. Haryana\n3. Punjab\n4. Himachal Pradesh\n5. Uttarakhand\n6. Jammu & Kashmir (UT)\n\nWEST:\n7. Rajasthan\n8. Gujarat\n9. Goa\n10. Maharashtra\n\nEAST:\n11. West Bengal\n12. Odisha\n13. Bihar\n14. Jharkhand\n\nSOUTH:\n15. Karnataka\n16. Telangana\n17. Andhra Pradesh\n18. Tamil Nadu\n19. Kerala\n20. Puducherry (UT)\n21. Lakshadweep (UT)\n\nCENTRAL:\n22. Madhya Pradesh\n23. Chhattisgarh\n24. Uttar Pradesh\n\nNORTHEAST:\n25. Assam\n26. Meghalaya\n27. Manipur\n28. Mizoram\n29. Tripura\n30. Nagaland\n31. Arunachal Pradesh\n32. Sikkim\n\nOTHER UT:\n33. Chandigarh\n34. Dadra & Nagar Haveli\n35. Andaman & Nicobar\n\nCapital: New Delhi\nPopulation: 140 Crore+",
        
        // === BIHAR ===
        "bihar": "BIHAR - THE SACRED LAND\n\n━━━━━━━━━━━━━━━━━━━━\n\nCapital: Patna\nCM: samrat chaudhary\nGovernor: Arif Mohammad Khan\n\nPopulation: 12.4 Crore\nArea: 94,163 sq km\n\nMajor Cities:\n1. Patna (Capital)\n2. Gaya\n3. Bhagalpur\n4. Muzaffarpur\n5. Darbhanga\n6. Katihar\n7. Purnia\n8. Arrah\n9. Begusarai\n10. Motihari\n\nFamous Places:\n1. Mahabodhi Temple (Gaya)\n2. Nalanda University\n3. Vishwa Shanti Stupa\n4. Takht Sri Patna Sahib\n5. Bihar Museum\n\nFamous Food:\n1. Litti Chokha (Famous!)\n2. Sattu\n3. Bhuna Khaja\n4. Doodh Colla\n\nFamous Fruit: Litchi (World famous!)\n\nSpecial: Lord Buddha was born in Gaya!",
        
        // === COUNTRIES ===
        "countries": "COUNTRIES OF THE WORLD\n\n━━━━━━━━━━━━━━━━━━━━\n\nASIA:\nIndia - New Delhi\nChina - Beijing\nJapan - Tokyo\nPakistan - Islamabad\nBangladesh - Dhaka\nSri Lanka - Colombo\nNepal - Kathmandu\nBhutan - Thimphu\nThailand - Bangkok\nIndonesia - Jakarta\nMalaysia - Kuala Lumpur\nSingapore - Singapore\nVietnam - Hanoi\nSouth Korea - Seoul\nSaudi Arabia - Riyadh\nUAE - Abu Dhabi\nQatar - Doha\n\nEUROPE:\nUK - London\nFrance - Paris\nGermany - Berlin\nItaly - Rome\nSpain - Madrid\nRussia - Moscow\nPoland - Warsaw\nNetherlands - Amsterdam\nBelgium - Brussels\n\nAMERICAS:\nUSA - Washington DC\nCanada - Ottawa\nMexico - Mexico City\nBrazil - Brasilia\nArgentina - Buenos Aires\nPeru - Lima\nColombia - Bogota\nChile - Santiago\n\nAFRICA:\nEgypt - Cairo\nNigeria - Abuja\nSouth Africa - Pretoria\nKenya - Nairobi\nEthiopia - Addis Ababa\n\nOCEANIA:\nAustralia - Canberra\nNew Zealand - Wellington",
        
        // === CRICKET PLAYERS ===
        "virat": "VIRAT KOHLI - KING OF CRICKET\n\n━━━━━━━━━━━━━━━━━━━━\n\nJersey: 18\nBorn: 5 November 1988\nPlace: Delhi, India\nAge: 36\n\nRole: Batsman\nBatting: Right Handed\n\nCareer Stats:\nRuns: 25000+\nCenturies: 80+\nFifties: 70+\n\nAchievements:\n✅ ICC Cricket World Cup: 2011\n✅ ICC Champions Trophy: 2013\n✅ ICC Cricketer of Year: 2017, 2018\n✅ Fastest to 10000 ODI runs\n\nNicknames:\n• King Kohli\n• Chase Master\n• Run Machine",
        
        "dhoni": "MS DHONI - LEGEND\n\n━━━━━━━━━━━━━━━━━━━━\n\nJersey: 7\nBorn: 7 July 1981\nPlace: Ranchi, Jharkhand\nAge: 43\n\nRole: Wicket Keeper\nBatting: Right Handed\n\nCareer Stats:\nRuns: 10000+\nCenturies: 10\n\nAchievements:\n✅ ICC World T20: 2007 (Captain!)\n✅ ICC Cricket World Cup: 2011 (CAPTAIN! 🏆)\n✅ ICC Champions Trophy: 2013 (Captain!)\n✅ IPL: 3 times (2010, 2011, 2018)\n\nNickname: Captain Cool! 🧊",
        
        "rohit": "ROHIT SHARMA - THE HITMAN\n\n━━━━━━━━━━━━━━━━━━━━\n\nJersey: 45\nBorn: 30 April 1987\nPlace: Nagpur, Maharashtra\nAge: 37\n\nRole: Opening Batsman\n\nCareer Stats:\nRuns: 10000+\nCenturies: 30+\nHighest: 264 (World Record!)\n\nAchievements:\n✅ Cricket World Cup: 2019\n✅ ICC Champions Trophy: 2013\n✅ 2 Double Centuries in ODIs (World Record!)\n\nNickname: The Hitman!",
        
        // === EDUCATION ===
        "math": "MATH FORMULAS\n\n━━━━━━━━━━━━━━━━━━━━\n\nAlgebra:\n(a+b)² = a² + 2ab + b²\n(a-b)² = a² - 2ab + b²\na² - b² = (a+b)(a-b)\n\nGeometry:\nCircle Area = πr²\nTriangle Area = ½ × base × height\nRectangle = length × width\nSquare = side²\n\nTrigonometry:\nsin²θ + cos²θ = 1\ntanθ = sinθ/cosθ\n\nPythagoras:\na² + b² = c²",
        
        "science": "SCIENCE FACTS\n\n━━━━━━━━━━━━━━━━━━━━\n\nPhysics:\n• Light speed: 3 × 10⁸ m/s\n• Sound speed: 343 m/s\n• Gravity: 9.8 m/s²\n• Newton's 3 Laws\n\nChemistry:\n• Water: H₂O\n• Oxygen: O₂\n• Carbon Dioxide: CO₂\n• Periodic Table: 118 elements\n\nBiology:\n• Human Body: 60% water\n• Cell: Basic unit of life\n• DNA: Genetic code\n• Heart: Pumps blood",
        
        "history": "INDIAN HISTORY\n\n━━━━━━━━━━━━━━━━━━━━\n\nAncient India:\n• Indus Valley: 3300 BCE\n• Maurya Empire: 322 BCE\n• Gupta Empire: 320 CE\n\nMedieval:\n• Delhi Sultanate: 1206\n• Mughal Empire: 1526-1857\n• Taj Mahal Built: 1653\n\nModern:\n• British Rule: 1757-1947\n• Independence: 15 August 1947\n• Mahatma Gandhi: Father of Nation",
        
        "geography": "GEOGRAPHY\n\n━━━━━━━━━━━━━━━━━━━━\n\nIndia:\n• Capital: New Delhi\n• States: 28\n• Union Territories: 8\n• Population: 140 Crore+\n• Area: 3.28 million km²\n\nMountains:\n• Himalayan Peaks (Kanchenjunga - Highest)\n\nRivers:\n• Ganga (Longest)\n• Yamuna\n• Brahmaputra\n• Godavari\n• Krishna\n\nCoast:\n• Arabian Sea (West)\n• Bay of Bengal (East)",
        
        // === LIFESTYLE ===
        "food": "INDIAN FOOD\n\n━━━━━━━━━━━━━━━━━━━━\n\nNorth India:\n• Paneer Tikka\n• Butter Naan\n• Dal Makhani\n• Biryani\n\nSouth India:\n• Dosa\n• Idli\n• Sambar\n• Rasam\n\nWest India:\n• Dhokla\n• Poha\n• Pav Bhaji\n• Gujarati Thali\n\nEast India:\n• Rasgulla\n• Macher Jhol\n• Litti Chokha (Bihar!)\n\n\nStreet Food:\n• Chaat\n• Bhel Puri\n• Pani Puri",
        
        "health": "HEALTH TIPS\n\n━━━━━━━━━━━━━━━━━━━━\n\n1. Drink 8 glasses of water daily\n2. Sleep 8 hours\n3. Exercise for 30 minutes\n4. Eat green vegetables\n5. Avoid junk food\n6. Eat fresh fruits\n7. Morning walk\n8. Stay happy!\n9. Don't stress\n10. Regular health checkups",
        
        "fitness": "FITNESS TIPS\n\n━━━━━━━━━━━━━━━━━━━━\n\nDaily Exercise:\n• Morning walk: 30 min\n• Stretching: 10 min\n• Cardio: 20 min\n• Strength: 15 min\n\nWorkouts:\n• Running\n• Cycling\n• Swimming\n• Yoga\n• Gym\n\nDiet:\n• High protein\n• Less carbs\n• More vegetables\n• Stay hydrated",
        
        // === FUN ===
        "jokes": "JOKES\n\n━━━━━━━━━━━━━━━━━━━━\n\n1. Why did the chicken cross the road?\n   → To get to the other side! 🐔\n\n2. Teacher: What is 2 + 2?\n   Student: 4!\n   Teacher: Think harder!\n   😂\n\n3. In cricket:\n   Ball comes...\n   → But OUT doesn't! 🏏\n\n4. What do you call a lazy kangaroo?\n   → Pouch potato! 🦘",
        
        "facts": "INTERESTING FACTS\n\n━━━━━━━━━━━━━━━━━━━━\n\n• Sun is 330,000 times bigger than Earth\n• Water = H₂O\n• Diamond is the hardest substance\n• Light is the fastest thing\n• Ocean covers 71% of Earth\n• Human body is 60% water\n• Queen ants have 1,500 muscles\n• Octopus has 3 hearts\n• Bananas are berries\n• Honey never spoils",
        
        "festivals": "INDIAN FESTIVALS\n\n━━━━━━━━━━━━━━━━━━━━\n\nHindu:\n• Diwali - Festival of Lights\n• Holi - Festival of Colors\n• Navratri - 9 Nights\n• Pongal - Harvest Festival\n• Raksha Bandhan\n\nMuslim:\n• Eid-ul-Fitr\n• Eid-ul-Adha\n\nChristian:\n• Christmas\n\nSikh:\n• Guru Nanak Jayanti\n\nAll:\n• Republic Day (Jan 26)\n• Independence Day (Aug 15)",
        
        // === DAILY LIFE ===
        "good morning": "Good Morning! 🌅\n\nWelcome to Faizul AI!\n\nHow can I help you today?",
        "good night": "Good Night! 🌙\n\nSweet dreams! See you tomorrow!",
        "thanks": "You're welcome! 😊\n\nAsk more questions anytime!",
        "bye": "Goodbye! 👋\n\nCome back anytime!",
        "ok": "Great! What else would you like to know?",
        "good": "Good! Ask me anything!",
        "who are you": "I am Faizul AI!\n\nYour smart knowledge assistant!\n\nI can answer questions on many topics!",
        "help": "I can help you with:\n\n• Who is Faizul (Creator)\n• India, Bihar info\n• Countries\n• Cricket Players\n• Education\n• Food & Health\n• Jokes & Facts\n\nJust ask me!"
    };
}
