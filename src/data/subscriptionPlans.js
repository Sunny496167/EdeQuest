// Subscription Plans Data
export const SUBSCRIPTION_TIERS = {
    FREE: 'free',
    PREMIUM: 'premium',
    FAMILY: 'family'
};

export const BILLING_CYCLES = {
    MONTHLY: 'monthly',
    YEARLY: 'yearly'
};

export const SUBSCRIPTION_STATUS = {
    ACTIVE: 'active',
    CANCELLED: 'cancelled',
    EXPIRED: 'expired',
    TRIAL: 'trial'
};

// Feature definitions
export const FEATURES = {
    // Free features
    BASIC_SUBJECTS: 'basic_subjects',
    LIMITED_QUIZZES: 'limited_quizzes',
    BASIC_PROGRESS: 'basic_progress',
    SINGLE_PROFILE: 'single_profile',
    STANDARD_AVATARS: 'standard_avatars',
    COMMUNITY_ACCESS: 'community_access',

    // Premium features
    UNLIMITED_QUIZZES: 'unlimited_quizzes',
    ALL_SUBJECTS: 'all_subjects',
    ADVANCED_ANALYTICS: 'advanced_analytics',
    PERSONALIZED_LEARNING: 'personalized_learning',
    AD_FREE: 'ad_free',
    PRIORITY_SUPPORT: 'priority_support',
    CERTIFICATES: 'certificates',
    CUSTOM_AVATARS: 'custom_avatars',
    OFFLINE_MODE: 'offline_mode',

    // Family features
    MULTIPLE_PROFILES: 'multiple_profiles',
    PARENT_DASHBOARD: 'parent_dashboard',
    CROSS_DEVICE_SYNC: 'cross_device_sync',
    FAMILY_REPORTS: 'family_reports',
    ACCOUNT_MANAGER: 'account_manager',
    EARLY_ACCESS: 'early_access',
    CUSTOM_SCHEDULES: 'custom_schedules',
    GROUP_CHALLENGES: 'group_challenges'
};

