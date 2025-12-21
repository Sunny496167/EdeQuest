import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
    const actions = [
        {
            icon: '📊',
            label: 'Generate Report',
            path: '/parent/reports',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: '🎯',
            label: 'Set New Goal',
            path: '/parent/goals',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: '⏱️',
            label: 'Screen Time',
            path: '/parent/screen-time',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: '🔔',
            label: 'View Alerts',
            path: '/parent',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: '📚',
            label: 'Activity Log',
            path: '/parent/activity',
            color: 'from-yellow-500 to-yellow-600'
        },
        {
            icon: '⚙️',
            label: 'Settings',
            path: '/parent/settings',
            color: 'from-gray-500 to-gray-600'
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 border-2 border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {actions.map((action, index) => (
                    <Link
                        key={index}
                        to={action.path}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${action.color} text-white hover:shadow-lg transform hover:scale-105 transition-all`}
                    >
                        <span className="text-3xl mb-2">{action.icon}</span>
                        <span className="text-xs font-semibold text-center">{action.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
