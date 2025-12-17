import { useState } from 'react';

function PronunciationButton({ text, language = 'en-US', label = '🔊' }) {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speak = () => {
        // Check if speech synthesis is supported
        if (!('speechSynthesis' in window)) {
            alert('Sorry, your browser does not support text-to-speech!');
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);

        // Set language based on prop
        utterance.lang = language;

        // Select a female voice if available
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(
            (voice) =>
                voice.lang === language &&
                (voice.name.toLowerCase().includes('female') ||
                    voice.name.toLowerCase().includes('woman') ||
                    voice.name.toLowerCase().includes('girl') ||
                    voice.name.toLowerCase().includes('zira') || // Common female voice name for en-US
                    voice.name.toLowerCase().includes('helen')) // Another common female voice name for en-US
        );

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        } else {
            // Fallback: try to find any voice for the specified language
            const anyVoiceForLang = voices.find((voice) => voice.lang === language);
            if (anyVoiceForLang) {
                utterance.voice = anyVoiceForLang;
            }
            // If no specific voice is set, the browser will use its default for the language
        }

        // Set voice properties
        utterance.rate = 0.9; // Slightly slower for learning
        utterance.pitch = 1;
        utterance.volume = 1;

        // Event handlers
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        // Speak
        window.speechSynthesis.speak(utterance);
    };

    return (
        <button
            onClick={speak}
            disabled={isSpeaking}
            className={`ml-2 px-3 py-1 rounded-lg transition-all duration-200 ${isSpeaking
                ? 'bg-green-500 text-white scale-110'
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
                }`}
            title="Listen to pronunciation"
        >
            {isSpeaking ? '🔊' : label}
        </button>
    );
}

export default PronunciationButton;
