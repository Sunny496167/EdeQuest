import React, { useState } from 'react';

const ActivityLogItem = ({ activity }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getActivityIcon = (type) => {
        switch (type) {
            case 'quiz_completed':
                return '📝';
            case 'lesson_viewed':
                return '📚';
            case 'achievement_unlocked':
                return '🏆';
            case 'login':
                return '🔐';
            default:
                return '📌';
        }
    };

    const getActivityColor = (type) => {
        switch (type) {
            case 'quiz_completed':
                return 'bg-blue-50 border-blue-200';
            case 'lesson_viewed':
                return 'bg-green-50 border-green-200';
            case 'achievement_unlocked':
                return 'bg-yellow-50 border-yellow-200';
            case 'login':
                return 'bg-gray-50 border-gray-200';
            default:
                return 'bg-gray-50 border-gray-200';
        }
    };

    const getAccuracyColor = (accuracy) => {
        if (accuracy >= 80) return 'text-green-600 bg-green-100';
        if (accuracy >= 70) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

        if (diffInHours < 24) {
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        }
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

    const getActivityTitle = () => {
        switch (activity.type) {
            case 'quiz_completed':
                return activity.details?.quizTitle || 'Quiz Completed';
            case 'lesson_viewed':
                return `${activity.topic} Lesson`;
            case 'achievement_unlocked':
                return activity.achievement;
            case 'login':
                return 'Logged In';
            default:
                return 'Activity';
        }
    };

    return (
        <div className={`border-2 rounded-xl p-4 transition-all ${getActivityColor(activity.type)} ${isExpanded ? 'shadow-md' : 'hover:shadow-md'}`}>
            <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="text-2xl flex-shrink-0">{getActivityIcon(activity.type)}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base">{getActivityTitle()}</h4>
                            <p className="text-xs text-gray-500 mt-1">{formatTime(activity.timestamp)}</p>
                        </div>
                        {activity.subject && (
                            <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 border border-gray-200 flex-shrink-0">
                                {activity.subject}
                            </span>
                        )}
                    </div>

                    {/* Quick Stats for Quiz */}
                    {activity.type === 'quiz_completed' && activity.details && (
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className={`px-2 py-1 rounded-lg text-xs font-bold ${getAccuracyColor(activity.details.accuracy)}`}>
                                {activity.details.accuracy}% Accuracy
                            </span>
                            <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-600 border border-gray-200">
                                {activity.details.questionsCorrect}/{activity.details.questionsTotal} Correct
                            </span>
                            <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-600 border border-gray-200">
                                ⏱️ {activity.details.timeSpent} min
                            </span>
                        </div>
                    )}

                    {/* Time Spent for Lesson */}
                    {activity.type === 'lesson_viewed' && activity.timeSpent && (
                        <p className="text-sm text-gray-600">⏱️ {activity.timeSpent} minutes</p>
                    )}

                    {/* Device Info for Login */}
                    {activity.type === 'login' && (
                        <p className="text-sm text-gray-600">📱 {activity.device} • {activity.location}</p>
                    )}

                    {/* Expand Button */}
                    {activity.type === 'quiz_completed' && activity.details && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                        >
                            {isExpanded ? '▼ Hide Details' : '▶ Show Details'}
                        </button>
                    )}

                    {/* Expanded Details */}
                    {isExpanded && activity.type === 'quiz_completed' && activity.details && (
                        <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200 space-y-2">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-gray-500">Total Questions:</span>
                                    <span className="ml-2 font-semibold">{activity.details.questionsTotal}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Correct:</span>
                                    <span className="ml-2 font-semibold text-green-600">{activity.details.questionsCorrect}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Time Spent:</span>
                                    <span className="ml-2 font-semibold">{activity.details.timeSpent} min</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Difficulty:</span>
                                    <span className="ml-2 font-semibold">{activity.details.difficulty}/10</span>
                                </div>
                            </div>
                            <div className="pt-2 border-t border-gray-200">
                                <p className="text-xs text-gray-500">Topic: {activity.topic}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActivityLogItem;
