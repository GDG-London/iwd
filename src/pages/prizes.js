import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaArrowLeft } from 'react-icons/fa';

import GooglePixel10a from '../assets/Google Pixel 10 a.png';
import GoogleEarBuds from '../assets/Google_Ear_buds.png';
import LegoLifestyleArt from '../assets/lego_Lifestyle_art.png';
import SonyHeadphones from '../assets/Sony_wireless_headphones.png';
import GamingKeyboard from '../assets/Wireless mechanical gaming keyboard.png';
import GoogleSocks from '../assets/Google_Socks.png';
import GoogleBags from '../assets/Google_bags.png';

const PRIZES = [
    { src: GooglePixel10a, name: 'Google Pixel 10a' },
    { src: GoogleEarBuds, name: 'Google Ear Buds' },
    { src: LegoLifestyleArt, name: 'Lego Lifestyle Art' },
    { src: SonyHeadphones, name: 'Sony Wireless Headphones' },
    { src: GamingKeyboard, name: 'Wireless Mechanical Gaming Keyboard' },
    { src: GoogleSocks, name: 'Google Socks' },
    { src: GoogleBags, name: 'Google Bags' },
];

const Prizes = () => (
    <div className="min-h-screen bg-IWDBackground py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <Link to="/hackathon" className="inline-flex items-center gap-2 text-IWDLightPurple hover:text-IWDPink mb-8 font-semibold">
                <FaArrowLeft /> Back to Hackathon
            </Link>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <FaTrophy className="text-yellow-400" />
                    Hackathon Prizes
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Prizes are handed out live on event day — be there in person to claim your glory. Show up, win big!
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {PRIZES.map((prize, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-br from-IWDDeepPurple/50 to-IWDPurple/20 rounded-2xl p-6 border border-IWDPurple/30 hover:border-IWDMagenta/50 transition-all"
                    >
                        <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                            <img
                                src={prize.src}
                                alt={prize.name}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling?.classList.remove('hidden'); }}
                            />
                            <span className="hidden text-gray-500 text-sm">No image</span>
                        </div>
                        <h3 className="text-white font-semibold text-center">{prize.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Prizes;
