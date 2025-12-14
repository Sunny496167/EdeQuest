function Navbar() {
    const navItems = [
        { name: 'Home', emoji: '🏠' },
        { name: 'Math', emoji: '🔢' },
        { name: 'Science', emoji: '🔬' },
        { name: 'History', emoji: '📜' },
        { name: 'Geography', emoji: '🌍' },
    ];

    return (
        <nav className="bg-white rounded-2xl shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo/Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-3xl">🎒</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-primary">
                        EduQuest
                    </h1>
                </div>

                {/* Navigation Items */}
                <ul className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-soft text-primary font-semibold
                         hover:bg-primary hover:text-white hover:scale-105 
                         transition-all duration-200 ease-in-out
                         justify-center md:justify-start"
                            >
                                <span className="text-xl">{item.emoji}</span>
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
