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
        id: 'english_explorer',
        name: 'English Explorer',
        emoji: '📚',
        description: 'Completed English quiz!',
        unlockCondition: 'Complete English quiz'
    },
    {
        id: 'hindi_explorer',
        name: 'Hindi Explorer',
        emoji: '🇮🇳',
        description: 'Completed Hindi quiz!',
        unlockCondition: 'Complete Hindi quiz'
    },
    {
        id: 'civics_explorer',
        name: 'Civics Explorer',
        emoji: '⚖️',
        description: 'Completed Civics quiz!',
        unlockCondition: 'Complete Civics quiz'
    },
    {
        id: 'civic_sense_champion',
        name: 'Civic Sense Champion',
        emoji: '🌟',
        description: 'Completed Civic Sense quiz!',
        unlockCondition: 'Complete Civic Sense quiz'
    },
    {
        id: 'life_skills_master',
        name: 'Life Skills Master',
        emoji: '🧠',
        description: 'Completed Life Skills quiz!',
        unlockCondition: 'Complete Life Skills quiz'
    },
    {
        id: 'environmental_hero',
        name: 'Environmental Hero',
        emoji: '🌍',
        description: 'Completed Environmental Studies quiz!',
        unlockCondition: 'Complete Environmental Studies quiz'
    },
    {
        id: 'all_subjects',
        name: 'Master Learner',
        emoji: '🏆',
        description: 'Explored all subjects!',
        unlockCondition: 'Complete quizzes in all subjects'
    }
];

