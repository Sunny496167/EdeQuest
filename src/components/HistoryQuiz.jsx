import QuizEngine from './QuizEngine';

function HistoryQuiz({ quiz, storyTitle }) {
    // Transform quiz data to match QuizEngine format
    const formattedQuestions = quiz.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer
    }));

    return (
        <QuizEngine
            title="History Quiz"
            subtitle={`Test what you learned about ${storyTitle || 'this story'}!`}
            questions={formattedQuestions}
            subject="history"
            emoji="⏳"
            difficulty="easy"
        />
    );
}

export default HistoryQuiz;
