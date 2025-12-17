// Bengali Quiz Questions
const bengaliQuestions = {
    easy: [
        { id: 1, question: 'What does "নমস্কার" (Nomoshkar) mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correctAnswer: 'Hello', explanation: 'নমস্কার is the traditional Bengali greeting!' },
        { id: 2, question: 'How do you say "Thank you" in Bengali?', options: ['দয়া করে', 'ধন্যবাদ', 'মন্নিক্কবুম', 'হ্যাঁ'], correctAnswer: 'ধন্যবাদ', explanation: 'ধন্যবাদ (Dhonnobad) means thank you.' },
        { id: 3, question: 'What is "এক" (Ek) in English?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'One', explanation: 'এক is the number one in Bengali.' },
        { id: 4, question: 'What color is "লাল" (Lal)?', options: ['Blue', 'Green', 'Red', 'Yellow'], correctAnswer: 'Red', explanation: 'লাল means red in Bengali.' },
        { id: 5, question: 'How do you say "Cat" in Bengali?', options: ['কুকুর', 'বিড়াল', 'পাখি', 'মাছ'], correctAnswer: 'বিড়াল', explanation: 'বিড়াল (Biral) means cat.' },
        { id: 6, question: 'What does "জল" (Jol) mean?', options: ['Food', 'Water', 'Milk', 'Tea'], correctAnswer: 'Water', explanation: 'জল is water in Bengali.' },
        { id: 7, question: 'How do you say "Yes" in Bengali?', options: ['না', 'হ্যাঁ', 'হয়তো', 'কখনও'], correctAnswer: 'হ্যাঁ', explanation: 'হ্যাঁ (Hyan) means yes.' },
        { id: 8, question: 'What is "মা" (Ma) in English?', options: ['Father', 'Mother', 'Sister', 'Brother'], correctAnswer: 'Mother', explanation: 'মা means mother in Bengali.' },
        { id: 9, question: 'How do you say "Good morning" in Bengali?', options: ['শুভ রাত্রি', 'সুপ্রভাত', 'বিদায়', 'নমস্কার'], correctAnswer: 'সুপ্রভাত', explanation: 'সুপ্রভাত (Suprobhat) means good morning.' },
        { id: 10, question: 'What does "ঘর" (Ghor) mean?', options: ['Car', 'School', 'House', 'Book'], correctAnswer: 'House', explanation: 'ঘর means house in Bengali.' }
    ],
    medium: [
        { id: 1, question: 'What does "আপনি কেমন আছেন?" mean?', options: ['What is your name?', 'How are you?', 'Where are you?', 'How old are you?'], correctAnswer: 'How are you?', explanation: 'This is asking how someone is doing.' },
        { id: 2, question: 'How do you say "I am hungry" in Bengali?', options: ['আমার পিপাসা পেয়েছে', 'আমার ক্ষুধা পেয়েছে', 'আমি ক্লান্ত', 'আমার ঘুম পাচ্ছে'], correctAnswer: 'আমার ক্ষুধা পেয়েছে', explanation: 'আমার ক্ষুধা পেয়েছে means I am hungry.' },
        { id: 3, question: 'What is "নাস্তা" in English?', options: ['Lunch', 'Dinner', 'Breakfast', 'Snack'], correctAnswer: 'Breakfast', explanation: 'নাস্তা (Nashta) means breakfast.' },
        { id: 4, question: 'How do you say "Where is the bathroom?" in Bengali?', options: ['বাথরুম কোথায়?', 'এটা কী?', 'কত?', 'কখন?'], correctAnswer: 'বাথরুম কোথায়?', explanation: 'Very useful phrase when traveling!' },
        { id: 5, question: 'What does "আমার নাম রহিম" mean?', options: ['I am Rahim', 'My name is Rahim', 'I like Rahim', 'Rahim is here'], correctAnswer: 'My name is Rahim', explanation: 'আমার নাম means "my name".' },
        { id: 6, question: 'What is "ভাই" in English?', options: ['Sister', 'Brother', 'Cousin', 'Friend'], correctAnswer: 'Brother', explanation: 'ভাই (Bhai) means brother.' },
        { id: 7, question: 'How do you say "It is hot" (weather) in Bengali?', options: ['ঠান্ডা', 'গরম', 'বাতাস বইছে', 'রোদ'], correctAnswer: 'গরম', explanation: 'গরম (Gorom) means it is hot.' },
        { id: 8, question: 'What does "ডানদিকে" mean?', options: ['To the left', 'To the right', 'Straight ahead', 'Behind'], correctAnswer: 'To the right', explanation: 'Important for directions!' },
        { id: 9, question: 'How do you say "I don\'t understand" in Bengali?', options: ['আমি বলি না', 'আমি বুঝিনি', 'আমি জানি না', 'আমি চাই না'], correctAnswer: 'আমি বুঝিনি', explanation: 'Very useful when learning Bengali!' },
        { id: 10, question: 'What does "বৃষ্টি হচ্ছে" mean?', options: ['It is sunny', 'It is raining', 'It is snowing', 'It is windy'], correctAnswer: 'It is raining', explanation: 'বৃষ্টি (Brishti) means rain.' }
    ],
    hard: [
        { id: 1, question: 'Bengali script is derived from which ancient script?', options: ['Devanagari', 'Brahmi', 'Tamil', 'Arabic'], correctAnswer: 'Brahmi', explanation: 'Bengali script evolved from the Brahmi script.' },
        { id: 2, question: 'What does "খুব ভালো" mean?', options: ['Very bad', 'Very good', 'Not good', 'Maybe good'], correctAnswer: 'Very good', explanation: 'খুব (Khub) means very, ভালো (Bhalo) means good.' },
        { id: 3, question: 'How many vowels are in the Bengali alphabet?', options: ['10', '11', '12', '13'], correctAnswer: '11', explanation: 'Bengali has 11 vowels (স্বরবর্ণ).' },
        { id: 4, question: 'What is the national anthem of Bangladesh written in?', options: ['Hindi', 'English', 'Bengali', 'Urdu'], correctAnswer: 'Bengali', explanation: 'Amar Sonar Bangla is written in Bengali by Rabindranath Tagore.' },
        { id: 5, question: 'What does "পরে দেখা হবে" mean?', options: ['Good morning', 'See you later', 'Thank you', 'Welcome'], correctAnswer: 'See you later', explanation: 'পরে (Pore) means later, দেখা হবে (Dekha hobe) means will see.' },
        { id: 6, question: 'Which letter is unique to Bengali and not found in Devanagari?', options: ['ব', 'য়', 'ড়', 'All of these'], correctAnswer: 'All of these', explanation: 'Bengali has several unique letters like ড়, ঢ়, য়.' },
        { id: 7, question: 'What is "Rabindra Sangeet"?', options: ['Bengali food', 'Songs by Tagore', 'Bengali dance', 'Bengali script'], correctAnswer: 'Songs by Tagore', explanation: 'Rabindra Sangeet refers to songs written by Rabindranath Tagore.' },
        { id: 8, question: 'How do you say "I have been learning Bengali for 2 years"?', options: ['আমি ২ বছর বাংলা শিখছি', 'আমি ২ বছর ধরে বাংলা শিখছি', 'আমি বাংলা শিখেছি', 'আমি বাংলা শিখব'], correctAnswer: 'আমি ২ বছর ধরে বাংলা শিখছি', explanation: 'ধরে (dhore) indicates duration.' },
        { id: 9, question: 'What does "পহেলা বৈশাখ" celebrate?', options: ['Independence Day', 'Bengali New Year', 'Victory Day', 'Language Day'], correctAnswer: 'Bengali New Year', explanation: 'Pohela Boishakh is the Bengali New Year celebration.' },
        { id: 10, question: 'What is the meaning of "আমার সোনার বাংলা"?', options: ['My golden Bengal', 'My beautiful Bengal', 'My sweet Bengal', 'My dear Bengal'], correctAnswer: 'My golden Bengal', explanation: 'সোনার (Sonar) means golden, this is from the national anthem.' }
    ]
};

export default bengaliQuestions;
