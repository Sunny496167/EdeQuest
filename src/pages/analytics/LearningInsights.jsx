import React from 'react';
import { useAnalytics } from '../../context/AnalyticsContext';
import { Brain, TrendingUp, AlertCircle, Clock, Target, Lightbulb, Award, BookOpen, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AchievementTimeline from '../../components/analytics/AchievementTimeline';

const LearningInsights = () => {
    const { analyticsData } = useAnalytics();
    const navigate = useNavigate();

    const { insights, subjectProgress, achievements, overallStats, timeDistribution, monthlyGoals } = analyticsData;

    // Calculate learning style based on time distribution
    const getLearningStyle = () => {
        const peakTime = timeDistribution.byTimeOfDay.reduce((max, current) =>
            current.percentage > max.percentage ? current : max
        );

        if (peakTime.hour.includes('6-9 AM') || peakTime.hour.includes('9-12 PM')) {
            return { style: 'Morning Learner', description: 'You learn best in the morning hours', icon: '🌅' };
        } else if (peakTime.hour.includes('3-6 PM') || peakTime.hour.includes('6-9 PM')) {
            return { style: 'Evening Learner', description: 'You are most productive in the evening', icon: '🌆' };
        }
        return { style: 'Flexible Learner', description: 'You learn well at various times', icon: '⏰' };
    };

    const learningProfile = getLearningStyle();

    // Calculate optimal session length
    const getOptimalSessionLength = () => {
        const avgSessionLength = overallStats.totalLearningTime / overallStats.totalQuizzesTaken;
        return Math.round(avgSessionLength);
    };

    // Calculate focus score (based on consistency)
    const getFocusScore = () => {
        const consistency = (monthlyGoals.daysActive / monthlyGoals.goalDaysActive) * 100;
        return Math.min(Math.round(consistency), 100);
    };

    const categorizeInsights = () => {
        return {
            strengths: insights.filter(i => i.type === 'strength'),
            improvements: insights.filter(i => i.type === 'improvement'),
            patterns: insights.filter(i => i.type === 'pattern'),
            motivational: insights.filter(i => i.type === 'milestone' || i.type === 'streak')
        };
    };

    const categorizedInsights = categorizeInsights();

    // Generate recommendations
    const generateRecommendations = () => {
        const recs = [];

        // Find weakest subject
        const weakestSubject = [...subjectProgress].sort((a, b) => a.accuracy - b.accuracy)[0];
        if (weakestSubject) {
            recs.push({
                title: `Focus on ${weakestSubject.subject}`,
                description: `Your accuracy in ${weakestSubject.subject} is ${weakestSubject.accuracy.toFixed(1)}%. Try 3-4 quizzes this week to improve.`,
                action: 'Start Quiz',
                priority: 'high',
                icon: Target
            });
        }

        // Streak recommendation
        if (overallStats.currentStreak > 0 && overallStats.currentStreak < overallStats.longestStreak) {
            recs.push({
                title: 'Maintain Your Streak',
                description: `You're ${overallStats.longestStreak - overallStats.currentStreak + 1} days away from your longest streak. Keep it up!`,
                action: 'Practice Today',
                priority: 'medium',
                icon: Zap
            });
        }

        // Time-based recommendation
        const bestTime = timeDistribution.byTimeOfDay.reduce((max, current) =>
            current.percentage > max.percentage ? current : max
        );
        recs.push({
            title: 'Optimize Study Time',
            description: `You perform best during ${bestTime.hour}. Schedule important topics during this time.`,
            action: 'View Schedule',
            priority: 'medium',
            icon: Clock
        });

        // Goal-based recommendation
        if (monthlyGoals.completedQuizzes < monthlyGoals.goalQuizzes) {
            const remaining = monthlyGoals.goalQuizzes - monthlyGoals.completedQuizzes;
            recs.push({
                title: 'Monthly Goal Progress',
                description: `Complete ${remaining} more quizzes to reach your monthly goal!`,
                action: 'Take Quiz',
                priority: 'high',
                icon: Target
            });
        }

        return recs;
    };

    const recommendations = generateRecommendations();

    const getPriorityColor = (priority) => {
        const colors = {
            high: 'from-red-50 to-orange-50 border-red-200',
            medium: 'from-yellow-50 to-amber-50 border-yellow-200',
            low: 'from-blue-50 to-cyan-50 border-blue-200'
        };
        return colors[priority] || colors.medium;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/analytics')}
                        className="text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-2 font-medium"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Brain className="w-10 h-10 text-purple-600" />
                        Learning Insights
                    </h1>
                    <p className="text-gray-600">
                        AI-powered insights and personalized recommendations for your learning journey
                    </p>
                </div>

                {/* Learning Profile Card */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white mb-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Lightbulb className="w-7 h-7" />
                        Your Learning Profile
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-4xl mb-2">{learningProfile.icon}</div>
                            <h3 className="font-semibold text-lg mb-1">{learningProfile.style}</h3>
                            <p className="text-sm text-purple-100">{learningProfile.description}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <Clock className="w-8 h-8 mb-2" />
                            <h3 className="font-semibold text-lg mb-1">Optimal Session</h3>
                            <p className="text-2xl font-bold">{getOptimalSessionLength()} min</p>
                            <p className="text-sm text-purple-100">Average session length</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <Target className="w-8 h-8 mb-2" />
                            <h3 className="font-semibold text-lg mb-1">Focus Score</h3>
                            <p className="text-2xl font-bold">{getFocusScore()}/100</p>
                            <p className="text-sm text-purple-100">Based on consistency</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Left Column - Insights */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Strengths Section */}
                        {categorizedInsights.strengths.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                    Your Strengths
                                </h3>
                                <div className="space-y-3">
                                    {categorizedInsights.strengths.map((insight, index) => (
                                        <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                                            <p className="text-gray-800">{insight.message}</p>
                                            {insight.subject && (
                                                <div className="mt-2 flex items-center gap-2">
                                                    <span className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full font-semibold">
                                                        {insight.subject}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Subject mastery levels */}
                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Subject Mastery</h4>
                                    <div className="space-y-3">
                                        {subjectProgress.map((subject) => (
                                            <div key={subject.subject}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="font-medium text-gray-700">{subject.subject}</span>
                                                    <span className="text-gray-600">{subject.accuracy.toFixed(1)}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                                                        style={{ width: `${subject.accuracy}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Areas for Improvement */}
                        {categorizedInsights.improvements.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <AlertCircle className="w-6 h-6 text-orange-600" />
                                    Areas for Improvement
                                </h3>
                                <div className="space-y-3">
                                    {categorizedInsights.improvements.map((insight, index) => (
                                        <div key={index} className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                                            <p className="text-gray-800 mb-2">{insight.message}</p>
                                            {insight.actionable && (
                                                <button className="mt-2 px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                                                    {insight.action}
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Weak topics breakdown */}
                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Topics Needing Practice</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {subjectProgress.map((subject) => (
                                            subject.weaknesses.map((weakness, idx) => (
                                                <div key={`${subject.subject}-${idx}`} className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                                                    <p className="font-semibold text-gray-900 text-sm">{weakness}</p>
                                                    <p className="text-xs text-gray-600">{subject.subject}</p>
                                                    <button className="mt-2 text-xs font-semibold text-orange-600 hover:text-orange-700">
                                                        Practice Now →
                                                    </button>
                                                </div>
                                            ))
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Study Patterns */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-blue-600" />
                                Study Patterns
                            </h3>

                            {categorizedInsights.patterns.map((insight, index) => (
                                <div key={index} className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                                    <p className="text-gray-800">{insight.message}</p>
                                </div>
                            ))}

                            {/* Time distribution chart */}
                            <div className="mt-4">
                                <h4 className="font-semibold text-gray-900 mb-3">Best Study Times</h4>
                                <div className="space-y-2">
                                    {timeDistribution.byTimeOfDay
                                        .sort((a, b) => b.percentage - a.percentage)
                                        .map((time, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className="text-sm font-medium text-gray-700 w-24">{time.hour}</span>
                                                <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-end pr-2"
                                                        style={{ width: `${time.percentage}%` }}
                                                    >
                                                        <span className="text-xs font-semibold text-white">{time.percentage}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                        {/* Motivational Insights */}
                        {categorizedInsights.motivational.length > 0 && (
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md p-6 border border-yellow-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-yellow-600" />
                                    Celebrations & Milestones
                                </h3>
                                <div className="space-y-3">
                                    {categorizedInsights.motivational.map((insight, index) => (
                                        <div key={index} className="p-4 bg-white rounded-lg border border-yellow-300">
                                            <p className="text-gray-800 font-medium">{insight.message}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Recommendations & Achievements */}
                    <div className="space-y-8">
                        {/* Personalized Recommendations */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-600" />
                                Recommendations
                            </h3>
                            <div className="space-y-3">
                                {recommendations.map((rec, index) => {
                                    const Icon = rec.icon;
                                    return (
                                        <div key={index} className={`p-4 rounded-lg border bg-gradient-to-r ${getPriorityColor(rec.priority)}`}>
                                            <div className="flex items-start gap-3">
                                                <Icon className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{rec.title}</h4>
                                                    <p className="text-xs text-gray-700 mb-2">{rec.description}</p>
                                                    <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                                                        {rec.action} →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Achievement Timeline */}
                        <AchievementTimeline achievements={achievements} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningInsights;
