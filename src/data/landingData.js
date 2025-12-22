// ============================================================================
// LANDING PAGE MOCK DATA
// ============================================================================
// This file contains all static data for the landing page to improve performance
// by avoiding prop drilling and keeping data centralized

// TESTIMONIALS DATA
// Used in TestimonialsCarousel component
export const testimonials = [
  {
    id: 1,
    name: "Priya M.",
    role: "Mother of 2",
    location: "Mumbai",
    avatar: "👩‍💼", // Using emoji as placeholder for performance
    rating: 5,
    quote: "My 8-year-old son went from hating math to asking to do lessons! His grades improved from C to A in just 3 months.",
    metric: "2 grade levels up",
    verified: true
  },
  {
    id: 2,
    name: "Rajesh K.",
    role: "Father",
    location: "Bangalore",
    avatar: "👨‍💼",
    rating: 5,
    quote: "Finally, screen time I can feel good about. The parent dashboard shows me exactly what she's learning. Worth every rupee!",
    metric: "95% lesson completion",
    verified: true
  },
  {
    id: 3,
    name: "Aarav",
    role: "Age 11",
    location: "Delhi",
    avatar: "👦",
    rating: 5,
    quote: "I love earning badges and competing with my friends. Learning is actually fun now!",
    metric: "250+ badges earned",
    verified: true
  },
  {
    id: 4,
    name: "Mrs. Sharma",
    role: "Teacher",
    location: "Pune",
    avatar: "👩‍🏫",
    rating: 5,
    quote: "I recommend LearnQuest to all my students' parents. It perfectly complements classroom learning.",
    badge: "Educator verified",
    verified: true
  },
  {
    id: 5,
    name: "Neha D.",
    role: "Working Mom",
    location: "Hyderabad",
    avatar: "👩‍💻",
    rating: 5,
    quote: "As a working parent, knowing my kids are productively learning while I'm busy is priceless.",
    metric: "Daily streak: 47 days",
    verified: true
  },
  {
    id: 6,
    name: "The Gupta Family",
    role: "Family of 5",
    location: "Kolkata",
    avatar: "👨‍👩‍👧‍👦",
    rating: 5,
    quote: "All three of our kids use it. The family plan is so affordable and the sibling competition feature is genius!",
    metric: "3 children thriving",
    verified: true
  }
];

// STATISTICS DATA
// Used in SocialProofBanner and StatsSection components
export const stats = {
  activeStudents: 10000,
  schools: 500,
  lessonsCompleted: 50000,
  averageRating: 4.9,
  satisfaction: 95,
  gradeImprovement: 2.3
};

// PRICING PLANS DATA
// Used in PricingSection component
export const pricingPlans = [
  {
    id: 'free',
    name: "Free",
    price: 0,
    billing: "forever",
    badge: "Perfect for trying",
    popular: false,
    features: [
      "10 lessons per subject",
      "Basic progress tracking",
      "1 child profile",
      "Limited achievements",
      "Community support"
    ],
    limitations: [
      "No offline access",
      "Ads supported",
      "Limited analytics"
    ],
    cta: "Start Free",
    note: "No credit card required"
  },
  {
    id: 'premium',
    name: "Premium",
    price: 9.99,
    annualPrice: 99,
    billing: "month",
    badge: "Best value",
    popular: true,
    features: [
      "Everything in Free",
      "Unlimited lessons (1000+)",
      "Advanced analytics",
      "1 child profile",
      "All achievements unlocked",
      "Priority support",
      "Offline access",
      "Ad-free experience"
    ],
    cta: "Start 7-Day Free Trial",
    highlight: true
  },
  {
    id: 'family',
    name: "Family",
    price: 14.99,
    annualPrice: 149,
    billing: "month",
    badge: "For multiple children",
    popular: false,
    features: [
      "Everything in Premium",
      "Up to 3 child profiles",
      "Family progress dashboard",
      "Sibling competitions",
      "Bulk export reports",
      "Dedicated account manager"
    ],
    cta: "Start 7-Day Free Trial",
    highlight: false
  }
];

