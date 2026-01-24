import React from 'react';
import { Link } from 'react-router-dom';

const ChildProfileCard = ({ child }) => {
    const getStreakColor = (streak) => {
        if (streak >= 10) return 'text-green-600 bg-green-50';
        if (streak >= 5) return 'text-blue-600 bg-blue-50';
        return 'text-gray-600 bg-gray-50';
    };

    const getAccuracyColor = (accuracy) => {
        if (accuracy >= 80) return 'text-green-600';
        if (accuracy >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-4">
                    <div className="text-5xl">{child.avatar}</div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold">{child.name}</h3>
                        <p className="text-blue-100 text-sm">Grade {child.grade} • {child.school}</p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="p-6 space-y-4">
                {/* Streak */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">Current Streak</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStreakColor(child.currentStats.currentStreak)}`}>
                        🔥 {child.currentStats.currentStreak} days
                    </span>
                </div>

                {/* Accuracy */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">Overall Accuracy</span>
                    <span className={`text-lg font-bold ${getAccuracyColor(child.currentStats.overallAccuracy)}`}>
                        {child.currentStats.overallAccuracy}%
                    </span>
                </div>

                {/* Screen Time */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">This Week</span>
                    <span className="text-gray-800 font-semibold">
                        {Math.floor(child.currentStats.thisWeekScreenTime / 60)}h {child.currentStats.thisWeekScreenTime % 60}m
                    </span>
                </div>

                {/* Quizzes */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">Total Quizzes</span>
                    <span className="text-gray-800 font-semibold">{child.currentStats.totalQuizzes}</span>
                </div>

                {/* Alerts */}
                {child.alerts.filter(a => !a.acknowledged).length > 0 && (
                    <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                        <p className="text-yellow-800 text-sm font-medium">
                            ⚠️ {child.alerts.filter(a => !a.acknowledged).length} alert{child.alerts.filter(a => !a.acknowledged).length > 1 ? 's' : ''} need attention
                        </p>
                    </div>
                )}

                {/* Action Button */}
                <Link
                    to={`/parent/child/${child.childId}`}
                    className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ChildProfileCard;
