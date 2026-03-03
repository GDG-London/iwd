import React, { useState, useEffect } from 'react';
import DevfestBanner from '../assets/Devfest_London_2026_Banner.png';
import EmpoweringVoicesBanner from '../assets/Empowering_Voices_Build_with_AI.png';

const SLIDE_INTERVAL = 5000;

const slides = [
    {
        src: DevfestBanner,
        alt: "2026 International Women's Day - Break the Pattern - Build with AI - GDG London",
    },
    {
        src: EmpoweringVoicesBanner,
        alt: "Build with AI - IWD - 2026 - GDG London - Empowering Voices. Building the Future with AI",
    },
];

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-3xl mx-auto min-w-0">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-IWDPurple/50 bg-IWDCard">
                {/* Placeholder to establish size - 56.25% = 16:9 aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-contain"
                                loading="eager"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === activeIndex
                                ? 'bg-IWDPurple scale-125'
                                : 'bg-IWDPurple/40 hover:bg-IWDPurple/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
