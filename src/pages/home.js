import React from 'react';
import Hero from '../components/hero.js';
import SpeakerProfiles from '../components/speakers.js';
import LocationSection from '../components/location.js';
import SessionsBanner from '../components/sessions-banner.js';

const Home = () => (
    <div>
        <SessionsBanner />
        <Hero/>
        <SpeakerProfiles />
        <LocationSection />
    </div>

);
   


export default Home;