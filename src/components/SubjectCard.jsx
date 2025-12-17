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
                  hover:shadow-lg
                  transition-shadow duration-300 
                  cursor-pointer`}
        >
            {/* Emoji Icon */}
            <div className="text-6xl mb-4 text-center">
                {emoji}
            </div>

            {/* Subject Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center mb-4 min-h-[3rem]">
                {description}
            </p>

            {/* Progress Indicator */}
            <div className="mt-4 pt-4 border-t border-gray-300">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">Progress:</span>
                    <span className="text-sm font-bold text-gray-800">{progress}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white rounded-full h-2 mt-2">
                    <div
                        className="bg-gray-800 h-2 rounded-full"
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
