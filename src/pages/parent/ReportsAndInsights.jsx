import React, { useState } from 'react';
import { useParent } from '../../context/ParentContext';
import ChildSelector from '../../components/parent/ChildSelector';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportsAndInsights = () => {
    const { selectedChild, getActivityHistory, getPerformanceData, selectedChildId, parentData } = useParent();
    const [reportType, setReportType] = useState('weekly');
    const [selectedFormat, setSelectedFormat] = useState('pdf');

    if (!selectedChild) return null;

    const activities = getActivityHistory(selectedChildId, 30);
    const performanceData = getPerformanceData(selectedChildId);

    // Calculate report data
    const totalQuizzes = activities.filter(a => a.type === 'quiz_completed').length;
    const totalLessons = activities.filter(a => a.type === 'lesson_viewed').length;
    const totalAchievements = activities.filter(a => a.type === 'achievement_unlocked').length;
    const avgAccuracy = selectedChild.currentStats.overallAccuracy;

    // Time distribution data
    const timeDistribution = performanceData.map(subject => ({
        name: subject.subject,
        value: subject.timeSpent
    }));

    const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#EC4899'];

    // Weekly activity data
    const weeklyActivity = [
        { day: 'Mon', quizzes: 5, lessons: 8, time: 45 },
        { day: 'Tue', quizzes: 7, lessons: 6, time: 52 },
        { day: 'Wed', quizzes: 4, lessons: 9, time: 38 },
        { day: 'Thu', quizzes: 6, lessons: 7, time: 48 },
        { day: 'Fri', quizzes: 8, lessons: 5, time: 55 },
        { day: 'Sat', quizzes: 3, lessons: 4, time: 28 },
        { day: 'Sun', quizzes: 2, lessons: 3, time: 22 },
    ];

    const handleGenerateReport = () => {
        alert(`Generating ${reportType} report in ${selectedFormat.toUpperCase()} format...`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Reports & Insights</h1>
                    <ChildSelector />
                </div>

                {/* Report Configuration */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Generate Report</h2>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                            <select
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="daily">Daily Report</option>
                                <option value="weekly">Weekly Report</option>
                                <option value="monthly">Monthly Report</option>
                                <option value="custom">Custom Range</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                            <select
                                value={selectedFormat}
                                onChange={(e) => setSelectedFormat(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="pdf">PDF Document</option>
                                <option value="csv">CSV Spreadsheet</option>
                                <option value="email">Email Summary</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button
                                onClick={handleGenerateReport}
                                className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all"
                            >
                                Generate Report
                            </button>
                        </div>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-blue-100 text-sm mb-1">Total Quizzes</p>
                        <p className="text-4xl font-bold">{totalQuizzes}</p>
                        <p className="text-blue-100 text-xs mt-1">Last 30 days</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-green-100 text-sm mb-1">Avg Accuracy</p>
                        <p className="text-4xl font-bold">{avgAccuracy}%</p>
                        <p className="text-green-100 text-xs mt-1">Overall performance</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-purple-100 text-sm mb-1">Lessons Viewed</p>
                        <p className="text-4xl font-bold">{totalLessons}</p>
                        <p className="text-purple-100 text-xs mt-1">Last 30 days</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md p-5 text-white">
                        <p className="text-orange-100 text-sm mb-1">Achievements</p>
                        <p className="text-4xl font-bold">{totalAchievements}</p>
                        <p className="text-orange-100 text-xs mt-1">Unlocked</p>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Time Distribution */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Time Distribution by Subject</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={timeDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {timeDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Subject Performance */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Subject Performance</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="subject" stroke="#6B7280" angle={-45} textAnchor="end" height={80} />
                                <YAxis stroke="#6B7280" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px' }} />
                                <Bar dataKey="accuracy" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Weekly Activity */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 md:col-span-2">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Activity Overview</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={weeklyActivity}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="day" stroke="#6B7280" />
                                <YAxis stroke="#6B7280" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px' }} />
                                <Legend />
                                <Line type="monotone" dataKey="quizzes" stroke="#8B5CF6" strokeWidth={2} name="Quizzes" />
                                <Line type="monotone" dataKey="lessons" stroke="#3B82F6" strokeWidth={2} name="Lessons" />
                                <Line type="monotone" dataKey="time" stroke="#10B981" strokeWidth={2} name="Time (min)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Insights & Recommendations */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">AI-Generated Insights</h2>
                    <div className="space-y-3">
                        <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                            <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                <span>✅</span>
                                Positive Trend
                            </h3>
                            <p className="text-sm text-gray-700">
                                {selectedChild.name}'s accuracy has improved by 12% over the last two weeks, particularly in Mathematics and Science.
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                            <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                                <span>💡</span>
                                Recommendation
                            </h3>
                            <p className="text-sm text-gray-700">
                                Consider scheduling more practice sessions during weekends when engagement is lower. Current weekend activity is 40% below weekday average.
                            </p>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                            <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                                <span>⚠️</span>
                                Area to Watch
                            </h3>
                            <p className="text-sm text-gray-700">
                                Screen time has increased by 15% this week. Consider reviewing the screen time limits and break schedules.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scheduled Reports */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Scheduled Reports</h2>
                    <div className="space-y-3">
                        <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-gray-800">Weekly Progress Summary</h3>
                                <p className="text-sm text-gray-600">Every Monday at 9:00 AM via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-gray-800">Monthly Performance Report</h3>
                                <p className="text-sm text-gray-600">First day of each month via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsAndInsights;
