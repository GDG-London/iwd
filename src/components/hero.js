import React from 'react';
import bannerImage from '../assets/Devfest_London_2025_Banner.png';
import TicketButton from './ticket-button';
import Banner from './banner';

const Hero = () => (
    <>
    <Banner />
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2 bg-IWDCard py-10 rounded-2xl border border-IWDPurple/30'>
        <div className='my-5 mx-auto flex items-center justify-center'>
            <img 
                src={bannerImage} 
                className="mx-auto w-full max-w-3xl rounded-2xl shadow-2xl object-contain border-2 border-IWDPurple/50" 
                alt='International Womens Day London 2026 Banner'
            />
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12 px-8'>
            <div className="mb-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                    International
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold text-IWDLightPurple leading-tight">
                    Women's Day
                </h1>
            </div>
            <div className="inline-flex items-center my-3 gap-2">
                <span className="bg-IWDPurple text-white px-4 py-2 rounded-full border-2 border-IWDLightPurple font-bold text-lg">{process.env.REACT_APP_EVENT_CITY || 'London'}</span>
                <span className="text-white px-4 py-2 rounded-full border-2 border-IWDPurple font-bold text-lg bg-IWDDeepPurple">2026</span>
            </div>
            <h3 className='text-IWDLightPurple font-semibold text-xl my-3'>{process.env.REACT_APP_EVENT_DATE || '14th March 2026'}</h3>
            <p className='sm:px-5 sm:text-lg text-IWDText my-2'>{process.env.REACT_APP_EVENT_DESCRIPTION || 'We\'re excited to announce that International Women\'s Day (IWD) 2026 London by GDG London will take place at Blackett Laboratory, Imperial College London. Join us for a community-run one-day conference aimed to bring technologists, developers, students, tech companies, and speakers together in one location to learn, discuss and experiment with technology.'}</p>
            <p className='sm:px-5 sm:text-lg text-IWDText my-2'>More info about the speakers is coming soon!</p>

            <div className='mt-4'>
                <TicketButton href={process.env.REACT_APP_REGISTRATION_URL || "https://www.eventbrite.com/e/iwd-london-2026-tickets"} />
            </div>
        </div>
    </section>
    </>
);

export default Hero;