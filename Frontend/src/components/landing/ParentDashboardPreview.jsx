import React from 'react';
import { Clock, BarChart2, Shield, Bell, Download, Eye } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';

/**
 * PARENT DASHBOARD PREVIEW - Show monitoring capabilities
 * ========================================================
 * PERFORMANCE OPTIMIZATION:
 * - Static mockup instead of interactive dashboard (reduces complexity)
 * - Lazy loads when scrolled into view
 * - Uses CSS Grid for efficient layout
 * 
 * CONVERSION OPTIMIZATION:
 * - Addresses parent concern: "What is my child learning?"
 * - Shows control and visibility features
 * - Builds trust through transparency
 */

const ParentDashboardPreview = () => {
    const { isVisible, elementRef } = useScrollAnimation();

    const features = [
        { icon: Bell, text: 'Get weekly email reports', color: 'text-blue-600' },
        { icon: Clock, text: 'Set screen time limits', color: 'text-purple-600' },
        { icon: Shield, text: 'Manage content access', color: 'text-green-600' },
        { icon: Eye, text: 'Track multiple children', color: 'text-orange-600' },
        { icon: Download, text: 'Export progress reports', color: 'text-pink-600' },
        { icon: BarChart2, text: 'View learning history', color: 'text-indigo-600' }
    ];

    return (
        <section
            ref={elementRef}
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Stay Connected to Your Child's Learning Journey"
                    subtitle="Comprehensive insights and controls at your fingertips"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Dashboard Mockup */}
                    <div className={`
            transform transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
                        {/* OPTIMIZATION: Static mockup using CSS instead of actual charts */}
                        {/* This reduces bundle size and improves load time */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Aarav's Progress</h3>
                                    <p className="text-sm text-gray-600">Last 7 days</p>
                                </div>
                                <div className="text-3xl">👦</div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-blue-50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-blue-600">4.5h</div>
                                    <div className="text-xs text-gray-600">Time Spent</div>
                                </div>
                                <div className="bg-green-50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-green-600">23</div>
                                    <div className="text-xs text-gray-600">Lessons Done</div>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-purple-600">92%</div>
                                    <div className="text-xs text-gray-600">Avg Score</div>
                                </div>
                            </div>

                            {/* Subject Progress Bars */}
                            <div className="space-y-3 mb-6">
                                {[
                                    { subject: 'Math', progress: 85, color: 'bg-blue-500' },
                                    { subject: 'Science', progress: 70, color: 'bg-green-500' },
                                    { subject: 'English', progress: 90, color: 'bg-purple-500' }
                                ].map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-gray-700">{item.subject}</span>
                                            <span className="text-gray-600">{item.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${item.color} transition-all duration-1000`}
                                                style={{ width: isVisible ? `${item.progress}%` : '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Recent Activity</h4>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-600">Completed "Fractions" lesson</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <span className="text-gray-600">Earned "Math Master" badge</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-600">Started "Solar System" topic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Feature Callouts */}
                    <div className={`
            transform transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
                                    >
                                        <Icon className={`w-8 h-8 ${feature.color} mb-3`} />
                                        <p className="font-semibold text-gray-900">{feature.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                            <h4 className="font-bold text-lg mb-2">Complete Transparency</h4>
                            <p className="text-indigo-100">
                                Know exactly what your child is learning, when they're learning, and how they're progressing. Set limits, manage content, and celebrate achievements together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentDashboardPreview;
