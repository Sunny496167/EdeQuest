import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Users, CreditCard, Clock } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import GradientButton from './shared/GradientButton';

/**
 * FINAL CTA SECTION - Last chance to convert
 * ===========================================
 * PERFORMANCE OPTIMIZATION:
 * - Particle animation uses CSS (GPU-accelerated)
 * - Gradient animation is lightweight
 * - Lazy loads when scrolled into view
 * 
 * CONVERSION OPTIMIZATION:
 * - Strong final call-to-action
 * - Reinforces risk-free offer
 * - Trust badges reduce anxiety
 * - Prominent placement before footer
 */

const FinalCTASection = ({ onCTAClick }) => {
    const { isVisible, elementRef } = useScrollAnimation();
    const [particles, setParticles] = useState([]);

    // OPTIMIZATION: Generate particles only when visible
    useEffect(() => {
        if (isVisible && particles.length === 0) {
            // Create 20 particles with random positions
            const newParticles = Array.from({ length: 20 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 3 + Math.random() * 2
            }));
            setParticles(newParticles);
        }
    }, [isVisible]);

    const trustBadges = [
        { icon: CreditCard, text: 'No credit card required' },
        { icon: Clock, text: 'Cancel anytime' },
        { icon: CheckCircle, text: '30-day money-back guarantee' },
        { icon: Users, text: 'Setup in under 2 minutes' }
    ];

    return (
        <section
            ref={elementRef}
            className="relative py-24 overflow-hidden"
        >
            {/* OPTIMIZATION: Animated gradient background using CSS */}
            {/* This is more performant than canvas-based animations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animate-gradient-shift"></div>

            {/* Floating particles - OPTIMIZATION: CSS animations only */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float-particle"
                        style={{
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`
          transform transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Start Your Child's Learning Adventure Today
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-purple-100 mb-8">
                        Join 10,000+ families already seeing results
                    </p>

                    {/* CTA Button */}
                    <div className="mb-8">
                        <GradientButton
                            size="lg"
                            onClick={() => onCTAClick?.('final-cta')}
                            className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl text-xl px-12 py-5 group"
                        >
                            Start Your 7-Day Free Trial
                            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </GradientButton>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {trustBadges.map((badge, index) => {
                            const Icon = badge.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-2 text-white"
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-sm font-medium">{badge.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Secondary CTA */}
                    <div className="mt-8">
                        <button className="text-white hover:text-purple-100 transition-colors duration-300 font-semibold">
                            Have questions? Chat with us →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
