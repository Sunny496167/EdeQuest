import QuizEngine from '../../components/quiz/QuizEngine';
import algebraQuestions from '../../data/mathematics/algebraQuestions';

function Algebra() {
    // Transform algebra questions to standard format
    const formattedQuestions = algebraQuestions.map((q, index) => ({
        id: index + 1,
        question: `Solve for x: ${q.equation}`,
        options: [
            q.answer.toString(),
            (q.answer + 1).toString(),
            (q.answer - 1).toString(),
            (q.answer + 2).toString()
        ].sort(() => Math.random() - 0.5), // Shuffle options
        correctAnswer: q.answer.toString()
    }));

    return (
        <QuizEngine
            title="Algebra Adventure"
            subtitle="Find the mystery number x!"
            questions={formattedQuestions}
            subject="algebra"
            emoji="🧮"
        />
    );
}

export default Algebra;
