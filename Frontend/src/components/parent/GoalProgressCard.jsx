import React from 'react';

const GoalProgressCard = ({ goal, onEdit, onDelete }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'on_track':
                return 'bg-green-50 border-green-200 text-green-700';
            case 'needs_attention':
                return 'bg-yellow-50 border-yellow-200 text-yellow-700';
            case 'at_risk':
                return 'bg-red-50 border-red-200 text-red-700';
            case 'achieved':
                return 'bg-blue-50 border-blue-200 text-blue-700';
            default:
                return 'bg-gray-50 border-gray-200 text-gray-700';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'on_track':
                return '✅';
            case 'needs_attention':
                return '⚠️';
            case 'at_risk':
                return '🚨';
            case 'achieved':
                return '🎉';
            default:
                return '📌';
        }
    };

    const calculateProgress = () => {
        if (goal.type === 'subject_improvement') {
            return Math.min((goal.currentAccuracy / goal.targetAccuracy) * 100, 100);
        }
        if (goal.current && goal.target) {
            return Math.min((goal.current / goal.target) * 100, 100);
        }
        return 0;
    };

    const progress = calculateProgress();

    const getDaysRemaining = () => {
        if (!goal.deadline) return null;
        const deadline = new Date(goal.deadline);
        const today = new Date();
        const diffTime = deadline - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const daysRemaining = getDaysRemaining();

    return (
        <div className="bg-white rounded-xl shadow-md p-5 border-2 border-gray-100 hover:shadow-lg transition-all">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base mb-1">{goal.title}</h4>
                    {goal.subject && (
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium">
                            {goal.subject}
                        </span>
                    )}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(goal.status)}`}>
                    {getStatusIcon(goal.status)} {goal.status.replace('_', ' ').toUpperCase()}
                </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-gray-800">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                        className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-600"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Goal Details */}
            <div className="space-y-2 mb-4">
                {goal.type === 'subject_improvement' && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Current Accuracy:</span>
                        <span className="font-semibold">{goal.currentAccuracy}%</span>
                    </div>
                )}
                {goal.type === 'subject_improvement' && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Target Accuracy:</span>
                        <span className="font-semibold">{goal.targetAccuracy}%</span>
                    </div>
                )}
                {goal.type === 'daily_practice' && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Daily Average:</span>
                        <span className="font-semibold">{goal.currentAverage} min</span>
                    </div>
                )}
                {goal.type === 'screen_time' && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">This Week:</span>
                        <span className="font-semibold">{goal.current} / {goal.target} min</span>
                    </div>
                )}
                {goal.type === 'streak' && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Current Streak:</span>
                        <span className="font-semibold">🔥 {goal.current} / {goal.target} days</span>
                    </div>
                )}
            </div>

            {/* Deadline */}
            {daysRemaining !== null && (
                <div className="mb-4 p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                        {daysRemaining > 0 ? (
                            <>
                                <span className="font-semibold">{daysRemaining}</span> day{daysRemaining !== 1 ? 's' : ''} remaining
                            </>
                        ) : daysRemaining === 0 ? (
                            <span className="text-orange-600 font-semibold">Due today!</span>
                        ) : (
                            <span className="text-red-600 font-semibold">Overdue by {Math.abs(daysRemaining)} day{Math.abs(daysRemaining) !== 1 ? 's' : ''}</span>
                        )}
                    </p>
                </div>
            )}

            {/* Actions */}
            <div className="flex gap-2">
                {onEdit && (
                    <button
                        onClick={() => onEdit(goal)}
                        className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                        Edit
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(goal.goalId)}
                        className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default GoalProgressCard;
