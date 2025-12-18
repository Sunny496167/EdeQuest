import QuizEngine from './QuizEngine';
import flagsQuiz from '../../data/social-science/flagsQuiz';

function FlagQuiz() {
    // Transform flag quiz data to match QuizEngine format
    // We need to format the question to include the flag emoji
    const formattedQuestions = flagsQuiz.map(q => ({
        question: `${q.flag}\n\nWhich country does this flag belong to?`,
        options: q.options,
        correctAnswer: q.correctAnswer
    }));

    return (
        <div className="max-w-3xl mx-auto">
            <QuizEngine
                title="Guess the Country!"
                subtitle="Can you match the flag to the correct country?"
                questions={formattedQuestions}
                subject="geography"
                emoji="🌍"
                difficulty="easy"
            />
        </div>
    );
}

export default FlagQuiz;
