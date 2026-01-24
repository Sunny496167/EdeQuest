import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';
import { faqs } from '../../data/landingData';

/**
 * FAQ SECTION - Address objections and concerns
 * ==============================================
 * PERFORMANCE OPTIMIZATION:
 * - Only one FAQ open at a time (reduces DOM complexity)
 * - Smooth CSS transitions instead of JS animations
 * - Lazy loads when scrolled into view
 * 
 * CONVERSION OPTIMIZATION:
 * - Answers common questions before they become blockers
 * - Reduces anxiety about commitment
 * - Provides transparency about product
 */

const FAQSection = () => {
    const { isVisible, elementRef } = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        // OPTIMIZATION: Only one FAQ open at a time
        // This keeps the DOM simple and improves performance
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about LearnQuest"
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.id}
                                className={`
                  bg-white rounded-xl shadow-md overflow-hidden
                  transform transition-all duration-700 delay-${index * 50}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center
                    transform transition-transform duration-300
                    ${isOpen ? 'rotate-180' : 'rotate-0'}
                  `}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-indigo-600" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-indigo-600" />
                                        )}
                                    </div>
                                </button>

                                {/* OPTIMIZATION: CSS max-height transition for smooth accordion */}
                                {/* This is more performant than JS-based height animations */}
                                <div
                                    className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96' : 'max-h-0'}
                  `}
                                >
                                    <div className="px-6 pb-6 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Help CTA */}
                <div className="mt-12 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Our support team is here to help you 24/7
                    </p>
                    <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300">
                        Contact Support →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
