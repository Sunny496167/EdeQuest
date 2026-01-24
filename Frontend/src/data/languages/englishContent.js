// English Language Learning Content
// Comprehensive English learning with alphabet, vocabulary, phrases, and grammar

export const englishAlphabet = [
    { letter: 'A', pronunciation: 'ay', example: 'Apple', type: 'vowel' },
    { letter: 'B', pronunciation: 'bee', example: 'Ball', type: 'consonant' },
    { letter: 'C', pronunciation: 'see', example: 'Cat', type: 'consonant' },
    { letter: 'D', pronunciation: 'dee', example: 'Dog', type: 'consonant' },
    { letter: 'E', pronunciation: 'ee', example: 'Elephant', type: 'vowel' },
    { letter: 'F', pronunciation: 'eff', example: 'Fish', type: 'consonant' },
    { letter: 'G', pronunciation: 'jee', example: 'Goat', type: 'consonant' },
    { letter: 'H', pronunciation: 'aych', example: 'House', type: 'consonant' },
    { letter: 'I', pronunciation: 'eye', example: 'Ice cream', type: 'vowel' },
    { letter: 'J', pronunciation: 'jay', example: 'Jug', type: 'consonant' },
    { letter: 'K', pronunciation: 'kay', example: 'Kite', type: 'consonant' },
    { letter: 'L', pronunciation: 'ell', example: 'Lion', type: 'consonant' },
    { letter: 'M', pronunciation: 'em', example: 'Monkey', type: 'consonant' },
    { letter: 'N', pronunciation: 'en', example: 'Nest', type: 'consonant' },
    { letter: 'O', pronunciation: 'oh', example: 'Orange', type: 'vowel' },
    { letter: 'P', pronunciation: 'pee', example: 'Parrot', type: 'consonant' },
    { letter: 'Q', pronunciation: 'kyoo', example: 'Queen', type: 'consonant' },
    { letter: 'R', pronunciation: 'ar', example: 'Rabbit', type: 'consonant' },
    { letter: 'S', pronunciation: 'ess', example: 'Sun', type: 'consonant' },
    { letter: 'T', pronunciation: 'tee', example: 'Tiger', type: 'consonant' },
    { letter: 'U', pronunciation: 'yoo', example: 'Umbrella', type: 'vowel' },
    { letter: 'V', pronunciation: 'vee', example: 'Van', type: 'consonant' },
    { letter: 'W', pronunciation: 'double-yoo', example: 'Water', type: 'consonant' },
    { letter: 'X', pronunciation: 'eks', example: 'Xylophone', type: 'consonant' },
    { letter: 'Y', pronunciation: 'why', example: 'Yellow', type: 'consonant' },
    { letter: 'Z', pronunciation: 'zee/zed', example: 'Zebra', type: 'consonant' }
];

