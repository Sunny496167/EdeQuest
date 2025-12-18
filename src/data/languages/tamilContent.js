// Tamil Language Learning Content
// Comprehensive Tamil learning with Tamil script, vocabulary, phrases, and more

export const tamilAlphabet = {
    vowels: [
        { tamil: 'அ', romanization: 'a', pronunciation: 'a', example: 'அம்மா (Amma - Mother)' },
        { tamil: 'ஆ', romanization: 'ā', pronunciation: 'aa', example: 'ஆடு (Aadu - Goat)' },
        { tamil: 'இ', romanization: 'i', pronunciation: 'i', example: 'இலை (Ilai - Leaf)' },
        { tamil: 'ஈ', romanization: 'ī', pronunciation: 'ee', example: 'ஈ (Ee - Fly)' },
        { tamil: 'உ', romanization: 'u', pronunciation: 'u', example: 'உடல் (Udal - Body)' },
        { tamil: 'ஊ', romanization: 'ū', pronunciation: 'oo', example: 'ஊர் (Oor - Village)' },
        { tamil: 'எ', romanization: 'e', pronunciation: 'e', example: 'எலி (Eli - Rat)' },
        { tamil: 'ஏ', romanization: 'ē', pronunciation: 'ay', example: 'ஏர் (Er - Plough)' },
        { tamil: 'ஐ', romanization: 'ai', pronunciation: 'ai', example: 'ஐந்து (Ainthu - Five)' },
        { tamil: 'ஒ', romanization: 'o', pronunciation: 'o', example: 'ஒட்டகம் (Ottakam - Camel)' },
        { tamil: 'ஓ', romanization: 'ō', pronunciation: 'oh', example: 'ஓடு (Odu - Tile)' },
        { tamil: 'ஔ', romanization: 'au', pronunciation: 'ou', example: 'ஔவை (Auvai - Name)' }
    ],
    consonants: [
        { tamil: 'க', romanization: 'ka', pronunciation: 'ka', example: 'கண் (Kan - Eye)' },
        { tamil: 'ங', romanization: 'nga', pronunciation: 'nga', example: 'அங்கு (Angu - There)' },
        { tamil: 'ச', romanization: 'cha', pronunciation: 'cha', example: 'சட்டை (Chattai - Shirt)' },
        { tamil: 'ஞ', romanization: 'nya', pronunciation: 'nya', example: 'ஞாயிறு (Gnaayiru - Sunday)' },
        { tamil: 'ட', romanization: 'ta', pronunciation: 'ta', example: 'டம்ளர் (Tamlar - Tumbler)' },
        { tamil: 'ண', romanization: 'na', pronunciation: 'na', example: 'கண் (Kan - Eye)' },
        { tamil: 'த', romanization: 'tha', pronunciation: 'tha', example: 'தண்ணீர் (Thanneer - Water)' },
        { tamil: 'ந', romanization: 'na', pronunciation: 'na', example: 'நாய் (Naai - Dog)' },
        { tamil: 'ப', romanization: 'pa', pronunciation: 'pa', example: 'பால் (Paal - Milk)' },
        { tamil: 'ம', romanization: 'ma', pronunciation: 'ma', example: 'மரம் (Maram - Tree)' },
        { tamil: 'ய', romanization: 'ya', pronunciation: 'ya', example: 'யானை (Yaanai - Elephant)' },
        { tamil: 'ர', romanization: 'ra', pronunciation: 'ra', example: 'ரத்தம் (Raththam - Blood)' },
        { tamil: 'ல', romanization: 'la', pronunciation: 'la', example: 'லட்டு (Lattu - Laddu)' },
        { tamil: 'வ', romanization: 'va', pronunciation: 'va', example: 'வாழை (Vaazhai - Banana)' },
        { tamil: 'ழ', romanization: 'zha', pronunciation: 'zha', example: 'தமிழ் (Thamizh - Tamil)' },
        { tamil: 'ள', romanization: 'la', pronunciation: 'la', example: 'வள்ளி (Valli - Creeper)' },
        { tamil: 'ற', romanization: 'ra', pronunciation: 'ra', example: 'நாற்று (Naatru - Seedling)' },
        { tamil: 'ன', romanization: 'na', pronunciation: 'na', example: 'மனம் (Manam - Mind)' }
    ],
    specialCharacters: [
        { tamil: 'ஃ', romanization: 'akh', pronunciation: 'akh', example: 'அஃது (Ahthu - That)' }
    ]
};

