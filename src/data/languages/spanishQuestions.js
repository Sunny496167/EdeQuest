// Spanish Quiz Questions
// Interactive quizzes for learning Spanish

const spanishQuestions = {
    easy: [
        {
            id: 1,
            question: 'What does "Hola" mean in English?',
            options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
            correctAnswer: 'Hello',
            explanation: '"Hola" is the most common way to say hello in Spanish!'
        },
        {
            id: 2,
            question: 'How do you say "Thank you" in Spanish?',
            options: ['Por favor', 'Gracias', 'Adiós', 'Perdón'],
            correctAnswer: 'Gracias',
            explanation: '"Gracias" means thank you. Always be polite!'
        },
        {
            id: 3,
            question: 'What is "Uno" in English?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 'One',
            explanation: '"Uno" is the number one in Spanish.'
        },
        {
            id: 4,
            question: 'What color is "Rojo"?',
            options: ['Blue', 'Green', 'Red', 'Yellow'],
            correctAnswer: 'Red',
            explanation: '"Rojo" means red, like a red apple!'
        },
        {
            id: 5,
            question: 'How do you say "Cat" in Spanish?',
            options: ['Perro', 'Gato', 'Pájaro', 'Pez'],
            correctAnswer: 'Gato',
            explanation: '"Gato" means cat. Meow!'
        },
        {
            id: 6,
            question: 'What does "Agua" mean?',
            options: ['Food', 'Water', 'Milk', 'Juice'],
            correctAnswer: 'Water',
            explanation: '"Agua" is water - essential for life!'
        },
        {
            id: 7,
            question: 'How do you say "Yes" in Spanish?',
            options: ['No', 'Sí', 'Tal vez', 'Nunca'],
            correctAnswer: 'Sí',
            explanation: '"Sí" means yes. Notice the accent mark!'
        },
        {
            id: 8,
            question: 'What is "Madre" in English?',
            options: ['Father', 'Mother', 'Sister', 'Brother'],
            correctAnswer: 'Mother',
            explanation: '"Madre" means mother - the most important person!'
        },
        {
            id: 9,
            question: 'How do you say "Good morning" in Spanish?',
            options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'],
            correctAnswer: 'Buenos días',
            explanation: '"Buenos días" is used to greet someone in the morning.'
        },
        {
            id: 10,
            question: 'What does "Casa" mean?',
            options: ['Car', 'School', 'House', 'Book'],
            correctAnswer: 'House',
            explanation: '"Casa" means house - where you live!'
        }
    ],

    medium: [
        {
            id: 1,
            question: 'What does "¿Cómo estás?" mean?',
            options: ['What is your name?', 'How are you?', 'Where are you?', 'How old are you?'],
            correctAnswer: 'How are you?',
            explanation: '"¿Cómo estás?" is asking how someone is doing.'
        },
        {
            id: 2,
            question: 'How do you say "I am hungry" in Spanish?',
            options: ['Tengo sed', 'Tengo hambre', 'Tengo sueño', 'Estoy cansado'],
            correctAnswer: 'Tengo hambre',
            explanation: '"Tengo hambre" literally means "I have hunger".'
        },
        {
            id: 3,
            question: 'What is the Spanish word for "Tomorrow"?',
            options: ['Ayer', 'Hoy', 'Mañana', 'Noche'],
            correctAnswer: 'Mañana',
            explanation: '"Mañana" means tomorrow. It also means "morning"!'
        },
        {
            id: 4,
            question: 'How do you say "Excuse me" (to get attention) in Spanish?',
            options: ['Perdón', 'Disculpe', 'Lo siento', 'Gracias'],
            correctAnswer: 'Disculpe',
            explanation: '"Disculpe" is used to politely get someone\'s attention.'
        },
        {
            id: 5,
            question: 'What does "Me llamo Juan" mean?',
            options: ['I am Juan', 'My name is Juan', 'I like Juan', 'Juan is here'],
            correctAnswer: 'My name is Juan',
            explanation: '"Me llamo" literally means "I call myself".'
        },
        {
            id: 6,
            question: 'How do you say "Where is the bathroom?" in Spanish?',
            options: ['¿Dónde está el baño?', '¿Qué es el baño?', '¿Cómo está el baño?', '¿Cuándo es el baño?'],
            correctAnswer: '¿Dónde está el baño?',
            explanation: 'Very useful phrase when traveling!'
        },
        {
            id: 7,
            question: 'What is "Hermano" in English?',
            options: ['Sister', 'Brother', 'Cousin', 'Friend'],
            correctAnswer: 'Brother',
            explanation: '"Hermano" means brother. "Hermana" is sister.'
        },
        {
            id: 8,
            question: 'How do you say "It\'s hot" (weather) in Spanish?',
            options: ['Hace frío', 'Hace calor', 'Hace viento', 'Hace sol'],
            correctAnswer: 'Hace calor',
            explanation: '"Hace calor" is used to describe hot weather.'
        },
        {
            id: 9,
            question: 'What does "A la derecha" mean?',
            options: ['To the left', 'To the right', 'Straight ahead', 'Behind'],
            correctAnswer: 'To the right',
            explanation: 'Important for giving and understanding directions!'
        },
        {
            id: 10,
            question: 'How do you say "I don\'t understand" in Spanish?',
            options: ['No hablo', 'No entiendo', 'No sé', 'No quiero'],
            correctAnswer: 'No entiendo',
            explanation: 'Very useful phrase when learning Spanish!'
        }
    ],

    hard: [
        {
            id: 1,
            question: 'What is the difference between "Ser" and "Estar"?',
            options: [
                'No difference',
                'Ser is permanent, Estar is temporary',
                'Ser is formal, Estar is informal',
                'Ser is plural, Estar is singular'
            ],
            correctAnswer: 'Ser is permanent, Estar is temporary',
            explanation: '"Ser" describes permanent characteristics, "Estar" describes temporary states or locations.'
        },
        {
            id: 2,
            question: 'What does "Buen provecho" mean?',
            options: ['Good luck', 'Enjoy your meal', 'Good morning', 'Have a good trip'],
            correctAnswer: 'Enjoy your meal',
            explanation: 'Said before or during a meal, similar to "Bon appétit"!'
        },
        {
            id: 3,
            question: 'How do you say "I would like..." in Spanish?',
            options: ['Quiero...', 'Me gusta...', 'Quisiera...', 'Necesito...'],
            correctAnswer: 'Quisiera...',
            explanation: '"Quisiera" is the polite conditional form of "querer".'
        },
        {
            id: 4,
            question: 'What is the Spanish subjunctive mood used for?',
            options: [
                'Past actions',
                'Wishes, doubts, and hypotheticals',
                'Future certainties',
                'Commands only'
            ],
            correctAnswer: 'Wishes, doubts, and hypotheticals',
            explanation: 'The subjunctive expresses uncertainty, desires, and emotions.'
        },
        {
            id: 5,
            question: 'What does "Ojalá" mean?',
            options: ['Maybe', 'I hope/I wish', 'Never', 'Always'],
            correctAnswer: 'I hope/I wish',
            explanation: '"Ojalá" comes from Arabic and expresses hope or wishes.'
        },
        {
            id: 6,
            question: 'How do you say "I have been studying Spanish for 2 years"?',
            options: [
                'Estudio español por 2 años',
                'He estudiado español por 2 años',
                'Llevo 2 años estudiando español',
                'Estudié español 2 años'
            ],
            correctAnswer: 'Llevo 2 años estudiando español',
            explanation: '"Llevar + time + gerund" expresses duration of ongoing actions.'
        },
        {
            id: 7,
            question: 'What is the difference between "Por" and "Para"?',
            options: [
                'No difference',
                'Por = reason/exchange, Para = purpose/destination',
                'Por is formal, Para is informal',
                'Por is past, Para is future'
            ],
            correctAnswer: 'Por = reason/exchange, Para = purpose/destination',
            explanation: 'These prepositions have different uses and meanings.'
        },
        {
            id: 8,
            question: 'What does "Madrugar" mean?',
            options: ['To stay up late', 'To wake up early', 'To take a nap', 'To sleep in'],
            correctAnswer: 'To wake up early',
            explanation: 'From "madrugada" (early morning/dawn).'
        },
        {
            id: 9,
            question: 'How do you form the present perfect tense in Spanish?',
            options: [
                'Haber + past participle',
                'Ser + gerund',
                'Estar + infinitive',
                'Tener + past participle'
            ],
            correctAnswer: 'Haber + past participle',
            explanation: 'Example: "He comido" (I have eaten).'
        },
        {
            id: 10,
            question: 'What does "Echar de menos" mean?',
            options: ['To throw away', 'To miss someone/something', 'To forget', 'To remember'],
            correctAnswer: 'To miss someone/something',
            explanation: 'An idiomatic expression meaning to miss or long for someone/something.'
        }
    ]
};

export default spanishQuestions;
