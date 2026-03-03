import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-IWDDeepPurple via-IWDPurple to-IWDViolet text-white py-6 mb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-IWDPink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-IWDMagenta rounded-full blur-3xl"></div>
      </div>
      <div className="w-11/12 mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          {process.env.REACT_APP_EVENT_NAME || 'Build with AI · IWD · 2026 · GDG London'}
        </h1>
        <p className="text-lg sm:text-xl opacity-95">
          {process.env.REACT_APP_EVENT_TAGLINE || 'Empowering Voices. Building the Future with AI'}
        </p>
        <div className="flex justify-center items-center gap-6 mt-4 text-sm sm:text-base flex-wrap">
          <span className="flex items-center gap-2">
            <span className="text-2xl">📍</span>
            {process.env.REACT_APP_EVENT_CITY || 'London'}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-2xl">📅</span>
            {process.env.REACT_APP_EVENT_DATE || '14th March 2026'}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            {process.env.REACT_APP_ATTENDEE_COUNT || '250+'} Attendees
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;

