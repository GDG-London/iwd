import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaCode, FaBrain, FaVideo, FaPalette, FaTicketAlt, FaTrophy, FaDiscord } from 'react-icons/fa';
import PrizeCarousel from '../components/prize-carousel';

const HACKATHON_URL = process.env.REACT_APP_HACKATHON_URL || 'https://gdg-london-hackathon.vercel.app/hackathon';
const TICKET_URL = process.env.REACT_APP_REGISTRATION_URL || 'https://buildwithai.gdg.london';
const DISCORD_URL = 'https://discord.com/invite/QujDVuNJ';
const ADVENTURE_URL = 'https://adventure.wietsevenema.eu/e/gdg-london';
const LEADERBOARD_URL = 'https://adventure.wietsevenema.eu/leaderboards/2c6f858e-98ec-438c-857f-671c5eab3c89';

const Hackathon = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tracks = [
        { icon: <FaBrain className="text-3xl" />, title: 'The Marathon Agent', description: 'Build autonomous systems for tasks spanning hours or days. Use Thought Signatures and Thinking Levels to maintain continuity.' },
        { icon: <FaCode className="text-3xl" />, title: 'Vibe Engineering', description: 'Leverage Google AI Studio Build tab. Build agents that write AND verify code through autonomous testing loops.' },
        { icon: <FaVideo className="text-3xl" />, title: 'The Real-Time Teacher', description: 'Use the Gemini Live API to synthesize live video and audio for adaptive learning experiences.' },
        { icon: <FaPalette className="text-3xl" />, title: 'Creative Autopilot', description: 'Combine Gemini 3 reasoning with multimodal creation for professional, brand-consistent assets.' },
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

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <a
                                href={HACKATHON_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-IWDPurple to-IWDMagenta text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                            >
                                <FaRocket /> Join Hackathon
                            </a>
                            <a
                                href={HACKATHON_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-IWDPurple text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-IWDPurple/20 transition-all"
                            >
                                Submit
                            </a>
                            <Link 
                                to="/prizes"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-IWDPurple text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-IWDPurple/20 transition-all"
                            >
                                <FaTrophy /> View Prizes
                            </Link>
                            <a
                                href={DISCORD_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#5865F2] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4752C4] transition-all"
                            >
                                <FaDiscord /> Join Discord
                            </a>
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
                            <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-IWDPurple/30 to-IWDDeepPurple/30 rounded-2xl p-8 border border-IWDPurple/50 hover:border-IWDMagenta transition-all">
                                <h3 className="text-xl font-bold text-white mb-3">Create or Join a Project Idea</h3>
                                <p className="text-gray-400 mb-4">Submit your hackathon project, join a team, or browse the Idea Gallery.</p>
                                <span className="text-IWDLightPurple text-sm font-semibold">Join now →</span>
                            </a>
                            <div className="block bg-gradient-to-br from-IWDMagenta/20 to-IWDPink/10 rounded-2xl p-6 border border-IWDMagenta/50 hover:border-IWDPink transition-all">
                                <div className="flex items-start gap-4">
                                    <img 
                                        src="/images/garden-forgotten-prompt.png" 
                                        alt="The Garden of the Forgotten Prompt" 
                                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">The Garden of the Forgotten Prompt</h3>
                                        <p className="text-gray-500 text-sm mb-2">Wed 11 Mar, 11:00pm – Sat 14 Mar, 6:00pm</p>
                                        <p className="text-gray-400 text-sm mb-3">Join this adventure and compete on the leaderboard. We&apos;ll provide Google Cloud credits — create a project so we can send you credits.</p>
                                        <div className="flex flex-wrap gap-2">
                                            <a href={ADVENTURE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-IWDMagenta/30 hover:bg-IWDMagenta/50 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-all">
                                                Start Adventure →
                                            </a>
                                            <a href={LEADERBOARD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-all">
                                                View Leaderboard
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ticket requirement */}
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex items-center gap-4">
                            <FaTicketAlt className="text-3xl text-amber-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-bold mb-1">Event Ticket Required</h3>
                                <p className="text-gray-400">You need a valid ticket for the event to participate in this hackathon. <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="text-IWDMagenta hover:text-IWDPink font-semibold">Get your ticket at buildwithai.gdg.london →</a></p>
                            </div>
                        </div>

                        {/* Discord Community */}
                        <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-2xl p-6 flex items-center gap-4">
                            <FaDiscord className="text-3xl text-[#5865F2] flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-bold mb-1">Join Our Discord Community</h3>
                                <p className="text-gray-400">Have questions? Need help with Google credits? Want to discuss the hackathon or the adventure? Join our Discord for Q&A and community discussions. <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:text-IWDPink font-semibold">Join Discord →</a></p>
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
                            <p className="text-gray-300 mb-4">In the Action Era, if a single prompt can solve it, it&apos;s not an application.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Baseline RAG — Simple data retrieval is now a baseline feature',
                                    'Prompt-Only Wrappers — System prompts in a basic UI',
                                    'Simple Vision Analyzers — Basic object identification',
                                    'Generic Chatbots — Standard bots for nutrition, job screening',
                                    'Medical Advice — No diagnostic advice projects',
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
                            <h3 className="text-2xl font-bold text-white mb-6">📋 What to Submit</h3>
                            <p className="text-gray-400 mb-6">Each submission must include:</p>
                            <div className="space-y-4">
                                {[
                                    'A working project',
                                    'A demo video (max 3 minutes) — Show the app in action and explain what it does.',
                                    'Project description — Explain the problem, the idea, and how the solution works.',
                                    'Code repository link (GitHub or similar). If private, provide read access to the judges.',
                                ].map((req, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-IWDPurple/10 rounded-lg p-4">
                                        <span className="bg-IWDPurple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </span>
                                        <span className="text-gray-300">{req}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm mt-4">Optional: Screenshots, design mockups, technical documentation</p>
                        </div>
                    </div>
                )}

                {/* Rules Section */}
                {activeTab === 'rules' && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-gradient-to-br from-IWDDeepPurple/50 to-IWDPurple/30 rounded-2xl p-8 border border-IWDPurple/30">
                            <h2 className="text-3xl font-bold text-white mb-8">Rules</h2>
                            <div className="space-y-8 text-gray-300">
                                {/* Event Ticket Required */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Event Ticket Required</h3>
                                    <p className="text-gray-400 mb-3">You need a valid ticket for the event to participate in this hackathon.</p>
                                    <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="text-IWDMagenta hover:text-IWDPink font-semibold">Get your ticket at buildwithai.gdg.london →</a>
                                </div>

                                {/* Eligibility */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Eligibility</h3>
                                    <p className="text-gray-400">Event organisers, speakers, and volunteers cannot and will not participate in the hackathon.</p>
                                </div>

                                {/* Teams */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Teams</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        <li>Solo builder or Team (max 4 members)</li>
                                        <li>Create an idea and allow others to join, or join an existing team with approval</li>
                                    </ul>
                                </div>

                                {/* Create or Join a Project Idea */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Create or Join a Project Idea</h3>
                                    <p className="text-gray-400 mb-3">When registering your idea, you will provide:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
                                        <li>Project Title</li>
                                        <li>Team Name</li>
                                        <li>Solo or Group project</li>
                                        <li>Team members (optional)</li>
                                        <li>LinkedIn profile</li>
                                    </ul>
                                    <p className="text-gray-400 mb-3">You can also browse the Idea Gallery and join an existing project.</p>
                                    <p className="text-gray-400 mb-3">Or join the adventure &quot;The Garden of the Forgotten Prompt&quot; — we will provide you Google Cloud credits. Create a project so we can send you credits.</p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer" className="text-IWDLightPurple hover:text-IWDPink font-semibold">Join Hackathon →</a>
                                        <a href={ADVENTURE_URL} target="_blank" rel="noopener noreferrer" className="text-IWDMagenta hover:text-IWDPink font-semibold">Start Adventure →</a>
                                        <a href={LEADERBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-semibold">View Leaderboard →</a>
                                    </div>
                                </div>

                                {/* Avoid These Project Types */}
                                <div>
                                    <h3 className="text-xl font-bold text-red-400 mb-3">⚠ Avoid These Project Types</h3>
                                    <p className="text-gray-400 mb-4">In the Action Era, if a single prompt can solve it, it&apos;s not an application.</p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Baseline RAG — Simple data retrieval is now a baseline feature</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Prompt-Only Wrappers — System prompts in a basic UI</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Simple Vision Analyzers — Basic object identification</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Generic Chatbots — Standard bots for nutrition, job screening</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Medical Advice — No diagnostic advice projects</li>
                                    </ul>
                                </div>

                                {/* What to Submit */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">What to Submit</h3>
                                    <p className="text-gray-400 mb-3">Each submission must include:</p>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-400">
                                        <li>A working project</li>
                                        <li>A demo video (max 3 minutes) — Show the app in action and explain what it does.</li>
                                        <li>Project description — Explain the problem, the idea, and how the solution works.</li>
                                        <li>Code repository link (GitHub or similar). If private, provide read access to the judges.</li>
                                    </ol>
                                    <p className="text-gray-500 text-sm mt-3">Optional: Screenshots, design mockups, technical documentation</p>
                                </div>

                                {/* Judging Criteria */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Judging Criteria</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        <li><strong className="text-white">Innovation</strong> — How original or creative is the AI idea?</li>
                                        <li><strong className="text-white">Technical Execution &amp; User Experience</strong> — Is the solution functional, well built, and easy to use?</li>
                                        <li><strong className="text-white">Impact</strong> — Does the project solve a real problem or improve user workflows in a meaningful way?</li>
                                    </ul>
                                </div>

                                {/* Winning Prizes */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Winning Prizes — Important</h3>
                                    <p className="text-gray-400 mb-3">🎉 Prizes are handed out live on event day — be there in person to claim your glory.</p>
                                    <p className="text-gray-400 mb-3">Show up, win big! No mail, no exceptions. Your moment in the spotlight awaits.</p>
                                    <p className="text-gray-400"><strong className="text-white">Team projects</strong> — prize goes to the project leader. The prize is awarded to the project leader only. How you share it with your team is entirely up to you — organisers do not decide, influence, or get involved in prize splitting. Your team, your call.</p>
                                </div>

                                {/* Your Data */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Your Data</h3>
                                    <p className="text-gray-400">Your submission data is stored for <strong className="text-white">30 days</strong> after the event and is <strong className="text-white">not shared</strong> outside the competition. We keep it simple: your info stays in-house for judging and event purposes only.</p>
                                </div>

                                {/* Submission Deadline */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Submission Deadline</h3>
                                    <p className="text-IWDMagenta font-bold text-lg">Friday, 13 March 2026 — 23:59</p>
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
                            <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-IWDPurple/30 to-IWDDeepPurple/30 rounded-2xl p-8 border border-IWDPurple/50 hover:border-IWDMagenta transition-all">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-IWDPurple/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaRocket className="text-4xl text-IWDMagenta" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Create a Team</h3>
                                    <p className="text-gray-400 mb-6">
                                        Have an idea? Start a team and recruit talented developers, designers, and innovators to bring it to life.
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-IWDPurple text-white px-6 py-3 rounded-xl font-semibold hover:bg-IWDMagenta transition-colors">
                                        Create Team →
                                    </span>
                                </div>
                            </a>

                            {/* Join Team */}
                            <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-IWDMagenta/20 to-IWDPink/10 rounded-2xl p-8 border border-IWDMagenta/50 hover:border-IWDPink transition-all">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-IWDMagenta/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaUsers className="text-4xl text-IWDPink" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Join a Team</h3>
                                    <p className="text-gray-400 mb-6">
                                        Looking to contribute? Browse existing teams looking for members with your skills and expertise.
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-IWDMagenta text-white px-6 py-3 rounded-xl font-semibold hover:bg-IWDPink transition-colors">
                                        Find Teams →
                                    </span>
                                </div>
                            </a>
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
                        <a 
                            href={DISCORD_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#5865F2]/30 hover:bg-[#5865F2]/50 text-white px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2"
                        >
                            <FaDiscord /> Discord Community
                        </a>
                        <a 
                            href={ADVENTURE_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-IWDMagenta/30 hover:bg-IWDMagenta/50 text-white px-4 py-2 rounded-lg text-sm transition-all"
                        >
                            Adventure
                        </a>
                        <a 
                            href={LEADERBOARD_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all"
                        >
                            Leaderboard
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
