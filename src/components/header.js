import React from 'react';
import logo from '../assets/GDGLndon_Lodo_wide.png';
import HamburgerMenu from './hamburger.js';
import Navbar from './navbar.js';
import TicketButton from './ticket-button';

const Header = () => (
 
    <header className="bg-white border-b-2 border-IWDPurple py-1 top-0 sticky z-10 shadow-lg shadow-IWDPurple/10">
    
        <nav className='flex justify-between items-center w-11/12 mx-auto py-3'>
            <div className='w-64'>
                <a href="/">
                    <img src={logo} className="h-10 sm:h-14" alt="GDG London Logo" />
                </a>
            </div>
            <div>
                <Navbar />
            </div>
            <div className='hidden lg:block'>
                <TicketButton 
                    href={process.env.REACT_APP_REGISTRATION_URL || "https://www.eventbrite.com/e/iwd-london-2026-tickets"}
                    compact={true}
                />
            </div> 
            <div className=''>
                <HamburgerMenu />
            </div>
        </nav>
    </header>

)

export default Header;

