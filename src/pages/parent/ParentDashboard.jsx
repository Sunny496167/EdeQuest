import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ChildSelector from '../../components/parent/ChildSelector';
import ActivityLogItem from '../../components/parent/ActivityLogItem';
import ScreenTimeWidget from '../../components/parent/ScreenTimeWidget';
import GoalProgressCard from '../../components/parent/GoalProgressCard';
import QuickActions from '../../components/parent/QuickActions';
import AlertBanner from '../../components/parent/AlertBanner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const ParentDashboard = () => {
    const {
        parentData,
        selectedChild,
        getActivityHistory,
        getPerformanceData,
        acknowledgeAlert,
        selectedChildId
    } = useParent();

    const [activityFilter, setActivityFilter] = useState('all');
    const [dateRange, setDateRange] = useState(7); // days

    // Get activity history
    const activities = getActivityHistory(selectedChildId, dateRange);

    // Filter activities
    const filteredActivities = activityFilter === 'all'
        ? activities
        : activities.filter(a => a.type === activityFilter);

    // Get performance data
    const performanceData = getPerformanceData(selectedChildId);

    // Calculate overview stats
    const totalChildren = parentData.children.length;
    const totalWeeklyScreenTime = parentData.children.reduce((sum, child) =>
        sum + child.currentStats.thisWeekScreenTime, 0
    );
    const totalAlerts = parentData.children.reduce((sum, child) =>
        sum + child.alerts.filter(a => !a.acknowledged).length, 0
    );
    const totalAchievements = activities.filter(a => a.type === 'achievement_unlocked').length;

    // Get weekly screen time data for chart
    const getWeeklyScreenTimeData = () => {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const data = days.map((day, index) => {
            const dayActivities = activities.filter(a => {
                const activityDate = new Date(a.timestamp);
                const dayOfWeek = activityDate.getDay();
                return dayOfWeek === (index + 1) % 7;
            });

            const totalTime = dayActivities.reduce((sum, a) => {
                if (a.type === 'quiz_completed' && a.details) {
                    return sum + a.details.timeSpent;
                }
                if (a.type === 'lesson_viewed' && a.timeSpent) {
                    return sum + a.timeSpent;
                }
                return sum;
            }, 0);

            return { day, time: totalTime };
        });
        return data;
    };

    const weeklyData = getWeeklyScreenTimeData();

    // Handle alert acknowledgment
    const handleAcknowledgeAlert = (alertId) => {
        acknowledgeAlert(selectedChildId, alertId);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                Welcome back, {parentData.parentInfo.name.split(' ')[0]}! 👋
                            </h1>
                            <p className="text-gray-600">Here's what's happening with your children's learning</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(Number(e.target.value))}
                                className="px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl font-medium text-gray-700 cursor-pointer hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={7}>Last 7 Days</option>
                                <option value={14}>Last 14 Days</option>
                                <option value={30}>Last 30 Days</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            <span className="text-4xl font-bold">{totalChildren}</span>
                        </div>
                        <p className="text-blue-100 text-sm font-medium">Active Children</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl">⏱️</span>
                            <span className="text-4xl font-bold">{Math.floor(totalWeeklyScreenTime / 60)}h</span>
                        </div>
                        <p className="text-purple-100 text-sm font-medium">Total Screen Time (Week)</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl">🔔</span>
                            <span className="text-4xl font-bold">{totalAlerts}</span>
                        </div>
                        <p className="text-red-100 text-sm font-medium">Pending Alerts</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl">🏆</span>
                            <span className="text-4xl font-bold">{totalAchievements}</span>
                        </div>
                        <p className="text-green-100 text-sm font-medium">Achievements (Week)</p>
                    </div>
                </div>

                {/* Child Selector */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Select Child</h2>
                    <ChildSelector />
                </div>

                {/* Selected Child Dashboard */}
                {selectedChild && (
                    <>
                        {/* At a Glance */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Profile */}
                                <div className="flex items-center gap-4">
                                    <div className="text-6xl">{selectedChild.avatar}</div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">{selectedChild.name}</h2>
                                        <p className="text-gray-600">Grade {selectedChild.grade} • {selectedChild.school}</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Last active: {new Date(selectedChild.currentStats.lastActive).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Today's Summary */}
                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                                        <p className="text-2xl font-bold text-blue-600">{selectedChild.currentStats.todayScreenTime}m</p>
                                        <p className="text-xs text-gray-600 mt-1">Screen Time Today</p>
                                    </div>
                                    <div className="text-center p-3 bg-green-50 rounded-xl">
                                        <p className="text-2xl font-bold text-green-600">{selectedChild.currentStats.quizzesToday}</p>
                                        <p className="text-xs text-gray-600 mt-1">Quizzes Today</p>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                                        <p className="text-2xl font-bold text-purple-600">{selectedChild.currentStats.accuracyToday}%</p>
                                        <p className="text-xs text-gray-600 mt-1">Accuracy Today</p>
                                    </div>
                                    <div className="text-center p-3 bg-orange-50 rounded-xl">
                                        <p className="text-2xl font-bold text-orange-600">🔥 {selectedChild.currentStats.currentStreak}</p>
                                        <p className="text-xs text-gray-600 mt-1">Day Streak</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Alerts */}
                        {selectedChild.alerts.filter(a => !a.acknowledged).length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-4">⚠️ Alerts & Concerns</h2>
                                <AlertBanner
                                    alerts={selectedChild.alerts}
                                    onAcknowledge={handleAcknowledgeAlert}
                                />
                            </div>
                        )}

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Left Column - Activity Feed */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Activity Feed */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                        <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
                                        <select
                                            value={activityFilter}
                                            onChange={(e) => setActivityFilter(e.target.value)}
                                            className="px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 cursor-pointer hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="all">All Activities</option>
                                            <option value="quiz_completed">Quizzes</option>
                                            <option value="lesson_viewed">Lessons</option>
                                            <option value="achievement_unlocked">Achievements</option>
                                            <option value="login">Logins</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3 max-h-[600px] overflow-y-auto">
                                        {filteredActivities.length > 0 ? (
                                            filteredActivities.slice(0, 10).map((activity) => (
                                                <ActivityLogItem key={activity.activityId} activity={activity} />
                                            ))
                                        ) : (
                                            <div className="text-center py-12">
                                                <p className="text-gray-500">No activities found for this filter</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Performance Overview */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-800 mb-6">Subject Performance</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {performanceData.map((subject) => (
                                            <div key={subject.subject} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
                                                <h3 className="font-bold text-gray-800 mb-2">{subject.subject}</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Accuracy:</span>
                                                        <span className={`font-bold ${subject.accuracy >= 80 ? 'text-green-600' : subject.accuracy >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                                                            {subject.accuracy}%
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Quizzes:</span>
                                                        <span className="font-semibold text-gray-800">{subject.quizzes}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Time:</span>
                                                        <span className="font-semibold text-gray-800">{subject.timeSpent} min</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Weekly Screen Time Chart */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-800 mb-6">Weekly Activity Pattern</h2>
                                    <ResponsiveContainer width="100%" height={250}>
                                        <BarChart data={weeklyData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                            <XAxis dataKey="day" stroke="#6B7280" />
                                            <YAxis stroke="#6B7280" />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px' }}
                                                formatter={(value) => [`${value} min`, 'Learning Time']}
                                            />
                                            <Bar dataKey="time" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Right Column - Widgets */}
                            <div className="space-y-6">
                                {/* Screen Time Widget */}
                                <ScreenTimeWidget child={selectedChild} />

                                {/* Goals Progress */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">Goals Progress</h2>
                                    <div className="space-y-4">
                                        {selectedChild.parentSetGoals.length > 0 ? (
                                            selectedChild.parentSetGoals.slice(0, 3).map((goal) => (
                                                <GoalProgressCard key={goal.goalId} goal={goal} />
                                            ))
                                        ) : (
                                            <div className="text-center py-8">
                                                <p className="text-gray-500 mb-4">No goals set yet</p>
                                                <button className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                                                    Set First Goal
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <QuickActions />

                                {/* Recommendations */}
                                {selectedChild.recommendations.length > 0 && (
                                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border-2 border-blue-100">
                                        <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Recommendations</h2>
                                        <div className="space-y-3">
                                            {selectedChild.recommendations.map((rec) => (
                                                <div key={rec.recommendationId} className="p-4 bg-white rounded-xl border-2 border-gray-200">
                                                    <div className="flex items-start gap-2 mb-2">
                                                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${rec.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                            {rec.priority.toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 text-sm mb-1">{rec.title}</h4>
                                                    <p className="text-xs text-gray-600 mb-2">{rec.description}</p>
                                                    <p className="text-xs text-blue-600 font-semibold">→ {rec.suggestedAction}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ParentDashboard;
