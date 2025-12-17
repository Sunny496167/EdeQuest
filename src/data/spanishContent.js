// Spanish Language Learning Content
// Comprehensive Spanish learning with alphabets, vocabulary, phrases, and more

export const spanishAlphabet = [
    { letter: 'A', pronunciation: 'ah', example: 'Agua (water)' },
    { letter: 'B', pronunciation: 'beh', example: 'Bueno (good)' },
    { letter: 'C', pronunciation: 'seh', example: 'Casa (house)' },
    { letter: 'D', pronunciation: 'deh', example: 'Día (day)' },
    { letter: 'E', pronunciation: 'eh', example: 'Escuela (school)' },
    { letter: 'F', pronunciation: 'eh-feh', example: 'Familia (family)' },
    { letter: 'G', pronunciation: 'heh', example: 'Gato (cat)' },
    { letter: 'H', pronunciation: 'ah-cheh', example: 'Hola (hello)' },
    { letter: 'I', pronunciation: 'ee', example: 'Isla (island)' },
    { letter: 'J', pronunciation: 'hoh-tah', example: 'Jardín (garden)' },
    { letter: 'K', pronunciation: 'kah', example: 'Kilo (kilo)' },
    { letter: 'L', pronunciation: 'eh-leh', example: 'Libro (book)' },
    { letter: 'M', pronunciation: 'eh-meh', example: 'Madre (mother)' },
    { letter: 'N', pronunciation: 'eh-neh', example: 'Niño (child)' },
    { letter: 'Ñ', pronunciation: 'eh-nyeh', example: 'Mañana (tomorrow)' },
    { letter: 'O', pronunciation: 'oh', example: 'Ojo (eye)' },
    { letter: 'P', pronunciation: 'peh', example: 'Padre (father)' },
    { letter: 'Q', pronunciation: 'koo', example: 'Queso (cheese)' },
    { letter: 'R', pronunciation: 'eh-reh', example: 'Rosa (rose)' },
    { letter: 'S', pronunciation: 'eh-seh', example: 'Sol (sun)' },
    { letter: 'T', pronunciation: 'teh', example: 'Tiempo (time)' },
    { letter: 'U', pronunciation: 'oo', example: 'Uno (one)' },
    { letter: 'V', pronunciation: 'veh', example: 'Verde (green)' },
    { letter: 'W', pronunciation: 'doh-bleh-veh', example: 'Water (water)' },
    { letter: 'X', pronunciation: 'eh-kees', example: 'Xilófono (xylophone)' },
    { letter: 'Y', pronunciation: 'ee-gree-eh-gah', example: 'Yo (I)' },
    { letter: 'Z', pronunciation: 'seh-tah', example: 'Zapato (shoe)' }
];

