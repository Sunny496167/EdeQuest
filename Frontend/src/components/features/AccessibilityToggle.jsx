import { useAccessibility } from '../../context/AccessibilityContext';

function AccessibilityToggle() {
    const { isLargeTextEnabled, isHighContrastEnabled, toggleLargeText, toggleHighContrast } = useAccessibility();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Accessibility Settings ⚙️
            </h2>
            <p className="text-gray-600 text-center mb-6">
                Make EduQuest easier to use for you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Large Text Toggle */}
                <button
                    onClick={toggleLargeText}
                    className={`
            p-6 rounded-xl text-center transition-all duration-200
            ${isLargeTextEnabled
                            ? 'bg-gradient-to-br from-blue-200 to-blue-100 ring-4 ring-blue-400'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }
            shadow-md hover:shadow-lg hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-blue-400
          `}
                    aria-label={isLargeTextEnabled ? "Disable large text" : "Enable large text"}
                    aria-pressed={isLargeTextEnabled}
                >
                    <div className="text-5xl mb-3">🔍</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Big Text
                    </h3>
                    <p className="text-sm text-gray-600">
                        {isLargeTextEnabled ? 'ON - Text is bigger!' : 'OFF - Make text bigger'}
                    </p>
                </button>

                {/* High Contrast Toggle */}
                <button
                    onClick={toggleHighContrast}
                    className={`
            p-6 rounded-xl text-center transition-all duration-200
            ${isHighContrastEnabled
                            ? 'bg-gradient-to-br from-purple-200 to-purple-100 ring-4 ring-purple-400'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }
            shadow-md hover:shadow-lg hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-purple-400
          `}
                    aria-label={isHighContrastEnabled ? "Disable high contrast" : "Enable high contrast"}
                    aria-pressed={isHighContrastEnabled}
                >
                    <div className="text-5xl mb-3">🎨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        High Contrast
                    </h3>
                    <p className="text-sm text-gray-600">
                        {isHighContrastEnabled ? 'ON - Colors are stronger!' : 'OFF - Make colors stronger'}
                    </p>
                </button>
            </div>

            {/* Help Text */}
            <div className="mt-6 bg-yellow-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-700">
                    💡 These settings help make learning more comfortable for everyone!
                </p>
            </div>
        </div>
    );
}

export default AccessibilityToggle;
