// History Stories Data
// Short, engaging stories for children about different eras

const historyStories = [
    {
        id: 1,
        title: "Ancient Egypt",
        emoji: "🏺",
        story: `Long, long ago, around 5,000 years back, there was a magical land called Egypt. The people of Egypt lived near a big river called the Nile. This river was very special because it gave them water to drink and grow food!

The Egyptians built huge pyramids that still stand today. These pyramids were like giant stone mountains! They also had kings called Pharaohs who wore golden crowns.

The Egyptians loved cats and thought they were sacred animals. They even made mummies—wrapping people in cloth to preserve them forever. Isn't that amazing?

They also created beautiful art and wrote using pictures called hieroglyphics. The ancient Egyptians were very smart and creative people!`,
        quiz: [
            {
                id: 1,
                question: "Which river was very important to the Egyptians?",
                options: ["Ganga", "Nile", "Amazon", "Thames"],
                correctAnswer: "Nile"
            },
            {
                id: 2,
                question: "What were the Egyptian kings called?",
                options: ["Pharaohs", "Kings", "Emperors", "Sultans"],
                correctAnswer: "Pharaohs"
            },
            {
                id: 3,
                question: "What did Egyptians build that still stands today?",
                options: ["Castles", "Pyramids", "Towers", "Bridges"],
                correctAnswer: "Pyramids"
            }
        ]
    },
    {
        id: 2,
        title: "Indus Valley Civilization",
        emoji: "🏛️",
        story: `Around 4,500 years ago, in the land we now call India and Pakistan, there was a great civilization called the Indus Valley. The people here were very clever!

They built beautiful cities with straight roads, just like we have today. Their cities had proper drainage systems to keep everything clean. Imagine having such smart planning thousands of years ago!

The Indus people were great traders. They made beautiful pottery, jewelry, and toys. They even had weights and measures to trade fairly with others.

One interesting thing is that we still haven't fully understood their writing! It's like a mystery waiting to be solved. The Indus Valley people loved cleanliness and had public baths in their cities.`,
        quiz: [
            {
                id: 1,
                question: "What did the Indus Valley cities have for cleanliness?",
                options: ["Rivers", "Drainage systems", "Wells", "Ponds"],
                correctAnswer: "Drainage systems"
            },
            {
                id: 2,
                question: "What were the Indus people good at?",
                options: ["Fighting", "Trading", "Farming only", "Hunting"],
                correctAnswer: "Trading"
            }
        ]
    },
    {
        id: 3,
        title: "Freedom Fighters of India",
        emoji: "🇮🇳",
        story: `Not too long ago, India was ruled by the British for about 200 years. Many brave Indians wanted their country to be free, so they became freedom fighters!

Mahatma Gandhi was a very special leader. He believed in peace and non-violence. He taught people to fight for freedom without using weapons. He led peaceful marches and asked people to make their own cloth instead of buying British goods.

Other brave heroes like Bhagat Singh, Subhash Chandra Bose, and Rani Lakshmibai also fought for India's freedom in their own ways. Women like Sarojini Naidu and Kasturba Gandhi also played important roles.

Finally, on August 15, 1947, India became free! This day is celebrated every year as Independence Day. These freedom fighters showed us that courage and unity can bring great change!`,
        quiz: [
            {
                id: 1,
                question: "What did Mahatma Gandhi believe in?",
                options: ["Violence", "Peace and non-violence", "War", "Weapons"],
                correctAnswer: "Peace and non-violence"
            },
            {
                id: 2,
                question: "When did India become free?",
                options: ["August 15, 1947", "January 26, 1950", "August 15, 1857", "December 25, 1947"],
                correctAnswer: "August 15, 1947"
            },
            {
                id: 3,
                question: "What is celebrated on August 15?",
                options: ["Republic Day", "Independence Day", "Gandhi Jayanti", "Children's Day"],
                correctAnswer: "Independence Day"
            }
        ]
    }
];

export default historyStories;
