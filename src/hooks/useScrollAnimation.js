import { useEffect, useState, useRef } from 'react';

/**
 * PERFORMANCE OPTIMIZATION: Intersection Observer Hook
 * =====================================================
 * This hook only triggers animations when elements enter the viewport.
 * Benefits:
 * 1. Reduces initial render cost - animations don't run for off-screen elements
 * 2. Improves perceived performance - users see smooth animations as they scroll
 * 3. Saves CPU/GPU resources - no wasted animation calculations for hidden elements
 * 
 * Usage: const isVisible = useScrollAnimation();
 * Apply to elements that should fade/slide in on scroll
 */

const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // OPTIMIZATION: Use Intersection Observer instead of scroll listeners
        // Intersection Observer is more performant than scroll events
        // because it's handled by the browser's compositor thread
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Only trigger once when element enters viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // OPTIMIZATION: Disconnect observer after first trigger
                    // This prevents unnecessary checks after animation is complete
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '50px', // Start animation slightly before element enters viewport
                ...options
            }
        );

        observer.observe(element);

        // Cleanup function to prevent memory leaks
        return () => {
            if (observer && element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return { isVisible, elementRef };
};

export default useScrollAnimation;
