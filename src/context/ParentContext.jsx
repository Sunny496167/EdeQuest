import React, { createContext, useContext, useState, useEffect } from 'react';

const ParentContext = createContext();

export const useParent = () => {
    const context = useContext(ParentContext);
    if (!context) {
        throw new Error('useParent must be used within a ParentProvider');
    }
    return context;
};

// Helper function to generate activity history
const generateActivityHistory = (childId, days = 30) => {
    const activities = [];
    const activityTypes = ['quiz_completed', 'lesson_viewed', 'achievement_unlocked', 'login'];
    const subjects = ['Mathematics', 'Science', 'Social Science', 'English', 'Geography', 'History'];
    const topics = {
        Mathematics: ['Fractions', 'Algebra', 'Geometry', 'Decimals', 'Percentages'],
        Science: ['Plant Biology', 'Physics', 'Chemistry', 'Space', 'Animals'],
        'Social Science': ['Civics', 'Economics', 'Geography', 'History'],
        English: ['Grammar', 'Literature', 'Writing', 'Vocabulary'],
        Geography: ['World Capitals', 'Rivers', 'Mountains', 'Climate'],
        History: ['Ancient History', 'Medieval Period', 'Modern History']
    };

    const devices = ['iPad', 'Laptop', 'Mobile', 'Desktop'];

    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        // Generate 2-5 activities per day
        const activitiesPerDay = Math.floor(Math.random() * 4) + 2;

        for (let j = 0; j < activitiesPerDay; j++) {
            const activityType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
            const subject = subjects[Math.floor(Math.random() * subjects.length)];
            const topic = topics[subject][Math.floor(Math.random() * topics[subject].length)];

            const hour = 14 + Math.floor(Math.random() * 5); // Between 2 PM and 7 PM
            const minute = Math.floor(Math.random() * 60);
            date.setHours(hour, minute, 0, 0);

            const activity = {
                activityId: `act_${childId}_${i}_${j}`,
                timestamp: date.toISOString(),
                type: activityType,
                device: devices[Math.floor(Math.random() * devices.length)],
                location: 'Home'
            };

            if (activityType === 'quiz_completed') {
                const questionsTotal = Math.floor(Math.random() * 10) + 10;
                const questionsCorrect = Math.floor(Math.random() * questionsTotal * 0.4) + Math.floor(questionsTotal * 0.6);
                activity.subject = subject;
                activity.topic = topic;
                activity.details = {
                    quizTitle: `${topic} Quiz`,
                    questionsTotal,
                    questionsCorrect,
                    accuracy: Math.round((questionsCorrect / questionsTotal) * 100),
                    timeSpent: Math.floor(Math.random() * 15) + 10,
                    difficulty: Math.floor(Math.random() * 5) + 3
                };
            } else if (activityType === 'lesson_viewed') {
                activity.subject = subject;
                activity.topic = topic;
                activity.timeSpent = Math.floor(Math.random() * 15) + 5;
            } else if (activityType === 'achievement_unlocked') {
                activity.achievement = `${subject} Master Level ${Math.floor(Math.random() * 5) + 1}`;
                activity.subject = subject;
            }

            activities.push(activity);
        }
    }

    return activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};

