import { motion } from 'framer-motion';

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function AnimatedPage({ children }) {
    // If reduced motion is preferred, disable animations
    if (prefersReducedMotion) {
        return <div>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.3,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPage;
