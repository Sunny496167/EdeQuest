import React from 'react';
import { useParent } from '../../context/ParentContext';
import ChildSelector from '../../components/parent/ChildSelector';
import { BarChart, Bar, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceOverview = () => {
    const { selectedChild, getPerformanceData, getActivityHistory, selectedChildId } = useParent();

    const performanceData = getPerformanceData(selectedChildId);
    const activities = getActivityHistory(selectedChildId, 30);

    // Prepare radar chart data
    const radarData = performanceData.map(subject => ({
        subject: subject.subject,
        accuracy: subject.accuracy,
        fullMark: 100
    }));

    // Get weekly trend data
    const getWeeklyTrend = () => {
        const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        return weeks.map((week, index) => {
            const weekActivities = activities.filter(a => {
                const activityDate = new Date(a.timestamp);
                const weekStart = new Date();
                weekStart.setDate(weekStart.getDate() - (30 - (index * 7)));
                const weekEnd = new Date(weekStart);
                weekEnd.setDate(weekEnd.getDate() + 7);
                return activityDate >= weekStart && activityDate < weekEnd && a.type === 'quiz_completed';
            });

            const avgAccuracy = weekActivities.length > 0
                ? weekActivities.reduce((sum, a) => sum + (a.details?.accuracy || 0), 0) / weekActivities.length
                : 0;

            return {
                week,
                accuracy: Math.round(avgAccuracy),
                quizzes: weekActivities.length
            };
        });
    };

    const trendData = getWeeklyTrend();

    // Calculate strengths and weaknesses
    const strengths = performanceData.filter(s => s.accuracy >= 80).sort((a, b) => b.accuracy - a.accuracy);
    const weaknesses = performanceData.filter(s => s.accuracy < 70).sort((a, b) => a.accuracy - b.accuracy);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Performance Overview</h1>
                    <ChildSelector />
                </div>

                {selectedChild && (
                    <>
                        {/* Overall Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                                <p className="text-blue-100 text-sm mb-2">Overall Accuracy</p>
                                <p className="text-4xl font-bold">{selectedChild.currentStats.overallAccuracy}%</p>
                                <p className="text-blue-100 text-xs mt-2">Based on {selectedChild.currentStats.totalQuizzes} quizzes</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                                <p className="text-green-100 text-sm mb-2">Total Learning Time</p>
                                <p className="text-4xl font-bold">{Math.floor(selectedChild.currentStats.totalLearningTime / 60)}h</p>
                                <p className="text-green-100 text-xs mt-2">{selectedChild.currentStats.totalLearningTime % 60} minutes</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                                <p className="text-purple-100 text-sm mb-2">Current Streak</p>
                                <p className="text-4xl font-bold">🔥 {selectedChild.currentStats.currentStreak}</p>
                                <p className="text-purple-100 text-xs mt-2">days in a row</p>
                            </div>
                        </div>

                        {/* Subject Performance Radar */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Subject-wise Performance</h2>
                            <ResponsiveContainer width="100%" height={400}>
                                <RadarChart data={radarData}>
                                    <PolarGrid stroke="#E5E7EB" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
                                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6B7280' }} />
                                    <Radar name="Accuracy" dataKey="accuracy" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px' }}
                                        formatter={(value) => [`${value}%`, 'Accuracy']}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Detailed Subject Breakdown */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Detailed Subject Analysis</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {performanceData.map((subject) => (
                                    <div key={subject.subject} className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-bold text-gray-800 text-lg">{subject.subject}</h3>
                                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${subject.accuracy >= 80 ? 'bg-green-100 text-green-700' :
                                                    subject.accuracy >= 70 ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {subject.accuracy}%
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Quizzes Completed:</span>
                                                <span className="font-semibold text-gray-800">{subject.quizzes}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Time Spent:</span>
                                                <span className="font-semibold text-gray-800">{subject.timeSpent} min</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                                <div
                                                    className={`h-2 rounded-full ${subject.accuracy >= 80 ? 'bg-green-500' :
                                                            subject.accuracy >= 70 ? 'bg-yellow-500' :
                                                                'bg-red-500'
                                                        }`}
                                                    style={{ width: `${subject.accuracy}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Trend */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Performance Trend (Last 4 Weeks)</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={trendData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="week" stroke="#6B7280" />
                                    <YAxis stroke="#6B7280" domain={[0, 100]} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px' }}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="accuracy" stroke="#8B5CF6" strokeWidth={3} name="Accuracy %" />
                                    <Line type="monotone" dataKey="quizzes" stroke="#10B981" strokeWidth={3} name="Quizzes" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Strengths & Weaknesses */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Strengths */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-6 border-2 border-green-200">
                                <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">💪</span>
                                    Strengths
                                </h2>
                                {strengths.length > 0 ? (
                                    <div className="space-y-3">
                                        {strengths.map((subject) => (
                                            <div key={subject.subject} className="p-4 bg-white rounded-xl border-2 border-green-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-bold text-gray-800">{subject.subject}</h3>
                                                    <span className="text-green-600 font-bold text-lg">{subject.accuracy}%</span>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    Excellent performance! {subject.quizzes} quizzes completed.
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-green-700">Keep practicing to build strengths!</p>
                                )}
                            </div>

                            {/* Weaknesses */}
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-6 border-2 border-orange-200">
                                <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">📈</span>
                                    Areas for Improvement
                                </h2>
                                {weaknesses.length > 0 ? (
                                    <div className="space-y-3">
                                        {weaknesses.map((subject) => (
                                            <div key={subject.subject} className="p-4 bg-white rounded-xl border-2 border-orange-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-bold text-gray-800">{subject.subject}</h3>
                                                    <span className="text-orange-600 font-bold text-lg">{subject.accuracy}%</span>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    Needs more practice. Consider additional study sessions.
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-orange-700">Great job! No weak areas identified.</p>
                                )}
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Recommendations</h2>
                            <div className="space-y-3">
                                {weaknesses.length > 0 && (
                                    <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                                        <h3 className="font-bold text-blue-800 mb-2">Focus on Weak Subjects</h3>
                                        <p className="text-sm text-gray-700">
                                            Schedule additional practice sessions for {weaknesses.map(w => w.subject).join(', ')} to improve performance.
                                        </p>
                                    </div>
                                )}
                                {strengths.length > 0 && (
                                    <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                                        <h3 className="font-bold text-green-800 mb-2">Maintain Strong Performance</h3>
                                        <p className="text-sm text-gray-700">
                                            Continue regular practice in {strengths.map(s => s.subject).join(', ')} to maintain excellence.
                                        </p>
                                    </div>
                                )}
                                <div className="p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
                                    <h3 className="font-bold text-purple-800 mb-2">Balanced Learning</h3>
                                    <p className="text-sm text-gray-700">
                                        Ensure {selectedChild.name} practices all subjects regularly for well-rounded development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PerformanceOverview;