// CURRICULUM DATA
// Used in CurriculumShowcase component
export const curriculum = {
  math: {
    id: 'math',
    name: 'Mathematics',
    icon: '📐',
    topics: 127,
    grades: "1-10",
    color: "from-blue-500 to-indigo-600",
    categories: [
      "Algebra",
      "Geometry", 
      "Arithmetic",
      "Fractions & Decimals",
      "Statistics & Probability",
      "Trigonometry"
    ],
    description: "Complete coverage from basic counting to advanced algebra"
  },
  science: {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    topics: 98,
    grades: "1-10",
    color: "from-green-500 to-emerald-600",
    categories: [
      "Physics",
      "Chemistry",
      "Biology",
      "Earth Science",
      "Environmental Science",
      "Space & Astronomy"
    ],
    description: "Hands-on experiments and interactive simulations"
  },
  english: {
    id: 'english',
    name: 'English',
    icon: '📚',
    topics: 85,
    grades: "1-10",
    color: "from-purple-500 to-pink-600",
    categories: [
      "Grammar",
      "Reading Comprehension",
      "Creative Writing",
      "Vocabulary Building",
      "Literature",
      "Public Speaking"
    ],
    description: "Build strong language and communication skills"
  },
  hindi: {
    id: 'hindi',
    name: 'Hindi',
    icon: '🇮🇳',
    topics: 72,
    grades: "1-10",
    color: "from-orange-500 to-red-600",
    categories: [
      "व्याकरण (Grammar)",
      "पठन (Reading)",
      "लेखन (Writing)",
      "वार्तालाप (Conversation)",
      "साहित्य (Literature)",
      "कविता (Poetry)"
    ],
    description: "Master Hindi language with native speaker support"
  },
  computerScience: {
    id: 'cs',
    name: 'Computer Science',
    icon: '💻',
    topics: 64,
    grades: "3-10",
    color: "from-cyan-500 to-blue-600",
    categories: [
      "Coding Basics",
      "Python Programming",
      "Web Development",
      "Digital Literacy",
      "Algorithms & Logic",
      "App Development"
    ],
    description: "Future-ready coding and tech skills"
  },
  generalKnowledge: {
    id: 'gk',
    name: 'General Knowledge',
    icon: '🌍',
    topics: 156,
    grades: "1-10",
    color: "from-yellow-500 to-amber-600",
    categories: [
      "History",
      "Geography",
      "Current Affairs",
      "Indian Culture",
      "World Events",
      "Famous Personalities"
    ],
    description: "Build awareness of the world around you"
  }
};

// FEATURES DATA
// Used in FeaturesSection component
export const features = [
  {
    id: 1,
    icon: "BookOpen",
    title: "Comprehensive Curriculum",
    description: "Complete coverage of Math, Science, English, Hindi, Computer Science & General Knowledge",
    details: "Aligned with CBSE/ICSE standards, covering all major topics for grades 1-10",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    icon: "Trophy",
    title: "Gamified Learning",
    description: "XP points, levels, badges, daily challenges & leaderboards make learning addictive",
    details: "100+ unique badges, daily quests, and friendly competition to keep kids engaged",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    icon: "BarChart3",
    title: "Real-Time Analytics",
    description: "Parents get detailed insights into progress, strengths, and areas needing attention",
    details: "Weekly reports, subject-wise breakdown, and personalized recommendations",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    icon: "Route",
    title: "Adaptive Learning Path",
    description: "AI-powered personalized curriculum adjusts to your child's pace and learning style",
    details: "Smart difficulty adjustment based on performance and learning patterns",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    icon: "Shield",
    title: "Safe & Ad-Free",
    description: "100% child-safe content, no ads, COPPA compliant with robust parental controls",
    details: "Screen time limits, content filtering, and complete privacy protection",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    icon: "Smartphone",
    title: "Multi-Device Access",
    description: "Learn on any device - desktop, tablet, or phone with seamless sync",
    details: "Progress syncs across all devices in real-time, learn anywhere anytime",
    color: "from-yellow-500 to-amber-600"
  }
];

