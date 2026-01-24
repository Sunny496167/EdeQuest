import React from 'react';
import SectionHeading from './shared/SectionHeading';
import FeatureCard from './shared/FeatureCard';
import { features } from '../../data/landingData';

/**
 * FEATURES SECTION - Showcase solution
 * =====================================
 * PERFORMANCE OPTIMIZATION:
 * - Each card lazy loads when scrolled into view (handled by FeatureCard component)
 * - Staggered animations reduce perceived load time
 * - Uses CSS Grid for efficient layout
 * 
 * CONVERSION OPTIMIZATION:
 * - Shows how LearnQuest solves the problems mentioned earlier
 * - 6 key features that address different parent concerns
 * - Interactive cards encourage exploration
 * - Flip animation reveals additional details
 */

const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Everything Your Child Needs to Excel"
                    subtitle="A complete learning platform designed for success"
                />

                {/* OPTIMIZATION: CSS Grid with responsive breakpoints */}
                {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
                {/* Grid is more performant than flexbox for complex layouts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            details={feature.details}
                            color={feature.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
