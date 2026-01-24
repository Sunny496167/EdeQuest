import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function SubjectCard({ title, emoji, description, color, progress = "0% Complete", link }) {
    const MotionComponent = prefersReducedMotion ? 'div' : motion.div;

    const cardContent = (
        <MotionComponent
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`${color} rounded-2xl p-6 shadow-md 
                  hover:shadow-2xl hover-lift
                  transition-all duration-300 
                  cursor-pointer relative overflow-hidden group`}
        >
            {/* Animated Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Emoji Icon with Float Animation */}
            <div className="text-6xl mb-4 text-center animate-float relative z-10">
                {emoji}
            </div>

            {/* Sparkle Effect on Hover */}
            <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300">
                ✨
            </div>

            {/* Subject Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center relative z-10 group-hover:text-violet-600 transition-colors duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center mb-4 min-h-12 relative z-10">
                {description}
            </p>

            {/* Progress Indicator */}
            <div className="mt-4 pt-4 border-t border-gray-300 relative z-10">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">Progress:</span>
                    <span className="text-sm font-bold text-gray-800">{progress}</span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-white rounded-full h-2 mt-2 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-violet-600 to-pink-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: progress }}
                    ></div>
                </div>
            </div>
        </MotionComponent>
    );

    // If link is provided, wrap in Link component
    if (link) {
        return (
            <Link to={link} className="block">
                {cardContent}
            </Link>
        );
    }

    // Otherwise return card without link
    return cardContent;
}

export default SubjectCard;
