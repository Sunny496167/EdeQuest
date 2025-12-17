import SubjectCard from '../components/SubjectCard';
import { useGamification } from '../context/GamificationContext';

function Mathematics() {
    const { progress } = useGamification();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">📐</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
                        Mathematics
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Choose a math topic to explore!
                    </p>
                </div>

                {/* Math Subject Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Basic Math */}
                    <SubjectCard
                        title="Basic Math"
                        emoji="🔢"
                        description="Addition, subtraction, multiplication, and division!"
                        color="bg-gradient-to-br from-purple-200 to-purple-100"
                        link="/math"
                        progress={`${progress.math || 0}%`}
                    />

                    {/* Algebra */}
                    <SubjectCard
                        title="Algebra"
                        emoji="🧮"
                        description="Solve equations and work with variables!"
                        color="bg-gradient-to-br from-indigo-200 to-indigo-100"
                        link="/algebra"
                        progress={`${progress.algebra || 0}%`}
                    />

                    {/* Fractions */}
                    <SubjectCard
                        title="Fractions"
                        emoji="🍕"
                        description="Learn about parts of a whole!"
                        color="bg-gradient-to-br from-pink-200 to-pink-100"
                        link="/fractions"
                        progress={`${progress.fractions || 0}%`}
                    />

                    {/* Geometry */}
                    <SubjectCard
                        title="Geometry"
                        emoji="📐"
                        description="Explore shapes, angles, and measurements!"
                        color="bg-gradient-to-br from-blue-200 to-blue-100"
                        link="/geometry"
                        progress={`${progress.geometry || 0}%`}
                    />
                </div>

                {/* Encouragement Section */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-lg text-gray-700">
                        🎯 Master math skills to solve problems and think logically!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Mathematics;