// Helper function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

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
            history: 0,
            english: 0,
            hindi: 0,
            civics: 0,
            civicsense: 0,
            lifeskills: 0,
            environmental: 0
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
            history: ['easy'],
            english: ['easy'],
            hindi: ['easy'],
            civics: ['easy'],
            civicsense: ['easy'],
            lifeskills: ['easy'],
            environmental: ['easy']
        };
    });

    // Daily goal state
    const [dailyGoalTarget] = useState(10); // Fixed target: 10 questions per day

    const [dailySolvedCount, setDailySolvedCount] = useState(() => {
        const saved = localStorage.getItem('eduquest_daily_solved');
        return saved ? parseInt(saved, 10) : 0;
    });

    const [lastActiveDate, setLastActiveDate] = useState(() => {
        const saved = localStorage.getItem('eduquest_last_active_date');
        return saved || getTodayDate();
    });

    // Avatar and reward state
    const [unlockedAvatars, setUnlockedAvatars] = useState(() => {
        const saved = localStorage.getItem('eduquest_unlocked_avatars');
        return saved ? JSON.parse(saved) : [1]; // Avatar 1 unlocked by default
    });

    const [selectedAvatar, setSelectedAvatar] = useState(() => {
        const saved = localStorage.getItem('eduquest_selected_avatar');
        return saved ? parseInt(saved, 10) : 1; // Avatar 1 selected by default
    });

    const [completedQuizzes, setCompletedQuizzes] = useState(() => {
        const saved = localStorage.getItem('eduquest_completed_quizzes');
        return saved ? parseInt(saved, 10) : 0;
    });

    // Time tracking state (in seconds per subject)
    const [timeSpent, setTimeSpent] = useState(() => {
        const saved = localStorage.getItem('eduquest_time_spent');
        return saved ? JSON.parse(saved) : {
            math: 0,
            algebra: 0,
            science: 0,
            geography: 0,
            history: 0,
            english: 0,
            hindi: 0,
            civics: 0,
            civicsense: 0,
            lifeskills: 0,
            environmental: 0
        };
    });

    // Active tracking intervals
    const [trackingIntervals] = useState({});

    // Check and reset daily goal if new day
    useEffect(() => {
        const today = getTodayDate();
        if (lastActiveDate !== today) {
            // New day detected, reset daily count
            setDailySolvedCount(0);
            setLastActiveDate(today);
        }
    }, []); // Run once on mount

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

    // Sync daily solved count to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_daily_solved', dailySolvedCount.toString());
    }, [dailySolvedCount]);

    // Sync last active date to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_last_active_date', lastActiveDate);
    }, [lastActiveDate]);

    // Sync unlocked avatars to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_unlocked_avatars', JSON.stringify(unlockedAvatars));
    }, [unlockedAvatars]);

    // Sync selected avatar to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_selected_avatar', selectedAvatar.toString());
    }, [selectedAvatar]);

    // Sync completed quizzes to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_completed_quizzes', completedQuizzes.toString());
    }, [completedQuizzes]);

    // Sync time spent to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_time_spent', JSON.stringify(timeSpent));
    }, [timeSpent]);

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

    // Increment daily solved count
    const incrementDailySolved = () => {
        const today = getTodayDate();

        // Check if it's a new day
        if (lastActiveDate !== today) {
            // Reset for new day
            setDailySolvedCount(1);
            setLastActiveDate(today);
        } else {
            // Increment for same day
            setDailySolvedCount(prev => prev + 1);
        }
    };

    // Check if daily goal is completed
    const isDailyGoalCompleted = () => {
        return dailySolvedCount >= dailyGoalTarget;
    };

    // Reset daily goal if new day (can be called manually)
    const resetDailyGoalIfNewDay = () => {
        const today = getTodayDate();
        if (lastActiveDate !== today) {
            setDailySolvedCount(0);
            setLastActiveDate(today);
        }
    };

    // Unlock an avatar
    const unlockAvatar = (avatarId) => {
        setUnlockedAvatars(prev => {
            if (!prev.includes(avatarId)) {
                return [...prev, avatarId];
            }
            return prev;
        });
    };

    // Select an avatar
    const selectAvatar = (avatarId) => {
        if (unlockedAvatars.includes(avatarId)) {
            setSelectedAvatar(avatarId);
        }
    };

    // Check reward conditions and unlock avatars
    const checkRewardConditions = () => {
        const rewards = [];

        // Avatar 2 (Wizard): Complete first quiz
        if (completedQuizzes >= 1 && !unlockedAvatars.includes(2)) {
            unlockAvatar(2);
            rewards.push({ avatarId: 2, message: "You completed your first quiz!" });
        }

        // Avatar 3 (Rocket): Complete daily goal
        if (isDailyGoalCompleted() && !unlockedAvatars.includes(3)) {
            unlockAvatar(3);
            rewards.push({ avatarId: 3, message: "You completed your daily goal!" });
        }

        // Avatar 4 (Super Hero): Earn 20 stars
        if (stars >= 20 && !unlockedAvatars.includes(4)) {
            unlockAvatar(4);
            rewards.push({ avatarId: 4, message: "You earned 20 stars!" });
        }

        // Avatar 5 (Artist): Complete 5 quizzes
        if (completedQuizzes >= 5 && !unlockedAvatars.includes(5)) {
            unlockAvatar(5);
            rewards.push({ avatarId: 5, message: "You completed 5 quizzes!" });
        }

        // Avatar 6 (Champion): Unlock all badges
        if (badges.length >= AVAILABLE_BADGES.length && !unlockedAvatars.includes(6)) {
            unlockAvatar(6);
            rewards.push({ avatarId: 6, message: "You unlocked all badges!" });
        }

        // Avatar 7 (Star Student): Earn 50 stars
        if (stars >= 50 && !unlockedAvatars.includes(7)) {
            unlockAvatar(7);
            rewards.push({ avatarId: 7, message: "You earned 50 stars!" });
        }

        return rewards;
    };

    // Increment completed quizzes
    const incrementCompletedQuizzes = () => {
        setCompletedQuizzes(prev => prev + 1);
    };

    // Start tracking time for a subject
    const startTracking = (subject) => {
        // Don't start if already tracking
        if (trackingIntervals[subject]) {
            return;
        }

        // Update last active date
        setLastActiveDate(getTodayDate());

        // Start interval to increment time every second
        trackingIntervals[subject] = setInterval(() => {
            setTimeSpent(prev => ({
                ...prev,
                [subject]: prev[subject] + 1 // Increment by 1 second
            }));
        }, 1000);
    };

    // Stop tracking time for a subject
    const stopTracking = (subject) => {
        if (trackingIntervals[subject]) {
            clearInterval(trackingIntervals[subject]);
            delete trackingIntervals[subject];
        }
    };

    const value = {
        stars,
        badges,
        progress,
        unlockedLevels,
        dailyGoalTarget,
        dailySolvedCount,
        lastActiveDate,
        unlockedAvatars,
        selectedAvatar,
        completedQuizzes,
        timeSpent,
        addStar,
        unlockBadge,
        updateProgress,
        incrementProgress,
        getAllBadges,
        isBadgeUnlocked,
        unlockLevel,
        isLevelUnlocked,
        getUnlockedLevels,
        incrementDailySolved,
        isDailyGoalCompleted,
        resetDailyGoalIfNewDay,
        unlockAvatar,
        selectAvatar,
        checkRewardConditions,
        incrementCompletedQuizzes,
        startTracking,
        stopTracking
    };

    return (
        <GamificationContext.Provider value={value}>
            {children}
        </GamificationContext.Provider>
    );
};
