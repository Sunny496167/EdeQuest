// Tamil Quiz Questions
const tamilQuestions = {
    easy: [
        { id: 1, question: 'What does "வணக்கம்" (Vanakkam) mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correctAnswer: 'Hello', explanation: 'வணக்கம் is the traditional Tamil greeting!' },
        { id: 2, question: 'How do you say "Thank you" in Tamil?', options: ['தயவு செய்து', 'நன்றி', 'மன்னிக்கவும்', 'ஆம்'], correctAnswer: 'நன்றி', explanation: 'நன்றி (Nandri) means thank you.' },
        { id: 3, question: 'What is "ஒன்று" (Ondru) in English?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'One', explanation: 'ஒன்று is the number one in Tamil.' },
        { id: 4, question: 'What color is "சிவப்பு" (Sivappu)?', options: ['Blue', 'Green', 'Red', 'Yellow'], correctAnswer: 'Red', explanation: 'சிவப்பு means red in Tamil.' },
        { id: 5, question: 'How do you say "Cat" in Tamil?', options: ['நாய்', 'பூனை', 'பறவை', 'மீன்'], correctAnswer: 'பூனை', explanation: 'பூனை (Poonai) means cat.' },
        { id: 6, question: 'What does "தண்ணீர்" (Thanneer) mean?', options: ['Food', 'Water', 'Milk', 'Tea'], correctAnswer: 'Water', explanation: 'தண்ணீர் is water in Tamil.' },
        { id: 7, question: 'How do you say "Yes" in Tamil?', options: ['இல்லை', 'ஆம்', 'ஒருவேளை', 'எப்போதும்'], correctAnswer: 'ஆம்', explanation: 'ஆம் (Aam) means yes.' },
        { id: 8, question: 'What is "அம்மா" (Amma) in English?', options: ['Father', 'Mother', 'Sister', 'Brother'], correctAnswer: 'Mother', explanation: 'அம்மா means mother in Tamil.' },
        { id: 9, question: 'How do you say "Good morning" in Tamil?', options: ['இனிய இரவு', 'காலை வணக்கம்', 'பிரியாவிடை', 'வணக்கம்'], correctAnswer: 'காலை வணக்கம்', explanation: 'காலை வணக்கம் (Kaalai vanakkam) means good morning.' },
        { id: 10, question: 'What does "வீடு" (Veedu) mean?', options: ['Car', 'School', 'House', 'Book'], correctAnswer: 'House', explanation: 'வீடு means house in Tamil.' }
    ],
    medium: [
        { id: 1, question: 'What does "எப்படி இருக்கீங்க?" mean?', options: ['What is your name?', 'How are you?', 'Where are you?', 'How old are you?'], correctAnswer: 'How are you?', explanation: 'This is asking how someone is doing.' },
        { id: 2, question: 'How do you say "I am hungry" in Tamil?', options: ['எனக்கு தாகமா இருக்கு', 'எனக்கு பசிக்குது', 'நான் சோர்வா இருக்கேன்', 'எனக்கு தூக்கம் வருது'], correctAnswer: 'எனக்கு பசிக்குது', explanation: 'எனக்கு பசிக்குது means I am hungry.' },
        { id: 3, question: 'What is "காலை உணவு" in English?', options: ['Lunch', 'Dinner', 'Breakfast', 'Snack'], correctAnswer: 'Breakfast', explanation: 'காலை உணவு (Kaalai unavu) means breakfast.' },
        { id: 4, question: 'How do you say "Where is the bathroom?" in Tamil?', options: ['கழிவறை எங்கே?', 'இது என்ன?', 'எவ்வளவு?', 'எப்போ?'], correctAnswer: 'கழிவறை எங்கே?', explanation: 'Very useful phrase when traveling!' },
        { id: 5, question: 'What does "என் பெயர் ராஜா" mean?', options: ['I am Raja', 'My name is Raja', 'I like Raja', 'Raja is here'], correctAnswer: 'My name is Raja', explanation: 'என் பெயர் means "my name".' },
        { id: 6, question: 'What is "அண்ணன்" in English?', options: ['Younger brother', 'Elder brother', 'Sister', 'Friend'], correctAnswer: 'Elder brother', explanation: 'அண்ணன் (Annan) means elder brother.' },
        { id: 7, question: 'How do you say "It is hot" (weather) in Tamil?', options: ['குளிரா இருக்கு', 'வெயில் அடிக்குது', 'காத்து அடிக்குது', 'மழை பெய்யுது'], correctAnswer: 'வெயில் அடிக்குது', explanation: 'வெயில் அடிக்குது means it is hot/sunny.' },
        { id: 8, question: 'What does "வலது பக்கம்" mean?', options: ['To the left', 'To the right', 'Straight ahead', 'Behind'], correctAnswer: 'To the right', explanation: 'Important for directions!' },
        { id: 9, question: 'How do you say "I don\'t understand" in Tamil?', options: ['நான் பேச மாட்டேன்', 'எனக்கு புரியல', 'எனக்கு தெரியாது', 'எனக்கு வேண்டாம்'], correctAnswer: 'எனக்கு புரியல', explanation: 'Very useful when learning Tamil!' },
        { id: 10, question: 'What does "மழை பெய்யுது" mean?', options: ['It is sunny', 'It is raining', 'It is snowing', 'It is windy'], correctAnswer: 'It is raining', explanation: 'மழை (Mazhai) means rain.' }
    ],
    hard: [
        { id: 1, question: 'Tamil is one of the oldest living languages. How old is it approximately?', options: ['1000 years', '2000 years', '3000 years', '5000+ years'], correctAnswer: '5000+ years', explanation: 'Tamil is over 5000 years old, one of the world\'s oldest languages!' },
        { id: 2, question: 'What does "ரொம்ப நல்லா இருக்கு" mean?', options: ['Very bad', 'Very good', 'Not good', 'Maybe good'], correctAnswer: 'Very good', explanation: 'ரொம்ப (Romba) means very, நல்லா (Nallaa) means good.' },
        { id: 3, question: 'How many vowels are in the Tamil alphabet?', options: ['10', '11', '12', '13'], correctAnswer: '12', explanation: 'Tamil has 12 vowels (உயிரெழுத்து).' },
        { id: 4, question: 'What is unique about the letter "ழ" (zha)?', options: ['It\'s a vowel', 'Only found in Tamil', 'It\'s silent', 'It\'s a number'], correctAnswer: 'Only found in Tamil', explanation: 'ழ (zha) is unique to Tamil and not found in other Indian languages!' },
        { id: 5, question: 'What does "பிறகு பார்க்கலாம்" mean?', options: ['Good morning', 'See you later', 'Thank you', 'Welcome'], correctAnswer: 'See you later', explanation: 'பிறகு (Piragu) means later, பார்க்கலாம் (Paarkkalaam) means we can see.' },
        { id: 6, question: 'Tamil is an official language in which countries?', options: ['India only', 'India and Sri Lanka', 'India, Sri Lanka, Singapore', 'India and Malaysia'], correctAnswer: 'India, Sri Lanka, Singapore', explanation: 'Tamil is official in India (Tamil Nadu), Sri Lanka, and Singapore!' },
        { id: 7, question: 'What is "Thirukkural"?', options: ['Tamil food', 'Ancient Tamil text', 'Tamil dance', 'Tamil script'], correctAnswer: 'Ancient Tamil text', explanation: 'Thirukkural is a classic Tamil text on ethics and morality by Thiruvalluvar.' },
        { id: 8, question: 'How do you say "I have been learning Tamil for 2 years"?', options: ['நான் ரெண்டு வருஷமா தமிழ் கத்துக்கிட்டு இருக்கேன்', 'நான் தமிழ் கத்துக்கிட்டேன்', 'நான் தமிழ் கத்துப்பேன்', 'நான் தமிழ் கத்துக்குறேன்'], correctAnswer: 'நான் ரெண்டு வருஷமா தமிழ் கத்துக்கிட்டு இருக்கேன்', explanation: 'வருஷமா (varushamaa) indicates duration.' },
        { id: 9, question: 'What does "பொங்கல்" celebrate?', options: ['Independence Day', 'Harvest Festival', 'New Year', 'Diwali'], correctAnswer: 'Harvest Festival', explanation: 'Pongal is the Tamil harvest festival celebrated in January.' },
        { id: 10, question: 'What is the meaning of "தமிழ் தாய் வாழ்த்து"?', options: ['Tamil Mother\'s blessing', 'Tamil language song', 'Tamil national anthem', 'Tamil prayer'], correctAnswer: 'Tamil Mother\'s blessing', explanation: 'தமிழ் தாய் வாழ்த்து is the invocation to Tamil, the state song of Tamil Nadu.' }
    ]
};

export default tamilQuestions;
