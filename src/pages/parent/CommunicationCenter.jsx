import React from 'react';
import { useParent } from '../../context/ParentContext';

const CommunicationCenter = () => {
    const { parentData, markMessageAsRead, updateNotificationPreferences } = useParent();

    const handleMarkAsRead = (messageId) => {
        markMessageAsRead(messageId);
    };

    const unreadCount = parentData.communications.filter(m => !m.read).length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Communication Center</h1>
                    <p className="text-gray-600">Messages, notifications, and updates</p>
                    {unreadCount > 0 && (
                        <div className="mt-3 inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                        </div>
                    )}
                </div>

                {/* Messages */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Inbox</h2>
                    <div className="space-y-3">
                        {parentData.communications.map((message) => (
                            <div
                                key={message.messageId}
                                className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${message.read
                                        ? 'bg-gray-50 border-gray-200'
                                        : 'bg-blue-50 border-blue-300'
                                    }`}
                                onClick={() => !message.read && handleMarkAsRead(message.messageId)}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">
                                                {message.type === 'weekly_digest' && '📊'}
                                                {message.type === 'achievement_alert' && '🏆'}
                                                {message.type === 'performance_alert' && '⚠️'}
                                            </span>
                                            <h3 className="font-bold text-gray-800">{message.subject}</h3>
                                            {!message.read && (
                                                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">New</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600">{new Date(message.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(parentData.parentInfo.notificationPreferences).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={value}
                                            onChange={(e) => updateNotificationPreferences({ [key]: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationCenter;
