import React from 'react';
import { TrendingUp, Users, Award, School } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCountUp from '../../hooks/useCountUp';
import { stats } from '../../data/landingData';

/**
 * SOCIAL PROOF BANNER - Build immediate credibility
 * ==================================================
 * PERFORMANCE OPTIMIZATION:
 * - Only loads when scrolled into view using Intersection Observer
 * - Counter animations triggered only when visible (saves CPU)
 * - Uses requestAnimationFrame for smooth 60fps animations
 * 
 * CONVERSION OPTIMIZATION:
 * - Shows impressive metrics to build trust
 * - Animated counters create engagement and impact
 * - Positioned early to establish credibility
 */

const SocialProofBanner = () => {
    const { isVisible, elementRef } = useScrollAnimation();

    // OPTIMIZATION: Counters only animate when section is visible
    // This prevents unnecessary calculations for off-screen elements
    const activeStudents = useCountUp(stats.activeStudents, isVisible, 2000);
    const schoolsCount = useCountUp(stats.schools, isVisible, 2000);
    const lessonsCount = useCountUp(stats.lessonsCompleted, isVisible, 2000);
    const satisfactionRate = useCountUp(stats.satisfaction, isVisible, 2000);

    const metrics = [
        {
            icon: TrendingUp,
            value: `${lessonsCount.toLocaleString()}+`,
            label: 'Lessons completed this month',
            color: 'text-green-600'
        },
        {
            icon: Award,
            value: `${satisfactionRate}%`,
            label: 'Parent satisfaction rate',
            color: 'text-purple-600'
        },
        {
            icon: Users,
            value: `${activeStudents.toLocaleString()}+`,
            label: 'Active students',
            color: 'text-indigo-600'
        },
        {
            icon: School,
            value: `${schoolsCount}+`,
            label: 'Schools using LearnQuest',
            color: 'text-pink-600'
        }
    ];

    return (
        <section
            ref={elementRef}
            className="py-16 bg-white border-y border-gray-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* OPTIMIZATION: Grid layout with responsive breakpoints */}
                {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={index}
                                className={`
                  text-center transform transition-all duration-700 delay-${index * 100}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                            >
                                <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                                <div className={`text-3xl md:text-4xl font-bold ${metric.color} mb-2`}>
                                    {metric.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {metric.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SocialProofBanner;
