import iosLogo from '../assets/appstore-apple.jpg';
import googlePlayLogo from '../assets/google-play-badge-logo.png';

const MobileApp = () => (
    <div className='text-center my-10'>
        <h1>Download Our App</h1>
        <p>Please download our app using one of the two links:</p>

        {/* Container for logos with flexbox utilities to center children */}
        <div className="flex justify-center items-center flex-col md:flex-row">
            {/* Apple App Store Link */}
            <a href="https://apps.apple.com/us/app/devfest-london/id6470840802" target="_blank" rel="noopener noreferrer" className="my-2">
                <img src={iosLogo} alt="Download on the App Store" className="store-logo h-12 md:h-15 w-auto object-contain mx-2" />
            </a>

            {/* Google Play Store Link */}
            <a href="https://play.google.com/store/apps/details?id=co.suprtech.devfestlondon&hl=en_GB" target="_blank" rel="noopener noreferrer" className="my-2">
                <img src={googlePlayLogo} alt="Get it on Google Play" className="store-logo h-12 md:h-15 w-auto object-contain mx-2" />
            </a>
        </div>
    </div>
);

export default MobileApp;