export const popularWords = [
    // Greetings & Basic (1-10)
    { word: 'Hello', meaning: 'A greeting', category: 'Greetings', example: 'Hello, how are you?' },
    { word: 'Goodbye', meaning: 'A farewell', category: 'Greetings', example: 'Goodbye, see you tomorrow!' },
    { word: 'Thank you', meaning: 'Expression of gratitude', category: 'Greetings', example: 'Thank you for your help.' },
    { word: 'Please', meaning: 'Polite request', category: 'Greetings', example: 'Please pass the salt.' },
    { word: 'Yes', meaning: 'Affirmative response', category: 'Basic', example: 'Yes, I agree.' },
    { word: 'No', meaning: 'Negative response', category: 'Basic', example: 'No, I don\'t want that.' },
    { word: 'Sorry', meaning: 'Apology', category: 'Greetings', example: 'Sorry for being late.' },
    { word: 'Welcome', meaning: 'Greeting for arrival', category: 'Greetings', example: 'Welcome to our home!' },
    { word: 'Excuse me', meaning: 'Polite interruption', category: 'Greetings', example: 'Excuse me, may I pass?' },
    { word: 'Good morning', meaning: 'Morning greeting', category: 'Greetings', example: 'Good morning, class!' },

    // Numbers (11-20)
    { word: 'One', meaning: 'Number 1', category: 'Numbers', example: 'I have one apple.' },
    { word: 'Two', meaning: 'Number 2', category: 'Numbers', example: 'Two plus two equals four.' },
    { word: 'Three', meaning: 'Number 3', category: 'Numbers', example: 'I have three books.' },
    { word: 'Four', meaning: 'Number 4', category: 'Numbers', example: 'There are four seasons.' },
    { word: 'Five', meaning: 'Number 5', category: 'Numbers', example: 'I have five fingers.' },
    { word: 'Six', meaning: 'Number 6', category: 'Numbers', example: 'Six divided by two is three.' },
    { word: 'Seven', meaning: 'Number 7', category: 'Numbers', example: 'There are seven days in a week.' },
    { word: 'Eight', meaning: 'Number 8', category: 'Numbers', example: 'I wake up at eight o\'clock.' },
    { word: 'Nine', meaning: 'Number 9', category: 'Numbers', example: 'Nine minus one is eight.' },
    { word: 'Ten', meaning: 'Number 10', category: 'Numbers', example: 'I have ten toes.' },

    // Family (21-30)
    { word: 'Family', meaning: 'Group of related people', category: 'Family', example: 'My family is very loving.' },
    { word: 'Mother', meaning: 'Female parent', category: 'Family', example: 'My mother cooks delicious food.' },
    { word: 'Father', meaning: 'Male parent', category: 'Family', example: 'My father works hard.' },
    { word: 'Brother', meaning: 'Male sibling', category: 'Family', example: 'My brother plays football.' },
    { word: 'Sister', meaning: 'Female sibling', category: 'Family', example: 'My sister loves reading.' },
    { word: 'Son', meaning: 'Male child', category: 'Family', example: 'He is my son.' },
    { word: 'Daughter', meaning: 'Female child', category: 'Family', example: 'She is my daughter.' },
    { word: 'Grandfather', meaning: 'Father\'s or mother\'s father', category: 'Family', example: 'My grandfather tells great stories.' },
    { word: 'Grandmother', meaning: 'Father\'s or mother\'s mother', category: 'Family', example: 'My grandmother bakes cookies.' },
    { word: 'Child', meaning: 'Young person', category: 'Family', example: 'Every child loves to play.' },

    // Colors (31-40)
    { word: 'Red', meaning: 'Color of blood', category: 'Colors', example: 'The apple is red.' },
    { word: 'Blue', meaning: 'Color of sky', category: 'Colors', example: 'The ocean is blue.' },
    { word: 'Green', meaning: 'Color of grass', category: 'Colors', example: 'Leaves are green.' },
    { word: 'Yellow', meaning: 'Color of sun', category: 'Colors', example: 'The banana is yellow.' },
    { word: 'Black', meaning: 'Darkest color', category: 'Colors', example: 'The night sky is black.' },
    { word: 'White', meaning: 'Lightest color', category: 'Colors', example: 'Snow is white.' },
    { word: 'Orange', meaning: 'Color between red and yellow', category: 'Colors', example: 'The sunset is orange.' },
    { word: 'Pink', meaning: 'Light red color', category: 'Colors', example: 'The flower is pink.' },
    { word: 'Purple', meaning: 'Color of violet', category: 'Colors', example: 'Grapes are purple.' },
    { word: 'Brown', meaning: 'Color of wood', category: 'Colors', example: 'The tree trunk is brown.' },

    // Food (41-50)
    { word: 'Water', meaning: 'Clear liquid to drink', category: 'Food', example: 'I drink water every day.' },
    { word: 'Bread', meaning: 'Baked food', category: 'Food', example: 'I eat bread for breakfast.' },
    { word: 'Milk', meaning: 'White liquid from cows', category: 'Food', example: 'Milk is good for bones.' },
    { word: 'Rice', meaning: 'Grain food', category: 'Food', example: 'Rice is a staple food.' },
    { word: 'Fruit', meaning: 'Sweet plant product', category: 'Food', example: 'Eat fruit every day.' },
    { word: 'Apple', meaning: 'Round red/green fruit', category: 'Food', example: 'An apple a day keeps the doctor away.' },
    { word: 'Banana', meaning: 'Yellow curved fruit', category: 'Food', example: 'Monkeys love bananas.' },
    { word: 'Cheese', meaning: 'Dairy product', category: 'Food', example: 'I like cheese on pizza.' },
    { word: 'Egg', meaning: 'Oval food from birds', category: 'Food', example: 'I eat eggs for protein.' },
    { word: 'Meat', meaning: 'Animal flesh as food', category: 'Food', example: 'Some people don\'t eat meat.' },

    // Common Objects (51-60)
    { word: 'House', meaning: 'Building to live in', category: 'Objects', example: 'My house has three rooms.' },
    { word: 'Book', meaning: 'Written pages bound together', category: 'Objects', example: 'I love reading books.' },
    { word: 'Table', meaning: 'Furniture with flat top', category: 'Objects', example: 'Put the plate on the table.' },
    { word: 'Chair', meaning: 'Furniture to sit on', category: 'Objects', example: 'Please sit on the chair.' },
    { word: 'Door', meaning: 'Entry to a room', category: 'Objects', example: 'Close the door, please.' },
    { word: 'Window', meaning: 'Glass opening in wall', category: 'Objects', example: 'Open the window for fresh air.' },
    { word: 'Car', meaning: 'Vehicle with four wheels', category: 'Objects', example: 'My father drives a car.' },
    { word: 'Phone', meaning: 'Device for calling', category: 'Objects', example: 'I use my phone to call friends.' },
    { word: 'Computer', meaning: 'Electronic device', category: 'Objects', example: 'I study on my computer.' },
    { word: 'Clock', meaning: 'Device showing time', category: 'Objects', example: 'The clock shows 3 o\'clock.' },

    // Nature (61-70)
    { word: 'Sun', meaning: 'Star that gives light', category: 'Nature', example: 'The sun rises in the east.' },
    { word: 'Moon', meaning: 'Earth\'s natural satellite', category: 'Nature', example: 'The moon shines at night.' },
    { word: 'Star', meaning: 'Bright point in night sky', category: 'Nature', example: 'Stars twinkle at night.' },
    { word: 'Tree', meaning: 'Tall plant with trunk', category: 'Nature', example: 'Trees give us oxygen.' },
    { word: 'Flower', meaning: 'Colorful part of plant', category: 'Nature', example: 'Flowers smell nice.' },
    { word: 'River', meaning: 'Flowing water body', category: 'Nature', example: 'Fish live in the river.' },
    { word: 'Mountain', meaning: 'Very high land', category: 'Nature', example: 'Mountains are very tall.' },
    { word: 'Sky', meaning: 'Space above earth', category: 'Nature', example: 'The sky is blue.' },
    { word: 'Ocean', meaning: 'Large body of salt water', category: 'Nature', example: 'The ocean is vast.' },
    { word: 'Rain', meaning: 'Water falling from clouds', category: 'Nature', example: 'Rain makes plants grow.' },

    // Animals (71-80)
    { word: 'Dog', meaning: 'Common pet animal', category: 'Animals', example: 'Dogs are loyal friends.' },
    { word: 'Cat', meaning: 'Small furry pet', category: 'Animals', example: 'Cats like to sleep.' },
    { word: 'Bird', meaning: 'Flying animal with feathers', category: 'Animals', example: 'Birds sing beautifully.' },
    { word: 'Fish', meaning: 'Water animal', category: 'Animals', example: 'Fish swim in water.' },
    { word: 'Horse', meaning: 'Large riding animal', category: 'Animals', example: 'Horses can run fast.' },
    { word: 'Cow', meaning: 'Farm animal giving milk', category: 'Animals', example: 'Cows give us milk.' },
    { word: 'Elephant', meaning: 'Largest land animal', category: 'Animals', example: 'Elephants have long trunks.' },
    { word: 'Lion', meaning: 'King of jungle', category: 'Animals', example: 'Lions are very strong.' },
    { word: 'Tiger', meaning: 'Striped big cat', category: 'Animals', example: 'Tigers are endangered.' },
    { word: 'Rabbit', meaning: 'Small hopping animal', category: 'Animals', example: 'Rabbits have long ears.' },

    // Time & Days (81-90)
    { word: 'Today', meaning: 'This day', category: 'Time', example: 'Today is Monday.' },
    { word: 'Tomorrow', meaning: 'Next day', category: 'Time', example: 'Tomorrow is Tuesday.' },
    { word: 'Yesterday', meaning: 'Previous day', category: 'Time', example: 'Yesterday was Sunday.' },
    { word: 'Day', meaning: '24 hours', category: 'Time', example: 'There are 7 days in a week.' },
    { word: 'Night', meaning: 'Dark time', category: 'Time', example: 'Stars come out at night.' },
    { word: 'Morning', meaning: 'Early part of day', category: 'Time', example: 'I wake up in the morning.' },
    { word: 'Evening', meaning: 'Late afternoon', category: 'Time', example: 'We play in the evening.' },
    { word: 'Week', meaning: 'Seven days', category: 'Time', example: 'A week has seven days.' },
    { word: 'Month', meaning: 'About 30 days', category: 'Time', example: 'A year has 12 months.' },
    { word: 'Year', meaning: '365 days', category: 'Time', example: 'I am 10 years old.' },

    // Common Verbs (91-100)
    { word: 'Be', meaning: 'To exist', category: 'Verbs', example: 'I am a student.' },
    { word: 'Have', meaning: 'To possess', category: 'Verbs', example: 'I have a book.' },
    { word: 'Do', meaning: 'To perform action', category: 'Verbs', example: 'I do my homework.' },
    { word: 'Go', meaning: 'To move', category: 'Verbs', example: 'I go to school.' },
    { word: 'Come', meaning: 'To arrive', category: 'Verbs', example: 'Please come here.' },
    { word: 'Eat', meaning: 'To consume food', category: 'Verbs', example: 'I eat breakfast.' },
    { word: 'Drink', meaning: 'To consume liquid', category: 'Verbs', example: 'I drink water.' },
    { word: 'Speak', meaning: 'To talk', category: 'Verbs', example: 'I speak English.' },
    { word: 'Listen', meaning: 'To hear', category: 'Verbs', example: 'Listen to the teacher.' },
    { word: 'Read', meaning: 'To look at words', category: 'Verbs', example: 'I read books daily.' }
];

