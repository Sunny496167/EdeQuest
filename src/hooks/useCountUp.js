import { useEffect, useState } from 'react';

/**
 * PERFORMANCE OPTIMIZATION: Animated Counter Hook
 * ================================================
 * This hook animates numbers from 0 to target value when visible.
 * Benefits:
 * 1. Only animates when element is in viewport (via isVisible prop)
 * 2. Uses requestAnimationFrame for smooth 60fps animations
 * 3. Automatically cleans up to prevent memory leaks
 * 
 * Usage: const count = useCountUp(10000, isVisible, 2000);
 * 
 * @param {number} end - Target number to count to
 * @param {boolean} isVisible - Whether element is in viewport (from useScrollAnimation)
 * @param {number} duration - Animation duration in milliseconds (default: 2000ms)
 */

const useCountUp = (end, isVisible, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // OPTIMIZATION: Only start animation when element is visible
        // This prevents counting animations from running off-screen
        if (!isVisible) return;

        let startTime = null;
        let animationFrame = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // OPTIMIZATION: Use easeOutQuad for natural deceleration
            // This creates a more pleasing animation curve
            const easeOutQuad = progress * (2 - progress);
            setCount(Math.floor(end * easeOutQuad));

            if (progress < 1) {
                // OPTIMIZATION: Use requestAnimationFrame instead of setInterval
                // RAF syncs with browser's repaint cycle for smoother animations
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we hit exact target number
            }
        };

        animationFrame = requestAnimationFrame(animate);

        // OPTIMIZATION: Cleanup function to cancel animation frame
        // Prevents memory leaks and unnecessary calculations
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, isVisible, duration]);

    return count;
};

export default useCountUp;
