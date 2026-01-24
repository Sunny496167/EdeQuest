import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubscription } from '../../context/SubscriptionContext';
import { PRICING_PLANS, SUBSCRIPTION_TIERS, FAQ_DATA, TESTIMONIALS, FEATURE_COMPARISON } from '../../data/subscriptionPlans';
import PricingCard from '../../components/subscription/PricingCard';
import BillingCycleToggle from '../../components/subscription/BillingCycleToggle';
import FeatureComparisonTable from '../../components/subscription/FeatureComparisonTable';
import { ChevronDown, Star, Shield, CreditCard, Headphones } from 'lucide-react';

/**
 * PricingPlans Page
 * Main pricing page with plan comparison, FAQs, and testimonials
 */
const PricingPlans = () => {
    const navigate = useNavigate();
    const { subscription, subscribeToPlan } = useSubscription();
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleToggleBilling = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    };

    const handleSelectPlan = async (planId, cycle) => {
        if (planId === SUBSCRIPTION_TIERS.FREE) {
            navigate('/signup');
            return;
        }

        setIsProcessing(true);

        // Navigate to payment modal or directly subscribe
        // For now, we'll show a simple flow
        const result = await subscribeToPlan(planId, cycle);

        setIsProcessing(false);

        if (result.success) {
            navigate('/payment-success');
        }
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Empower Your Child's
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Learning Journey
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Choose the perfect plan to unlock unlimited learning potential. Start with a 14-day free trial, no credit card required.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-500" />
                            <span>30-day money-back guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-green-500" />
                            <span>Secure payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Headphones className="w-5 h-5 text-green-500" />
                            <span>24/7 support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Billing Toggle */}
            <section className="px-4">
                <div className="max-w-7xl mx-auto">
                    <BillingCycleToggle
                        billingCycle={billingCycle}
                        onToggle={handleToggleBilling}
                        savingsPercentage={17}
                    />
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="px-4 pb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard
                        plan={PRICING_PLANS[SUBSCRIPTION_TIERS.FREE]}
                        billingCycle={billingCycle}
                        isCurrentPlan={subscription?.plan === SUBSCRIPTION_TIERS.FREE}
                        onSelectPlan={handleSelectPlan}
                        featured={false}
                    />
                    <PricingCard
                        plan={PRICING_PLANS[SUBSCRIPTION_TIERS.PREMIUM]}
                        billingCycle={billingCycle}
                        isCurrentPlan={subscription?.plan === SUBSCRIPTION_TIERS.PREMIUM}
                        onSelectPlan={handleSelectPlan}
                        featured={true}
                    />
                    <PricingCard
                        plan={PRICING_PLANS[SUBSCRIPTION_TIERS.FAMILY]}
                        billingCycle={billingCycle}
                        isCurrentPlan={subscription?.plan === SUBSCRIPTION_TIERS.FAMILY}
                        onSelectPlan={handleSelectPlan}
                        featured={false}
                    />
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                        Compare Plans
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        See exactly what's included in each plan to find the perfect fit for your learning needs
                    </p>
                    <FeatureComparisonTable comparisonData={FEATURE_COMPARISON} />
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                        Loved by Students & Parents
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Join thousands of happy learners achieving their goals
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TESTIMONIALS.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.grade ? `Grade ${testimonial.grade}` : testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Everything you need to know about our pricing and plans
                    </p>

                    <div className="space-y-4">
                        {FAQ_DATA.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of students already achieving their learning goals
                    </p>
                    <button
                        onClick={() => handleSelectPlan(SUBSCRIPTION_TIERS.PREMIUM, billingCycle)}
                        className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Your Free Trial Today
                    </button>
                    <p className="mt-4 text-sm opacity-75">
                        No credit card required • Cancel anytime
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PricingPlans;
