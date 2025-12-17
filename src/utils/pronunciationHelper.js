// Helper script to add pronunciation buttons to language pages
// This documents the pattern for adding pronunciation to Hindi, Spanish, Bengali, Tamil

/*
PATTERN FOR ADDING PRONUNCIATION BUTTONS:

1. Add import at top:
import PronunciationButton from '../components/PronunciationButton';

2. For Words section, wrap the category badge area:
<div className="flex items-center gap-2">
    <PronunciationButton text={word.hindi/spanish/bengali/tamil} language="hi-IN/es-ES/bn-IN/ta-IN" label="🔊" />
    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
        {word.category}
    </span>
</div>

3. For Phrases section, wrap the category badge area:
<div className="flex items-center gap-2">
    <PronunciationButton text={phrase.hindi/spanish/bengali/tamil} language="hi-IN/es-ES/bn-IN/ta-IN" label="🔊" />
    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 ml-2">
        {phrase.category}
    </span>
</div>

LANGUAGE CODES:
- Hindi: hi-IN
- Spanish: es-ES
- Bengali: bn-IN
- Tamil: ta-IN
- English: en-US (already done)
*/

export const languageConfig = {
    hindi: { code: 'hi-IN', textKey: 'hindi' },
    spanish: { code: 'es-ES', textKey: 'spanish' },
    bengali: { code: 'bn-IN', textKey: 'bengali' },
    tamil: { code: 'ta-IN', textKey: 'tamil' }
};
