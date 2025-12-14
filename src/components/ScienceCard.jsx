function ScienceCard({ title, description, emoji, color }) {
    return (
        <div
            className={`bg-gradient-to-br ${color} rounded-2xl p-6 shadow-md 
                  hover:shadow-lg hover:scale-105 
                  transition-all duration-300`}
        >
            {/* Emoji Icon */}
            <div className="text-6xl mb-4 text-center">
                {emoji}
            </div>

            {/* Concept Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default ScienceCard;