// HOW IT WORKS STEPS
// Used in HowItWorksSection component
export const howItWorksSteps = [
  {
    id: 1,
    icon: "UserPlus",
    title: "Sign Up Free",
    description: "Create account in 30 seconds. No credit card needed.",
    visual: "signup"
  },
  {
    id: 2,
    icon: "User",
    title: "Create Profile",
    description: "Set up your child's profile with age, grade, and interests.",
    visual: "profile"
  },
  {
    id: 3,
    icon: "Rocket",
    title: "Start Learning",
    description: "Follow personalized learning path with fun, interactive lessons.",
    visual: "learning"
  },
  {
    id: 4,
    icon: "TrendingUp",
    title: "Track Progress",
    description: "Watch your child grow with detailed progress reports.",
    visual: "analytics"
  }
];

// FAQ DATA
// Used in FAQSection component
export const faqs = [
  {
    id: 1,
    question: "Is there really a free trial?",
    answer: "Yes! 7-day full access, no credit card required. Experience everything before committing."
  },
  {
    id: 2,
    question: "How is this different from YouTube or free apps?",
    answer: "Structured curriculum, progress tracking, no ads, personalized learning paths, and parental controls. Quality over random content."
  },
  {
    id: 3,
    question: "Will it work for my child's age/grade?",
    answer: "We cover ages 6-16 (Grades 1-10) with age-appropriate content and adaptive difficulty."
  },
  {
    id: 4,
    question: "How much time should my child spend daily?",
    answer: "We recommend 20-30 minutes. You can set limits in parent controls."
  },
  {
    id: 5,
    question: "Can I track multiple children?",
    answer: "Yes! Family plan supports up to 3 children with individual profiles."
  },
  {
    id: 6,
    question: "Is the content aligned with school curriculum?",
    answer: "Yes, our curriculum follows CBSE/ICSE standards and complements school learning."
  },
  {
    id: 7,
    question: "What devices does it work on?",
    answer: "All devices - desktop, laptop, tablet, and smartphone. iOS and Android."
  },
  {
    id: 8,
    question: "Can I cancel anytime?",
    answer: "Absolutely. Cancel anytime with one click. No questions asked, no cancellation fees."
  },
  {
    id: 9,
    question: "Is my child's data safe?",
    answer: "Yes. We're COPPA compliant, encrypted, and never share or sell data. Ever."
  },
  {
    id: 10,
    question: "What if my child needs help?",
    answer: "We have in-app hints, video explanations, and 24/7 support for premium members."
  }
];

// PROBLEM POINTS DATA
// Used in ProblemSection component
export const problemPoints = [
  {
    id: 1,
    icon: "Smartphone",
    title: "Kids glued to screens with nothing to show for it?",
    description: "Turn passive screen time into active learning time"
  },
  {
    id: 2,
    icon: "IndianRupee",
    title: "Expensive tutors and scattered learning resources?",
    description: "One affordable platform for all subjects and grades"
  },
  {
    id: 3,
    icon: "Eye",
    title: "No visibility into what your child is actually learning?",
    description: "Real-time insights and detailed progress tracking"
  }
];

// AWARDS & RECOGNITION DATA
// Used in StatsSection component
export const awards = [
  {
    id: 1,
    title: "EdTech Innovation Award 2024",
    icon: "Award"
  },
  {
    id: 2,
    title: "Best Learning App - Parent's Choice",
    icon: "Star"
  },
  {
    id: 3,
    title: "COPPA Certified",
    icon: "ShieldCheck"
  },
  {
    id: 4,
    title: "Featured in TechCrunch",
    icon: "Newspaper"
  },
  {
    id: 5,
    title: "ISO 27001 Certified",
    icon: "BadgeCheck"
  }
];