export const popularWords = [
    // Greetings & Basic (1-10)
    { spanish: 'Hola', english: 'Hello', category: 'Greetings' },
    { spanish: 'Adiós', english: 'Goodbye', category: 'Greetings' },
    { spanish: 'Gracias', english: 'Thank you', category: 'Greetings' },
    { spanish: 'Por favor', english: 'Please', category: 'Greetings' },
    { spanish: 'Sí', english: 'Yes', category: 'Basic' },
    { spanish: 'No', english: 'No', category: 'Basic' },
    { spanish: 'Perdón', english: 'Sorry/Excuse me', category: 'Greetings' },
    { spanish: 'Buenos días', english: 'Good morning', category: 'Greetings' },
    { spanish: 'Buenas tardes', english: 'Good afternoon', category: 'Greetings' },
    { spanish: 'Buenas noches', english: 'Good night', category: 'Greetings' },

    // Numbers (11-20)
    { spanish: 'Uno', english: 'One', category: 'Numbers' },
    { spanish: 'Dos', english: 'Two', category: 'Numbers' },
    { spanish: 'Tres', english: 'Three', category: 'Numbers' },
    { spanish: 'Cuatro', english: 'Four', category: 'Numbers' },
    { spanish: 'Cinco', english: 'Five', category: 'Numbers' },
    { spanish: 'Seis', english: 'Six', category: 'Numbers' },
    { spanish: 'Siete', english: 'Seven', category: 'Numbers' },
    { spanish: 'Ocho', english: 'Eight', category: 'Numbers' },
    { spanish: 'Nueve', english: 'Nine', category: 'Numbers' },
    { spanish: 'Diez', english: 'Ten', category: 'Numbers' },

    // Family (21-30)
    { spanish: 'Familia', english: 'Family', category: 'Family' },
    { spanish: 'Madre', english: 'Mother', category: 'Family' },
    { spanish: 'Padre', english: 'Father', category: 'Family' },
    { spanish: 'Hermano', english: 'Brother', category: 'Family' },
    { spanish: 'Hermana', english: 'Sister', category: 'Family' },
    { spanish: 'Hijo', english: 'Son', category: 'Family' },
    { spanish: 'Hija', english: 'Daughter', category: 'Family' },
    { spanish: 'Abuelo', english: 'Grandfather', category: 'Family' },
    { spanish: 'Abuela', english: 'Grandmother', category: 'Family' },
    { spanish: 'Niño', english: 'Child/Boy', category: 'Family' },

    // Colors (31-40)
    { spanish: 'Rojo', english: 'Red', category: 'Colors' },
    { spanish: 'Azul', english: 'Blue', category: 'Colors' },
    { spanish: 'Verde', english: 'Green', category: 'Colors' },
    { spanish: 'Amarillo', english: 'Yellow', category: 'Colors' },
    { spanish: 'Negro', english: 'Black', category: 'Colors' },
    { spanish: 'Blanco', english: 'White', category: 'Colors' },
    { spanish: 'Naranja', english: 'Orange', category: 'Colors' },
    { spanish: 'Rosa', english: 'Pink', category: 'Colors' },
    { spanish: 'Morado', english: 'Purple', category: 'Colors' },
    { spanish: 'Gris', english: 'Gray', category: 'Colors' },

    // Food (41-50)
    { spanish: 'Agua', english: 'Water', category: 'Food' },
    { spanish: 'Pan', english: 'Bread', category: 'Food' },
    { spanish: 'Leche', english: 'Milk', category: 'Food' },
    { spanish: 'Café', english: 'Coffee', category: 'Food' },
    { spanish: 'Té', english: 'Tea', category: 'Food' },
    { spanish: 'Fruta', english: 'Fruit', category: 'Food' },
    { spanish: 'Manzana', english: 'Apple', category: 'Food' },
    { spanish: 'Naranja', english: 'Orange (fruit)', category: 'Food' },
    { spanish: 'Queso', english: 'Cheese', category: 'Food' },
    { spanish: 'Carne', english: 'Meat', category: 'Food' },

    // Common Objects (51-60)
    { spanish: 'Casa', english: 'House', category: 'Objects' },
    { spanish: 'Libro', english: 'Book', category: 'Objects' },
    { spanish: 'Mesa', english: 'Table', category: 'Objects' },
    { spanish: 'Silla', english: 'Chair', category: 'Objects' },
    { spanish: 'Puerta', english: 'Door', category: 'Objects' },
    { spanish: 'Ventana', english: 'Window', category: 'Objects' },
    { spanish: 'Coche', english: 'Car', category: 'Objects' },
    { spanish: 'Teléfono', english: 'Telephone', category: 'Objects' },
    { spanish: 'Computadora', english: 'Computer', category: 'Objects' },
    { spanish: 'Reloj', english: 'Clock/Watch', category: 'Objects' },

    // Nature (61-70)
    { spanish: 'Sol', english: 'Sun', category: 'Nature' },
    { spanish: 'Luna', english: 'Moon', category: 'Nature' },
    { spanish: 'Estrella', english: 'Star', category: 'Nature' },
    { spanish: 'Árbol', english: 'Tree', category: 'Nature' },
    { spanish: 'Flor', english: 'Flower', category: 'Nature' },
    { spanish: 'Agua', english: 'Water', category: 'Nature' },
    { spanish: 'Tierra', english: 'Earth/Ground', category: 'Nature' },
    { spanish: 'Cielo', english: 'Sky', category: 'Nature' },
    { spanish: 'Mar', english: 'Sea', category: 'Nature' },
    { spanish: 'Montaña', english: 'Mountain', category: 'Nature' },

    // Animals (71-80)
    { spanish: 'Perro', english: 'Dog', category: 'Animals' },
    { spanish: 'Gato', english: 'Cat', category: 'Animals' },
    { spanish: 'Pájaro', english: 'Bird', category: 'Animals' },
    { spanish: 'Pez', english: 'Fish', category: 'Animals' },
    { spanish: 'Caballo', english: 'Horse', category: 'Animals' },
    { spanish: 'Vaca', english: 'Cow', category: 'Animals' },
    { spanish: 'Elefante', english: 'Elephant', category: 'Animals' },
    { spanish: 'León', english: 'Lion', category: 'Animals' },
    { spanish: 'Tigre', english: 'Tiger', category: 'Animals' },
    { spanish: 'Conejo', english: 'Rabbit', category: 'Animals' },

    // Time & Days (81-90)
    { spanish: 'Hoy', english: 'Today', category: 'Time' },
    { spanish: 'Mañana', english: 'Tomorrow', category: 'Time' },
    { spanish: 'Ayer', english: 'Yesterday', category: 'Time' },
    { spanish: 'Día', english: 'Day', category: 'Time' },
    { spanish: 'Noche', english: 'Night', category: 'Time' },
    { spanish: 'Semana', english: 'Week', category: 'Time' },
    { spanish: 'Mes', english: 'Month', category: 'Time' },
    { spanish: 'Año', english: 'Year', category: 'Time' },
    { spanish: 'Hora', english: 'Hour', category: 'Time' },
    { spanish: 'Minuto', english: 'Minute', category: 'Time' },

    // Common Verbs (91-100)
    { spanish: 'Ser/Estar', english: 'To be', category: 'Verbs' },
    { spanish: 'Tener', english: 'To have', category: 'Verbs' },
    { spanish: 'Hacer', english: 'To do/make', category: 'Verbs' },
    { spanish: 'Ir', english: 'To go', category: 'Verbs' },
    { spanish: 'Venir', english: 'To come', category: 'Verbs' },
    { spanish: 'Comer', english: 'To eat', category: 'Verbs' },
    { spanish: 'Beber', english: 'To drink', category: 'Verbs' },
    { spanish: 'Hablar', english: 'To speak', category: 'Verbs' },
    { spanish: 'Escuchar', english: 'To listen', category: 'Verbs' },
    { spanish: 'Ver', english: 'To see', category: 'Verbs' }
];

