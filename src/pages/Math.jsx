import QuizEngine from '../components/QuizEngine';
import mathQuestions from '../data/mathQuestions';

function Math() {
    return (
        <QuizEngine
            title="Math Zone"
            subtitle="Challenge yourself with fun math problems!"
            questions={mathQuestions}
            subject="math"
            emoji="📐"
        />
    );
}

export default Math;
