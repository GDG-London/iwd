import React, { useState } from 'react';
import { FaRocket, FaUsers, FaLightbulb, FaClock, FaCode, FaBrain, FaVideo, FaPalette, FaExternalLinkAlt } from 'react-icons/fa';

const Hackathon = () => {
    const [activeTab, setActiveTab] = useState('overview');

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
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Build with AI are community-led technical workshops and hackathons hosted by GDGs and GDG on Campus. Hackathons are events where people come together for a short, intensive period to solve a specific problem or build a functioning prototype—a &quot;minimum viable product&quot; (MVP)—from scratch. Our goal: introduce the latest Google AI technologies including Gemini, Vertex AI, AI Studio, and Antigravity. <span className="text-IWDMagenta font-semibold">#BuildwithAI</span>
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                                <div className="text-3xl font-bold text-IWDPurple">28,000+</div>
                                <div className="text-gray-400 text-sm">participants</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                                <div className="flex items-center gap-2 text-3xl font-bold text-IWDViolet">
                                    <FaClock /> Feb 9
                                </div>
                                <div className="text-gray-400 text-sm">deadline</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="https://gemini3.devpost.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-IWDPurple to-IWDMagenta text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-IWDPurple/50 hover:scale-105"
                            >
                                <FaRocket /> Join Hackathon <FaExternalLinkAlt className="text-sm" />
                            </a>
                            <a 
                                href="#teams" 
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-IWDPurple text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-IWDPurple/20 transition-all"
                            >
                                <FaUsers /> Find a Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-20 bg-IWDBackground/80 backdrop-blur-lg border-b border-IWDPurple/30">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex overflow-x-auto gap-1 py-2">
                        {['overview', 'tracks', 'teams', 'submit'].map((tab) => (
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
                                    <p className="text-gray-400 text-sm">Get hands-on access to the Gemini 3 API before the rest of the world catches up.</p>
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
                                    <a 
                                        href="https://gemini3.devpost.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-IWDPurple text-white px-6 py-3 rounded-xl font-semibold hover:bg-IWDDeepPurple transition-all"
                                    >
                                        Create Team <FaExternalLinkAlt className="text-sm" />
                                    </a>
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
                                    <a 
                                        href="https://gemini3.devpost.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-IWDMagenta text-white px-6 py-3 rounded-xl font-semibold hover:bg-IWDPink transition-all"
                                    >
                                        Find Teams <FaExternalLinkAlt className="text-sm" />
                                    </a>
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

                {/* Submit Section */}
                {activeTab === 'submit' && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                <FaLightbulb className="inline text-yellow-400 mr-3" />
                                Submit Your Idea
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Ready to showcase your innovation? Follow these steps to submit your project.
                            </p>
                        </div>

                        {/* Submission Steps */}
                        <div className="space-y-6">
                            {[
                                { step: 1, title: 'Register on Devpost', desc: 'Create an account and join the Gemini 3 Hackathon', icon: '📝' },
                                { step: 2, title: 'Build Your Project', desc: 'Use the Gemini 3 API to create your innovative application', icon: '🔨' },
                                { step: 3, title: 'Record a Demo', desc: 'Create a ~3 minute video showcasing your project', icon: '🎬' },
                                { step: 4, title: 'Submit Before Deadline', desc: 'Include all required materials before Feb 9, 2026 @ 5:00pm PST', icon: '🚀' },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-6 bg-gradient-to-r from-IWDPurple/20 to-transparent rounded-xl p-6 border-l-4 border-IWDPurple">
                                    <div className="flex-shrink-0 w-14 h-14 bg-IWDPurple rounded-xl flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-IWDLightPurple text-sm font-semibold mb-1">Step {item.step}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center py-12">
                            <div className="bg-gradient-to-r from-IWDDeepPurple via-IWDPurple to-IWDMagenta rounded-2xl p-12">
                                <h3 className="text-3xl font-bold text-white mb-4">Ready to Break the Pattern?</h3>
                                <p className="text-gray-200 mb-8 max-w-xl mx-auto">
                                    Don't miss your chance to be part of AI history. The deadline is approaching fast!
                                </p>
                                <a 
                                    href="https://gemini3.devpost.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-IWDDeepPurple px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                                >
                                    <FaRocket /> Submit Your Project <FaExternalLinkAlt className="text-sm" />
                                </a>
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