export const dailyPhrases = [
    // Greetings & Introductions (1-10)
    { phrase: 'How are you?', usage: 'Asking about someone\'s well-being', category: 'Greetings', example: 'Hello! How are you today?' },
    { phrase: 'I am fine', usage: 'Responding positively', category: 'Greetings', example: 'I am fine, thank you!' },
    { phrase: 'My name is...', usage: 'Introducing yourself', category: 'Introductions', example: 'My name is John.' },
    { phrase: 'What is your name?', usage: 'Asking someone\'s name', category: 'Introductions', example: 'Hello, what is your name?' },
    { phrase: 'Nice to meet you', usage: 'Polite greeting', category: 'Introductions', example: 'Nice to meet you, Sarah!' },
    { phrase: 'Where are you from?', usage: 'Asking origin', category: 'Introductions', example: 'Where are you from?' },
    { phrase: 'I am from...', usage: 'Stating origin', category: 'Introductions', example: 'I am from India.' },
    { phrase: 'See you later', usage: 'Casual goodbye', category: 'Greetings', example: 'Bye! See you later!' },
    { phrase: 'Have a nice day', usage: 'Wishing well', category: 'Greetings', example: 'Goodbye! Have a nice day!' },
    { phrase: 'Good night', usage: 'Evening farewell', category: 'Greetings', example: 'Good night, sleep well!' },

    // Polite Expressions (11-20)
    { phrase: 'You are welcome', usage: 'Response to thanks', category: 'Polite', example: 'You are welcome!' },
    { phrase: 'Excuse me', usage: 'Getting attention', category: 'Polite', example: 'Excuse me, may I ask a question?' },
    { phrase: 'I am sorry', usage: 'Apologizing', category: 'Polite', example: 'I am sorry for the mistake.' },
    { phrase: 'No problem', usage: 'Casual acceptance', category: 'Polite', example: 'No problem, happy to help!' },
    { phrase: 'Of course', usage: 'Agreeing readily', category: 'Polite', example: 'Of course, I can help you.' },
    { phrase: 'May I help you?', usage: 'Offering assistance', category: 'Polite', example: 'May I help you with that?' },
    { phrase: 'Thank you very much', usage: 'Strong gratitude', category: 'Polite', example: 'Thank you very much for your help!' },
    { phrase: 'Pardon me', usage: 'Polite interruption', category: 'Polite', example: 'Pardon me, I didn\'t hear you.' },
    { phrase: 'Bless you', usage: 'After someone sneezes', category: 'Polite', example: 'Achoo! Bless you!' },
    { phrase: 'After you', usage: 'Letting someone go first', category: 'Polite', example: 'After you, please.' },

    // Questions (21-30)
    { phrase: 'What?', usage: 'Asking for information', category: 'Questions', example: 'What is your favorite color?' },
    { phrase: 'Who?', usage: 'Asking about person', category: 'Questions', example: 'Who is your teacher?' },
    { phrase: 'Where?', usage: 'Asking about place', category: 'Questions', example: 'Where is the library?' },
    { phrase: 'When?', usage: 'Asking about time', category: 'Questions', example: 'When is your birthday?' },
    { phrase: 'Why?', usage: 'Asking for reason', category: 'Questions', example: 'Why are you late?' },
    { phrase: 'How?', usage: 'Asking about method', category: 'Questions', example: 'How do you spell that?' },
    { phrase: 'How much?', usage: 'Asking about price/quantity', category: 'Questions', example: 'How much does this cost?' },
    { phrase: 'What time is it?', usage: 'Asking the time', category: 'Questions', example: 'Excuse me, what time is it?' },
    { phrase: 'Can you help me?', usage: 'Requesting assistance', category: 'Questions', example: 'Can you help me with this?' },
    { phrase: 'Do you speak English?', usage: 'Asking about language', category: 'Questions', example: 'Do you speak English?' },

    // Daily Activities (31-40)
    { phrase: 'I go to school', usage: 'Daily routine', category: 'Daily', example: 'I go to school every day.' },
    { phrase: 'I am going home', usage: 'Stating destination', category: 'Daily', example: 'It\'s late, I am going home.' },
    { phrase: 'I am hungry', usage: 'Expressing need', category: 'Daily', example: 'I am hungry, let\'s eat.' },
    { phrase: 'I am thirsty', usage: 'Expressing need', category: 'Daily', example: 'I am thirsty, I need water.' },
    { phrase: 'I am tired', usage: 'Expressing state', category: 'Daily', example: 'I am tired, I need rest.' },
    { phrase: 'I am sleepy', usage: 'Expressing state', category: 'Daily', example: 'I am sleepy, good night.' },
    { phrase: 'I like...', usage: 'Expressing preference', category: 'Daily', example: 'I like chocolate.' },
    { phrase: 'I don\'t like...', usage: 'Expressing dislike', category: 'Daily', example: 'I don\'t like vegetables.' },
    { phrase: 'I want...', usage: 'Expressing desire', category: 'Daily', example: 'I want ice cream.' },
    { phrase: 'I need...', usage: 'Expressing necessity', category: 'Daily', example: 'I need a pencil.' },

    // School & Learning (41-50)
    { phrase: 'I am a student', usage: 'Stating occupation', category: 'School', example: 'I am a student at this school.' },
    { phrase: 'I study English', usage: 'Stating subject', category: 'School', example: 'I study English every day.' },
    { phrase: 'May I ask a question?', usage: 'Classroom phrase', category: 'School', example: 'May I ask a question, teacher?' },
    { phrase: 'I don\'t understand', usage: 'Expressing confusion', category: 'School', example: 'I don\'t understand this problem.' },
    { phrase: 'Can you explain?', usage: 'Requesting clarification', category: 'School', example: 'Can you explain this again?' },
    { phrase: 'How do you spell...?', usage: 'Asking for spelling', category: 'School', example: 'How do you spell "beautiful"?' },
    { phrase: 'What does... mean?', usage: 'Asking for meaning', category: 'School', example: 'What does "happy" mean?' },
    { phrase: 'I have homework', usage: 'Stating task', category: 'School', example: 'I have homework to finish.' },
    { phrase: 'The test is tomorrow', usage: 'Stating schedule', category: 'School', example: 'The test is tomorrow, I must study.' },
    { phrase: 'I passed the exam', usage: 'Stating achievement', category: 'School', example: 'I passed the exam!' },

    // Directions (51-60)
    { phrase: 'Where is the bathroom?', usage: 'Asking for location', category: 'Directions', example: 'Excuse me, where is the bathroom?' },
    { phrase: 'Turn right', usage: 'Giving direction', category: 'Directions', example: 'Turn right at the corner.' },
    { phrase: 'Turn left', usage: 'Giving direction', category: 'Directions', example: 'Turn left after the school.' },
    { phrase: 'Go straight', usage: 'Giving direction', category: 'Directions', example: 'Go straight for two blocks.' },
    { phrase: 'It is near', usage: 'Describing distance', category: 'Directions', example: 'The park is near my house.' },
    { phrase: 'It is far', usage: 'Describing distance', category: 'Directions', example: 'The city is far from here.' },
    { phrase: 'Here', usage: 'Indicating location', category: 'Directions', example: 'Come here, please.' },
    { phrase: 'There', usage: 'Indicating location', category: 'Directions', example: 'Put it there.' },
    { phrase: 'Upstairs', usage: 'Indicating direction', category: 'Directions', example: 'My room is upstairs.' },
    { phrase: 'Downstairs', usage: 'Indicating direction', category: 'Directions', example: 'The kitchen is downstairs.' },

    // Weather (61-70)
    { phrase: 'It is hot', usage: 'Describing weather', category: 'Weather', example: 'It is hot today.' },
    { phrase: 'It is cold', usage: 'Describing weather', category: 'Weather', example: 'It is cold outside.' },
    { phrase: 'It is sunny', usage: 'Describing weather', category: 'Weather', example: 'It is sunny and bright.' },
    { phrase: 'It is raining', usage: 'Describing weather', category: 'Weather', example: 'It is raining, take an umbrella.' },
    { phrase: 'It is snowing', usage: 'Describing weather', category: 'Weather', example: 'It is snowing heavily.' },
    { phrase: 'It is windy', usage: 'Describing weather', category: 'Weather', example: 'It is windy today.' },
    { phrase: 'It is cloudy', usage: 'Describing weather', category: 'Weather', example: 'It is cloudy, it might rain.' },
    { phrase: 'Nice weather', usage: 'Commenting on weather', category: 'Weather', example: 'What nice weather we have!' },
    { phrase: 'Bad weather', usage: 'Commenting on weather', category: 'Weather', example: 'The bad weather ruined our plans.' },
    { phrase: 'What\'s the weather like?', usage: 'Asking about weather', category: 'Weather', example: 'What\'s the weather like today?' },

    // Feelings & Emotions (71-80)
    { phrase: 'I am happy', usage: 'Expressing emotion', category: 'Emotions', example: 'I am happy to see you!' },
    { phrase: 'I am sad', usage: 'Expressing emotion', category: 'Emotions', example: 'I am sad because my friend left.' },
    { phrase: 'I am angry', usage: 'Expressing emotion', category: 'Emotions', example: 'I am angry about the situation.' },
    { phrase: 'I am excited', usage: 'Expressing emotion', category: 'Emotions', example: 'I am excited for the trip!' },
    { phrase: 'I am nervous', usage: 'Expressing emotion', category: 'Emotions', example: 'I am nervous about the test.' },
    { phrase: 'I am bored', usage: 'Expressing emotion', category: 'Emotions', example: 'I am bored, let\'s play.' },
    { phrase: 'I am worried', usage: 'Expressing emotion', category: 'Emotions', example: 'I am worried about my grades.' },
    { phrase: 'I am surprised', usage: 'Expressing emotion', category: 'Emotions', example: 'I am surprised by the news!' },
    { phrase: 'I am confused', usage: 'Expressing emotion', category: 'Emotions', example: 'I am confused about the instructions.' },
    { phrase: 'I feel good', usage: 'Expressing state', category: 'Emotions', example: 'I feel good today!' },

    // Useful Phrases (81-90)
    { phrase: 'I don\'t know', usage: 'Expressing lack of knowledge', category: 'Useful', example: 'I don\'t know the answer.' },
    { phrase: 'I think so', usage: 'Expressing opinion', category: 'Useful', example: 'Will it rain? I think so.' },
    { phrase: 'Maybe', usage: 'Expressing possibility', category: 'Useful', example: 'Maybe we can go tomorrow.' },
    { phrase: 'I agree', usage: 'Expressing agreement', category: 'Useful', example: 'I agree with you.' },
    { phrase: 'I disagree', usage: 'Expressing disagreement', category: 'Useful', example: 'I disagree with that idea.' },
    { phrase: 'That\'s right', usage: 'Confirming correctness', category: 'Useful', example: 'That\'s right, good job!' },
    { phrase: 'That\'s wrong', usage: 'Indicating error', category: 'Useful', example: 'That\'s wrong, try again.' },
    { phrase: 'I remember', usage: 'Stating recall', category: 'Useful', example: 'I remember that story.' },
    { phrase: 'I forgot', usage: 'Stating forgetfulness', category: 'Useful', example: 'I forgot my homework.' },
    { phrase: 'Let me think', usage: 'Requesting time', category: 'Useful', example: 'Let me think about it.' },

    // Common Expressions (91-100)
    { phrase: 'Good luck!', usage: 'Wishing success', category: 'Expressions', example: 'Good luck on your test!' },
    { phrase: 'Congratulations!', usage: 'Celebrating success', category: 'Expressions', example: 'Congratulations on winning!' },
    { phrase: 'Be careful!', usage: 'Warning', category: 'Expressions', example: 'Be careful crossing the street!' },
    { phrase: 'Hurry up!', usage: 'Urging speed', category: 'Expressions', example: 'Hurry up, we\'re late!' },
    { phrase: 'Slow down!', usage: 'Urging caution', category: 'Expressions', example: 'Slow down, you\'re going too fast!' },
    { phrase: 'Wait a minute', usage: 'Requesting pause', category: 'Expressions', example: 'Wait a minute, I\'m coming!' },
    { phrase: 'Never mind', usage: 'Dismissing concern', category: 'Expressions', example: 'Never mind, it\'s not important.' },
    { phrase: 'That\'s amazing!', usage: 'Expressing admiration', category: 'Expressions', example: 'That\'s amazing, well done!' },
    { phrase: 'I\'m ready', usage: 'Stating preparedness', category: 'Expressions', example: 'I\'m ready to go!' },
    { phrase: 'Let\'s go!', usage: 'Suggesting departure', category: 'Expressions', example: 'Let\'s go to the park!' }
];

export default {
    englishAlphabet,
    popularWords,
    dailyPhrases
};
