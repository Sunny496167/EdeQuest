import { Check, Lock } from 'lucide-react';

/**
 * FeatureList Component
 * Displays a list of features with checkmarks or lock icons
 */
const FeatureList = ({ features, locked = false, showLockIcon = true }) => {
    return (
        <ul className="space-y-3">
            {features.map((feature, index) => {
                const isLocked = locked || (typeof feature === 'object' && feature.locked);
                const featureName = typeof feature === 'string' ? feature : feature.name;
                const featureDescription = typeof feature === 'object' ? feature.description : null;
                const isHighlight = typeof feature === 'object' && feature.highlight;

                return (
                    <li
                        key={index}
                        className={`flex items-start gap-3 ${isLocked ? 'opacity-50' : ''} ${isHighlight ? 'font-semibold' : ''
                            }`}
                        title={featureDescription || featureName}
                    >
                        <span className={`flex-shrink-0 mt-0.5 ${isLocked ? 'text-gray-400' : 'text-green-500'}`}>
                            {isLocked && showLockIcon ? (
                                <Lock className="w-5 h-5" />
                            ) : (
                                <Check className="w-5 h-5" />
                            )}
                        </span>
                        <span className={`text-sm ${isLocked ? 'text-gray-500' : 'text-gray-700'}`}>
                            {featureName}
                            {featureDescription && (
                                <span className="block text-xs text-gray-500 mt-0.5">
                                    {featureDescription}
                                </span>
                            )}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default FeatureList;