// Mock data
const mockParentData = {
    parentId: "parent_123",
    parentInfo: {
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        phone: "+91-9876543210",
        relationship: "Mother",
        language: "English",
        timezone: "Asia/Kolkata",
        notificationPreferences: {
            email: true,
            sms: false,
            push: true,
            weeklyDigest: true,
            achievementAlerts: true,
            concernAlerts: true,
            dailySummary: false
        }
    },
    children: [
        {
            childId: "child_001",
            name: "Aarav Johnson",
            age: 10,
            grade: 5,
            avatar: "👦",
            dateOfBirth: "2014-03-15",
            school: "Delhi Public School",
            addedOn: "2024-01-15",

            learningProfile: {
                subjects: ["Mathematics", "Science", "Social Science", "English"],
                interests: ["Space", "Animals", "Geography"],
                learningStyle: "Visual",
                pace: "Fast",
                strengths: ["Mathematics", "Science"],
                weaknesses: ["History", "Grammar"],
                specialNeeds: null,
                preferredStudyTime: "Evening"
            },

            parentalControls: {
                screenTime: {
                    dailyLimit: 60,
                    weeklyLimit: 420,
                    currentDailyUsage: 45,
                    currentWeeklyUsage: 285,
                    scheduleEnabled: true,
                    allowedTimeSlots: [
                        { day: "Monday-Friday", start: "16:00", end: "18:00" },
                        { day: "Saturday-Sunday", start: "10:00", end: "12:00" }
                    ],
                    breakReminders: true,
                    breakInterval: 25,
                    autoLockAfterLimit: true
                },

                contentRestrictions: {
                    allowedSubjects: ["all"],
                    difficultyRange: { min: 3, max: 8 },
                    blockedTopics: [],
                    ageAppropriate: true,
                    requireApproval: false
                },

                features: {
                    allowChat: false,
                    allowLeaderboard: true,
                    allowFriends: true,
                    allowChallenges: true,
                    showAds: false
                },

                safetySettings: {
                    contentFilter: "strict",
                    hidePersonalInfo: true,
                    restrictSharing: true,
                    requirePasswordForSettings: true
                }
            },

            currentStats: {
                todayScreenTime: 45,
                thisWeekScreenTime: 285,
                currentStreak: 12,
                quizzesToday: 3,
                accuracyToday: 85,
                lastActive: new Date().toISOString(),
                totalQuizzes: 156,
                overallAccuracy: 82.3,
                totalLearningTime: 2340
            },

            parentSetGoals: [
                {
                    goalId: "goal_001",
                    type: "screen_time",
                    target: 420,
                    current: 285,
                    deadline: "2024-12-31",
                    status: "on_track",
                    createdBy: "parent",
                    title: "Maintain Weekly Screen Time"
                },
                {
                    goalId: "goal_002",
                    type: "subject_improvement",
                    subject: "History",
                    targetAccuracy: 80,
                    currentAccuracy: 72,
                    deadline: "2025-01-15",
                    status: "needs_attention",
                    createdBy: "parent",
                    title: "Improve History Performance"
                },
                {
                    goalId: "goal_003",
                    type: "daily_practice",
                    target: 30,
                    currentAverage: 28,
                    status: "on_track",
                    createdBy: "parent",
                    title: "Daily Practice Goal"
                }
            ],

            parentNotes: [
                {
                    noteId: "note_001",
                    date: "2024-12-18",
                    content: "Aarav seems to struggle with word problems. Need to practice more real-world applications.",
                    category: "observation",
                    subject: "Mathematics"
                },
                {
                    noteId: "note_002",
                    date: "2024-12-15",
                    content: "Great improvement in Science! Very enthusiastic about space topics.",
                    category: "achievement",
                    subject: "Science"
                }
            ],

            alerts: [
                {
                    alertId: "alert_001",
                    type: "performance_decline",
                    severity: "medium",
                    subject: "History",
                    message: "Accuracy in History has dropped from 78% to 68% over the last 2 weeks",
                    timestamp: "2024-12-19",
                    acknowledged: false,
                    recommendations: [
                        "Schedule additional practice sessions",
                        "Review difficult topics together",
                        "Consider adjusting difficulty level"
                    ]
                },
                {
                    alertId: "alert_002",
                    type: "streak_risk",
                    severity: "low",
                    message: "Aarav hasn't logged in today. 12-day streak at risk!",
                    timestamp: new Date().toISOString(),
                    acknowledged: false
                }
            ],

            recommendations: [
                {
                    recommendationId: "rec_001",
                    type: "content",
                    priority: "high",
                    title: "Focus on History Practice",
                    description: "Based on recent performance, History needs more attention",
                    suggestedAction: "Assign 3 History quizzes this week",
                    subject: "History"
                },
                {
                    recommendationId: "rec_002",
                    type: "schedule",
                    priority: "medium",
                    title: "Adjust Study Time",
                    description: "Aarav performs best between 4-6 PM",
                    suggestedAction: "Schedule main learning sessions during this window"
                }
            ]
        },
        {
            childId: "child_002",
            name: "Ananya Johnson",
            age: 8,
            grade: 3,
            avatar: "👧",
            dateOfBirth: "2016-07-22",
            school: "Delhi Public School",
            addedOn: "2024-01-15",

            learningProfile: {
                subjects: ["Mathematics", "Science", "English", "Arts"],
                interests: ["Drawing", "Stories", "Music"],
                learningStyle: "Kinesthetic",
                pace: "Moderate",
                strengths: ["Arts", "Languages"],
                weaknesses: ["Mathematics"],
                specialNeeds: null,
                preferredStudyTime: "Morning"
            },

            parentalControls: {
                screenTime: {
                    dailyLimit: 45,
                    weeklyLimit: 315,
                    currentDailyUsage: 30,
                    currentWeeklyUsage: 180,
                    scheduleEnabled: true,
                    allowedTimeSlots: [
                        { day: "Monday-Friday", start: "17:00", end: "18:00" },
                        { day: "Saturday-Sunday", start: "09:00", end: "11:00" }
                    ],
                    breakReminders: true,
                    breakInterval: 20,
                    autoLockAfterLimit: true
                },

                contentRestrictions: {
                    allowedSubjects: ["all"],
                    difficultyRange: { min: 1, max: 5 },
                    blockedTopics: [],
                    ageAppropriate: true,
                    requireApproval: false
                },

                features: {
                    allowChat: false,
                    allowLeaderboard: true,
                    allowFriends: false,
                    allowChallenges: false,
                    showAds: false
                },

                safetySettings: {
                    contentFilter: "strict",
                    hidePersonalInfo: true,
                    restrictSharing: true,
                    requirePasswordForSettings: true
                }
            },

            currentStats: {
                todayScreenTime: 30,
                thisWeekScreenTime: 180,
                currentStreak: 8,
                quizzesToday: 2,
                accuracyToday: 75,
                lastActive: new Date().toISOString(),
                totalQuizzes: 89,
                overallAccuracy: 78.5,
                totalLearningTime: 1450
            },

            parentSetGoals: [
                {
                    goalId: "goal_004",
                    type: "subject_improvement",
                    subject: "Mathematics",
                    targetAccuracy: 75,
                    currentAccuracy: 68,
                    deadline: "2025-01-30",
                    status: "needs_attention",
                    createdBy: "parent",
                    title: "Improve Mathematics Skills"
                },
                {
                    goalId: "goal_005",
                    type: "streak",
                    target: 15,
                    current: 8,
                    deadline: "2025-01-10",
                    status: "on_track",
                    createdBy: "parent",
                    title: "Build Learning Streak"
                }
            ],

            parentNotes: [
                {
                    noteId: "note_003",
                    date: "2024-12-17",
                    content: "Ananya loves creative activities. Should incorporate more visual learning for math.",
                    category: "observation",
                    subject: "Mathematics"
                }
            ],

            alerts: [],

            recommendations: [
                {
                    recommendationId: "rec_003",
                    type: "content",
                    priority: "medium",
                    title: "Visual Math Learning",
                    description: "Ananya responds well to visual and hands-on activities",
                    suggestedAction: "Use more interactive math games and visual aids",
                    subject: "Mathematics"
                }
            ]
        }
    ],

    familySettings: {
        sharedRewards: true,
        allowSiblingComparison: true,
        familyChallenges: true,
        combinedReports: true
    },

    communications: [
        {
            messageId: "msg_001",
            type: "weekly_digest",
            subject: "Weekly Learning Summary - Dec 13-19",
            date: "2024-12-19",
            read: true,
            children: ["child_001", "child_002"]
        },
        {
            messageId: "msg_002",
            type: "achievement_alert",
            subject: "Aarav unlocked Math Master Level 5!",
            date: "2024-12-19",
            read: true,
            children: ["child_001"]
        },
        {
            messageId: "msg_003",
            type: "performance_alert",
            subject: "History performance needs attention",
            date: "2024-12-19",
            read: false,
            children: ["child_001"]
        }
    ]
};

