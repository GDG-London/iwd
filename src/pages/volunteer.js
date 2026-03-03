import React from 'react';

const Volunteer = () => (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-IWDPurple mb-8 tracking-tight">
                Volunteer
            </h1>
            <div className="bg-gradient-to-br from-IWDPurple/5 via-IWDLightPurple/10 to-IWDViolet/5 border border-IWDPurple/20 rounded-2xl p-10 shadow-lg">
                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                    Volunteer submission is closed for now. Try again next year.
                </p>
                <p className="text-lg font-semibold text-IWDPurple">
                    We would like to have you!
                </p>
            </div>
        </div>
    </div>
);

export default Volunteer;
