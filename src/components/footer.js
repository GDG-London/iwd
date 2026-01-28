import React from 'react';
import { FaGlobe, FaLinkedin, FaMeetup, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gdg_logo from '../assets/gdg.png';

const Footer = () => (

    <footer className='bg-gradient-to-b from-IWDDarkPurple to-IWDBackground text-white p-10 border-t-4 border-IWDPurple'>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
            <div className=''>
                <h3>About GDG {process.env.REACT_APP_CHAPTER_NAME || 'London'}</h3>
                <p className='text-IWDText'>
                    GDG London and GDG Cloud London are groups of GDG chapters from around the city of London. We work together to bring technologists and developers from the London area to code, learn, have fun, and give back.
                    {/*{process.env.REACT_APP_CHAPTER_ABOUT} */}
                </p>
                <a href='https://gdg.community.dev/'>
                    <img src={gdg_logo} className='my-3 p-5 bg-white rounded-xl' alt='GDG {process.env.REACT_APP_CHAPTER_NAME} logo'></img>
                </a>
            </div>
            <div>
                <h3>Resources</h3>
                <ul className='text-IWDText'>
                    <li>
                        <a href='https://developers.google.com/community/gdg' className='hover:text-IWDLightPurple'>Google Developer Groups</a>                        
                    </li>
                    <li>
                        <a href='https://developers.google.com/womentechmakers' className='hover:text-IWDLightPurple'>Women Techmakers</a>
                    </li>
                    <li>
                        <a href='https://developers.google.com/community/gdsc' className='hover:text-IWDLightPurple'>Google Developer Student Clubs</a>
                    </li>
                    <li>
                        <a href='https://developers.google.com/community/experts' className='hover:text-IWDLightPurple'>Google Developer Experts</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <a href={'mailto:' + process.env.REACT_APP_EVENT_EMAIL} className='block text-IWDText hover:text-IWDLightPurple' aria-label='send email to GDG {process.env.REACT_APP_CHAPTER_NAME}'>{process.env.REACT_APP_EVENT_EMAIL}</a>
                <ul className='inline-flex space-x-4 text-xl my-4'>
                    <li>
                        <a href={process.env.REACT_APP_SOCIAL_WEBSITE} aria-label='GDG Chapter Website' className='hover:text-IWDLightPurple'><FaGlobe /></a>
                    </li>
                    <li>
                        <a href={'https://twitter.com/' + process.env.REACT_APP_SOCIAL_TWITTER} aria-label='follow GDG {process.env.REACT_APP_CHAPTER_NAME} on Twitter' className='hover:text-IWDLightPurple'><FaTwitter /></a>
                    </li>
                    <li>
                        <a href={process.env.REACT_APP_SOCIAL_LINKEDIN} aria-label='follow GDG {process.env.REACT_APP_CHAPTER_NAME} on LinkedIn' className='hover:text-IWDLightPurple'><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href={process.env.REACT_APP_SOCIAL_MEETUP} aria-label='follow GDG {process.env.REACT_APP_CHAPTER_NAME} on Meetup' className='hover:text-IWDLightPurple'><FaMeetup /></a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>IWD {process.env.REACT_APP_CHAPTER_NAME || 'London'}</h3>
                <ul className='text-IWDText'>
                    <li>
                        <Link to='/code-of-conduct' className='text-white hover:text-IWDLightPurple'>Code of Conduct</Link> 
                    </li>
                    {/*<li>*/}
                    {/*    <Link to='/faq' className='text-white'>FAQ</Link> */}
                    {/*</li>*/}
                    <li>
                        <Link to ='/volunteer' className='text-white hover:text-IWDLightPurple'>Volunteer</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='my-10 text-center text-IWDText'>
            <div>
                <span>Copyright 2026 Google Developer Groups (GDG) {process.env.REACT_APP_CHAPTER_NAME || 'London'} & Women Techmakers.</span>
            </div>
            <div>
                <span>GDG {process.env.REACT_APP_CHAPTER_NAME || 'London'} is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.</span>
            </div>
           
        </div>
    </footer>
);

export default Footer;