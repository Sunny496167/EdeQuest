import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SectionHeading from './shared/SectionHeading';
import GradientButton from './shared/GradientButton';
import { pricingPlans } from '../../data/landingData';

/**
 * PRICING SECTION - Convert visitors to customers
 * ================================================
 * PERFORMANCE OPTIMIZATION:
 * - Lazy loads when scrolled into view
 * - Only renders comparison table when expanded (not by default)
 * - Uses CSS transforms for card hover effects
 * 
 * CONVERSION OPTIMIZATION:
 * - Clear pricing with no hidden costs
 * - Popular badge draws attention to best value
 * - Monthly/yearly toggle shows savings
 * - Free tier reduces barrier to entry
 * - Feature comparison helps decision-making
 */

const PricingSection = ({ onCTAClick }) => {
    const { isVisible, elementRef } = useScrollAnimation();
    const [billingPeriod, setBillingPeriod] = useState('monthly');
    const [showComparison, setShowComparison] = useState(false);

    return (
        <section
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Choose Your Plan"
                    subtitle="Start with 7 days free. No credit card required."
                />

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-200 rounded-lg p-1 inline-flex">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${billingPeriod === 'monthly'
                                    ? 'bg-white text-indigo-600 shadow-md'
                                    : 'text-gray-600'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('yearly')}
                            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${billingPeriod === 'yearly'
                                    ? 'bg-white text-indigo-600 shadow-md'
                                    : 'text-gray-600'
                                }`}
                        >
                            Yearly
                            <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                                Save 17%
                            </span>
                        </button>
                    </div>
                </div>

                {/* OPTIMIZATION: Grid layout for responsive pricing cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {pricingPlans.map((plan, index) => {
                        const price = billingPeriod === 'yearly' && plan.annualPrice
                            ? plan.annualPrice
                            : plan.price;

                        const displayPrice = billingPeriod === 'yearly' && plan.annualPrice
                            ? (plan.annualPrice / 12).toFixed(2)
                            : price;

                        return (
                            <div
                                key={plan.id}
                                className={`
                  relative bg-white rounded-2xl shadow-lg p-8
                  transform transition-all duration-700 delay-${index * 100}
                  hover:scale-105 hover:shadow-2xl
                  ${plan.popular ? 'border-4 border-indigo-600 scale-105' : 'border-2 border-gray-200'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                                            ⭐ MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                {/* Plan Badge */}
                                <div className="text-center mb-6">
                                    <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                        {plan.badge}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-bold text-gray-900">
                                            ₹{displayPrice}
                                        </span>
                                        <span className="text-gray-600">/{plan.billing}</span>
                                    </div>
                                    {billingPeriod === 'yearly' && plan.annualPrice && (
                                        <div className="text-sm text-green-600 mt-1">
                                            Billed ₹{plan.annualPrice}/year
                                        </div>
                                    )}
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.limitations?.map((limitation, idx) => (
                                        <li key={`limit-${idx}`} className="flex items-start gap-3 opacity-50">
                                            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{limitation}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <GradientButton
                                    variant={plan.popular ? 'primary' : 'secondary'}
                                    className="w-full"
                                    onClick={() => onCTAClick?.(plan.id)}
                                >
                                    {plan.cta}
                                </GradientButton>

                                {plan.note && (
                                    <p className="text-xs text-gray-500 text-center mt-3">
                                        {plan.note}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Feature Comparison Table - OPTIMIZATION: Only render when expanded */}
                <div className="text-center">
                    <button
                        onClick={() => setShowComparison(!showComparison)}
                        className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300"
                    >
                        {showComparison ? 'Hide' : 'Show'} Detailed Comparison
                    </button>

                    {showComparison && (
                        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
                            <p className="text-gray-600 text-sm">
                                All plans include: 7-day free trial • Cancel anytime • 30-day money-back guarantee • COPPA compliant • 256-bit encryption
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
