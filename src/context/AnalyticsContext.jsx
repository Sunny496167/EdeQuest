import React, { createContext, useContext, useState, useMemo } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics must be used within an AnalyticsProvider');
    }
    return context;
};

// Helper function to generate dates
const generateDateRange = (days) => {
    const dates = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
};

// Helper function to generate random number in range
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Helper function to generate realistic accuracy with trend
const generateAccuracyWithTrend = (baseAccuracy, dayIndex, totalDays, trend = 'improving') => {
    const variance = Math.random() * 10 - 5; // -5 to +5
    let trendEffect = 0;

    if (trend === 'improving') {
        trendEffect = (dayIndex / totalDays) * 10; // Up to +10%
    } else if (trend === 'declining') {
        trendEffect = -(dayIndex / totalDays) * 10; // Up to -10%
    }

    return Math.min(100, Math.max(60, baseAccuracy + variance + trendEffect));
};

export const AnalyticsProvider = ({ children }) => {
    // Generate mock data for 90 days
    const generateMockData = useMemo(() => {
        const dates = generateDateRange(90);
        const today = new Date().toISOString().split('T')[0];

        // Generate daily activity data
        const dailyActivity = dates.map((date, index) => {
            const isActive = Math.random() > 0.2; // 80% chance of being active
            const quizzes = isActive ? randomInRange(1, 5) : 0;
            const questionsPerQuiz = 10;

            return {
                date,
                quizzes,
                accuracy: isActive ? generateAccuracyWithTrend(80, index, 90, 'improving') : 0,
                timeSpent: isActive ? quizzes * randomInRange(10, 20) : 0,
                questionsAnswered: quizzes * questionsPerQuiz,
                subjects: isActive ? ['Mathematics', 'Science', 'Social Science'].slice(0, randomInRange(1, 3)) : []
            };
        });

        // Calculate streak data
        const calculateStreaks = () => {
            let currentStreak = 0;
            let longestStreak = 0;
            let tempStreak = 0;

            // Calculate from most recent backwards
            for (let i = dailyActivity.length - 1; i >= 0; i--) {
                if (dailyActivity[i].quizzes > 0) {
                    tempStreak++;
                    if (i === dailyActivity.length - 1 || currentStreak === 0) {
                        currentStreak = tempStreak;
                    }
                } else {
                    if (tempStreak > longestStreak) {
                        longestStreak = tempStreak;
                    }
                    tempStreak = 0;
                }
            }

            longestStreak = Math.max(longestStreak, tempStreak, currentStreak);

            return { currentStreak, longestStreak };
        };

        const { currentStreak, longestStreak } = calculateStreaks();

        // Generate streak calendar for current month
        const generateStreakCalendar = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth() + 1;

            const activeDays = [];
            const perfectDays = [];
            const intensity = {};

            dailyActivity.forEach(day => {
                const dayDate = new Date(day.date);
                if (dayDate.getMonth() + 1 === currentMonth && dayDate.getFullYear() === currentYear) {
                    if (day.quizzes > 0) {
                        activeDays.push(dayDate.getDate());

                        // Perfect day if 3+ quizzes and 85%+ accuracy
                        if (day.quizzes >= 3 && day.accuracy >= 85) {
                            perfectDays.push(dayDate.getDate());
                        }

                        // Intensity based on time spent
                        let intensityLevel = 1;
                        if (day.timeSpent > 60) intensityLevel = 4;
                        else if (day.timeSpent > 40) intensityLevel = 3;
                        else if (day.timeSpent > 20) intensityLevel = 2;

                        intensity[day.date] = intensityLevel;
                    }
                }
            });

            return {
                currentYear,
                currentMonth,
                activeDays,
                perfectDays,
                intensity
            };
        };

        // Calculate overall stats
        const totalQuizzes = dailyActivity.reduce((sum, day) => sum + day.quizzes, 0);
        const totalQuestions = dailyActivity.reduce((sum, day) => sum + day.questionsAnswered, 0);
        const totalTime = dailyActivity.reduce((sum, day) => sum + day.timeSpent, 0);
        const activeDays = dailyActivity.filter(day => day.quizzes > 0);
        const overallAccuracy = activeDays.length > 0
            ? activeDays.reduce((sum, day) => sum + day.accuracy, 0) / activeDays.length
            : 0;

        // Subject progress data
        const subjectProgress = [
            {
                subject: 'Mathematics',
                icon: 'calculator',
                totalQuizzes: Math.floor(totalQuizzes * 0.32),
                accuracy: 85.2,
                timeSpent: Math.floor(totalTime * 0.32),
                lastActivity: dates[dates.length - 1],
                topicsCompleted: 45,
                totalTopics: 60,
                progress: 75,
                strengths: ['Algebra', 'Fractions'],
                weaknesses: ['Geometry', 'Word Problems'],
                recentTrend: 'improving',
                skillBreakdown: [
                    { skill: 'Algebra', level: 8, progress: 80 },
                    { skill: 'Geometry', level: 5, progress: 50 },
                    { skill: 'Fractions', level: 9, progress: 90 },
                    { skill: 'Decimals', level: 7, progress: 70 }
                ]
            },
            {
                subject: 'Science',
                icon: 'flask',
                totalQuizzes: Math.floor(totalQuizzes * 0.28),
                accuracy: 79.8,
                timeSpent: Math.floor(totalTime * 0.28),
                lastActivity: dates[dates.length - 2],
                topicsCompleted: 38,
                totalTopics: 50,
                progress: 76,
                strengths: ['Biology', 'Chemistry'],
                weaknesses: ['Physics'],
                recentTrend: 'stable',
                skillBreakdown: [
                    { skill: 'Physics', level: 6, progress: 60 },
                    { skill: 'Chemistry', level: 8, progress: 85 },
                    { skill: 'Biology', level: 9, progress: 88 }
                ]
            },
            {
                subject: 'Social Science',
                icon: 'globe',
                totalQuizzes: Math.floor(totalQuizzes * 0.22),
                accuracy: 82.5,
                timeSpent: Math.floor(totalTime * 0.22),
                lastActivity: dates[dates.length - 3],
                topicsCompleted: 32,
                totalTopics: 45,
                progress: 71,
                strengths: ['History', 'Geography'],
                weaknesses: ['Civics'],
                recentTrend: 'improving',
                skillBreakdown: [
                    { skill: 'History', level: 8, progress: 82 },
                    { skill: 'Geography', level: 7, progress: 75 },
                    { skill: 'Civics', level: 6, progress: 65 }
                ]
            },
            {
                subject: 'Languages',
                icon: 'book-open',
                totalQuizzes: Math.floor(totalQuizzes * 0.18),
                accuracy: 88.3,
                timeSpent: Math.floor(totalTime * 0.18),
                lastActivity: dates[dates.length - 1],
                topicsCompleted: 28,
                totalTopics: 40,
                progress: 70,
                strengths: ['Grammar', 'Vocabulary'],
                weaknesses: ['Comprehension'],
                recentTrend: 'stable',
                skillBreakdown: [
                    { skill: 'Grammar', level: 9, progress: 92 },
                    { skill: 'Vocabulary', level: 8, progress: 85 },
                    { skill: 'Comprehension', level: 7, progress: 72 }
                ]
            }
        ];

        // Weekly data (last 12 weeks)
        const weeklyData = [];
        for (let i = 11; i >= 0; i--) {
            const weekStart = 90 - (i * 7) - 7;
            const weekEnd = 90 - (i * 7);
            const weekDays = dailyActivity.slice(weekStart, weekEnd);

            const weekQuizzes = weekDays.reduce((sum, day) => sum + day.quizzes, 0);
            const weekActiveDays = weekDays.filter(day => day.quizzes > 0);
            const weekAccuracy = weekActiveDays.length > 0
                ? weekActiveDays.reduce((sum, day) => sum + day.accuracy, 0) / weekActiveDays.length
                : 0;
            const weekTime = weekDays.reduce((sum, day) => sum + day.timeSpent, 0);

            const startDate = new Date(dates[weekStart]);
            const endDate = new Date(dates[Math.min(weekEnd - 1, dates.length - 1)]);

            weeklyData.push({
                week: `Week ${12 - i} (${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})`,
                quizzes: weekQuizzes,
                accuracy: parseFloat(weekAccuracy.toFixed(1)),
                timeSpent: weekTime,
                daysActive: weekActiveDays.length
            });
        }

        // Monthly goals
        const currentMonthDays = dailyActivity.slice(-30);
        const monthlyGoals = {
            month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            goalMinutes: 600,
            completedMinutes: currentMonthDays.reduce((sum, day) => sum + day.timeSpent, 0),
            goalQuizzes: 80,
            completedQuizzes: currentMonthDays.reduce((sum, day) => sum + day.quizzes, 0),
            targetAccuracy: 85,
            currentAccuracy: parseFloat(overallAccuracy.toFixed(1)),
            daysActive: currentMonthDays.filter(day => day.quizzes > 0).length,
            goalDaysActive: 25
        };

        // Achievements
        const achievements = [
            {
                id: 'ach_1',
                title: 'First Steps',
                description: 'Complete your first quiz',
                icon: 'trophy',
                unlockedAt: dates[5],
                category: 'milestone'
            },
            {
                id: 'ach_2',
                title: 'Week Warrior',
                description: 'Maintain a 7-day streak',
                icon: 'flame',
                unlockedAt: dates[20],
                category: 'streak'
            },
            {
                id: 'ach_3',
                title: 'Math Master',
                description: 'Score 90% or higher in 10 Math quizzes',
                icon: 'star',
                unlockedAt: dates[35],
                category: 'subject'
            },
            {
                id: 'ach_4',
                title: 'Century Club',
                description: 'Complete 100 quizzes',
                icon: 'award',
                unlockedAt: dates[50],
                category: 'milestone'
            },
            {
                id: 'ach_5',
                title: 'Perfect Score',
                description: 'Get 100% on any quiz',
                icon: 'target',
                unlockedAt: dates[15],
                category: 'performance'
            },
            {
                id: 'ach_6',
                title: 'Early Bird',
                description: 'Complete a quiz before 8 AM',
                icon: 'sunrise',
                unlockedAt: dates[28],
                category: 'special'
            }
        ];

        // Insights
        const insights = [
            {
                type: 'strength',
                message: "You're excelling in Mathematics! Keep up the great work.",
                subject: 'Mathematics',
                icon: 'trending-up',
                priority: 'high'
            },
            {
                type: 'improvement',
                message: 'Physics concepts need more practice. Try 2-3 quizzes this week.',
                subject: 'Science',
                icon: 'alert-circle',
                priority: 'medium',
                actionable: true,
                action: 'Start Physics Quiz'
            },
            {
                type: 'milestone',
                message: `You're only ${Math.ceil((1300 - (totalQuizzes * 10)) / 10)} quizzes away from reaching Level 13!`,
                icon: 'star',
                priority: 'high'
            },
            {
                type: 'streak',
                message: `Amazing! You've maintained a ${currentStreak}-day streak. Just ${longestStreak - currentStreak + 1} more days to beat your record!`,
                icon: 'flame',
                priority: 'high'
            },
            {
                type: 'pattern',
                message: 'You learn best between 3-6 PM. Try to schedule study sessions during this time.',
                icon: 'clock',
                priority: 'medium'
            }
        ];

        // Time distribution
        const timeDistribution = {
            bySubject: subjectProgress.map(subject => ({
                subject: subject.subject,
                percentage: Math.round((subject.timeSpent / totalTime) * 100),
                minutes: subject.timeSpent
            })),
            byDayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => {
                const dayData = dailyActivity.filter(d => new Date(d.date).getDay() === index);
                return {
                    day,
                    quizzes: dayData.reduce((sum, d) => sum + d.quizzes, 0),
                    timeSpent: dayData.reduce((sum, d) => sum + d.timeSpent, 0)
                };
            }),
            byTimeOfDay: [
                { hour: '6-9 AM', percentage: 15 },
                { hour: '9-12 PM', percentage: 8 },
                { hour: '12-3 PM', percentage: 12 },
                { hour: '3-6 PM', percentage: 35 },
                { hour: '6-9 PM', percentage: 25 },
                { hour: '9-12 AM', percentage: 5 }
            ]
        };

        // Accuracy trend (weekly averages for last 12 weeks)
        const accuracyTrend = weeklyData.map((week, index) => ({
            date: week.week.split('(')[1].split('-')[0],
            accuracy: parseFloat(week.accuracy.toFixed(1))
        }));

        // Comparisons
        const lastMonthData = dailyActivity.slice(-60, -30);
        const currentMonthData = dailyActivity.slice(-30);

        const lastMonthQuizzes = lastMonthData.reduce((sum, day) => sum + day.quizzes, 0);
        const currentMonthQuizzes = currentMonthData.reduce((sum, day) => sum + day.quizzes, 0);
        const quizzesChange = lastMonthQuizzes > 0
            ? (((currentMonthQuizzes - lastMonthQuizzes) / lastMonthQuizzes) * 100).toFixed(1)
            : 0;

        const lastMonthActiveDays = lastMonthData.filter(day => day.quizzes > 0);
        const currentMonthActiveDays = currentMonthData.filter(day => day.quizzes > 0);

        const lastMonthAccuracy = lastMonthActiveDays.length > 0
            ? lastMonthActiveDays.reduce((sum, day) => sum + day.accuracy, 0) / lastMonthActiveDays.length
            : 0;
        const currentMonthAccuracy = currentMonthActiveDays.length > 0
            ? currentMonthActiveDays.reduce((sum, day) => sum + day.accuracy, 0) / currentMonthActiveDays.length
            : 0;
        const accuracyChange = (currentMonthAccuracy - lastMonthAccuracy).toFixed(1);

        const lastMonthTime = lastMonthData.reduce((sum, day) => sum + day.timeSpent, 0);
        const currentMonthTime = currentMonthData.reduce((sum, day) => sum + day.timeSpent, 0);
        const timeChange = lastMonthTime > 0
            ? (((currentMonthTime - lastMonthTime) / lastMonthTime) * 100).toFixed(1)
            : 0;

        const comparisons = {
            vsLastMonth: {
                quizzes: `${quizzesChange > 0 ? '+' : ''}${quizzesChange}%`,
                accuracy: `${accuracyChange > 0 ? '+' : ''}${accuracyChange}%`,
                timeSpent: `${timeChange > 0 ? '+' : ''}${timeChange}%`,
                improvement: quizzesChange > 0 && accuracyChange > 0
            },
            vsClassAverage: {
                accuracy: '+5.3%',
                quizzes: '+12',
                rank: 'Top 15%'
            }
        };

        return {
            userId: 'user_123',
            overallStats: {
                totalQuizzesTaken: totalQuizzes,
                totalQuestionsAnswered: totalQuestions,
                overallAccuracy: parseFloat(overallAccuracy.toFixed(1)),
                totalLearningTime: totalTime,
                currentStreak,
                longestStreak,
                level: 12,
                totalXP: totalQuizzes * 10,
                rank: 156,
                achievementsUnlocked: achievements.length
            },
            subjectProgress,
            weeklyData,
            dailyActivity,
            monthlyGoals,
            streakCalendar: generateStreakCalendar(),
            achievements,
            insights,
            timeDistribution,
            accuracyTrend,
            comparisons
        };
    }, []);

    const [analyticsData] = useState(generateMockData);
    const [dateRange, setDateRange] = useState('30'); // days
    const [selectedSubject, setSelectedSubject] = useState(null);

    // Helper functions for filtering and calculations
    const getFilteredData = (days) => {
        const filtered = analyticsData.dailyActivity.slice(-days);
        return filtered;
    };

    const calculateTrend = (data, metric) => {
        if (data.length < 2) return 'stable';

        const firstHalf = data.slice(0, Math.floor(data.length / 2));
        const secondHalf = data.slice(Math.floor(data.length / 2));

        const firstAvg = firstHalf.reduce((sum, d) => sum + (d[metric] || 0), 0) / firstHalf.length;
        const secondAvg = secondHalf.reduce((sum, d) => sum + (d[metric] || 0), 0) / secondHalf.length;

        const change = ((secondAvg - firstAvg) / firstAvg) * 100;

        if (change > 5) return 'improving';
        if (change < -5) return 'declining';
        return 'stable';
    };

    const getSubjectData = (subjectName) => {
        return analyticsData.subjectProgress.find(s => s.subject === subjectName);
    };

    const value = {
        analyticsData,
        dateRange,
        setDateRange,
        selectedSubject,
        setSelectedSubject,
        getFilteredData,
        calculateTrend,
        getSubjectData
    };

    return (
        <AnalyticsContext.Provider value={value}>
            {children}
        </AnalyticsContext.Provider>
    );
};
