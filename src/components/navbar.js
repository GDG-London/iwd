import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
    <div >
        <ul className="hidden lg:flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {/*<li>*/}
            {/*    <Link to="/" className='text-white'>Home</Link> */}
            {/*</li>*/}
          {/*   <li>
                <Link to='/schedule' className='text-black hover:text-IWDPurple font-semibold transition-colors'>Schedule</Link>
            </li> */}
            <li>
                <Link to="/speakers" className='text-black hover:text-IWDPurple font-semibold transition-colors'>Speakers</Link>
            </li>
           {/*  <li>
                <Link to='/sessions' className='text-black hover:text-IWDPurple font-semibold transition-colors'>Sessions</Link>
            </li> */}
            <li>
                <Link to='/location' className='text-black hover:text-IWDViolet font-semibold transition-colors'>Location</Link>
            </li>
            <li>
                <Link to='/volunteer' className='text-black hover:text-IWDViolet font-semibold transition-colors'>Volunteer</Link>
            </li>
            {/*<li>*/}
            {/*    <Link to='/sponsors' className='text-white'>Sponsors</Link> */}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to='/app' className='text-white'>Download App</Link>*/}
            {/*</li> */}
            {/* */}
            {/* <li>
                <Link to='/hackathon' className='text-black hover:text-IWDMagenta font-semibold transition-colors'>Hackathon</Link>
            </li> */}
            <li>
                <Link to='/code-of-conduct' className='text-black hover:text-IWDPurple font-semibold transition-colors'>Code of Conduct</Link>
            </li>
            {/*<li>*/}
            {/*   <a href='https://devfestlondon-pics.vercel.app/' className='text-white'>Photos</a>*/}
            {/*</li>*/}
        </ul>
    </div>
</div> 
)

export default Navbar;
