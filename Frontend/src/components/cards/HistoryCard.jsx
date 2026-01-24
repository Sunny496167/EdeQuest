function HistoryCard({ title, emoji, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl p-8 shadow-md 
                hover:shadow-xl hover:scale-105 
                transition-all duration-300 cursor-pointer
                border-4 border-amber-300"
        >
            {/* Emoji Icon */}
            <div className="text-7xl mb-4 text-center">
                {emoji}
            </div>

            {/* Era Title */}
            <h3 className="text-2xl font-bold text-gray-800 text-center">
                {title}
            </h3>

            {/* Call to Action */}
            <p className="text-center text-gray-600 mt-3 font-semibold">
                Click to explore! 📖
            </p>
        </div>
    );
}

export default HistoryCard;
