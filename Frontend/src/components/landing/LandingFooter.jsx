import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, ArrowUp } from 'lucide-react';

/**
 * LANDING FOOTER - Complete page with links and info
 * ===================================================
 * PERFORMANCE OPTIMIZATION:
 * - Loads at bottom so doesn't affect initial page load
 * - Scroll to top button only shows when needed
 * - Simple layout without heavy animations
 * 
 * CONVERSION OPTIMIZATION:
 * - Additional navigation for exploration
 * - Social proof through social media links
 * - Newsletter signup for lead capture
 * - Legal links build trust
 */

const LandingFooter = () => {
    const [email, setEmail] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);

    // OPTIMIZATION: Show scroll-to-top button only when user scrolls down
    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Curriculum', href: '#curriculum' },
            { name: 'For Schools', href: '#schools' },
            { name: 'Parent Portal', href: '/parent' },
            { name: 'Mobile Apps', href: '#apps' }
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Careers', href: '#careers' },
            { name: 'Blog', href: '#blog' },
            { name: 'Press Kit', href: '#press' },
            { name: 'Contact Us', href: '#contact' },
            { name: 'Help Center', href: '#help' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
            { name: 'COPPA Compliance', href: '#coppa' },
            { name: 'Refund Policy', href: '#refund' }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Youtube, href: '#', label: 'YouTube' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* OPTIMIZATION: Grid layout for responsive footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: LearnQuest */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-3xl">📚</div>
                            <h3 className="text-2xl font-bold text-white">LearnQuest</h3>
                        </div>
                        <p className="text-sm mb-4">Making learning an adventure</p>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 mb-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* App Store Badges */}
                        <div className="space-y-2">
                            <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                                📱 Download on App Store
                            </div>
                            <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                                🤖 Get it on Google Play
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-white hover:underline transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-white hover:underline transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Legal & Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 mb-6">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-white hover:underline transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter Signup */}
                        <div>
                            <h4 className="text-white font-bold mb-2">Newsletter</h4>
                            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg transition-colors duration-300"
                                    aria-label="Subscribe"
                                >
                                    <Mail className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm">
                        © 2024 LearnQuest. All rights reserved.
                    </div>
                    <div className="text-sm">
                        Made with ❤️ in India
                    </div>
                    <div className="flex gap-4 text-sm">
                        <button className="hover:text-white transition-colors duration-300">
                            EN
                        </button>
                        <span>|</span>
                        <button className="hover:text-white transition-colors duration-300">
                            हिन्दी
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button - OPTIMIZATION: Only renders when needed */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </footer>
    );
};

export default LandingFooter;
