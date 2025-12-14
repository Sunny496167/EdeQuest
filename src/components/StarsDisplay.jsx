function StarsDisplay({ stars }) {
    return (
        <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">⭐</span>
            <span className="text-lg font-bold text-gray-800">{stars}</span>
        </div>
    );
}

export default StarsDisplay;
