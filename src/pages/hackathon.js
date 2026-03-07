import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaClock, FaCode, FaBrain, FaVideo, FaPalette, FaTicketAlt, FaTrophy } from 'react-icons/fa';
import PrizeCarousel from '../components/prize-carousel';

const HACKATHON_URL = process.env.REACT_APP_HACKATHON_URL || 'https://buildwithai.gdg.london';
const TARGET_DATE = new Date('2026-03-11T09:00:00Z');

const Hackathon = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime());
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };
        update();
        const t = setInterval(update, 1000);
        return () => clearInterval(t);
    }, []);

    const tracks = [
        { icon: <FaBrain className="text-3xl" />, title: 'The Marathon Agent', description: 'Build autonomous systems for tasks spanning hours or days. Use Thought Signatures and Thinking Levels to maintain continuity.' },
        { icon: <FaCode className="text-3xl" />, title: 'Vibe Engineering', description: 'Leverage Google AI Studio Build tab. Build agents that write AND verify code through autonomous testing loops.' },
        { icon: <FaVideo className="text-3xl" />, title: 'The Real-Time Teacher', description: 'Use the Gemini Live API to synthesize live video and audio for adaptive learning experiences.' },
        { icon: <FaPalette className="text-3xl" />, title: 'Creative Autopilot', description: 'Combine Gemini 3 reasoning with multimodal creation for professional, brand-consistent assets.' },
    ];

    const requirements = [
        'Text description (~200 words) detailing Gemini 3 features used',
        'Public Project Link or AI Studio demo',
        'Public code repository (if no AI Studio link)',
        '~3-minute demonstration video',
    ];

    return (
        <div className="min-h-screen bg-IWDBackground">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-IWDPurple/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-IWDMagenta/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-IWDViolet/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-2 bg-IWDPurple/20 border border-IWDPurple rounded-full text-IWDLightPurple text-sm font-semibold mb-6">
                            🚀 HACKATHON 2026
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            Build with AI · IWD<br />
                            <span className="bg-gradient-to-r from-IWDPurple via-IWDMagenta to-IWDPink bg-clip-text text-transparent">
                                2026 · GDG London
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
                            Build with AI are community-led technical workshops and hackathons hosted by GDGs and GDG on Campus. Use any AI technology—from open models to cloud APIs—to build something real. Google tools like Gemini and AI Studio are optional.
                        </p>
                        <p className="text-IWDMagenta font-semibold mb-8">🎉 Prizes are handed out live on event day — be there in person to claim your glory. Show up, win big!</p>
                        
                        <div className="mb-8 max-w-2xl mx-auto">
                            <PrizeCarousel variant="compact" />
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                            {[
                                { value: timeLeft.days, label: 'DAYS' },
                                { value: timeLeft.hours, label: 'HOURS' },
                                { value: timeLeft.minutes, label: 'MINUTES' },
                                { value: timeLeft.seconds, label: 'SECONDS' },
                            ].map(({ value, label }) => (
                                <div key={label} className="bg-white/10 backdrop-blur-sm border border-IWDPurple/40 rounded-xl px-4 sm:px-6 py-4 sm:py-6 text-center min-w-[70px] sm:min-w-[90px]">
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
                                        {String(value).padStart(2, '0')}
                                    </div>
                                    <div className="text-gray-400 text-xs sm:text-sm mt-1 font-medium uppercase tracking-wider">{label}</div>
                                </div>
                            ))}
                            <div className="w-full text-center mt-2">
                                <div className="text-gray-400 text-sm">Opens 11th March 2026 at 9:00 AM GMT</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                to="/prizes"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-IWDPurple text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-IWDPurple/20 transition-all"
                            >
                                <FaTrophy /> View Prizes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-20 bg-IWDBackground/80 backdrop-blur-lg border-b border-IWDPurple/30">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex overflow-x-auto gap-1 py-2">
                        {['overview', 'rules', 'tracks', 'teams'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-lg font-semibold capitalize whitespace-nowrap transition-all ${
                                    activeTab === tab
                                        ? 'bg-IWDPurple text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                
                {/* Overview Section */}
                {activeTab === 'overview' && (
                    <div className="space-y-12 animate-fadeIn">
                        {/* 2 Ways to Participate */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-IWDPurple/30 to-IWDDeepPurple/30 rounded-2xl p-8 border border-IWDPurple/50">
                                <h3 className="text-xl font-bold text-white mb-3">Create or Join a Project Idea</h3>
                                <p className="text-gray-400 mb-4">Submit your hackathon project, join a team, or browse the Idea Gallery.</p>
                                <span className="text-IWDLightPurple text-sm">Opens 11th March 2026 at 9:00 AM GMT</span>
                            </div>
                            <div className="bg-gradient-to-br from-IWDMagenta/20 to-IWDPink/10 rounded-2xl p-8 border border-IWDMagenta/50">
                                <h3 className="text-xl font-bold text-white mb-3">Garden of Forgotten Prompt</h3>
                                <p className="text-gray-400 mb-4">Join the leaderboard for this adventure. We&apos;ll provide cloud credits and open it on the 11th. Create a project so we can send you credits.</p>
                                <span className="text-IWDLightPurple text-sm">Opens 11th March 2026 at 9:00 AM GMT</span>
                            </div>
                        </div>

                        {/* Ticket requirement */}
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex items-center gap-4">
                            <FaTicketAlt className="text-3xl text-amber-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-bold mb-1">Event Ticket Required</h3>
                                <p className="text-gray-400">You need a valid ticket for the event to participate in this hackathon. <a href={process.env.REACT_APP_REGISTRATION_URL || HACKATHON_URL} target="_blank" rel="noopener noreferrer" className="text-IWDMagenta hover:text-IWDPink font-semibold">Get your ticket →</a></p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-IWDDeepPurple/50 to-IWDPurple/30 rounded-2xl p-8 border border-IWDPurple/30">
                            <h2 className="text-3xl font-bold text-white mb-6">What is a Hackathon?</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Hackathons are events where people come together for a short, intensive period to solve a specific problem 
                                or build a functioning prototype—a <strong className="text-IWDMagenta">&quot;minimum viable product&quot; (MVP)</strong>—from scratch. 
                                <strong className="text-IWDLightPurple"> Build with AI</strong> are community-led technical workshops and hackathons hosted by GDGs and GDG on Campus, 
                                designed to introduce the latest Google AI technologies—Gemini, Vertex AI, AI Studio, and Antigravity—and empower you to create something real.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 rounded-xl p-6">
                                    <div className="text-IWDPurple text-2xl mb-3">🎯</div>
                                    <h3 className="text-white font-bold mb-2">Be First</h3>
                                    <p className="text-gray-400 text-sm">Get hands-on with the latest AI tools and build something real.</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-6">
                                    <div className="text-IWDMagenta text-2xl mb-3">🆕</div>
                                    <h3 className="text-white font-bold mb-2">Build Something New</h3>
                                    <p className="text-gray-400 text-sm">This challenge is strictly for new applications. Level playing field for everyone.</p>
                                </div>
                            </div>
                        </div>

                        {/* What NOT to build */}
                        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ Avoid These Project Types</h3>
                            <p className="text-gray-300 mb-4">In the Action Era, if a single prompt can solve it, it's not an application.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Baseline RAG - Simple data retrieval is now a baseline feature',
                                    'Prompt-Only Wrappers - System prompts in a basic UI',
                                    'Simple Vision Analyzers - Basic object identification',
                                    'Generic Chatbots - Standard bots for nutrition, job screening',
                                    'Medical Advice - No diagnostic advice projects',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-gray-400">
                                        <span className="text-red-400">✕</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-IWDPurple/30">
                            <h3 className="text-2xl font-bold text-white mb-6">📋 Submission Requirements</h3>
                            <div className="space-y-4">
                                {requirements.map((req, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-IWDPurple/10 rounded-lg p-4">
                                        <span className="bg-IWDPurple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </span>
                                        <span className="text-gray-300">{req}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Rules Section */}
                {activeTab === 'rules' && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-gradient-to-br from-IWDDeepPurple/50 to-IWDPurple/30 rounded-2xl p-8 border border-IWDPurple/30">
                            <h2 className="text-3xl font-bold text-white mb-6">📋 Hackathon Rules</h2>
                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Eligibility</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        <li>You must have a valid event ticket to participate</li>
                                        <li>Open to all attendees of Build with AI - IWD 2026</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Participation</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        <li>Create or join a project — submit your idea, join a team, or browse the Idea Gallery</li>
                                        <li>Use any AI technology — open models, cloud APIs, Google Gemini, AI Studio — your choice</li>
                                        <li>Build a functioning prototype (MVP) from scratch during the event</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Prizes</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        <li>Prizes are handed out live on event day — you must be present to claim</li>
                                        <li>No mail, no exceptions — show up to win big!</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Code of Conduct</h3>
                                    <p className="text-gray-400">All participants must adhere to the event Code of Conduct. Be respectful, inclusive, and collaborative.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tracks Section */}
                {activeTab === 'tracks' && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">Strategic Tracks</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                These tracks focus on market potential and technical depth. Innovate beyond these prompts to showcase the full potential of Gemini 3.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {tracks.map((track, idx) => (
                                <div 
                                    key={idx} 
                                    className="group bg-gradient-to-br from-IWDDeepPurple/40 to-transparent rounded-2xl p-8 border border-IWDPurple/30 hover:border-IWDMagenta/50 transition-all hover:scale-[1.02]"
                                >
                                    <div className="text-IWDMagenta mb-4">{track.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{track.title}</h3>
                                    <p className="text-gray-400">{track.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Teams Section */}
                {activeTab === 'teams' && (
                    <div id="teams" className="space-y-8 animate-fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                <FaUsers className="inline text-IWDPurple mr-3" />
                                Find Your Team
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Great ideas need great teams. Connect with fellow hackers, share skills, and build something amazing together.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Create Team */}
                            <div className="bg-gradient-to-br from-IWDPurple/30 to-IWDDeepPurple/30 rounded-2xl p-8 border border-IWDPurple/50">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-IWDPurple/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaRocket className="text-4xl text-IWDMagenta" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Create a Team</h3>
                                    <p className="text-gray-400 mb-6">
                                        Have an idea? Start a team and recruit talented developers, designers, and innovators to bring it to life.
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-IWDPurple/50 text-gray-400 px-6 py-3 rounded-xl font-semibold cursor-not-allowed">
                                        Create Team — Opens 11th March
                                    </span>
                                </div>
                            </div>

                            {/* Join Team */}
                            <div className="bg-gradient-to-br from-IWDMagenta/20 to-IWDPink/10 rounded-2xl p-8 border border-IWDMagenta/50">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-IWDMagenta/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaUsers className="text-4xl text-IWDPink" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Join a Team</h3>
                                    <p className="text-gray-400 mb-6">
                                        Looking to contribute? Browse existing teams looking for members with your skills and expertise.
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-IWDMagenta/50 text-gray-400 px-6 py-3 rounded-xl font-semibold cursor-not-allowed">
                                        Find Teams — Opens 11th March
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Team Tips */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-IWDPurple/30">
                            <h3 className="text-xl font-bold text-white mb-6">💡 Tips for Building a Great Team</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl mb-3">🎨</div>
                                    <h4 className="text-white font-semibold mb-2">Diverse Skills</h4>
                                    <p className="text-gray-400 text-sm">Mix developers, designers, and domain experts for well-rounded projects.</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-3">🎯</div>
                                    <h4 className="text-white font-semibold mb-2">Clear Vision</h4>
                                    <p className="text-gray-400 text-sm">Align on the problem you're solving and how AI can uniquely address it.</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-3">⚡</div>
                                    <h4 className="text-white font-semibold mb-2">Move Fast</h4>
                                    <p className="text-gray-400 text-sm">Prototype quickly, iterate often, and don't be afraid to pivot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Resources Bar */}
            <div className="bg-IWDDeepPurple/50 border-t border-IWDPurple/30 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-center text-white font-bold mb-6">📚 Resources</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="https://ai.google.dev/docs" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all"
                        >
                            Gemini API Docs
                        </a>
                        <a 
                            href="https://aistudio.google.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all"
                        >
                            Google AI Studio
                        </a>
                        <a 
                            href="https://gemini3.devpost.com/resources" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all"
                        >
                            Hackathon Resources
                        </a>
                    </div>
                </div>
            </div>

            {/* Add some CSS for animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Hackathon;
