import React from 'react';
import * as Icons from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';
import { howItWorksSteps } from '../../data/landingData';

/**
 * HOW IT WORKS SECTION - Simplify onboarding
 * ===========================================
 * PERFORMANCE OPTIMIZATION:
 * - Lazy loads when visible
 * - Uses CSS for connecting line animation (no JS overhead)
 * - Responsive layout changes based on viewport
 * 
 * CONVERSION OPTIMIZATION:
 * - Shows simple 4-step process to reduce anxiety
 * - Visual timeline makes it easy to understand
 * - Emphasizes ease of getting started
 */

const HowItWorksSection = () => {
    const { isVisible, elementRef } = useScrollAnimation();

    return (
        <section
            ref={elementRef}
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Get Started in 4 Simple Steps"
                    subtitle="From signup to learning in under 2 minutes"
                />

                {/* OPTIMIZATION: Horizontal on desktop, vertical on mobile */}
                {/* This provides better UX on each device type */}
                <div className="relative">
                    {/* Connecting line - Desktop only */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                        {/* OPTIMIZATION: Animated progress line using CSS */}
                        <div
                            className={`h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`}
                        ></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
                        {howItWorksSteps.map((step, index) => {
                            const IconComponent = Icons[step.icon] || Icons.Circle;

                            return (
                                <div
                                    key={step.id}
                                    className={`
                    relative transform transition-all duration-700 delay-${index * 200}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                                >
                                    {/* Step number and icon */}
                                    <div className="flex flex-col items-center mb-4">
                                        <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                            <IconComponent className="w-12 h-12 text-white" />
                                        </div>
                                        <div className="absolute top-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
                                    </div>

                                    {/* Step content */}
                                    <div className="text-center">
                                        <div className="text-sm font-bold text-indigo-600 mb-2">
                                            STEP {step.id}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Visual mockup placeholder */}
                                    <div className="mt-4 bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                                        <span className="text-4xl">
                                            {step.visual === 'signup' && '📝'}
                                            {step.visual === 'profile' && '👤'}
                                            {step.visual === 'learning' && '🚀'}
                                            {step.visual === 'analytics' && '📊'}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
