import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';
import { testimonials } from '../../data/landingData';

/**
 * TESTIMONIALS CAROUSEL - Build trust through social proof
 * =========================================================
 * PERFORMANCE OPTIMIZATION:
 * - Auto-rotation pauses when user hovers (better UX)
 * - Only renders visible testimonial (not all 6 simultaneously)
 * - Uses CSS transforms for smooth transitions
 * 
 * CONVERSION OPTIMIZATION:
 * - Real success stories build credibility
 * - Metrics show measurable results
 * - Diverse testimonials appeal to different personas
 * - Star ratings provide quick visual validation
 */

const TestimonialsCarousel = () => {
    const { isVisible, elementRef } = useScrollAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // OPTIMIZATION: Auto-rotation only when visible and not paused
    useEffect(() => {
        if (!isVisible || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // 5 seconds per testimonial

        return () => clearInterval(interval);
    }, [isVisible, isPaused]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-9xl">💬</div>
                <div className="absolute bottom-10 right-10 text-9xl">⭐</div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Loved by Parents & Kids Across the Country"
                    subtitle="Join thousands of families seeing real results"
                />

                {/* OPTIMIZATION: Only render current testimonial, not all 6 */}
                {/* This reduces DOM nodes and improves performance */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className={`
            bg-white rounded-2xl shadow-2xl p-8 md:p-12
            transform transition-all duration-700
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
                        {/* Rating Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic">
                            "{currentTestimonial.quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-5xl">{currentTestimonial.avatar}</div>
                            <div className="text-center">
                                <div className="font-bold text-gray-900 text-lg">
                                    {currentTestimonial.name}
                                </div>
                                <div className="text-gray-600">
                                    {currentTestimonial.role} • {currentTestimonial.location}
                                </div>
                                {currentTestimonial.metric && (
                                    <div className="mt-2 inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        {currentTestimonial.metric}
                                    </div>
                                )}
                                {currentTestimonial.badge && (
                                    <div className="mt-2 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        {currentTestimonial.badge}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex
                                    ? 'bg-indigo-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }
              `}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
