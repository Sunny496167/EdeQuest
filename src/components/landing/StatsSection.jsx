import React from 'react';
import * as Icons from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCountUp from '../../hooks/useCountUp';
import SectionHeading from './shared/SectionHeading';
import { stats, awards } from '../../data/landingData';

/**
 * STATS & ACHIEVEMENTS SECTION - Establish authority
 * ===================================================
 * PERFORMANCE OPTIMIZATION:
 * - Counters animate only when visible
 * - Uses CSS for award badge animations
 * - Lazy loads when scrolled into view
 * 
 * CONVERSION OPTIMIZATION:
 * - Impressive numbers build credibility
 * - Awards and certifications establish trust
 * - Media mentions add social proof
 */

const StatsSection = () => {
    const { isVisible, elementRef } = useScrollAnimation();

    // OPTIMIZATION: Counters only animate when section is visible
    const activeStudents = useCountUp(stats.activeStudents, isVisible, 2500);
    const schoolsCount = useCountUp(stats.schools, isVisible, 2500);
    const lessonsCount = useCountUp(stats.lessonsCompleted, isVisible, 2500);
    const satisfactionRate = useCountUp(stats.satisfaction, isVisible, 2500);

    return (
        <section
            ref={elementRef}
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Trusted by Thousands"
                    subtitle="Numbers that speak for themselves"
                />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - By The Numbers */}
                    <div className={`
            transform transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">By The Numbers</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">
                                    {activeStudents.toLocaleString()}+
                                </div>
                                <div className="text-gray-700 font-medium">Active Students</div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                                <div className="text-4xl font-bold text-purple-600 mb-2">
                                    {schoolsCount}+
                                </div>
                                <div className="text-gray-700 font-medium">Schools & Institutions</div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                                <div className="text-4xl font-bold text-green-600 mb-2">
                                    {lessonsCount.toLocaleString()}+
                                </div>
                                <div className="text-gray-700 font-medium">Lessons Monthly</div>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                                <div className="text-4xl font-bold text-orange-600 mb-2">
                                    {satisfactionRate}%
                                </div>
                                <div className="text-gray-700 font-medium">Parent Satisfaction</div>
                            </div>

                            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6">
                                <div className="text-4xl font-bold text-pink-600 mb-2">
                                    {stats.averageRating}
                                </div>
                                <div className="text-gray-700 font-medium">Average Rating</div>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                                <div className="text-4xl font-bold text-cyan-600 mb-2">
                                    {stats.gradeImprovement}
                                </div>
                                <div className="text-gray-700 font-medium">Grade Levels Up</div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Recognition */}
                    <div className={`
            transform transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Recognition & Awards</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {awards.map((award, index) => {
                                const IconComponent = Icons[award.icon] || Icons.Award;
                                return (
                                    <div
                                        key={award.id}
                                        className={`
                      bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6
                      transform transition-all duration-500 delay-${index * 100}
                      hover:scale-105 hover:shadow-lg
                      ${isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'}
                    `}
                                    >
                                        <IconComponent className="w-12 h-12 text-indigo-600 mb-3" />
                                        <div className="text-sm font-semibold text-gray-900">
                                            {award.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Media Mentions */}
                        <div className="mt-8 bg-gray-50 rounded-xl p-6">
                            <h4 className="font-bold text-gray-900 mb-4">As Featured In:</h4>
                            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
                                <div className="text-2xl font-bold text-gray-700">TechCrunch</div>
                                <div className="text-2xl font-bold text-gray-700">ET</div>
                                <div className="text-2xl font-bold text-gray-700">YourStory</div>
                                <div className="text-2xl font-bold text-gray-700">Inc42</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
