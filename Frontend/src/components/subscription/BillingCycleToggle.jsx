import { useState } from 'react';

/**
 * BillingCycleToggle Component
 * Toggle between monthly and yearly billing with savings badge
 */
const BillingCycleToggle = ({ billingCycle, onToggle, savingsPercentage = 17 }) => {
    const isYearly = billingCycle === 'yearly';

    return (
        <div className="flex items-center justify-center gap-4 mb-12">
            <span
                className={`text-lg font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'
                    }`}
            >
                Monthly
            </span>

            <button
                onClick={onToggle}
                className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{
                    backgroundColor: isYearly ? '#3b82f6' : '#d1d5db'
                }}
                aria-label="Toggle billing cycle"
            >
                <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-9' : 'translate-x-1'
                        }`}
                />
            </button>

            <div className="flex items-center gap-2">
                <span
                    className={`text-lg font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'
                        }`}
                >
                    Yearly
                </span>
                {isYearly && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                        Save {savingsPercentage}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default BillingCycleToggle;
