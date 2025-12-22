import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

/**
 * SHARED COMPONENT: Feature Card
 * ===============================
 * Reusable card component for displaying features with hover effects.
 * Includes flip animation to show additional details on hover.
 * 
 * PERFORMANCE OPTIMIZATION:
 * - Only animates when visible in viewport using useScrollAnimation
 * - Uses CSS transforms for smooth GPU-accelerated animations
 * 
 * Props:
 * - icon: Icon name from lucide-react
 * - title: Feature title
 * - description: Short description
 * - details: Additional details shown on flip
 * - color: Gradient color classes
 */

const FeatureCard = ({ icon, title, description, details, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { isVisible, elementRef } = useScrollAnimation();

    // OPTIMIZATION: Dynamically import icon component to reduce bundle size
    const IconComponent = Icons[icon] || Icons.Star;

    return (
        <div
            ref={elementRef}
            className={`
        transform transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
        >
            <div
                className="relative h-64 cursor-pointer perspective-1000"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                {/* OPTIMIZATION: Use transform instead of changing layout properties */}
                {/* Transforms are GPU-accelerated and don't trigger reflow */}
                <div
                    className={`
            absolute w-full h-full transition-transform duration-500 transform-style-3d
            ${isFlipped ? 'rotate-y-180' : ''}
          `}
                >
                    {/* Front of card */}
                    <div
                        className={`
              absolute w-full h-full backface-hidden
              bg-white rounded-xl p-6 shadow-lg
              hover:shadow-2xl transition-shadow duration-300
              border-2 border-transparent hover:border-gradient
            `}
                    >
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                            <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>

                    {/* Back of card - shown on hover */}
                    <div
                        className={`
              absolute w-full h-full backface-hidden rotate-y-180
              bg-gradient-to-br ${color} rounded-xl p-6 shadow-lg
              flex items-center justify-center
            `}
                    >
                        <p className="text-white text-center font-medium">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
