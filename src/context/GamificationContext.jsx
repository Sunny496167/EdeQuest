import { createContext, useContext, useState, useEffect } from 'react';

// Create Gamification Context
const GamificationContext = createContext();

// Custom hook to use gamification context
export const useGamification = () => {
    const context = useContext(GamificationContext);
    if (!context) {
        throw new Error('useGamification must be used within GamificationProvider');
    }
    return context;
};

// Available badges
const AVAILABLE_BADGES = [
    {
        id: 'first_quiz',
        name: 'First Steps',
        emoji: '🎯',
        description: 'Completed your first quiz!',
        unlockCondition: 'Complete any quiz'
    },
    {
        id: 'five_stars',
        name: 'Rising Star',
        emoji: '⭐',
        description: 'Earned 5 stars!',
        unlockCondition: 'Get 5 correct answers'
    },
    {
        id: 'ten_stars',
        name: 'Super Star',
        emoji: '🌟',
        description: 'Earned 10 stars!',
        unlockCondition: 'Get 10 correct answers'
    },
    {
        id: 'math_explorer',
        name: 'Math Explorer',
        emoji: '🔢',
        description: 'Completed Math quizzes!',
        unlockCondition: 'Complete Math or Algebra quiz'
    },
    {
        id: 'science_explorer',
        name: 'Science Explorer',
        emoji: '🔬',
        description: 'Completed Science quiz!',
        unlockCondition: 'Complete Science quiz'
    },
    {
        id: 'geography_explorer',
        name: 'Geography Explorer',
        emoji: '🌍',
        description: 'Completed Geography quiz!',
        unlockCondition: 'Complete Geography quiz'
    },
    {
        id: 'history_explorer',
        name: 'History Explorer',
        emoji: '⏳',
        description: 'Completed History quiz!',
        unlockCondition: 'Complete History quiz'
    },
    {
        id: 'all_subjects',
        name: 'Master Learner',
        emoji: '🏆',
        description: 'Explored all subjects!',
        unlockCondition: 'Complete quizzes in all subjects'
    }
];

// Gamification Provider Component
export const GamificationProvider = ({ children }) => {
    // Initialize state from localStorage or defaults
    const [stars, setStars] = useState(() => {
        const saved = localStorage.getItem('eduquest_stars');
        return saved ? parseInt(saved, 10) : 0;
    });

    const [badges, setBadges] = useState(() => {
        const saved = localStorage.getItem('eduquest_badges');
        return saved ? JSON.parse(saved) : [];
    });

    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('eduquest_progress');
        return saved ? JSON.parse(saved) : {
            math: 0,
            algebra: 0,
            science: 0,
            geography: 0,
            history: 0
        };
    });

    // Unlocked difficulty levels per subject
    const [unlockedLevels, setUnlockedLevels] = useState(() => {
        const saved = localStorage.getItem('eduquest_unlocked_levels');
        return saved ? JSON.parse(saved) : {
            math: ['easy'],
            algebra: ['easy'],
            science: ['easy'],
            geography: ['easy'],
            history: ['easy']
        };
    });

    // Sync stars to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_stars', stars.toString());
    }, [stars]);

    // Sync badges to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_badges', JSON.stringify(badges));
    }, [badges]);

    // Sync progress to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_progress', JSON.stringify(progress));
    }, [progress]);

    // Sync unlocked levels to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_unlocked_levels', JSON.stringify(unlockedLevels));
    }, [unlockedLevels]);

    // Add a star
    const addStar = () => {
        setStars(prev => {
            const newStars = prev + 1;

            // Auto-unlock star badges
            if (newStars === 5 && !badges.includes('five_stars')) {
                unlockBadge('five_stars');
            }
            if (newStars === 10 && !badges.includes('ten_stars')) {
                unlockBadge('ten_stars');
            }

            return newStars;
        });
    };

    // Unlock a badge
    const unlockBadge = (badgeId) => {
        setBadges(prev => {
            if (!prev.includes(badgeId)) {
                return [...prev, badgeId];
            }
            return prev;
        });
    };

    // Update progress for a subject
    const updateProgress = (subject, value) => {
        setProgress(prev => ({
            ...prev,
            [subject]: Math.min(100, Math.max(0, value))
        }));
    };

    // Increment progress for a subject
    const incrementProgress = (subject, amount = 10) => {
        setProgress(prev => ({
            ...prev,
            [subject]: Math.min(100, prev[subject] + amount)
        }));
    };

    // Get all available badges with unlock status
    const getAllBadges = () => {
        return AVAILABLE_BADGES.map(badge => ({
            ...badge,
            unlocked: badges.includes(badge.id)
        }));
    };

    // Check if badge is unlocked
    const isBadgeUnlocked = (badgeId) => {
        return badges.includes(badgeId);
    };

    // Unlock a difficulty level for a subject
    const unlockLevel = (subject, level) => {
        setUnlockedLevels(prev => {
            if (!prev[subject]?.includes(level)) {
                return {
                    ...prev,
                    [subject]: [...(prev[subject] || []), level]
                };
            }
            return prev;
        });
    };

    // Check if a difficulty level is unlocked for a subject
    const isLevelUnlocked = (subject, level) => {
        return unlockedLevels[subject]?.includes(level) || false;
    };

    // Get unlocked levels for a subject
    const getUnlockedLevels = (subject) => {
        return unlockedLevels[subject] || ['easy'];
    };

    const value = {
        stars,
        badges,
        progress,
        unlockedLevels,
        addStar,
        unlockBadge,
        updateProgress,
        incrementProgress,
        getAllBadges,
        isBadgeUnlocked,
        unlockLevel,
        isLevelUnlocked,
        getUnlockedLevels
    };

    return (
        <GamificationContext.Provider value={value}>
            {children}
        </GamificationContext.Provider>
    );
};
