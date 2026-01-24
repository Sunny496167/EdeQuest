import { createContext, useContext, useState, useEffect } from 'react';

// Create Accessibility Context
const AccessibilityContext = createContext();

// Custom hook to use accessibility context
export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within AccessibilityProvider');
    }
    return context;
};

// Accessibility Provider Component
export const AccessibilityProvider = ({ children }) => {
    // Check system preference for reduced motion
    const systemPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize state from localStorage or defaults
    const [isLargeTextEnabled, setIsLargeTextEnabled] = useState(() => {
        const saved = localStorage.getItem('eduquest_large_text');
        return saved ? JSON.parse(saved) : false;
    });

    const [isHighContrastEnabled, setIsHighContrastEnabled] = useState(() => {
        const saved = localStorage.getItem('eduquest_high_contrast');
        return saved ? JSON.parse(saved) : false;
    });

    const [prefersReducedMotion] = useState(systemPrefersReducedMotion);

    // Sync large text setting to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_large_text', JSON.stringify(isLargeTextEnabled));

        // Apply to document root
        if (isLargeTextEnabled) {
            document.documentElement.classList.add('large-text');
        } else {
            document.documentElement.classList.remove('large-text');
        }
    }, [isLargeTextEnabled]);

    // Sync high contrast setting to localStorage
    useEffect(() => {
        localStorage.setItem('eduquest_high_contrast', JSON.stringify(isHighContrastEnabled));

        // Apply to document root
        if (isHighContrastEnabled) {
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
    }, [isHighContrastEnabled]);

    // Toggle large text
    const toggleLargeText = () => {
        setIsLargeTextEnabled(prev => !prev);
    };

    // Toggle high contrast
    const toggleHighContrast = () => {
        setIsHighContrastEnabled(prev => !prev);
    };

    const value = {
        isLargeTextEnabled,
        isHighContrastEnabled,
        prefersReducedMotion,
        toggleLargeText,
        toggleHighContrast
    };

    return (
        <AccessibilityContext.Provider value={value}>
            {children}
        </AccessibilityContext.Provider>
    );
};
