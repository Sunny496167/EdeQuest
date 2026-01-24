import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ScreenTimeWidget = ({ child }) => {
    const { screenTime } = child.parentalControls;
    const { currentDailyUsage, dailyLimit, currentWeeklyUsage, weeklyLimit } = screenTime;

    const dailyPercentage = Math.min((currentDailyUsage / dailyLimit) * 100, 100);
    const weeklyPercentage = Math.min((currentWeeklyUsage / weeklyLimit) * 100, 100);

    const getColor = (percentage) => {
        if (percentage >= 90) return '#EF4444'; // Red
        if (percentage >= 75) return '#F59E0B'; // Orange
        return '#10B981'; // Green
    };

    const dailyData = [
        { name: 'Used', value: currentDailyUsage },
        { name: 'Remaining', value: Math.max(dailyLimit - currentDailyUsage, 0) }
    ];

    const weeklyData = [
        { name: 'Used', value: currentWeeklyUsage },
        { name: 'Remaining', value: Math.max(weeklyLimit - currentWeeklyUsage, 0) }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 border-2 border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                Screen Time
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Daily */}
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-3">Today</p>
                    <div className="relative w-40 h-40 mx-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={dailyData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={70}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                >
                                    <Cell fill={getColor(dailyPercentage)} />
                                    <Cell fill="#E5E7EB" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-gray-800">{currentDailyUsage}</span>
                            <span className="text-xs text-gray-500">of {dailyLimit} min</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="h-2 rounded-full transition-all"
                                style={{
                                    width: `${dailyPercentage}%`,
                                    backgroundColor: getColor(dailyPercentage)
                                }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{Math.round(dailyPercentage)}% used</p>
                    </div>
                </div>

                {/* Weekly */}
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-3">This Week</p>
                    <div className="relative w-40 h-40 mx-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={weeklyData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={70}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                >
                                    <Cell fill={getColor(weeklyPercentage)} />
                                    <Cell fill="#E5E7EB" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-gray-800">{Math.floor(currentWeeklyUsage / 60)}h</span>
                            <span className="text-xs text-gray-500">{currentWeeklyUsage % 60}m</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="h-2 rounded-full transition-all"
                                style={{
                                    width: `${weeklyPercentage}%`,
                                    backgroundColor: getColor(weeklyPercentage)
                                }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{Math.round(weeklyPercentage)}% used</p>
                    </div>
                </div>
            </div>

            {/* Status Message */}
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                    {dailyPercentage >= 90 ? (
                        <span className="text-red-600 font-semibold">⚠️ Daily limit almost reached!</span>
                    ) : dailyPercentage >= 75 ? (
                        <span className="text-orange-600 font-semibold">⏰ Getting close to daily limit</span>
                    ) : (
                        <span className="text-green-600 font-semibold">✅ Within healthy limits</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ScreenTimeWidget;
