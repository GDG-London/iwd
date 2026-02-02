import React from 'react';
import { FaMicrophone, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaStar, FaRocket } from 'react-icons/fa';

const CallForSpeakers = () => {
    const cfpUrl = process.env.REACT_APP_CFP_URL || 'https://sessionize.com/iwd-2026-gdg-london/';
    const cfpDeadline = process.env.REACT_APP_CFP_DEADLINE || '15 Feb 2026';
    const eventDate = process.env.REACT_APP_EVENT_DATE || '14th March 2026';

    return (
        <section className="py-14 bg-IWDBackground relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-[10%] w-32 h-32 bg-IWDPurple/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-[15%] w-40 h-40 bg-IWDMagenta/15 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                {/* Main Card */}
                <div className="relative">
                    {/* Subtle glow behind card */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-IWDPurple via-IWDMagenta to-IWDPink rounded-2xl blur opacity-30"></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-IWDPurple/20 overflow-hidden">
                        {/* Inner decorative elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-IWDPurple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        {/* Header */}
                        <div className="text-center mb-6 relative">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-IWDPurple to-IWDMagenta text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                                <FaMicrophone />
                                CALL FOR SPEAKERS NOW OPEN
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                Share Your Story at{' '}
                                <span className="bg-gradient-to-r from-IWDPurple via-IWDMagenta to-IWDPink bg-clip-text text-transparent">
                                    IWD 2026!
                                </span>
                            </h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                Are you passionate about AI, tech innovation, or ready to inspire others with your journey?
                            </p>
                        </div>

                        {/* First-Time Speakers Highlight - Toned down */}
                        <div className="bg-IWDPurple/15 rounded-xl p-4 mb-6 border border-IWDPurple/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-IWDPurple to-IWDMagenta rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaStar className="text-xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">
                                        First-Time Speaker? You're Especially Welcome!
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        We encourage applications from <span className="text-IWDLightPurple font-medium">all tech professionals</span>, 
                                        especially those speaking for the first time. Everyone's journey starts somewhere! 🚀
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 border border-IWDPurple/20">
                                <div className="w-10 h-10 bg-IWDPurple/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaCalendarAlt className="text-lg text-IWDLightPurple" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs">CFP Deadline</div>
                                    <div className="text-white font-bold">{cfpDeadline}</div>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 border border-IWDMagenta/20">
                                <div className="w-10 h-10 bg-IWDMagenta/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-lg text-IWDPink" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs">Event Date</div>
                                    <div className="text-white font-bold">{eventDate}</div>
                                </div>
                            </div>
                        </div>

                        {/* Topics */}
                        <div className="mb-6">
                            <div className="flex flex-wrap justify-center gap-2">
                                {[
                                    { name: 'AI/ML', emoji: '🤖' },
                                    { name: 'Flutter', emoji: '💙' },
                                    { name: 'Cloud/DevOps', emoji: '☁️' },
                                    { name: 'Mobile', emoji: '📱' },
                                    { name: 'Web', emoji: '🌐' },
                                    { name: 'Career Stories', emoji: '✨' },
                                    { name: 'Workshops', emoji: '🛠️' },
                                ].map((topic) => (
                                    <span 
                                        key={topic.name} 
                                        className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-full text-sm border border-white/10 hover:border-IWDPurple/50 transition-colors"
                                    >
                                        {topic.emoji} {topic.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <a 
                                href={cfpUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-IWDPurple to-IWDMagenta text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-IWDPurple/20"
                            >
                                <FaRocket />
                                Submit Your Proposal
                                <FaArrowRight className="text-sm" />
                            </a>
                            <p className="text-gray-500 text-xs mt-4">
                                Submit up to 3 proposals • Anonymised evaluation • Free for speakers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallForSpeakers;
