// Civic Sense Stories - Teaching manners, ethics, and good behavior
// Each story has a moral lesson and quiz questions

const civicSenseStories = [
    {
        id: 1,
        title: "The Magic Words",
        emoji: "✨",
        story: `Riya was a smart girl, but she never said 'Please' or 'Thank You'. One day, she asked her friend for a pencil without saying 'Please'. Her friend felt sad.

Riya's teacher noticed this and told her about the magic words - 'Please', 'Thank You', and 'Sorry'. These words make people happy!

The next day, Riya said "Please may I borrow your pencil?" Her friend smiled and happily gave it to her. When Riya returned it, she said "Thank you!" Her friend felt so happy!

From that day, Riya always used magic words. Everyone loved talking to her because she was so polite and kind.`,
        moral: "Using polite words like 'Please', 'Thank You', and 'Sorry' makes everyone happy and shows good manners.",
        quiz: [
            {
                question: "What are the magic words in the story?",
                options: [
                    "Hello, Goodbye",
                    "Please, Thank You, Sorry",
                    "Yes, No",
                    "Good, Bad"
                ],
                correctAnswer: "Please, Thank You, Sorry"
            },
            {
                question: "Why did Riya's friend feel sad at first?",
                options: [
                    "Riya didn't say Please",
                    "Riya was angry",
                    "Riya didn't come to school",
                    "Riya broke the pencil"
                ],
                correctAnswer: "Riya didn't say Please"
            },
            {
                question: "What happened when Riya used magic words?",
                options: [
                    "Nothing changed",
                    "People became angry",
                    "Everyone loved talking to her",
                    "She got in trouble"
                ],
                correctAnswer: "Everyone loved talking to her"
            }
        ]
    },
    {
        id: 2,
        title: "Sharing is Caring",
        emoji: "🤝",
        story: `Arjun had a big box of chocolates. His friends asked if they could have some, but Arjun said "No! These are all mine!"

His friends felt sad and went away. Arjun ate all the chocolates alone, but he didn't feel happy. He felt lonely.

The next day, Arjun's grandmother gave him cookies. This time, he remembered how lonely he felt yesterday. He decided to share the cookies with all his friends.

Everyone was so happy! They all played together and had so much fun. Arjun realized that sharing makes you happier than keeping everything for yourself.`,
        moral: "Sharing with others brings more joy than keeping everything to yourself.",
        quiz: [
            {
                question: "Why did Arjun feel lonely?",
                options: [
                    "He had no chocolates",
                    "He didn't share and ate alone",
                    "His friends were mean",
                    "He was sick"
                ],
                correctAnswer: "He didn't share and ate alone"
            },
            {
                question: "What did Arjun do differently with the cookies?",
                options: [
                    "He ate them all",
                    "He threw them away",
                    "He shared them with friends",
                    "He gave them to his teacher"
                ],
                correctAnswer: "He shared them with friends"
            },
            {
                question: "What did Arjun learn?",
                options: [
                    "Sharing brings more happiness",
                    "Never share anything",
                    "Chocolates are better than cookies",
                    "Friends are not important"
                ],
                correctAnswer: "Sharing brings more happiness"
            }
        ]
    },
    {
        id: 3,
        title: "The Honest Boy",
        emoji: "💎",
        story: `Rohan found a wallet on the ground with money in it. He could have kept it, but he knew it belonged to someone else.

He looked inside and found an ID card. Rohan took the wallet to his teacher and told her what happened. The teacher was very proud of him!

They found the owner - an old man who was very worried about losing his wallet. When Rohan returned it, the old man was so happy that he had tears in his eyes.

The old man thanked Rohan and blessed him. Rohan felt so good inside! He learned that being honest makes you feel proud and happy.`,
        moral: "Honesty is the best policy. Returning what belongs to others is the right thing to do.",
        quiz: [
            {
                question: "What did Rohan find?",
                options: ["A toy", "A wallet with money", "A book", "A phone"],
                correctAnswer: "A wallet with money"
            },
            {
                question: "What did Rohan do with the wallet?",
                options: [
                    "Kept the money",
                    "Threw it away",
                    "Returned it to the owner",
                    "Gave it to his friend"
                ],
                correctAnswer: "Returned it to the owner"
            },
            {
                question: "How did Rohan feel after returning the wallet?",
                options: [
                    "Sad and regretful",
                    "Angry",
                    "Proud and happy",
                    "Scared"
                ],
                correctAnswer: "Proud and happy"
            }
        ]
    },
    {
        id: 4,
        title: "Respecting Elders",
        emoji: "👴",
        story: `Priya was playing in the park when she saw an old lady struggling to carry her bags. Many people walked past without helping.

Priya remembered what her parents taught her - always respect and help elders. She ran to the old lady and said, "May I help you carry your bags?"

The old lady smiled warmly. Priya helped her carry the bags to her home. The old lady was so grateful and gave Priya her blessings.

Priya felt wonderful! She learned that helping elders is not just good manners, it makes both people happy.`,
        moral: "Always respect and help elders. Small acts of kindness make a big difference.",
        quiz: [
            {
                question: "What did Priya see in the park?",
                options: [
                    "A lost dog",
                    "An old lady struggling with bags",
                    "Her friends playing",
                    "A beautiful flower"
                ],
                correctAnswer: "An old lady struggling with bags"
            },
            {
                question: "What did Priya do?",
                options: [
                    "Walked away",
                    "Laughed at the lady",
                    "Helped carry the bags",
                    "Called her parents"
                ],
                correctAnswer: "Helped carry the bags"
            },
            {
                question: "What is the lesson of this story?",
                options: [
                    "Ignore elders",
                    "Always respect and help elders",
                    "Only help if you get something",
                    "Elders don't need help"
                ],
                correctAnswer: "Always respect and help elders"
            }
        ]
    },
    {
        id: 5,
        title: "Keeping Promises",
        emoji: "🤞",
        story: `Rahul promised his little sister that he would play with her after school. But when he came home, his friends invited him to play cricket.

Rahul wanted to go, but he remembered his promise. His sister was waiting for him with her toys, looking so excited.

Rahul told his friends, "I promised my sister I would play with her today. I can play cricket tomorrow." His friends understood and left.

Rahul played with his sister, and she was so happy! His parents were proud of him for keeping his promise. Rahul learned that keeping promises shows you are trustworthy and caring.`,
        moral: "Always keep your promises. It shows you are responsible and people can trust you.",
        quiz: [
            {
                question: "What did Rahul promise his sister?",
                options: [
                    "To buy her a toy",
                    "To play with her after school",
                    "To do her homework",
                    "To take her to the park"
                ],
                correctAnswer: "To play with her after school"
            },
            {
                question: "What choice did Rahul have to make?",
                options: [
                    "Cricket with friends or keep his promise",
                    "Study or play",
                    "Eat or sleep",
                    "Watch TV or read"
                ],
                correctAnswer: "Cricket with friends or keep his promise"
            },
            {
                question: "Why is keeping promises important?",
                options: [
                    "It's not important",
                    "It shows you are trustworthy",
                    "To avoid punishment",
                    "To get rewards"
                ],
                correctAnswer: "It shows you are trustworthy"
            }
        ]
    }
];

export default civicSenseStories;
