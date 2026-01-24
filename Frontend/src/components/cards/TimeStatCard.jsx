function TimeStatCard({ title, value, icon, color = "bg-blue-100" }) {
    return (
        <div className={`${color} rounded-2xl p-6 shadow-md text-center`}>
            {/* Icon */}
            <div className="text-5xl mb-3">{icon}</div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                {title}
            </h3>

            {/* Value */}
            <p className="text-3xl font-bold text-gray-800">
                {value}
            </p>
        </div>
    );
}

export default TimeStatCard;