export const dailyPhrases = [
    // Greetings & Introductions (1-10)
    { spanish: '¿Cómo estás?', english: 'How are you?', category: 'Greetings' },
    { spanish: 'Estoy bien, gracias', english: 'I am fine, thank you', category: 'Greetings' },
    { spanish: 'Me llamo...', english: 'My name is...', category: 'Introductions' },
    { spanish: '¿Cómo te llamas?', english: 'What is your name?', category: 'Introductions' },
    { spanish: 'Mucho gusto', english: 'Nice to meet you', category: 'Introductions' },
    { spanish: '¿De dónde eres?', english: 'Where are you from?', category: 'Introductions' },
    { spanish: 'Soy de...', english: 'I am from...', category: 'Introductions' },
    { spanish: 'Encantado/a', english: 'Pleased to meet you', category: 'Greetings' },
    { spanish: '¿Qué tal?', english: 'How are things?', category: 'Greetings' },
    { spanish: 'Hasta luego', english: 'See you later', category: 'Greetings' },

    // Polite Expressions (11-20)
    { spanish: 'Con permiso', english: 'Excuse me (to pass)', category: 'Polite' },
    { spanish: 'Disculpe', english: 'Excuse me (formal)', category: 'Polite' },
    { spanish: 'Lo siento', english: 'I am sorry', category: 'Polite' },
    { spanish: 'De nada', english: 'You are welcome', category: 'Polite' },
    { spanish: 'No hay de qué', english: 'Don\'t mention it', category: 'Polite' },
    { spanish: 'Por supuesto', english: 'Of course', category: 'Polite' },
    { spanish: 'Con mucho gusto', english: 'With pleasure', category: 'Polite' },
    { spanish: 'Perdone', english: 'Pardon me', category: 'Polite' },
    { spanish: 'Muchas gracias', english: 'Thank you very much', category: 'Polite' },
    { spanish: 'De acuerdo', english: 'Agreed/Okay', category: 'Polite' },

    // Questions (21-30)
    { spanish: '¿Qué?', english: 'What?', category: 'Questions' },
    { spanish: '¿Quién?', english: 'Who?', category: 'Questions' },
    { spanish: '¿Dónde?', english: 'Where?', category: 'Questions' },
    { spanish: '¿Cuándo?', english: 'When?', category: 'Questions' },
    { spanish: '¿Por qué?', english: 'Why?', category: 'Questions' },
    { spanish: '¿Cómo?', english: 'How?', category: 'Questions' },
    { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?', category: 'Questions' },
    { spanish: '¿Qué hora es?', english: 'What time is it?', category: 'Questions' },
    { spanish: '¿Dónde está...?', english: 'Where is...?', category: 'Questions' },
    { spanish: '¿Hablas inglés?', english: 'Do you speak English?', category: 'Questions' },

    // Daily Activities (31-40)
    { spanish: 'Voy a la escuela', english: 'I go to school', category: 'Daily' },
    { spanish: 'Voy a casa', english: 'I go home', category: 'Daily' },
    { spanish: 'Tengo hambre', english: 'I am hungry', category: 'Daily' },
    { spanish: 'Tengo sed', english: 'I am thirsty', category: 'Daily' },
    { spanish: 'Estoy cansado/a', english: 'I am tired', category: 'Daily' },
    { spanish: 'Tengo sueño', english: 'I am sleepy', category: 'Daily' },
    { spanish: 'Me gusta...', english: 'I like...', category: 'Daily' },
    { spanish: 'No me gusta...', english: 'I don\'t like...', category: 'Daily' },
    { spanish: 'Quiero...', english: 'I want...', category: 'Daily' },
    { spanish: 'Necesito...', english: 'I need...', category: 'Daily' },

    // Food & Dining (41-50)
    { spanish: 'Tengo hambre', english: 'I am hungry', category: 'Food' },
    { spanish: '¿Qué quieres comer?', english: 'What do you want to eat?', category: 'Food' },
    { spanish: 'La comida está deliciosa', english: 'The food is delicious', category: 'Food' },
    { spanish: 'Buen provecho', english: 'Enjoy your meal', category: 'Food' },
    { spanish: '¿Me pasas...?', english: 'Can you pass me...?', category: 'Food' },
    { spanish: 'Está muy rico', english: 'It\'s very tasty', category: 'Food' },
    { spanish: 'Quiero agua', english: 'I want water', category: 'Food' },
    { spanish: 'La cuenta, por favor', english: 'The bill, please', category: 'Food' },
    { spanish: '¿Tienes menú?', english: 'Do you have a menu?', category: 'Food' },
    { spanish: 'Estoy lleno/a', english: 'I am full', category: 'Food' },

    // Shopping (51-60)
    { spanish: '¿Cuánto cuesta esto?', english: 'How much does this cost?', category: 'Shopping' },
    { spanish: 'Es muy caro', english: 'It\'s very expensive', category: 'Shopping' },
    { spanish: 'Es barato', english: 'It\'s cheap', category: 'Shopping' },
    { spanish: 'Lo compro', english: 'I\'ll buy it', category: 'Shopping' },
    { spanish: '¿Tiene cambio?', english: 'Do you have change?', category: 'Shopping' },
    { spanish: '¿Qué talla?', english: 'What size?', category: 'Shopping' },
    { spanish: 'Me queda bien', english: 'It fits me well', category: 'Shopping' },
    { spanish: '¿Puedo probarlo?', english: 'Can I try it on?', category: 'Shopping' },
    { spanish: 'Solo estoy mirando', english: 'I\'m just looking', category: 'Shopping' },
    { spanish: '¿Aceptan tarjetas?', english: 'Do you accept cards?', category: 'Shopping' },

    // Directions (61-70)
    { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?', category: 'Directions' },
    { spanish: 'A la derecha', english: 'To the right', category: 'Directions' },
    { spanish: 'A la izquierda', english: 'To the left', category: 'Directions' },
    { spanish: 'Todo recto', english: 'Straight ahead', category: 'Directions' },
    { spanish: 'Cerca', english: 'Near/Close', category: 'Directions' },
    { spanish: 'Lejos', english: 'Far', category: 'Directions' },
    { spanish: 'Aquí', english: 'Here', category: 'Directions' },
    { spanish: 'Allí', english: 'There', category: 'Directions' },
    { spanish: 'Arriba', english: 'Up/Upstairs', category: 'Directions' },
    { spanish: 'Abajo', english: 'Down/Downstairs', category: 'Directions' },

    // Weather (71-80)
    { spanish: 'Hace calor', english: 'It\'s hot', category: 'Weather' },
    { spanish: 'Hace frío', english: 'It\'s cold', category: 'Weather' },
    { spanish: 'Hace sol', english: 'It\'s sunny', category: 'Weather' },
    { spanish: 'Llueve', english: 'It\'s raining', category: 'Weather' },
    { spanish: 'Nieva', english: 'It\'s snowing', category: 'Weather' },
    { spanish: 'Hace viento', english: 'It\'s windy', category: 'Weather' },
    { spanish: 'Está nublado', english: 'It\'s cloudy', category: 'Weather' },
    { spanish: 'Buen tiempo', english: 'Good weather', category: 'Weather' },
    { spanish: 'Mal tiempo', english: 'Bad weather', category: 'Weather' },
    { spanish: '¿Qué tiempo hace?', english: 'What\'s the weather like?', category: 'Weather' },

    // Feelings & Emotions (81-90)
    { spanish: 'Estoy feliz', english: 'I am happy', category: 'Emotions' },
    { spanish: 'Estoy triste', english: 'I am sad', category: 'Emotions' },
    { spanish: 'Estoy enojado/a', english: 'I am angry', category: 'Emotions' },
    { spanish: 'Estoy emocionado/a', english: 'I am excited', category: 'Emotions' },
    { spanish: 'Estoy nervioso/a', english: 'I am nervous', category: 'Emotions' },
    { spanish: 'Estoy aburrido/a', english: 'I am bored', category: 'Emotions' },
    { spanish: 'Estoy preocupado/a', english: 'I am worried', category: 'Emotions' },
    { spanish: 'Estoy sorprendido/a', english: 'I am surprised', category: 'Emotions' },
    { spanish: 'Estoy confundido/a', english: 'I am confused', category: 'Emotions' },
    { spanish: 'Me siento bien', english: 'I feel good', category: 'Emotions' },

    // Useful Phrases (91-100)
    { spanish: 'No entiendo', english: 'I don\'t understand', category: 'Useful' },
    { spanish: '¿Puedes repetir?', english: 'Can you repeat?', category: 'Useful' },
    { spanish: 'Más despacio, por favor', english: 'Slower, please', category: 'Useful' },
    { spanish: 'No hablo español bien', english: 'I don\'t speak Spanish well', category: 'Useful' },
    { spanish: '¿Qué significa...?', english: 'What does... mean?', category: 'Useful' },
    { spanish: 'Ayúdame, por favor', english: 'Help me, please', category: 'Useful' },
    { spanish: 'Un momento', english: 'One moment', category: 'Useful' },
    { spanish: 'Espera', english: 'Wait', category: 'Useful' },
    { spanish: 'Claro', english: 'Of course/Clear', category: 'Useful' },
    { spanish: '¡Qué bueno!', english: 'How nice!', category: 'Useful' }
];

export default {
    spanishAlphabet,
    popularWords,
    dailyPhrases
};
