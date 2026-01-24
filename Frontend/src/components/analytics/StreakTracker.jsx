import React, { useState } from 'react';
import { Flame, ChevronLeft, ChevronRight } from 'lucide-react';

const StreakTracker = ({ streakData, currentStreak, longestStreak }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const getIntensityColor = (intensity) => {
        const colors = {
            0: 'bg-gray-100',
            1: 'bg-green-200',
            2: 'bg-green-400',
            3: 'bg-green-600',
            4: 'bg-green-800'
        };
        return colors[intensity] || colors[0];
    };

    const navigateMonth = (direction) => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(newDate.getMonth() + direction);
        setCurrentMonth(newDate);
    };

    const isCurrentMonth = () => {
        const now = new Date();
        return currentMonth.getMonth() === now.getMonth() &&
            currentMonth.getFullYear() === now.getFullYear();
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(
                <div key={`empty-${i}`} className="w-8 h-8"></div>
            );
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isActive = streakData.activeDays.includes(day);
            const isPerfect = streakData.perfectDays.includes(day);
            const intensity = streakData.intensity[dateStr] || 0;
            const isToday = isCurrentMonth() && day === new Date().getDate();

            days.push(
                <div
                    key={day}
                    className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-medium transition-all hover:scale-110 cursor-pointer relative group
            ${isActive ? getIntensityColor(intensity) : 'bg-gray-100'}
            ${isPerfect ? 'ring-2 ring-yellow-400' : ''}
            ${isToday ? 'ring-2 ring-blue-500' : ''}
            ${isActive ? 'text-white' : 'text-gray-400'}
          `}
                    title={`${currentMonth.toLocaleDateString('en-US', { month: 'long' })} ${day}`}
                >
                    {day}

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
                        <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                            <p className="font-semibold">
                                {currentMonth.toLocaleDateString('en-US', { month: 'long' })} {day}
                            </p>
                            {isActive ? (
                                <>
                                    <p>Intensity: {intensity}/4</p>
                                    {isPerfect && <p className="text-yellow-400">⭐ Perfect Day!</p>}
                                </>
                            ) : (
                                <p>No activity</p>
                            )}
                        </div>
                    </div>
                </div>
            );
        }

        return days;
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {/* Header with streak stats */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Activity Streak</h3>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <div>
                                <p className="text-2xl font-bold text-orange-500">{currentStreak}</p>
                                <p className="text-xs text-gray-600">Current Streak</p>
                            </div>
                        </div>
                        <div className="border-l border-gray-300 pl-4">
                            <p className="text-2xl font-bold text-gray-700">{longestStreak}</p>
                            <p className="text-xs text-gray-600">Longest Streak</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Month navigation */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <h4 className="text-lg font-semibold text-gray-900">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h4>

                <button
                    onClick={() => navigateMonth(1)}
                    disabled={isCurrentMonth()}
                    className={`p-2 rounded-lg transition-colors ${isCurrentMonth()
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="w-8 h-6 flex items-center justify-center text-xs font-medium text-gray-600">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
                {renderCalendar()}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Less</span>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map(level => (
                            <div
                                key={level}
                                className={`w-4 h-4 rounded ${getIntensityColor(level)}`}
                            ></div>
                        ))}
                    </div>
                    <span className="text-xs text-gray-600">More</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-400 ring-2 ring-yellow-400"></div>
                    <span className="text-xs text-gray-600">Perfect Day</span>
                </div>
            </div>

            {/* Motivation message */}
            <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                <p className="text-sm text-gray-700">
                    {currentStreak === 0 ? (
                        "Start your streak today! Complete a quiz to begin."
                    ) : currentStreak >= longestStreak ? (
                        `🎉 Amazing! You're on your longest streak ever!`
                    ) : (
                        `Keep going! Just ${longestStreak - currentStreak + 1} more days to beat your record!`
                    )}
                </p>
            </div>
        </div>
    );
};

export default StreakTracker;
