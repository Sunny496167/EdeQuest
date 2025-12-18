import { useState, useEffect } from 'react';

function PronunciationButton({ text, language = 'en-US', label = '🔊' }) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [hasVoice, setHasVoice] = useState(true);

    useEffect(() => {
        // Check if voices are available for this language
        const checkVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            const languageCode = language.split('-')[0]; // Get base language (e.g., 'bn' from 'bn-IN')

            // Check for exact match or base language match
            const voiceAvailable = voices.some(voice =>
                voice.lang === language || voice.lang.startsWith(languageCode)
            );

            setHasVoice(voiceAvailable || voices.length > 0); // Always allow if any voices exist
        };

        // Voices might not be loaded immediately
        if (window.speechSynthesis) {
            checkVoices();
            window.speechSynthesis.onvoiceschanged = checkVoices;
        }
    }, [language]);

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

        // Get all available voices
        const voices = window.speechSynthesis.getVoices();
        const languageCode = language.split('-')[0]; // e.g., 'bn', 'ta', 'hi', 'es', 'en'

        // Try to find the best voice in this order:
        // 1. Exact language match (e.g., bn-IN)
        // 2. Base language match (e.g., bn)
        // 3. Female voice for any variant
        // 4. Any voice for the language
        // 5. Default browser voice (will try its best)

        let selectedVoice = null;

        // 1. Try exact match with female preference
        selectedVoice = voices.find(voice =>
            voice.lang === language &&
            (voice.name.toLowerCase().includes('female') ||
                voice.name.toLowerCase().includes('woman') ||
                voice.name.toLowerCase().includes('girl'))
        );

        // 2. Try exact match (any gender)
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang === language);
        }

        // 3. Try base language match (e.g., 'bn' for 'bn-IN')
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang.startsWith(languageCode));
        }

        // 4. For Bengali/Tamil, try Hindi as fallback (similar phonetics)
        if (!selectedVoice && (languageCode === 'bn' || languageCode === 'ta')) {
            selectedVoice = voices.find(voice => voice.lang.startsWith('hi'));
            if (selectedVoice) {
                console.log(`Using Hindi voice as fallback for ${language}`);
            }
        }

        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log(`Using voice: ${selectedVoice.name} (${selectedVoice.lang}) for text: ${text}`);
        } else {
            console.log(`No specific voice found for ${language}, using browser default`);
        }

        // Set language (browser will try to use appropriate voice)
        utterance.lang = language;

        // Set voice properties
        utterance.rate = 0.9; // Slightly slower for learning
        utterance.pitch = 1;
        utterance.volume = 1;

        // Event handlers
        utterance.onstart = () => {
            setIsSpeaking(true);
            console.log('Speech started');
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            console.log('Speech ended');
        };

        utterance.onerror = (event) => {
            setIsSpeaking(false);
            console.error('Speech error:', event.error);
            if (event.error === 'not-allowed') {
                alert('Please allow audio playback in your browser settings.');
            }
        };

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
            title={hasVoice ? "Listen to pronunciation" : "Voice may not be available for this language"}
        >
            {isSpeaking ? '🔊' : label}
        </button>
    );
}

export default PronunciationButton;
