import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import GooglePixel10a from '../assets/Google Pixel 10 a.png';
import GoogleEarBuds from '../assets/Google_Ear_buds.png';
import LegoLifestyleArt from '../assets/lego_Lifestyle_art.png';
import SonyHeadphones from '../assets/Sony_wireless_headphones.png';
import GamingKeyboard from '../assets/Wireless mechanical gaming keyboard.png';
import GoogleSocks from '../assets/Google_Socks.png';
import GoogleBags from '../assets/Google_bags.png';

const PRIZES = [
    { src: GooglePixel10a, name: 'Google Pixel 10a', featured: true },
    { src: GoogleEarBuds, name: 'Google Ear Buds', featured: true },
    { src: LegoLifestyleArt, name: 'Lego Lifestyle Art' },
    { src: SonyHeadphones, name: 'Sony Wireless Headphones' },
    { src: GamingKeyboard, name: 'Wireless Mechanical Gaming Keyboard' },
    { src: GoogleSocks, name: 'Google Socks' },
    { src: GoogleBags, name: 'Google Bags' },
];

const VISIBLE_COUNT = 3;
const MAX_INDEX = Math.max(0, PRIZES.length - VISIBLE_COUNT);

const PrizeCarousel = ({ variant = 'compact' }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((i) => (i >= MAX_INDEX ? 0 : i + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const isCompact = variant === 'compact';

    return (
        <div className="relative w-full overflow-hidden rounded-2xl bg-IWDDeepPurple/40 border border-IWDPurple/30 p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Prizes to Be Won</h3>
            {isCompact && (
                <div className="text-center mb-4">
                    <Link to="/prizes" className="text-IWDLightPurple hover:text-IWDPink font-semibold text-sm">
                        View all →
                    </Link>
                </div>
            )}
            <div className="relative flex items-center justify-center gap-4 overflow-hidden">
                <button
                    onClick={() => setActiveIndex((i) => (i <= 0 ? MAX_INDEX : i - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-IWDPurple/60 backdrop-blur-sm border border-IWDLightPurple/30 hover:bg-IWDPurple flex items-center justify-center text-white transition-all shadow-lg hover:scale-105"
                    aria-label="Previous prizes"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => setActiveIndex((i) => (i >= MAX_INDEX ? 0 : i + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-IWDPurple/60 backdrop-blur-sm border border-IWDLightPurple/30 hover:bg-IWDPurple flex items-center justify-center text-white transition-all shadow-lg hover:scale-105"
                    aria-label="Next prizes"
                >
                    <FaChevronRight />
                </button>
                <div className="flex gap-4 overflow-hidden" style={{ width: '100%', justifyContent: 'center' }}>
                    {Array.from({ length: VISIBLE_COUNT }, (_, i) => PRIZES[(activeIndex + i) % PRIZES.length]).map((prize, idx) => (
                        <div
                            key={idx}
                            className={`flex-shrink-0 flex flex-col items-center ${prize.featured ? 'max-w-[160px] sm:max-w-[200px]' : 'max-w-[140px] sm:max-w-[180px]'}`}
                        >
                            <div className="bg-white/10 rounded-xl p-4 w-full aspect-square flex items-center justify-center overflow-hidden">
                                <img
                                    src={prize.src}
                                    alt={prize.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                            <span className="text-white text-sm font-medium mt-2 text-center">{prize.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === activeIndex
                                ? 'bg-gradient-to-r from-IWDPurple to-IWDMagenta w-8'
                                : 'bg-white/25 w-2 hover:bg-white/40 hover:w-3'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PrizeCarousel;