export const ParentProvider = ({ children }) => {
    const [parentData, setParentData] = useState(mockParentData);
    const [selectedChildId, setSelectedChildId] = useState(mockParentData.children[0].childId);
    const [activityHistory, setActivityHistory] = useState({});

    // Generate activity history on mount
    useEffect(() => {
        const history = {};
        parentData.children.forEach(child => {
            history[child.childId] = generateActivityHistory(child.childId, 30);
        });
        setActivityHistory(history);
    }, []);

    // Get selected child
    const selectedChild = parentData.children.find(child => child.childId === selectedChildId);

    // Update child data
    const updateChildData = (childId, updates) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId ? { ...child, ...updates } : child
            )
        }));
    };

    // Update parental controls
    const updateParentalControls = (childId, controlType, updates) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId
                    ? {
                        ...child,
                        parentalControls: {
                            ...child.parentalControls,
                            [controlType]: {
                                ...child.parentalControls[controlType],
                                ...updates
                            }
                        }
                    }
                    : child
            )
        }));
    };

    // Add goal
    const addGoal = (childId, goal) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId
                    ? {
                        ...child,
                        parentSetGoals: [...child.parentSetGoals, { ...goal, goalId: `goal_${Date.now()}` }]
                    }
                    : child
            )
        }));
    };

    // Update goal
    const updateGoal = (childId, goalId, updates) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId
                    ? {
                        ...child,
                        parentSetGoals: child.parentSetGoals.map(goal =>
                            goal.goalId === goalId ? { ...goal, ...updates } : goal
                        )
                    }
                    : child
            )
        }));
    };

    // Delete goal
    const deleteGoal = (childId, goalId) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId
                    ? {
                        ...child,
                        parentSetGoals: child.parentSetGoals.filter(goal => goal.goalId !== goalId)
                    }
                    : child
            )
        }));
    };

    // Add parent note
    const addParentNote = (childId, note) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId
                    ? {
                        ...child,
                        parentNotes: [...child.parentNotes, { ...note, noteId: `note_${Date.now()}`, date: new Date().toISOString().split('T')[0] }]
                    }
                    : child
            )
        }));
    };

    // Acknowledge alert
    const acknowledgeAlert = (childId, alertId) => {
        setParentData(prev => ({
            ...prev,
            children: prev.children.map(child =>
                child.childId === childId
                    ? {
                        ...child,
                        alerts: child.alerts.map(alert =>
                            alert.alertId === alertId ? { ...alert, acknowledged: true } : alert
                        )
                    }
                    : child
            )
        }));
    };

    // Update notification preferences
    const updateNotificationPreferences = (preferences) => {
        setParentData(prev => ({
            ...prev,
            parentInfo: {
                ...prev.parentInfo,
                notificationPreferences: {
                    ...prev.parentInfo.notificationPreferences,
                    ...preferences
                }
            }
        }));
    };

    // Mark message as read
    const markMessageAsRead = (messageId) => {
        setParentData(prev => ({
            ...prev,
            communications: prev.communications.map(msg =>
                msg.messageId === messageId ? { ...msg, read: true } : msg
            )
        }));
    };

    // Get activity history for child
    const getActivityHistory = (childId, days = 7) => {
        const history = activityHistory[childId] || [];
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        return history.filter(activity => new Date(activity.timestamp) >= cutoffDate);
    };

    // Get performance data
    const getPerformanceData = (childId) => {
        const history = activityHistory[childId] || [];
        const quizzes = history.filter(a => a.type === 'quiz_completed');

        const subjectPerformance = {};
        quizzes.forEach(quiz => {
            if (!subjectPerformance[quiz.subject]) {
                subjectPerformance[quiz.subject] = {
                    totalQuizzes: 0,
                    totalQuestions: 0,
                    correctAnswers: 0,
                    totalTime: 0
                };
            }
            subjectPerformance[quiz.subject].totalQuizzes++;
            subjectPerformance[quiz.subject].totalQuestions += quiz.details.questionsTotal;
            subjectPerformance[quiz.subject].correctAnswers += quiz.details.questionsCorrect;
            subjectPerformance[quiz.subject].totalTime += quiz.details.timeSpent;
        });

        return Object.entries(subjectPerformance).map(([subject, data]) => ({
            subject,
            accuracy: Math.round((data.correctAnswers / data.totalQuestions) * 100),
            quizzes: data.totalQuizzes,
            timeSpent: data.totalTime
        }));
    };

    const value = {
        parentData,
        selectedChildId,
        selectedChild,
        setSelectedChildId,
        updateChildData,
        updateParentalControls,
        addGoal,
        updateGoal,
        deleteGoal,
        addParentNote,
        acknowledgeAlert,
        updateNotificationPreferences,
        markMessageAsRead,
        getActivityHistory,
        getPerformanceData,
        activityHistory
    };

    return (
        <ParentContext.Provider value={value}>
            {children}
        </ParentContext.Provider>
    );
};
