import React, { useState } from 'react';
import { useAnalytics } from '../../context/AnalyticsContext';
import { FileText, Download, Printer, Calendar, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import PerformanceRadar from '../../components/analytics/PerformanceRadar';

const PerformanceReports = () => {
    const { analyticsData } = useAnalytics();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overall');
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [dateRange, setDateRange] = useState('month');

    const { overallStats, subjectProgress, weeklyData, accuracyTrend, comparisons } = analyticsData;

    const tabs = [
        { id: 'overall', label: 'Overall Report' },
        { id: 'subject', label: 'By Subject' },
        { id: 'time', label: 'By Time Period' }
    ];

    const handleExport = () => {
        alert('Export functionality would download a PDF report');
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/analytics')}
                        className="text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-2 font-medium"
                    >
                        ← Back to Dashboard
                    </button>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                                <FileText className="w-10 h-10 text-blue-600" />
                                Performance Reports
                            </h1>
                            <p className="text-gray-600">
                                Comprehensive analysis of your learning performance
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleExport}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Export PDF
                            </button>
                            <button
                                onClick={handlePrint}
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                            >
                                <Printer className="w-4 h-4" />
                                Print
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-md p-2 mb-8 border border-gray-200">
                    <div className="flex flex-wrap gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === tab.id
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Overall Report Tab */}
                {activeTab === 'overall' && (
                    <div className="space-y-8">
                        {/* Summary Stats */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Performance Summary</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <p className="text-3xl font-bold text-blue-600">{overallStats.totalQuizzesTaken}</p>
                                    <p className="text-sm text-gray-600 mt-1">Total Quizzes</p>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <p className="text-3xl font-bold text-green-600">{overallStats.overallAccuracy}%</p>
                                    <p className="text-sm text-gray-600 mt-1">Overall Accuracy</p>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <p className="text-3xl font-bold text-purple-600">{Math.floor(overallStats.totalLearningTime / 60)}h</p>
                                    <p className="text-sm text-gray-600 mt-1">Learning Time</p>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-lg">
                                    <p className="text-3xl font-bold text-orange-600">{overallStats.currentStreak}</p>
                                    <p className="text-sm text-gray-600 mt-1">Current Streak</p>
                                </div>
                            </div>

                            {/* Comparison with last month */}
                            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                                <h3 className="font-semibold text-gray-900 mb-3">vs Last Month</h3>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Quizzes</p>
                                        <p className={`text-lg font-bold ${comparisons.vsLastMonth.improvement ? 'text-green-600' : 'text-red-600'}`}>
                                            {comparisons.vsLastMonth.quizzes}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Accuracy</p>
                                        <p className={`text-lg font-bold ${parseFloat(comparisons.vsLastMonth.accuracy) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {comparisons.vsLastMonth.accuracy}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Time</p>
                                        <p className={`text-lg font-bold ${parseFloat(comparisons.vsLastMonth.timeSpent) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {comparisons.vsLastMonth.timeSpent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Trends */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Trends (Last 12 Weeks)</h2>

                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={weeklyData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                        <XAxis
                                            dataKey="week"
                                            stroke="#6B7280"
                                            style={{ fontSize: '10px' }}
                                            angle={-45}
                                            textAnchor="end"
                                            height={100}
                                        />
                                        <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="accuracy" stroke="#3B82F6" strokeWidth={2} name="Accuracy %" />
                                        <Line type="monotone" dataKey="quizzes" stroke="#10B981" strokeWidth={2} name="Quizzes" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Subject Comparison Radar */}
                        <PerformanceRadar subjects={subjectProgress} />

                        {/* Detailed Subject Table */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subject-wise Breakdown</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Subject</th>
                                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Quizzes</th>
                                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Accuracy</th>
                                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Time</th>
                                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Progress</th>
                                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subjectProgress.map((subject, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-medium text-gray-900">{subject.subject}</td>
                                                <td className="text-center py-3 px-4 text-gray-700">{subject.totalQuizzes}</td>
                                                <td className="text-center py-3 px-4">
                                                    <span className={`font-semibold ${subject.accuracy >= 85 ? 'text-green-600' : subject.accuracy >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                                                        {subject.accuracy.toFixed(1)}%
                                                    </span>
                                                </td>
                                                <td className="text-center py-3 px-4 text-gray-700">{subject.timeSpent} min</td>
                                                <td className="text-center py-3 px-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-blue-600"
                                                                style={{ width: `${subject.progress}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-sm text-gray-600">{subject.progress}%</span>
                                                    </div>
                                                </td>
                                                <td className="text-center py-3 px-4">
                                                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${subject.recentTrend === 'improving' ? 'bg-green-100 text-green-700' :
                                                            subject.recentTrend === 'declining' ? 'bg-red-100 text-red-700' :
                                                                'bg-gray-100 text-gray-700'
                                                        }`}>
                                                        {subject.recentTrend}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* By Subject Tab */}
                {activeTab === 'subject' && (
                    <div className="space-y-8">
                        {/* Subject Selector */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Select Subject</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {subjectProgress.map((subject) => (
                                    <button
                                        key={subject.subject}
                                        onClick={() => setSelectedSubject(subject)}
                                        className={`p-4 rounded-lg border-2 transition-all ${selectedSubject?.subject === subject.subject
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-200 hover:border-blue-300'
                                            }`}
                                    >
                                        <p className="font-semibold text-gray-900">{subject.subject}</p>
                                        <p className="text-sm text-gray-600 mt-1">{subject.accuracy.toFixed(1)}% accuracy</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Subject Details */}
                        {selectedSubject && (
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{selectedSubject.subject} Analysis</h2>

                                    {/* Skills Breakdown */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-900 mb-4">Skill Levels</h3>
                                        <div className="space-y-4">
                                            {selectedSubject.skillBreakdown.map((skill, index) => (
                                                <div key={index}>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="font-medium text-gray-700">{skill.skill}</span>
                                                        <span className="text-sm text-gray-600">Level {skill.level} • {skill.progress}%</span>
                                                    </div>
                                                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                                                            style={{ width: `${skill.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Strengths and Weaknesses */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                            <h4 className="font-semibold text-gray-900 mb-3">Strengths</h4>
                                            <ul className="space-y-2">
                                                {selectedSubject.strengths.map((strength, index) => (
                                                    <li key={index} className="flex items-center gap-2 text-gray-700">
                                                        <span className="text-green-600">✓</span>
                                                        {strength}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                            <h4 className="font-semibold text-gray-900 mb-3">Areas to Improve</h4>
                                            <ul className="space-y-2">
                                                {selectedSubject.weaknesses.map((weakness, index) => (
                                                    <li key={index} className="flex items-center gap-2 text-gray-700">
                                                        <span className="text-orange-600">!</span>
                                                        {weakness}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* By Time Period Tab */}
                {activeTab === 'time' && (
                    <div className="space-y-8">
                        {/* Date Range Selector */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Select Time Period</h2>
                            <div className="flex gap-2">
                                {['week', 'month', '3months'].map(range => (
                                    <button
                                        key={range}
                                        onClick={() => setDateRange(range)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all ${dateRange === range
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {range === 'week' ? 'This Week' : range === 'month' ? 'This Month' : 'Last 3 Months'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Weekly Comparison */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Week-over-Week Performance</h2>

                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={weeklyData.slice(-8)}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                        <XAxis
                                            dataKey="week"
                                            stroke="#6B7280"
                                            style={{ fontSize: '10px' }}
                                            angle={-45}
                                            textAnchor="end"
                                            height={100}
                                        />
                                        <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
                                        <Tooltip />
                                        <Bar dataKey="quizzes" fill="#3B82F6" name="Quizzes" />
                                        <Bar dataKey="daysActive" fill="#10B981" name="Days Active" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Accuracy Trend */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accuracy Trend</h2>

                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={accuracyTrend}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                        <XAxis dataKey="date" stroke="#6B7280" style={{ fontSize: '12px' }} />
                                        <YAxis domain={[0, 100]} stroke="#6B7280" style={{ fontSize: '12px' }} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="accuracy" stroke="#10B981" strokeWidth={3} name="Accuracy %" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PerformanceReports;
