import React from 'react';
import Hero from '../components/hero.js';
// import About from '../components/about.js';
import SpeakerProfiles from '../components/speakers.js';
// import SponsorLogos from '../components/sponsors.js';
import LocationSection from '../components/location.js';
import CallForSpeakers from '../components/call-for-speakers.js';
// import About from "../components/about";
// import Speakers from "./speakers";
// import MobileApp from "./app";

const Home = () => (
    <div>
        {/* <MobileApp/> */}
        <Hero/>
        {/*<Speakers/>*/}
        {/*<About/>*/}
        <CallForSpeakers />
        <SpeakerProfiles />
         <LocationSection />
        {/*<SponsorLogos/>*/}
    </div>

);
   


export default Home;