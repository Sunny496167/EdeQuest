function ContinentCard({ name, emoji, shortDescription, color }) {
    return (
        <div
            className={`${color} rounded-2xl p-6 shadow-md 
                  hover:shadow-lg hover:scale-105 
                  transition-all duration-300`}
        >
            {/* Emoji Icon */}
            <div className="text-6xl mb-4 text-center">
                {emoji}
            </div>

            {/* Continent Name */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {name}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center leading-relaxed">
                {shortDescription}
            </p>
        </div>
    );
}

export default ContinentCard;
