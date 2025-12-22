import React from 'react';

/**
 * SHARED COMPONENT: Gradient Button
 * ==================================
 * Reusable CTA button component with gradient background and hover effects.
 * Used throughout landing page for consistency and code reuse.
 * 
 * Props:
 * - children: Button text
 * - variant: 'primary' (gradient) or 'secondary' (outlined)
 * - size: 'sm', 'md', 'lg'
 * - onClick: Click handler
 * - className: Additional CSS classes
 */

const GradientButton = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    ...props
}) => {
    // Size variants for different use cases
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    // Variant styles
    const variantClasses = {
        primary: 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:from-indigo-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
        secondary: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
    };

    return (
        <button
            onClick={onClick}
            className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        font-semibold rounded-lg
        transform transition-all duration-300
        hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-indigo-300
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default GradientButton;
