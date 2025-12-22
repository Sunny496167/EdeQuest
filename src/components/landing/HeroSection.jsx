import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Users } from 'lucide-react';
import GradientButton from './shared/GradientButton';

/**
 * HERO SECTION - First thing users see
 * =====================================
 * PERFORMANCE OPTIMIZATIONS:
 * 1. This section loads immediately (no lazy loading) as it's above the fold
 * 2. Uses CSS animations instead of heavy JS libraries for typing effect
 * 3. Floating elements use CSS transforms (GPU-accelerated)
 * 
 * CONVERSION OPTIMIZATIONS:
 * - Clear value proposition in headline
 * - Two CTAs: Primary (trial) and Secondary (demo)
 * - Trust indicators immediately visible
 * - Engaging animations to capture attention
 */

const HeroSection = ({ onCTAClick }) => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Turn Screen Time Into Learning Time';

    // OPTIMIZATION: Simple typing animation using setTimeout instead of heavy libraries
    // This reduces bundle size and improves initial load time
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // 50ms per character for smooth typing

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {/* OPTIMIZATION: Animated background using CSS gradients instead of images */}
            {/* Gradients are lightweight and don't require HTTP requests */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Headline with typing animation */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            {typedText}
                            <span className="animate-pulse">|</span>
                        </h1>

                        {/* Subheadline - Clear value proposition */}
                        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
                            Comprehensive curriculum for <span className="font-semibold text-indigo-600">Math, Science, English, Hindi, Computer Science & GK</span> - all in one gamified platform your child will actually love
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <GradientButton
                                size="lg"
                                onClick={() => onCTAClick?.('trial')}
                                className="group"
                            >
                                Start 7-Day Free Trial
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </GradientButton>

                            <GradientButton
                                size="lg"
                                variant="secondary"
                                onClick={() => onCTAClick?.('demo')}
                                className="group"
                            >
                                <Play className="inline-block mr-2 w-5 h-5" />
                                Watch Demo Video
                            </GradientButton>
                        </div>

                        {/* Trust Badges - Reduce anxiety */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-indigo-500" />
                                <span className="font-semibold">Trusted by 10,000+ families</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className="relative hidden lg:block">
                        {/* OPTIMIZATION: Using emoji and CSS for illustrations instead of heavy image files */}
                        {/* This dramatically reduces page load time and HTTP requests */}
                        <div className="relative w-full h-96">
                            {/* Floating UI Elements - Animated with CSS */}
                            <div className="absolute top-0 left-0 bg-white rounded-lg shadow-xl p-4 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">🎯</div>
                                    <div>
                                        <div className="text-xs text-gray-500">Daily Goal</div>
                                        <div className="font-bold text-green-600">Completed!</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-20 right-0 bg-white rounded-lg shadow-xl p-4 animate-float animation-delay-1000">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">🏆</div>
                                    <div>
                                        <div className="text-xs text-gray-500">Achievement</div>
                                        <div className="font-bold text-purple-600">Math Master!</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 left-10 bg-white rounded-lg shadow-xl p-4 animate-float animation-delay-2000">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">⭐</div>
                                    <div>
                                        <div className="text-xs text-gray-500">XP Earned</div>
                                        <div className="font-bold text-yellow-600">+250 XP</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 right-10 bg-white rounded-lg shadow-xl p-4 animate-float animation-delay-3000">
                                <div>
                                    <div className="text-xs text-gray-500 mb-2">Progress</div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-progress" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Central illustration */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl animate-bounce-slow">
                                📚
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
