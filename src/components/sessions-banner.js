import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaList, FaCheckCircle } from 'react-icons/fa';

const SESSIONS_API = process.env.REACT_APP_SESSIONIZE_SESSIONS_API || 'https://sessionize.com/api/v2/9bnzxcxp/view/Sessions';

const SessionsBanner = () => {
    const [categoryTags, setCategoryTags] = useState([]);

    useEffect(() => {
        fetch(SESSIONS_API)
            .then(res => res.json())
            .then(data => {
                if (data && data[0] && data[0].sessions) {
                    const names = new Set();
                    data[0].sessions.forEach(session => {
                        (session.categories || []).forEach(cat =>
                            (cat.categoryItems || []).forEach(item => names.add(item.name))
                        );
                    });
                    setCategoryTags(Array.from(names).slice(0, 8));
                }
            })
            .catch(() => {});
    }, []);

    const staticTags = ['#BuildwithAI', ...categoryTags];

    return (
        <section className="relative py-5 px-4 bg-IWDBackground">
            <div className="max-w-6xl mx-auto">
                {/* Special info panel - distinct style */}
                <div className="relative overflow-hidden mb-4 rounded-2xl border-2 border-IWDPurple/50 bg-gradient-to-br from-IWDPurple/20 via-IWDDeepPurple/30 to-IWDViolet/20 shadow-xl shadow-IWDPurple/20">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(167,139,250,0.15)_0%,_transparent_50%)]" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-IWDMagenta to-transparent opacity-80" />
                    <div className="relative px-6 py-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border-2 border-IWDLightPurple/40 shadow-inner">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-IWDPurple/50 border-2 border-IWDLightPurple">
                                <FaCheckCircle className="text-IWDLightPurple text-xl" />
                            </div>
                            <span className="text-white font-bold text-base sm:text-lg tracking-wide">Speakers & agenda published</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link to="/schedule" className="inline-flex items-center gap-2 bg-IWDPurple hover:bg-IWDDeepPurple text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border border-IWDLightPurple/30 hover:scale-105">
                                <FaCalendarAlt /> Schedule
                            </Link>
                            <Link to="/sessions" className="inline-flex items-center gap-2 bg-IWDMagenta/80 hover:bg-IWDMagenta text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border border-IWDPink/30 hover:scale-105">
                                <FaList /> Sessions
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Tags row */}
                <div className="flex flex-wrap justify-center gap-2">
                    {staticTags.map((tag, i) => (
                        <span key={i} className="bg-IWDPurple/20 text-IWDLightPurple px-3 py-1.5 rounded-lg text-xs font-medium border border-IWDPurple/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SessionsBanner;