export const popularWords = [
    // Greetings & Basic (1-10)
    { tamil: 'வணக்கம்', romanization: 'Vanakkam', english: 'Hello/Greetings', category: 'Greetings' },
    { tamil: 'நன்றி', romanization: 'Nandri', english: 'Thank you', category: 'Greetings' },
    { tamil: 'தயவு செய்து', romanization: 'Thayavu seithu', english: 'Please', category: 'Greetings' },
    { tamil: 'ஆம்', romanization: 'Aam', english: 'Yes', category: 'Basic' },
    { tamil: 'இல்லை', romanization: 'Illai', english: 'No', category: 'Basic' },
    { tamil: 'மன்னிக்கவும்', romanization: 'Mannikkavum', english: 'Sorry', category: 'Greetings' },
    { tamil: 'பிரியாவிடை', romanization: 'Piriyaavidai', english: 'Goodbye', category: 'Greetings' },
    { tamil: 'காலை வணக்கம்', romanization: 'Kaalai vanakkam', english: 'Good morning', category: 'Greetings' },
    { tamil: 'இனிய இரவு', romanization: 'Iniya iravu', english: 'Good night', category: 'Greetings' },
    { tamil: 'வரவேற்பு', romanization: 'Varaverppu', english: 'Welcome', category: 'Greetings' },

    // Numbers (11-20)
    { tamil: 'ஒன்று', romanization: 'Ondru', english: 'One', category: 'Numbers' },
    { tamil: 'இரண்டு', romanization: 'Irandu', english: 'Two', category: 'Numbers' },
    { tamil: 'மூன்று', romanization: 'Moondru', english: 'Three', category: 'Numbers' },
    { tamil: 'நான்கு', romanization: 'Naangu', english: 'Four', category: 'Numbers' },
    { tamil: 'ஐந்து', romanization: 'Ainthu', english: 'Five', category: 'Numbers' },
    { tamil: 'ஆறு', romanization: 'Aaru', english: 'Six', category: 'Numbers' },
    { tamil: 'ஏழு', romanization: 'Ezhu', english: 'Seven', category: 'Numbers' },
    { tamil: 'எட்டு', romanization: 'Ettu', english: 'Eight', category: 'Numbers' },
    { tamil: 'ஒன்பது', romanization: 'Onbathu', english: 'Nine', category: 'Numbers' },
    { tamil: 'பத்து', romanization: 'Paththu', english: 'Ten', category: 'Numbers' },

    // Family (21-30)
    { tamil: 'குடும்பம்', romanization: 'Kudumbam', english: 'Family', category: 'Family' },
    { tamil: 'அம்மா', romanization: 'Amma', english: 'Mother', category: 'Family' },
    { tamil: 'அப்பா', romanization: 'Appa', english: 'Father', category: 'Family' },
    { tamil: 'அண்ணன்', romanization: 'Annan', english: 'Elder brother', category: 'Family' },
    { tamil: 'தங்கை', romanization: 'Thangai', english: 'Younger sister', category: 'Family' },
    { tamil: 'மகன்', romanization: 'Magan', english: 'Son', category: 'Family' },
    { tamil: 'மகள்', romanization: 'Magal', english: 'Daughter', category: 'Family' },
    { tamil: 'தாத்தா', romanization: 'Thaathaa', english: 'Grandfather', category: 'Family' },
    { tamil: 'பாட்டி', romanization: 'Paatti', english: 'Grandmother', category: 'Family' },
    { tamil: 'குழந்தை', romanization: 'Kuzhandhai', english: 'Child', category: 'Family' },

    // Colors (31-40)
    { tamil: 'சிவப்பு', romanization: 'Sivappu', english: 'Red', category: 'Colors' },
    { tamil: 'நீலம்', romanization: 'Neelam', english: 'Blue', category: 'Colors' },
    { tamil: 'பச்சை', romanization: 'Pachchai', english: 'Green', category: 'Colors' },
    { tamil: 'மஞ்சள்', romanization: 'Manjal', english: 'Yellow', category: 'Colors' },
    { tamil: 'கருப்பு', romanization: 'Karuppu', english: 'Black', category: 'Colors' },
    { tamil: 'வெள்ளை', romanization: 'Vellai', english: 'White', category: 'Colors' },
    { tamil: 'ஆரஞ்சு', romanization: 'Aaranju', english: 'Orange', category: 'Colors' },
    { tamil: 'இளஞ்சிவப்பு', romanization: 'Ilanjivappu', english: 'Pink', category: 'Colors' },
    { tamil: 'ஊதா', romanization: 'Oothaa', english: 'Purple', category: 'Colors' },
    { tamil: 'பழுப்பு', romanization: 'Pazhuppu', english: 'Brown', category: 'Colors' },

    // Food (41-50)
    { tamil: 'தண்ணீர்', romanization: 'Thanneer', english: 'Water', category: 'Food' },
    { tamil: 'ரொட்டி', romanization: 'Rotti', english: 'Bread', category: 'Food' },
    { tamil: 'பால்', romanization: 'Paal', english: 'Milk', category: 'Food' },
    { tamil: 'தேநீர்', romanization: 'Theneer', english: 'Tea', category: 'Food' },
    { tamil: 'சாதம்', romanization: 'Saadham', english: 'Rice', category: 'Food' },
    { tamil: 'பழம்', romanization: 'Pazham', english: 'Fruit', category: 'Food' },
    { tamil: 'மாம்பழம்', romanization: 'Maampazham', english: 'Mango', category: 'Food' },
    { tamil: 'வாழைப்பழம்', romanization: 'Vaazhaippazham', english: 'Banana', category: 'Food' },
    { tamil: 'உணவு', romanization: 'Unavu', english: 'Food', category: 'Food' },
    { tamil: 'மீன்', romanization: 'Meen', english: 'Fish', category: 'Food' },

    // Common Objects (51-60)
    { tamil: 'வீடு', romanization: 'Veedu', english: 'House', category: 'Objects' },
    { tamil: 'புத்தகம்', romanization: 'Puththagam', english: 'Book', category: 'Objects' },
    { tamil: 'மேசை', romanization: 'Mesai', english: 'Table', category: 'Objects' },
    { tamil: 'நாற்காலி', romanization: 'Naarkkaali', english: 'Chair', category: 'Objects' },
    { tamil: 'கதவு', romanization: 'Kathavu', english: 'Door', category: 'Objects' },
    { tamil: 'ஜன்னல்', romanization: 'Jannal', english: 'Window', category: 'Objects' },
    { tamil: 'கார்', romanization: 'Kaar', english: 'Car', category: 'Objects' },
    { tamil: 'தொலைபேசி', romanization: 'Tholai pesi', english: 'Phone', category: 'Objects' },
    { tamil: 'கணினி', romanization: 'Kanini', english: 'Computer', category: 'Objects' },
    { tamil: 'கடிகாரம்', romanization: 'Kadikaaram', english: 'Clock/Watch', category: 'Objects' },

    // Nature (61-70)
    { tamil: 'சூரியன்', romanization: 'Soorian', english: 'Sun', category: 'Nature' },
    { tamil: 'நிலவு', romanization: 'Nilavu', english: 'Moon', category: 'Nature' },
    { tamil: 'நட்சத்திரம்', romanization: 'Natchaththiram', english: 'Star', category: 'Nature' },
    { tamil: 'மரம்', romanization: 'Maram', english: 'Tree', category: 'Nature' },
    { tamil: 'பூ', romanization: 'Poo', english: 'Flower', category: 'Nature' },
    { tamil: 'ஆறு', romanization: 'Aaru', english: 'River', category: 'Nature' },
    { tamil: 'மலை', romanization: 'Malai', english: 'Mountain', category: 'Nature' },
    { tamil: 'வானம்', romanization: 'Vaanam', english: 'Sky', category: 'Nature' },
    { tamil: 'கடல்', romanization: 'Kadal', english: 'Ocean', category: 'Nature' },
    { tamil: 'மழை', romanization: 'Mazhai', english: 'Rain', category: 'Nature' },

    // Animals (71-80)
    { tamil: 'நாய்', romanization: 'Naai', english: 'Dog', category: 'Animals' },
    { tamil: 'பூனை', romanization: 'Poonai', english: 'Cat', category: 'Animals' },
    { tamil: 'பறவை', romanization: 'Paravai', english: 'Bird', category: 'Animals' },
    { tamil: 'மீன்', romanization: 'Meen', english: 'Fish', category: 'Animals' },
    { tamil: 'குதிரை', romanization: 'Kuthirai', english: 'Horse', category: 'Animals' },
    { tamil: 'பசு', romanization: 'Pasu', english: 'Cow', category: 'Animals' },
    { tamil: 'யானை', romanization: 'Yaanai', english: 'Elephant', category: 'Animals' },
    { tamil: 'சிங்கம்', romanization: 'Singam', english: 'Lion', category: 'Animals' },
    { tamil: 'புலி', romanization: 'Puli', english: 'Tiger', category: 'Animals' },
    { tamil: 'முயல்', romanization: 'Muyal', english: 'Rabbit', category: 'Animals' },

    // Time & Days (81-90)
    { tamil: 'இன்று', romanization: 'Indru', english: 'Today', category: 'Time' },
    { tamil: 'நாளை', romanization: 'Naalai', english: 'Tomorrow', category: 'Time' },
    { tamil: 'நேற்று', romanization: 'Netru', english: 'Yesterday', category: 'Time' },
    { tamil: 'நாள்', romanization: 'Naal', english: 'Day', category: 'Time' },
    { tamil: 'இரவு', romanization: 'Iravu', english: 'Night', category: 'Time' },
    { tamil: 'காலை', romanization: 'Kaalai', english: 'Morning', category: 'Time' },
    { tamil: 'மாலை', romanization: 'Maalai', english: 'Evening', category: 'Time' },
    { tamil: 'வாரம்', romanization: 'Vaaram', english: 'Week', category: 'Time' },
    { tamil: 'மாதம்', romanization: 'Maadham', english: 'Month', category: 'Time' },
    { tamil: 'வருடம்', romanization: 'Varudam', english: 'Year', category: 'Time' },

    // Common Verbs (91-100)
    { tamil: 'இருக்க', romanization: 'Irukka', english: 'To be', category: 'Verbs' },
    { tamil: 'செய்ய', romanization: 'Seiyya', english: 'To do', category: 'Verbs' },
    { tamil: 'போக', romanization: 'Poga', english: 'To go', category: 'Verbs' },
    { tamil: 'வர', romanization: 'Vara', english: 'To come', category: 'Verbs' },
    { tamil: 'சாப்பிட', romanization: 'Saappida', english: 'To eat', category: 'Verbs' },
    { tamil: 'குடிக்க', romanization: 'Kudikka', english: 'To drink', category: 'Verbs' },
    { tamil: 'பேச', romanization: 'Pesa', english: 'To speak', category: 'Verbs' },
    { tamil: 'கேட்க', romanization: 'Ketka', english: 'To listen', category: 'Verbs' },
    { tamil: 'பார்க்க', romanization: 'Paarkka', english: 'To see', category: 'Verbs' },
    { tamil: 'படிக்க', romanization: 'Padikka', english: 'To read', category: 'Verbs' }
];

