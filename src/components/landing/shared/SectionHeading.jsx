import React from 'react';

/**
 * SHARED COMPONENT: Section Heading
 * ==================================
 * Consistent heading component used across all landing page sections.
 * Ensures visual consistency and reduces code duplication.
 * 
 * Props:
 * - title: Main heading text
 * - subtitle: Optional subtitle text
 * - align: 'center' or 'left' alignment
 * - className: Additional CSS classes
 */

const SectionHeading = ({
    title,
    subtitle,
    align = 'center',
    className = ''
}) => {
    const alignClasses = align === 'center' ? 'text-center' : 'text-left';

    return (
        <div className={`mb-12 ${alignClasses} ${className}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