// Pricing plans configuration
export const PRICING_PLANS = {
    [SUBSCRIPTION_TIERS.FREE]: {
        id: SUBSCRIPTION_TIERS.FREE,
        name: 'Free',
        tagline: 'Perfect for getting started',
        monthlyPrice: 0,
        yearlyPrice: 0,
        badge: null,
        color: 'gray',
        gradient: 'from-gray-50 to-gray-100',
        features: [
            {
                id: FEATURES.BASIC_SUBJECTS,
                name: 'Access to 3 subjects',
                description: 'Choose any 3 subjects to learn',
                included: true
            },
            {
                id: FEATURES.LIMITED_QUIZZES,
                name: '5 quizzes per day',
                description: 'Practice with daily quiz limit',
                included: true
            },
            {
                id: FEATURES.BASIC_PROGRESS,
                name: 'Basic progress tracking',
                description: 'Track your learning journey',
                included: true
            },
            {
                id: FEATURES.SINGLE_PROFILE,
                name: 'Single student profile',
                description: 'One learner account',
                included: true
            },
            {
                id: FEATURES.STANDARD_AVATARS,
                name: 'Standard avatar selection',
                description: 'Choose from preset avatars',
                included: true
            },
            {
                id: FEATURES.COMMUNITY_ACCESS,
                name: 'Community access',
                description: 'Join the learning community',
                included: true
            }
        ],
        lockedFeatures: [
            'Advanced analytics',
            'Unlimited quizzes',
            'All subjects',
            'Personalized learning paths',
            'Ad-free experience',
            'Priority support'
        ],
        cta: 'Get Started',
        trialDays: 0
    },

    [SUBSCRIPTION_TIERS.PREMIUM]: {
        id: SUBSCRIPTION_TIERS.PREMIUM,
        name: 'Premium',
        tagline: 'Unlock your full potential',
        monthlyPrice: 299,
        yearlyPrice: 2999,
        badge: 'Most Popular',
        color: 'blue',
        gradient: 'from-blue-500 to-purple-600',
        features: [
            {
                id: FEATURES.UNLIMITED_QUIZZES,
                name: 'Unlimited quiz access',
                description: 'Practice as much as you want',
                included: true,
                highlight: true
            },
            {
                id: FEATURES.ALL_SUBJECTS,
                name: 'All subjects unlocked',
                description: 'Access to every subject',
                included: true,
                highlight: true
            },
            {
                id: FEATURES.ADVANCED_ANALYTICS,
                name: 'Advanced progress analytics',
                description: 'Detailed insights and reports',
                included: true,
                highlight: true
            },
            {
                id: FEATURES.PERSONALIZED_LEARNING,
                name: 'Personalized learning paths',
                description: 'AI-powered recommendations',
                included: true
            },
            {
                id: FEATURES.AD_FREE,
                name: 'Ad-free experience',
                description: 'Learn without interruptions',
                included: true
            },
            {
                id: FEATURES.CERTIFICATES,
                name: 'Downloadable certificates',
                description: 'Celebrate your achievements',
                included: true
            },
            {
                id: FEATURES.PRIORITY_SUPPORT,
                name: 'Priority email support',
                description: 'Get help when you need it',
                included: true
            },
            {
                id: FEATURES.CUSTOM_AVATARS,
                name: 'Custom avatar creation',
                description: 'Design your own avatar',
                included: true
            },
            {
                id: FEATURES.OFFLINE_MODE,
                name: 'Offline mode access',
                description: 'Learn anywhere, anytime',
                included: true
            }
        ],
        cta: 'Start 14-Day Free Trial',
        trialDays: 14
    },

    [SUBSCRIPTION_TIERS.FAMILY]: {
        id: SUBSCRIPTION_TIERS.FAMILY,
        name: 'Family',
        tagline: 'Perfect for the whole family',
        monthlyPrice: 499,
        yearlyPrice: 4999,
        badge: 'Best Value',
        color: 'green',
        gradient: 'from-green-500 to-teal-600',
        features: [
            {
                id: FEATURES.MULTIPLE_PROFILES,
                name: 'Up to 5 student profiles',
                description: 'Multiple learners, one account',
                included: true,
                highlight: true
            },
            {
                id: FEATURES.PARENT_DASHBOARD,
                name: 'Parent dashboard with insights',
                description: 'Monitor all children\'s progress',
                included: true,
                highlight: true
            },
            {
                id: FEATURES.CROSS_DEVICE_SYNC,
                name: 'Cross-device sync',
                description: 'Seamless learning across devices',
                included: true
            },
            {
                id: FEATURES.FAMILY_REPORTS,
                name: 'Family progress reports',
                description: 'Comprehensive family analytics',
                included: true
            },
            {
                id: FEATURES.ACCOUNT_MANAGER,
                name: 'Dedicated account manager',
                description: 'Personal support for your family',
                included: true
            },
            {
                id: FEATURES.EARLY_ACCESS,
                name: 'Early access to new features',
                description: 'Be the first to try new content',
                included: true
            },
            {
                id: FEATURES.CUSTOM_SCHEDULES,
                name: 'Custom learning schedules',
                description: 'Personalized timing for each child',
                included: true
            },
            {
                id: FEATURES.GROUP_CHALLENGES,
                name: 'Group challenges',
                description: 'Family learning competitions',
                included: true
            }
        ],
        includesPremium: true,
        cta: 'Start 14-Day Free Trial',
        trialDays: 14
    }
};

// FAQ data
export const FAQ_DATA = [
    {
        question: 'How does the free trial work?',
        answer: 'Start your 14-day free trial with Premium or Family plans. No credit card required upfront. Cancel anytime during the trial period without being charged.'
    },
    {
        question: 'Can I switch plans later?',
        answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the end of your current billing cycle.'
    },
    {
        question: 'What happens when I cancel?',
        answer: 'You\'ll continue to have access to premium features until the end of your current billing period. After that, your account will automatically switch to the Free plan.'
    },
    {
        question: 'Is my payment information secure?',
        answer: 'Absolutely! We use industry-standard encryption and secure payment processing. Your payment information is never stored on our servers.'
    },
    {
        question: 'How many subjects are included in the Free plan?',
        answer: 'The Free plan gives you access to any 3 subjects of your choice. You can change your selected subjects once per month.'
    },
    {
        question: 'What\'s the difference between Premium and Family plans?',
        answer: 'Premium is perfect for individual learners with unlimited access to all features. Family plan supports up to 5 student profiles with a parent dashboard to monitor everyone\'s progress.'
    },
    {
        question: 'Do you offer refunds?',
        answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with your subscription, contact us within 30 days for a full refund.'
    },
    {
        question: 'Can I pay yearly to save money?',
        answer: 'Yes! Yearly subscriptions save you 17% compared to monthly billing. That\'s like getting 2 months free!'
    },
    {
        question: 'What age group is EdeQuest suitable for?',
        answer: 'EdeQuest is designed for students aged 8-16, covering grades 3-10. Our content adapts to each student\'s learning level.'
    },
    {
        question: 'How do I manage my subscription?',
        answer: 'You can manage your subscription, update payment methods, and view billing history anytime from your Settings page or the Subscription Management dashboard.'
    }
];

