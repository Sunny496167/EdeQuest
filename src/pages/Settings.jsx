import AccessibilityToggle from '../components/AccessibilityToggle';

function Settings() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Settings
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Make EduQuest work best for you!
                    </p>
                </div>

                {/* Accessibility Toggle */}
                <AccessibilityToggle />

                {/* Info Section */}
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        About These Settings
                    </h2>
                    <div className="text-left space-y-3 text-gray-700">
                        <p>
                            <strong>🔍 Big Text:</strong> Makes all text larger and easier to read.
                        </p>
                        <p>
                            <strong>🎨 High Contrast:</strong> Makes colors stronger so everything is easier to see.
                        </p>
                        <p>
                            <strong>⌨️ Keyboard Navigation:</strong> You can use Tab to move between buttons and Enter/Space to click them!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
