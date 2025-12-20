import React, { useState } from 'react';
import { useAnalytics } from '../../context/AnalyticsContext';
import { BookOpen, Target, Flame, Clock, Zap, TrendingUp, AlertCircle, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatsCard from '../../components/analytics/StatsCard';
import ProgressChart from '../../components/analytics/ProgressChart';
import SubjectBreakdown from '../../components/analytics/SubjectBreakdown';
import StreakTracker from '../../components/analytics/StreakTracker';
import WeeklyReport from '../../components/analytics/WeeklyReport';
import AchievementTimeline from '../../components/analytics/AchievementTimeline';
import MonthlyGoalProgress from '../../components/analytics/MonthlyGoalProgress';

const ProgressDashboard = () => {
    const { analyticsData, dateRange, setDateRange } = useAnalytics();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { overallStats, subjectProgress, weeklyData, dailyActivity, monthlyGoals,
        streakCalendar, achievements, insights, comparisons } = analyticsData;

    // Get current and previous week data
    const currentWeek = weeklyData[weeklyData.length - 1];
    const previousWeek = weeklyData[weeklyData.length - 2];

    // Get recent achievements (last 3)
    const recentAchievements = achievements.slice(-3).reverse();

    const handleSubjectClick = (subjectName) => {
        navigate(`/analytics/subject/${subjectName}`);
    };

    const getInsightIcon = (iconName) => {
        const icons = {
            'trending-up': TrendingUp,
            'alert-circle': AlertCircle,
            'star': Star,
            'flame': Flame,
            'clock': Clock
        };
        return icons[iconName] || AlertCircle;
    };

    const getInsightColor = (type) => {
        const colors = {
            strength: 'from-green-50 to-emerald-50 border-green-200',
            improvement: 'from-orange-50 to-yellow-50 border-orange-200',
            milestone: 'from-blue-50 to-cyan-50 border-blue-200',
            streak: 'from-red-50 to-orange-50 border-red-200',
            pattern: 'from-purple-50 to-pink-50 border-purple-200'
        };
        return colors[type] || colors.improvement;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Progress Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Track your learning journey and celebrate your achievements
                    </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    <StatsCard
                        value={overallStats.totalQuizzesTaken}
                        label="Total Quizzes"
                        icon={BookOpen}
                        trend={comparisons.vsLastMonth.improvement ? 'up' : 'down'}
                        trendValue={comparisons.vsLastMonth.quizzes}
                        comparison="vs last month"
                        color="blue"
                        loading={loading}
                    />
                    <StatsCard
                        value={`${overallStats.overallAccuracy}%`}
                        label="Overall Accuracy"
                        icon={Target}
                        trend={parseFloat(comparisons.vsLastMonth.accuracy) > 0 ? 'up' : 'down'}
                        trendValue={comparisons.vsLastMonth.accuracy}
                        comparison="vs last month"
                        color="green"
                        loading={loading}
                    />
                    <StatsCard
                        value={overallStats.currentStreak}
                        label="Current Streak"
                        icon={Flame}
                        trend={overallStats.currentStreak >= overallStats.longestStreak ? 'up' : 'stable'}
                        trendValue={`${overallStats.longestStreak} max`}
                        comparison="days in a row"
                        color="orange"
                        loading={loading}
                    />
                    <StatsCard
                        value={Math.floor(overallStats.totalLearningTime / 60)}
                        label="Learning Hours"
                        icon={Clock}
                        trend={parseFloat(comparisons.vsLastMonth.timeSpent) > 0 ? 'up' : 'down'}
                        trendValue={comparisons.vsLastMonth.timeSpent}
                        comparison="vs last month"
                        color="purple"
                        loading={loading}
                    />
                    <StatsCard
                        value={`Level ${overallStats.level}`}
                        label="Current Level"
                        icon={Zap}
                        trend="up"
                        trendValue={`${overallStats.totalXP} XP`}
                        comparison={`Rank #${overallStats.rank}`}
                        color="pink"
                        loading={loading}
                    />
                </div>

                {/* Main Progress Chart */}
                <div className="mb-8">
                    <ProgressChart
                        data={dailyActivity}
                        dateRange={dateRange}
                        onDateRangeChange={setDateRange}
                    />
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Left Column - 2/3 width */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Subject Breakdown */}
                        <SubjectBreakdown
                            subjects={subjectProgress}
                            onSubjectClick={handleSubjectClick}
                        />

                        {/* Insights Section */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Insights</h3>
                            <div className="space-y-3">
                                {insights.slice(0, 4).map((insight, index) => {
                                    const Icon = getInsightIcon(insight.icon);
                                    const colorClass = getInsightColor(insight.type);

                                    return (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg border bg-gradient-to-r ${colorClass} hover:shadow-md transition-shadow`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <Icon className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-800">{insight.message}</p>
                                                    {insight.actionable && (
                                                        <button className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                                            {insight.action}
                                                            <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => navigate('/analytics/insights')}
                                className="mt-4 w-full py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                View All Insights →
                            </button>
                        </div>

                        {/* Strengths and Weaknesses */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Strengths */}
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-green-600" />
                                    Top Strengths
                                </h3>
                                <div className="space-y-3">
                                    {subjectProgress.slice(0, 3).map((subject, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                            <div>
                                                <p className="font-semibold text-gray-900">{subject.subject}</p>
                                                <p className="text-sm text-gray-600">
                                                    {subject.strengths.slice(0, 2).join(', ')}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-bold text-green-600">{subject.accuracy.toFixed(1)}%</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Weaknesses */}
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-orange-600" />
                                    Focus Areas
                                </h3>
                                <div className="space-y-3">
                                    {subjectProgress.map((subject, index) => (
                                        subject.weaknesses.length > 0 && (
                                            <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                                <div>
                                                    <p className="font-semibold text-gray-900">{subject.subject}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {subject.weaknesses[0]}
                                                    </p>
                                                </div>
                                                <button className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                                                    Practice
                                                </button>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - 1/3 width */}
                    <div className="space-y-8">
                        {/* Streak Calendar */}
                        <StreakTracker
                            streakData={streakCalendar}
                            currentStreak={overallStats.currentStreak}
                            longestStreak={overallStats.longestStreak}
                        />

                        {/* Weekly Summary */}
                        <WeeklyReport
                            weekData={currentWeek}
                            previousWeekData={previousWeek}
                        />

                        {/* Monthly Goals */}
                        <MonthlyGoalProgress goals={monthlyGoals} />

                        {/* Recent Achievements */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Achievements</h3>
                            <div className="space-y-3">
                                {recentAchievements.map((achievement) => (
                                    <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Star className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-gray-900 text-sm truncate">{achievement.title}</p>
                                            <p className="text-xs text-gray-600 truncate">{achievement.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => navigate('/analytics/insights')}
                                className="mt-4 w-full py-2 text-sm font-semibold text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                            >
                                View All Achievements →
                            </button>
                        </div>
                    </div>
                </div>

                {/* View Detailed Reports CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Want More Detailed Insights?</h3>
                    <p className="text-blue-100 mb-6">
                        Explore comprehensive reports, subject analysis, and AI-powered recommendations
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => navigate('/analytics/reports')}
                            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            View Detailed Reports
                        </button>
                        <button
                            onClick={() => navigate('/analytics/insights')}
                            className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            AI Insights & Recommendations
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressDashboard;
