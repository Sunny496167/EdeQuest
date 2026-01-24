import { Check, X, Info } from 'lucide-react';
import { useState } from 'react';

/**
 * FeatureComparisonTable Component
 * Comprehensive feature comparison across all subscription tiers
 */
const FeatureComparisonTable = ({ comparisonData }) => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleCategory = (categoryIndex) => {
        setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex);
    };

    const renderFeatureValue = (value) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="w-5 h-5 text-green-500 mx-auto" />
            ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" />
            );
        }
        return <span className="text-sm font-medium text-gray-700">{value}</span>;
    };

    return (
        <div className="w-full overflow-x-auto">
            {/* Desktop View */}
            <div className="hidden md:block">
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-white shadow-sm z-10">
                        <tr>
                            <th className="text-left py-4 px-6 font-semibold text-gray-900 border-b-2 border-gray-200">
                                Features
                            </th>
                            <th className="text-center py-4 px-6 font-semibold text-gray-900 border-b-2 border-gray-200">
                                Free
                            </th>
                            <th className="text-center py-4 px-6 font-semibold text-blue-600 border-b-2 border-blue-200 bg-blue-50">
                                Premium
                            </th>
                            <th className="text-center py-4 px-6 font-semibold text-green-600 border-b-2 border-green-200 bg-green-50">
                                Family
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((category, categoryIndex) => (
                            <>
                                {/* Category Header */}
                                <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                                    <td
                                        colSpan="4"
                                        className="py-3 px-6 font-bold text-gray-900 text-sm uppercase tracking-wide"
                                    >
                                        {category.category}
                                    </td>
                                </tr>
                                {/* Features */}
                                {category.features.map((feature, featureIndex) => (
                                    <tr
                                        key={`feature-${categoryIndex}-${featureIndex}`}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="py-4 px-6 text-sm text-gray-700">{feature.name}</td>
                                        <td className="py-4 px-6 text-center">{renderFeatureValue(feature.free)}</td>
                                        <td className="py-4 px-6 text-center bg-blue-50/30">
                                            {renderFeatureValue(feature.premium)}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-green-50/30">
                                            {renderFeatureValue(feature.family)}
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View - Accordion */}
            <div className="md:hidden space-y-4">
                {comparisonData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleCategory(categoryIndex)}
                            className="w-full py-4 px-4 bg-gray-100 font-bold text-gray-900 text-left flex items-center justify-between"
                        >
                            <span>{category.category}</span>
                            <span className="text-gray-500">
                                {expandedCategory === categoryIndex ? '−' : '+'}
                            </span>
                        </button>
                        {expandedCategory === categoryIndex && (
                            <div className="p-4 space-y-4">
                                {category.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                                        <p className="font-medium text-gray-900 mb-3">{feature.name}</p>
                                        <div className="grid grid-cols-3 gap-2 text-center">
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">Free</p>
                                                {renderFeatureValue(feature.free)}
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-600 mb-1">Premium</p>
                                                {renderFeatureValue(feature.premium)}
                                            </div>
                                            <div>
                                                <p className="text-xs text-green-600 mb-1">Family</p>
                                                {renderFeatureValue(feature.family)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureComparisonTable;
