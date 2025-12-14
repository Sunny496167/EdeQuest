import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-bg-soft via-purple-50 to-yellow-50">
            {/* Container with max width for large screens */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Navbar */}
                <Navbar />

                {/* Main Content Area */}
                <main className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