// Testimonials data
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Priya Sharma',
        age: 12,
        grade: 7,
        avatar: '👧',
        quote: 'I love the unlimited quizzes! I went from struggling in math to getting top marks in my class.',
        plan: SUBSCRIPTION_TIERS.PREMIUM,
        rating: 5
    },
    {
        id: 2,
        name: 'Rahul Verma',
        age: 14,
        grade: 9,
        avatar: '👦',
        quote: 'The personalized learning paths helped me focus on exactly what I needed to improve. Highly recommend!',
        plan: SUBSCRIPTION_TIERS.PREMIUM,
        rating: 5
    },
    {
        id: 3,
        name: 'Anjali Patel',
        age: 10,
        grade: 5,
        avatar: '👧',
        quote: 'Learning is so fun now! The certificates make me feel proud of my achievements.',
        plan: SUBSCRIPTION_TIERS.PREMIUM,
        rating: 5
    },
    {
        id: 4,
        name: 'Mrs. Gupta (Parent)',
        role: 'Parent of 3',
        avatar: '👩',
        quote: 'The Family plan is perfect for us. I can track all three of my children\'s progress in one place. Worth every rupee!',
        plan: SUBSCRIPTION_TIERS.FAMILY,
        rating: 5
    }
];

// Feature comparison for table
export const FEATURE_COMPARISON = [
    {
        category: 'Learning Content',
        features: [
            { name: 'Number of subjects', free: '3 subjects', premium: 'All subjects', family: 'All subjects' },
            { name: 'Daily quiz limit', free: '5 quizzes', premium: 'Unlimited', family: 'Unlimited' },
            { name: 'Offline mode', free: false, premium: true, family: true },
            { name: 'Early access to new content', free: false, premium: false, family: true }
        ]
    },
    {
        category: 'Progress & Analytics',
        features: [
            { name: 'Basic progress tracking', free: true, premium: true, family: true },
            { name: 'Advanced analytics', free: false, premium: true, family: true },
            { name: 'Personalized learning paths', free: false, premium: true, family: true },
            { name: 'Family progress reports', free: false, premium: false, family: true }
        ]
    },
    {
        category: 'Profiles & Customization',
        features: [
            { name: 'Student profiles', free: '1 profile', premium: '1 profile', family: '5 profiles' },
            { name: 'Avatar options', free: 'Standard', premium: 'Custom', family: 'Custom' },
            { name: 'Parent dashboard', free: false, premium: false, family: true },
            { name: 'Custom learning schedules', free: false, premium: false, family: true }
        ]
    },
    {
        category: 'Support & Features',
        features: [
            { name: 'Community access', free: true, premium: true, family: true },
            { name: 'Email support', free: 'Standard', premium: 'Priority', family: 'Priority' },
            { name: 'Dedicated account manager', free: false, premium: false, family: true },
            { name: 'Ad-free experience', free: false, premium: true, family: true },
            { name: 'Downloadable certificates', free: false, premium: true, family: true }
        ]
    }
];

// Calculate savings percentage
export const calculateYearlySavings = (monthlyPrice) => {
    const yearlyEquivalent = monthlyPrice * 12;
    const yearlyPrice = monthlyPrice * 10; // 10 months price for yearly
    const savings = ((yearlyEquivalent - yearlyPrice) / yearlyEquivalent) * 100;
    return Math.round(savings);
};

// Get plan by tier
export const getPlanByTier = (tier) => {
    return PRICING_PLANS[tier] || PRICING_PLANS[SUBSCRIPTION_TIERS.FREE];
};

// Check if feature is included in plan
export const isPlanFeatureIncluded = (planTier, featureId) => {
    const plan = getPlanByTier(planTier);

    // Family plan includes all premium features
    if (planTier === SUBSCRIPTION_TIERS.FAMILY) {
        const premiumPlan = PRICING_PLANS[SUBSCRIPTION_TIERS.PREMIUM];
        const hasPremiumFeature = premiumPlan.features.some(f => f.id === featureId);
        if (hasPremiumFeature) return true;
    }

    return plan.features.some(f => f.id === featureId);
};