export const dailyPhrases = [
    // Greetings & Introductions (1-10)
    { tamil: 'எப்படி இருக்கீங்க?', romanization: 'Eppadi irukkinga?', english: 'How are you?', category: 'Greetings' },
    { tamil: 'நான் நல்லா இருக்கேன்', romanization: 'Naan nallaa irukken', english: 'I am fine', category: 'Greetings' },
    { tamil: 'என் பெயர்...', romanization: 'En peyar...', english: 'My name is...', category: 'Introductions' },
    { tamil: 'உங்க பெயர் என்ன?', romanization: 'Unga peyar enna?', english: 'What is your name?', category: 'Introductions' },
    { tamil: 'உங்களை சந்தித்து மகிழ்ச்சி', romanization: 'Ungalai sandhiththu maghizchi', english: 'Nice to meet you', category: 'Introductions' },
    { tamil: 'நீங்க எங்கிருந்து வர்றீங்க?', romanization: 'Neenga engirundu varringa?', english: 'Where are you from?', category: 'Introductions' },
    { tamil: 'நான்... இருந்து வர்றேன்', romanization: 'Naan... irundhu varren', english: 'I am from...', category: 'Introductions' },
    { tamil: 'பிறகு பார்க்கலாம்', romanization: 'Piragu paarkkalaam', english: 'See you later', category: 'Greetings' },
    { tamil: 'எப்படி போகுது?', romanization: 'Eppadi poguthu?', english: 'How are things?', category: 'Greetings' },
    { tamil: 'எல்லாம் நல்லா இருக்கு', romanization: 'Ellaam nallaa irukku', english: 'Everything is fine', category: 'Greetings' },

    // Polite Expressions (11-20)
    { tamil: 'பரவாயில்லை', romanization: 'Paravaayillai', english: 'No problem', category: 'Polite' },
    { tamil: 'ரொம்ப நன்றி', romanization: 'Romba nandri', english: 'Thank you very much', category: 'Polite' },
    { tamil: 'என்னை மன்னிக்கவும்', romanization: 'Ennai mannikkavum', english: 'Please forgive me', category: 'Polite' },
    { tamil: 'நிச்சயமா', romanization: 'Nichchayamaa', english: 'Of course', category: 'Polite' },
    { tamil: 'தயவு செய்து காத்திருங்க', romanization: 'Thayavu seithu kaaththirunga', english: 'Please wait', category: 'Polite' },
    { tamil: 'உதவி செய்யுங்க', romanization: 'Uthavi seyyunga', english: 'Please help', category: 'Polite' },
    { tamil: 'ரொம்ப நல்லா இருக்கு', romanization: 'Romba nallaa irukku', english: 'Very good', category: 'Polite' },
    { tamil: 'சரி', romanization: 'Sari', english: 'Okay/Alright', category: 'Polite' },
    { tamil: 'வரவேற்கிறோம்', romanization: 'Varaverkirom', english: 'You are welcome', category: 'Polite' },
    { tamil: 'மன்னிக்கணும்', romanization: 'Mannikkanum', english: 'Sorry', category: 'Polite' },

    // Questions (21-30)
    { tamil: 'என்ன?', romanization: 'Enna?', english: 'What?', category: 'Questions' },
    { tamil: 'யார்?', romanization: 'Yaar?', english: 'Who?', category: 'Questions' },
    { tamil: 'எங்கே?', romanization: 'Enge?', english: 'Where?', category: 'Questions' },
    { tamil: 'எப்போ?', romanization: 'Eppo?', english: 'When?', category: 'Questions' },
    { tamil: 'ஏன்?', romanization: 'Yen?', english: 'Why?', category: 'Questions' },
    { tamil: 'எப்படி?', romanization: 'Eppadi?', english: 'How?', category: 'Questions' },
    { tamil: 'எவ்வளவு?', romanization: 'Evvalavu?', english: 'How much?', category: 'Questions' },
    { tamil: 'இப்போ எத்தனை மணி?', romanization: 'Ippo eththanai mani?', english: 'What time is it?', category: 'Questions' },
    { tamil: 'இது என்ன?', romanization: 'Idhu enna?', english: 'What is this?', category: 'Questions' },
    { tamil: 'நீங்க தமிழ் பேசுவீங்களா?', romanization: 'Neenga Thamizh pesuvingala?', english: 'Do you speak Tamil?', category: 'Questions' },

    // Daily Activities (31-40)
    { tamil: 'நான் பள்ளிக்கு போறேன்', romanization: 'Naan pallikku poren', english: 'I go to school', category: 'Daily' },
    { tamil: 'நான் வீட்டுக்கு போறேன்', romanization: 'Naan veettukku poren', english: 'I am going home', category: 'Daily' },
    { tamil: 'எனக்கு பசிக்குது', romanization: 'Enakku pasikkuthu', english: 'I am hungry', category: 'Daily' },
    { tamil: 'எனக்கு தாகமா இருக்கு', romanization: 'Enakku thaagamaa irukku', english: 'I am thirsty', category: 'Daily' },
    { tamil: 'நான் சோர்வா இருக்கேன்', romanization: 'Naan sorvaa irukken', english: 'I am tired', category: 'Daily' },
    { tamil: 'எனக்கு தூக்கம் வருது', romanization: 'Enakku thookkam varuthu', english: 'I am sleepy', category: 'Daily' },
    { tamil: 'எனக்கு பிடிக்கும்', romanization: 'Enakku pidikkum', english: 'I like it', category: 'Daily' },
    { tamil: 'எனக்கு பிடிக்காது', romanization: 'Enakku pidikkaadhu', english: 'I don\'t like it', category: 'Daily' },
    { tamil: 'எனக்கு வேணும்', romanization: 'Enakku venum', english: 'I want/need', category: 'Daily' },
    { tamil: 'எனக்கு புரியுது', romanization: 'Enakku puriyuthu', english: 'I understand', category: 'Daily' },

    // Food & Dining (41-50)
    { tamil: 'சாப்பாடு ரொம்ப சுவையா இருக்கு', romanization: 'Saappaadu romba suvaiyaa irukku', english: 'The food is very delicious', category: 'Food' },
    { tamil: 'எனக்கு தண்ணீர் வேணும்', romanization: 'Enakku thanneer venum', english: 'I need water', category: 'Food' },
    { tamil: 'என்ன சாப்பிடுவீங்க?', romanization: 'Enna saappiduvinga?', english: 'What will you eat?', category: 'Food' },
    { tamil: 'பில் கொடுங்க', romanization: 'Bill kodunga', english: 'Please give the bill', category: 'Food' },
    { tamil: 'எனக்கு தேநீர் வேணும்', romanization: 'Enakku theneer venum', english: 'I want tea', category: 'Food' },
    { tamil: 'இது ரொம்ப இனிப்பா இருக்கு', romanization: 'Idhu romba inippaa irukku', english: 'This is very sweet', category: 'Food' },
    { tamil: 'இது ரொம்ப காரமா இருக்கு', romanization: 'Idhu romba kaaramaa irukku', english: 'This is very spicy', category: 'Food' },
    { tamil: 'வயிறு நிறைஞ்சுது', romanization: 'Vayiru niranjuthu', english: 'I am full', category: 'Food' },
    { tamil: 'காலை உணவு ரெடி', romanization: 'Kaalai unavu ready', english: 'Breakfast is ready', category: 'Food' },
    { tamil: 'சாப்பிடு', romanization: 'Saappidu', english: 'Eat', category: 'Food' },

    // Shopping (51-60)
    { tamil: 'இதோட விலை என்ன?', romanization: 'Idhoda vilai enna?', english: 'How much is this?', category: 'Shopping' },
    { tamil: 'ரொம்ப விலை அதிகம்', romanization: 'Romba vilai adhigam', english: 'Very expensive', category: 'Shopping' },
    { tamil: 'மலிவு', romanization: 'Malivu', english: 'Cheap', category: 'Shopping' },
    { tamil: 'நான் இதை வாங்குறேன்', romanization: 'Naan idhai vaanguren', english: 'I will take this', category: 'Shopping' },
    { tamil: 'தள்ளுபடி கொடுங்க', romanization: 'Thallupadi kodunga', english: 'Please give discount', category: 'Shopping' },
    { tamil: 'இன்னும் காட்டுங்க', romanization: 'Innum kaattunga', english: 'Show me more', category: 'Shopping' },
    { tamil: 'இது சரி', romanization: 'Idhu sari', english: 'This is fine', category: 'Shopping' },
    { tamil: 'எனக்கு இது பிடிக்கும்', romanization: 'Enakku idhu pidikkum', english: 'I like this', category: 'Shopping' },
    { tamil: 'கார்ட் ஓகேவா?', romanization: 'Card okayva?', english: 'Will card work?', category: 'Shopping' },
    { tamil: 'பணம் திருப்பி கொடுங்க', romanization: 'Panam thiruppi kodunga', english: 'Please return the money', category: 'Shopping' },

    // Directions (61-70)
    { tamil: 'கழிவறை எங்கே?', romanization: 'Kazhivarai enge?', english: 'Where is the bathroom?', category: 'Directions' },
    { tamil: 'வலது பக்கம்', romanization: 'Valathu pakkam', english: 'To the right', category: 'Directions' },
    { tamil: 'இடது பக்கம்', romanization: 'Idathu pakkam', english: 'To the left', category: 'Directions' },
    { tamil: 'நேரா போங்க', romanization: 'Neraa ponga', english: 'Go straight', category: 'Directions' },
    { tamil: 'கிட்ட', romanization: 'Kitta', english: 'Near', category: 'Directions' },
    { tamil: 'தூரம்', romanization: 'Thooram', english: 'Far', category: 'Directions' },
    { tamil: 'இங்கே', romanization: 'Inge', english: 'Here', category: 'Directions' },
    { tamil: 'அங்கே', romanization: 'Ange', english: 'There', category: 'Directions' },
    { tamil: 'மேலே', romanization: 'Mele', english: 'Up/Upstairs', category: 'Directions' },
    { tamil: 'கீழே', romanization: 'Keezhe', english: 'Down/Downstairs', category: 'Directions' },

    // Weather (71-80)
    { tamil: 'வெயில் அடிக்குது', romanization: 'Veyil adikkuthu', english: 'It is hot', category: 'Weather' },
    { tamil: 'குளிரா இருக்கு', romanization: 'Kuliraa irukku', english: 'It is cold', category: 'Weather' },
    { tamil: 'வெயில் அடிக்குது', romanization: 'Veyil adikkuthu', english: 'It is sunny', category: 'Weather' },
    { tamil: 'மழை பெய்யுது', romanization: 'Mazhai peyyuthu', english: 'It is raining', category: 'Weather' },
    { tamil: 'பனி பெய்யுது', romanization: 'Pani peyyuthu', english: 'It is snowing', category: 'Weather' },
    { tamil: 'காத்து அடிக்குது', romanization: 'Kaaththu adikkuthu', english: 'It is windy', category: 'Weather' },
    { tamil: 'மேகமா இருக்கு', romanization: 'Megamaa irukku', english: 'It is cloudy', category: 'Weather' },
    { tamil: 'நல்ல வானிலை', romanization: 'Nalla vaanilai', english: 'Good weather', category: 'Weather' },
    { tamil: 'மோசமான வானிலை', romanization: 'Mosamaana vaanilai', english: 'Bad weather', category: 'Weather' },
    { tamil: 'வானிலை எப்படி?', romanization: 'Vaanilai eppadi?', english: 'How is the weather?', category: 'Weather' },

    // Feelings & Emotions (81-90)
    { tamil: 'நான் சந்தோஷமா இருக்கேன்', romanization: 'Naan sandhoshamaa irukken', english: 'I am happy', category: 'Emotions' },
    { tamil: 'நான் சோகமா இருக்கேன்', romanization: 'Naan sogamaa irukken', english: 'I am sad', category: 'Emotions' },
    { tamil: 'நான் கோபமா இருக்கேன்', romanization: 'Naan kopamaa irukken', english: 'I am angry', category: 'Emotions' },
    { tamil: 'நான் உற்சாகமா இருக்கேன்', romanization: 'Naan utsaagamaa irukken', english: 'I am excited', category: 'Emotions' },
    { tamil: 'நான் பயமா இருக்கேன்', romanization: 'Naan bayamaa irukken', english: 'I am nervous', category: 'Emotions' },
    { tamil: 'எனக்கு போரடிக்குது', romanization: 'Enakku poradikkuthu', english: 'I am bored', category: 'Emotions' },
    { tamil: 'நான் கவலைப்படுறேன்', romanization: 'Naan kavalaipaduren', english: 'I am worried', category: 'Emotions' },
    { tamil: 'நான் ஆச்சரியப்படுறேன்', romanization: 'Naan aachariyapaduren', english: 'I am surprised', category: 'Emotions' },
    { tamil: 'நான் குழப்பமா இருக்கேன்', romanization: 'Naan kuzhappamaa irukken', english: 'I am confused', category: 'Emotions' },
    { tamil: 'எனக்கு நல்லா இருக்கு', romanization: 'Enakku nallaa irukku', english: 'I am feeling good', category: 'Emotions' },

    // Useful Phrases (91-100)
    { tamil: 'எனக்கு புரியல', romanization: 'Enakku puriyal', english: 'I didn\'t understand', category: 'Useful' },
    { tamil: 'மறுபடி சொல்லுங்க', romanization: 'Marupadi sollunga', english: 'Please say again', category: 'Useful' },
    { tamil: 'மெதுவா பேசுங்க', romanization: 'Methuvaa pesunga', english: 'Please speak slowly', category: 'Useful' },
    { tamil: 'நான் தமிழ் பேச மாட்டேன்', romanization: 'Naan Thamizh pesa maaten', english: 'I don\'t speak Tamil', category: 'Useful' },
    { tamil: 'இதோட அர்த்தம் என்ன?', romanization: 'Idhoda arththam enna?', english: 'What does this mean?', category: 'Useful' },
    { tamil: 'எனக்கு உதவி செய்யுங்க', romanization: 'Enakku uthavi seyyunga', english: 'Please help me', category: 'Useful' },
    { tamil: 'ஒரு நிமிஷம்', romanization: 'Oru nimisham', english: 'One minute', category: 'Useful' },
    { tamil: 'நில்லுங்க', romanization: 'Nillunga', english: 'Wait', category: 'Useful' },
    { tamil: 'நிச்சயமா', romanization: 'Nichchayamaa', english: 'Absolutely', category: 'Useful' },
    { tamil: 'அருமை!', romanization: 'Arumai!', english: 'Excellent!', category: 'Useful' }
];

export default {
    tamilAlphabet,
    popularWords,
    dailyPhrases
};
