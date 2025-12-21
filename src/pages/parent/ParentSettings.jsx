import React from 'react';
import { useParent } from '../../context/ParentContext';

const ParentSettings = () => {
    const { parentData } = useParent();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Parent Settings</h1>
                    <p className="text-gray-600">Manage your account and preferences</p>
                </div>

                {/* Account Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Account Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                value={parentData.parentInfo.name}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={parentData.parentInfo.email}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={parentData.parentInfo.phone}
                                    readOnly
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                                <input
                                    type="text"
                                    value={parentData.parentInfo.relationship}
                                    readOnly
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Family Settings */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Family Settings</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(parentData.familySettings).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={value}
                                            readOnly
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <button className="p-4 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors text-left">
                            <span className="text-2xl block mb-2">🔒</span>
                            Change Password
                        </button>
                        <button className="p-4 bg-purple-50 text-purple-600 rounded-xl font-medium hover:bg-purple-100 transition-colors text-left">
                            <span className="text-2xl block mb-2">👥</span>
                            Add Co-Parent
                        </button>
                        <button className="p-4 bg-green-50 text-green-600 rounded-xl font-medium hover:bg-green-100 transition-colors text-left">
                            <span className="text-2xl block mb-2">💳</span>
                            Manage Subscription
                        </button>
                        <button className="p-4 bg-orange-50 text-orange-600 rounded-xl font-medium hover:bg-orange-100 transition-colors text-left">
                            <span className="text-2xl block mb-2">❓</span>
                            Help & Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentSettings;
