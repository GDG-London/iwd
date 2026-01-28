import React from 'react';
// import {Link} from 'react-router-dom';
import GoogleLogo from '../assets/sponsors/Google_2015_logo.png';
import CodeMagicLogo from '../assets/sponsors/codemagic-logo.svg';
import FlutterFlowLogo from '../assets/sponsors/FlutterFlow.svg';
import NewsUKTechLogo from '../assets/sponsors/News-UK-Tech.png';
import SkyscannerhLogo from '../assets/sponsors/Skyscanner-Logo.png';

import WTMLogo from '../assets/sponsors/WTM-logo.png';
// import GDSCLogo from '../assets/sponsors/GDSC-Logo.png';
import GDGAcademyLogo from '../assets/sponsors/GDGAcademy-logo.png';
import FlutterLNDLogo from '../assets/sponsors/Flutter-Logo.png'
import ChatGDGLogo from '../assets/sponsors/chatgdg.png'
import ZencoreLogo from '../assets/sponsors/zencore-dot_high-res.png'
const SponsorLogos = () => (

    <div className='text-center my-20'>
        <h2>Sponsors</h2>
        <p className='my-20'>Thank you to our exceptional sponsors for your generous and unwavering support towards the tech community. Your contributions are fueling innovation, fostering collaboration, and empowering future technology leaders. We deeply appreciate your commitment to driving progress and excellence within our vibrant tech ecosystem.</p>

        <section className='my-20'>
            <h2 className='my-10 font-semibold'>Gold</h2>
            <div>
                    <a href="https://www.google.com">
                    <img src={GoogleLogo} alt="Jetbrains" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
        </section>
        <section className='my-20'>
            <h2 className='my-10 font-semibold'>Silver</h2>
            <div className='flex w-full h-full justify-center'>
                <a href="https://www.flutterflow.io/">
                    <img src={FlutterFlowLogo} alt="FlutterFlow Logo" width="600px"  className="object-contain h-48"></img>
                </a>
            </div>
            <div className='flex w-full h-full justify-center'>
                <a href="https://codemagic.io">
                    <img src={CodeMagicLogo} alt="CodeMagic Logo" width="600px"  className="object-contain h-48"></img>
                </a>
            </div>
        </section>
        <section className='my-20'>
            <h2 className='my-10 font-semibold'>Bronze</h2>
            <div className='flex w-full h-full px-10 justify-center'>
                <a href="https://zencore.dev/">
                    <img src={ZencoreLogo} alt="Zencore"  width="600px" height="10rem" className="object-contain"></img>
                </a>
            </div>
            <div className='flex w-full h-full px-10 justify-center my-10'>
                <a href="https://www.skyscanner.net/jobs/engineering">
                    <img src={SkyscannerhLogo} alt="Skyscanner"  width="400px" height="10rem" className="object-contain"></img>
                </a>
            </div>
            <div className='flex w-full h-full px-10 justify-center my-10'>
                <a href="https://www.news.co.uk/news-technology-careers/">
                    <img src={NewsUKTechLogo} alt="News UK Tech"  width="300px" height="10rem" className="object-contain"></img>
                </a>
            </div>
        </section>
        <section>
            <h3 className='my-10 font-semibold'>Community Partners</h3>
            <div className='w-1/2 grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div className=''>
                    <a href="https://developers.google.com/womentechmakers">
                    <img src={WTMLogo} alt="WTM Logo" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
                <div className=''>
                    <a href="https://www.meetup.com/flutterldn/">
                        <img src={FlutterLNDLogo} alt="Flutter London" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
                {/* <div>
                    <a href="https://developers.google.com/community/gdsc">
                        <img src={GDSCLogo} alt="GDSC" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div> */}
                <div>
                    <a href="https://www.linkedin.com/company/gdg-academy/">
                        <img src={GDGAcademyLogo} alt="GDG ACADEMY" className="object-contain h-full w-full px-2"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/chatgdg/">
                        <img src={ChatGDGLogo} alt="Chat GDG" className="object-contain h-full w-full px-2"></img>
                    </a>
                </div>
            </div> 
        </section>
        {/* <div className='m-16'>
            <Link to='/sponsors' className='text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4'>Become a Sponsor</Link> 
         </div> */}

    </div>
);

export default SponsorLogos;