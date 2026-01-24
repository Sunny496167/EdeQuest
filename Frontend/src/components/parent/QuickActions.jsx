import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
    const actions = [
        { title: 'Generate Report', icon: '📊', path: '/parent/reports', color: 'from-blue-500 to-blue-600' },
        { title: 'Set New Goal', icon: '🎯', path: '/parent/goals', color: 'from-purple-500 to-purple-600' },
        { title: 'Screen Time', icon: '⏱️', path: '/parent/screen-time', color: 'from-green-500 to-green-600' },
        { title: 'View Alerts', icon: '🔔', path: '/parent/dashboard#alerts', color: 'from-red-500 to-red-600' },
        { title: 'Activity Log', icon: '📝', path: '/parent/activity', color: 'from-orange-500 to-orange-600' },
        { title: 'Performance', icon: '📈', path: '/parent/performance', color: 'from-indigo-500 to-indigo-600' },
        { title: 'Children', icon: '👶', path: '/parent/children', color: 'from-pink-500 to-pink-600' },
        { title: 'Messages', icon: '💬', path: '/parent/messages', color: 'from-cyan-500 to-cyan-600' },
        { title: 'Content Controls', icon: '🔒', path: '/parent/content-controls', color: 'from-yellow-500 to-yellow-600' },
        { title: 'Settings', icon: '⚙️', path: '/parent/settings', color: 'from-gray-500 to-gray-600' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {actions.map((action) => (
                    <Link
                        key={action.title}
                        to={action.path}
                        className={`p-4 bg-gradient-to-br ${action.color} rounded-xl text-white text-center hover:shadow-lg transition-all transform hover:scale-105`}
                    >
                        <div className="text-3xl mb-2">{action.icon}</div>
                        <p className="text-xs font-semibold">{action.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
