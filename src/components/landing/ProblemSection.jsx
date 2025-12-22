import React from 'react';
import * as Icons from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';
import { problemPoints } from '../../data/landingData';

/**
 * PROBLEM SECTION - Highlight pain points
 * ========================================
 * PERFORMANCE OPTIMIZATION:
 * - Lazy loads when scrolled into view
 * - Uses CSS transforms for animations (GPU-accelerated)
 * 
 * CONVERSION OPTIMIZATION:
 * - Identifies with parent struggles
 * - Creates emotional connection
 * - Sets up solution section that follows
 * - Dark background creates visual emphasis
 */

const ProblemSection = () => {
    const { isVisible, elementRef } = useScrollAnimation();

    return (
        <section
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Struggling with..."
                    subtitle="You're not alone. These are the challenges parents face every day."
                    className="text-white [&>h2]:text-white [&>p]:text-gray-300"
                />

                {/* OPTIMIZATION: Responsive grid - 1 column mobile, 3 columns desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problemPoints.map((problem, index) => {
                        // OPTIMIZATION: Dynamic icon import reduces initial bundle size
                        const IconComponent = Icons[problem.icon] || Icons.AlertCircle;

                        return (
                            <div
                                key={problem.id}
                                className={`
                  bg-gray-800 rounded-xl p-8 border border-gray-700
                  transform transition-all duration-700 delay-${index * 100}
                  hover:scale-105 hover:border-indigo-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                            >
                                {/* Icon with pulse animation on hover */}
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse">
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {problem.title}
                                </h3>

                                <p className="text-gray-400">
                                    {problem.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
