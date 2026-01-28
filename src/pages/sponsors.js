import React from 'react';
import SponsorLogos from '../components/sponsors.js';
// import CallForSponsors from "../assets/call-for-sponsors.gif";

const Sponsors = () => (

<section>
<div className='w-11/12 mx-auto my-10 grid grid-cols-1 lg:grid-cols-2'>
        {/*<div className='px-5 my-5'>*/}
        {/*    <div className='aspect-w-16 aspect-h-9'>*/}
        {/*        <img src={CallForSponsors} width="960" height="569" className='rounded-2xl overflow-hidden' alt='LOCATION'></img>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className='px-5 my-5'>*/}
        {/*    <h2>Why Sponsor IWD {process.env.REACT_APP_CHAPTER_NAME}?</h2>*/}
        {/*    <p className='my-10 text-lg'><span className='font-semibold'>Technical Recruiting:</span> IWD {process.env.REACT_APP_CHAPTER_NAME} is a great opportunity to meet emerging talent in the {process.env.REACT_APP_CHAPTER_NAME} tech industry.*/}
        {/*    </p>*/}
        {/*    <p className='my-10 text-lg'><span className='font-semibold'>Brand Recognition/Product Exposure:</span> Expand your brand presence and expose attendees, partners, and press to your company, product, or API.*/}
        {/*    </p>*/}
        {/*    <p className='my-10 text-lg'><span className='font-semibold'>Support the {process.env.REACT_APP_CHAPTER_NAME} Tech Community:</span> We are excited to be a part of the growing tech community in {process.env.REACT_APP_CHAPTER_NAME}. Join us!*/}
        {/*    </p>*/}
        {/*    <a href={'mailto:' + process.env.REACT_APP_EVENT_EMAIL} className='text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4 my-5'>Become a Sponsor</a>*/}
        {/*</div>*/}
        
    </div>
    <SponsorLogos />
    
</section>

);

export default Sponsors;