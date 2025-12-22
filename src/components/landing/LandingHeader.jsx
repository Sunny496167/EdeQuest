import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

/**
 * LANDING PAGE HEADER
 * ===================
 * Sticky header with navigation and authentication buttons
 * Features:
 * - Smooth scrolling to sections
 * - Functional Login/Signup buttons
 * - Responsive mobile menu
 * - Transparent on top, solid on scroll
 */

const LandingHeader = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    // Navigation items
    const navItems = [
        { label: 'Features', sectionId: 'features' },
        { label: 'Curriculum', sectionId: 'curriculum' },
        { label: 'Pricing', sectionId: 'pricing' },
        { label: 'FAQ', sectionId: 'faq' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <GraduationCap className={`w-8 h-8 ${isScrolled ? 'text-indigo-600' : 'text-indigo-700'}`} />
                        <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            LearnQuest
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.sectionId}
                                onClick={() => scrollToSection(item.sectionId)}
                                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${isScrolled ? 'text-gray-700' : 'text-gray-800'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => navigate('/login')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isScrolled
                                ? 'text-gray-700 hover:text-indigo-600'
                                : 'text-gray-800 hover:text-indigo-600'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className="px-6 py-2 text-sm font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                        >
                            Sign Up Free
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 py-4 space-y-3">
                        {/* Mobile Navigation Links */}
                        {navItems.map((item) => (
                            <button
                                key={item.sectionId}
                                onClick={() => scrollToSection(item.sectionId)}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Mobile Auth Buttons */}
                        <div className="pt-3 border-t border-gray-200 space-y-2">
                            <button
                                onClick={() => {
                                    navigate('/login');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/signup');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-center text-white bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md"
                            >
                                Sign Up Free
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default LandingHeader;
