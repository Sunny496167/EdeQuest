import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown, Award, Target } from 'lucide-react';

const WeeklyReport = ({ weekData, previousWeekData }) => {
    if (!weekData) return null;

    // Prepare daily data for mini chart
    const dailyData = [
        { day: 'Mon', value: weekData.daysActive >= 1 ? 1 : 0 },
        { day: 'Tue', value: weekData.daysActive >= 2 ? 1 : 0 },
        { day: 'Wed', value: weekData.daysActive >= 3 ? 1 : 0 },
        { day: 'Thu', value: weekData.daysActive >= 4 ? 1 : 0 },
        { day: 'Fri', value: weekData.daysActive >= 5 ? 1 : 0 },
        { day: 'Sat', value: weekData.daysActive >= 6 ? 1 : 0 },
        { day: 'Sun', value: weekData.daysActive >= 7 ? 1 : 0 }
    ];

    const calculateChange = (current, previous) => {
        if (!previous || previous === 0) return 0;
        return (((current - previous) / previous) * 100).toFixed(1);
    };

    const quizzesChange = previousWeekData ? calculateChange(weekData.quizzes, previousWeekData.quizzes) : 0;
    const accuracyChange = previousWeekData ? (weekData.accuracy - previousWeekData.accuracy).toFixed(1) : 0;
    const timeChange = previousWeekData ? calculateChange(weekData.timeSpent, previousWeekData.timeSpent) : 0;

    const getBestSubject = () => {
        // This would come from detailed data, using placeholder
        return 'Mathematics';
    };

    const getMostImproved = () => {
        return 'Science';
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Weekly Report</h3>
                    <p className="text-sm text-gray-600">{weekData.week}</p>
                </div>
                <Award className="w-8 h-8 text-yellow-500" />
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Quizzes</p>
                    <p className="text-2xl font-bold text-blue-600">{weekData.quizzes}</p>
                    {previousWeekData && (
                        <div className="flex items-center gap-1 mt-1">
                            {quizzesChange >= 0 ? (
                                <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                                <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-xs font-medium ${quizzesChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {quizzesChange > 0 ? '+' : ''}{quizzesChange}%
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 mb-1">Accuracy</p>
                    <p className="text-2xl font-bold text-green-600">{weekData.accuracy}%</p>
                    {previousWeekData && (
                        <div className="flex items-center gap-1 mt-1">
                            {accuracyChange >= 0 ? (
                                <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                                <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-xs font-medium ${accuracyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {accuracyChange > 0 ? '+' : ''}{accuracyChange}%
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm text-gray-600 mb-1">Time Spent</p>
                    <p className="text-2xl font-bold text-purple-600">{weekData.timeSpent} min</p>
                    {previousWeekData && (
                        <div className="flex items-center gap-1 mt-1">
                            {timeChange >= 0 ? (
                                <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                                <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-xs font-medium ${timeChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {timeChange > 0 ? '+' : ''}{timeChange}%
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-gray-600 mb-1">Days Active</p>
                    <p className="text-2xl font-bold text-orange-600">{weekData.daysActive}/7</p>
                    <p className="text-xs text-gray-600 mt-1">
                        {weekData.daysActive === 7 ? '🎉 Perfect week!' : `${7 - weekData.daysActive} days missed`}
                    </p>
                </div>
            </div>

            {/* Daily Activity Chart */}
            <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Daily Activity</p>
                <div className="h-16">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dailyData}>
                            <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Best Subject</p>
                        <p className="text-sm text-gray-600">{getBestSubject()} - Keep excelling!</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Most Improved</p>
                        <p className="text-sm text-gray-600">{getMostImproved()} - Great progress!</p>
                    </div>
                </div>
            </div>

            {/* Next Week Focus */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Focus for Next Week</p>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Practice more Physics concepts</li>
                    <li>• Maintain your {weekData.daysActive}-day activity streak</li>
                    <li>• Aim for 85%+ accuracy in all subjects</li>
                </ul>
            </div>
        </div>
    );
};

export default WeeklyReport;
