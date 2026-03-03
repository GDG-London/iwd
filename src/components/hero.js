import React from 'react';
import { Link } from 'react-router-dom';
import TicketButton from './ticket-button';
import Banner from './banner';
import HeroCarousel from './hero-carousel';

const Hero = () => (
    <>
    <Banner />
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2 bg-IWDCard py-10 rounded-2xl border border-IWDPurple/30'>
        <div className='my-5 mx-auto flex items-center justify-center px-2 w-full'>
            <HeroCarousel />
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12 px-8'>
            <div className="mb-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                    Build with AI · IWD
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold text-IWDLightPurple leading-tight">
                    2026 · GDG London
                </h1>
            </div>
            <div className="inline-flex items-center my-3 gap-2">
                <span className="bg-IWDPurple text-white px-4 py-2 rounded-full border-2 border-IWDLightPurple font-bold text-lg">{process.env.REACT_APP_EVENT_CITY || 'London'}</span>
                <span className="text-white px-4 py-2 rounded-full border-2 border-IWDPurple font-bold text-lg bg-IWDDeepPurple">2026</span>
                <span className="text-IWDMagenta px-4 py-2 rounded-full border-2 border-IWDMagenta font-bold text-sm">#BuildwithAI</span>
            </div>
            <h3 className='text-IWDLightPurple font-semibold text-xl my-3'>{process.env.REACT_APP_EVENT_DATE || '14th March 2026'}</h3>
            <p className='sm:px-5 sm:text-lg text-IWDText my-2'>{process.env.REACT_APP_EVENT_DESCRIPTION || 'Build with AI are community-led technical workshops and hackathons hosted by GDGs and GDG on Campus. Our goal is to introduce the latest Google AI technologies and models—including Gemini, Vertex AI, AI Studio, and Antigravity—while empowering voices and building the future together. Join us at Imperial College, South Kensington, for IWD 2026: a community-run, one-day conference open to everyone, celebrating diverse perspectives across the tech ecosystem.'}</p>
            <p className='sm:px-5 sm:text-lg text-IWDText my-2'>Speakers selected and agenda published — <Link to="/schedule" className="text-IWDMagenta hover:text-IWDPink font-semibold underline">explore the full schedule</Link>!</p>

            <div className='mt-4'>
                <TicketButton href={process.env.REACT_APP_REGISTRATION_URL || "https://www.eventbrite.com/e/iwd-london-2026-tickets"} />
            </div>
        </div>
    </section>
    </>
);

export default Hero;