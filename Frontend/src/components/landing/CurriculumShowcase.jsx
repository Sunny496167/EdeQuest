import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';
import { curriculum } from '../../data/landingData';

/**
 * CURRICULUM SHOWCASE - Display comprehensive coverage
 * =====================================================
 * PERFORMANCE OPTIMIZATION:
 * - Only active tab content is rendered (not all 6 subjects at once)
 * - Lazy loads when scrolled into view
 * - Smooth tab transitions using CSS
 * 
 * CONVERSION OPTIMIZATION:
 * - Shows breadth of curriculum
 * - Interactive tabs encourage exploration
 * - Grade-wise breakdown shows depth
 * - Topic counts demonstrate value
 */

const CurriculumShowcase = () => {
    const { isVisible, elementRef } = useScrollAnimation();
    const [activeTab, setActiveTab] = useState('math');

    // Convert curriculum object to array for mapping
    const subjects = Object.values(curriculum);
    const activeSubject = curriculum[activeTab];

    return (
        <section
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Comprehensive Curriculum Coverage"
                    subtitle="Everything your child needs from Grade 1 to 10"
                />

                {/* OPTIMIZATION: Tab buttons - Only render active content */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {subjects.map((subject) => (
                        <button
                            key={subject.id}
                            onClick={() => setActiveTab(subject.id)}
                            className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${activeTab === subject.id
                                    ? `bg-gradient-to-r ${subject.color} text-white shadow-lg scale-105`
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
              `}
                        >
                            <span className="mr-2">{subject.icon}</span>
                            {subject.name}
                        </button>
                    ))}
                </div>

                {/* OPTIMIZATION: Only render active tab content */}
                {/* This prevents rendering all 6 subjects simultaneously */}
                <div
                    className={`
            bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Subject info */}
                        <div>
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${activeSubject.color} text-white font-semibold mb-4`}>
                                Grades {activeSubject.grades}
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                {activeSubject.icon} {activeSubject.name}
                            </h3>

                            <p className="text-lg text-gray-600 mb-6">
                                {activeSubject.description}
                            </p>

                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">
                                    {activeSubject.topics}+
                                </div>
                                <div className="text-gray-700">
                                    Interactive lessons and activities
                                </div>
                            </div>
                        </div>

                        {/* Right side - Categories */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">
                                Topics Covered:
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {activeSubject.categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeSubject.color}`}></div>
                                            <span className="text-sm font-medium text-gray-700">
                                                {category}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sample lesson preview placeholder */}
                            <div className="mt-6 bg-gray-100 rounded-lg p-6 text-center">
                                <div className="text-5xl mb-3">🎓</div>
                                <div className="text-sm text-gray-600">
                                    Interactive lessons with videos, quizzes & practice
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumShowcase;
