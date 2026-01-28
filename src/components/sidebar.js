import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { MdClose, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";


var styles = {
   
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0'
    },
    bmMenu: {
      background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #8B5CF6 100%)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      border: '2px solid #7C3AED'
    }
    
  }
  
const HamburgerIcon = () => (
    <div className='text-black text-4xl'>
        <MdMenu />
    </div>
);


const Sidebar = () => {
    const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
    return (
        <Menu 
        right 
        noOverlay 
        customBurgerIcon={<HamburgerIcon />} 
        disableAutoFocus
        width={ '35%'} 
        styles={ styles }
       
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}>
            <div className='flex flex-wrap justify-end'>
                <div className='text-white text-4xl text-right flex flex-col items-end cursor-pointer'>
                    <MdClose onClick={() => handleCloseMenu()} />
                </div>
                <ul className='text-right'>
                    {/*<li className='my-5'><NavLink onClick={() => handleCloseMenu()} to="/" className='text-white'>Home</NavLink> </li> */}
                    <li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/schedule' className='text-white'>Schedule</NavLink></li>
                     <li className='my-5'><NavLink onClick={() => handleCloseMenu()} to="/speakers" className='text-white'>Speakers</NavLink> </li>
                     <li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/sessions' className='text-white'>Sessions</NavLink> </li>
                    <li className='my-5 text-white'><a href={process.env.REACT_APP_REGISTRATION_URL || "https://www.eventbrite.com/e/iwd-london-2026-tickets"}>Register</a></li>
                    <li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/location' className='text-white my-2 flex-row'>Location</NavLink> </li>
                    {/*<li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/sponsors' className='text-white'>Sponsors</NavLink> </li>*/}
                    {/*<li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/app' className='text-white'>Download App</NavLink></li>*/}
                    {/* 
                    <li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/code-of-conduct' className='text-white my-2 block'>Code of Conduct</NavLink></li> */}
                   <li className='my-5'><NavLink onClick={() => handleCloseMenu()} to='/volunteer' className='text-white my-2 block'>Volunteer</NavLink></li>
                </ul>
            </div>
        </Menu>
    )
}

export default Sidebar;