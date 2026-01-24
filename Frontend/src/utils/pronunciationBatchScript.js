/**
 * Batch script to add pronunciation buttons to remaining language pages
 * This script documents the exact changes needed for Spanish, Bengali, and Tamil
 * 
 * COMPLETED:
 * ✅ English (en-US) - 100 words + 100 phrases
 * ✅ Hindi (hi-IN) - 100 words + 100 phrases
 * 
 * REMAINING:
 * - Spanish (es-ES)
 * - Bengali (bn-IN)
 * - Tamil (ta-IN)
 */

// For each language page (Spanish.jsx, Bengali.jsx, Tamil.jsx):

// 1. Add import at top (after QuizEngine import):
// import PronunciationButton from '../components/PronunciationButton';

// 2. In Words section, replace the category badge div with:
/*
<div className="flex items-center gap-2">
    <PronunciationButton text={word.spanish/bengali/tamil} language="es-ES/bn-IN/ta-IN" label="🔊" />
    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">{word.category}</span>
</div>
*/

// 3. In Phrases section, replace the category badge span with:
/*
<div className="flex items-center gap-2">
    <PronunciationButton text={phrase.spanish/bengali/tamil} language="es-ES/bn-IN/ta-IN" label="🔊" />
    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 ml-2">{phrase.category}</span>
</div>
*/

export const remainingLanguages = [
    { file: 'Spanish.jsx', textKey: 'spanish', langCode: 'es-ES' },
    { bengali: 'Bengali.jsx', textKey: 'bengali', langCode: 'bn-IN' },
    { file: 'Tamil.jsx', textKey: 'tamil', langCode: 'ta-IN' }
];
