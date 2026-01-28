import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Speakers from './pages/speakers.js';
import Sponsors from './pages/sponsors.js';
import Schedule from './pages/schedule.js'
import Location from './pages/location.js'
import Policy from './pages/code-conduct-policy.js';
// import FAQ from './pages/faq.js';
// import Volunteer from './pages/volunteer.js';
// import PhotoAlbum from './pages/photo-album.js'
import ScrollToTop from "./components/scrolltotop.js";
import SessionDetails from "./components/sessions";
import PrivacyPolicy from './pages/privacy-policy.js';
import MobileApp from  './pages/app.js';

function App() {
  return (
    
        <Router>
          <Header />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/sessions" element={<SessionDetails />} />
                <Route path="/location" element={<Location />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/code-of-conduct" element={<Policy />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/app" element={<MobileApp />} />
                <Route path="/schedule" element={<Schedule />} />

                {/* 
                <Route path="/faq" element={<FAQ />} /> 
                <Route path='/photos' element={<PhotoAlbum/>} />
                <Route path="/volunteer" element={<Volunteer />} />
                 */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />   
              </Routes>
            </ScrollToTop>
          <Footer />
       </Router>
        
     
  );
}

export default App;
