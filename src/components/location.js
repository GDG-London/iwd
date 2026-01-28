import React from 'react';
import imperialImage from '../assets/imperial-college.jpg';

const LocationSection = () => {
    // Venue images from environment variables
    const venueImages = [
        process.env.REACT_APP_VENUE_IMAGE_1,
        process.env.REACT_APP_VENUE_IMAGE_2,
        process.env.REACT_APP_VENUE_IMAGE_3
    ].filter(Boolean); // Remove undefined values

    return (
        <section className='bg-gradient-to-br from-IWDDeepPurple via-IWDPurple to-IWDViolet text-white py-20 my-20 rounded-2xl relative overflow-hidden'>
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-IWDPink rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-IWDMagenta rounded-full blur-3xl"></div>
            </div>
            <div className="w-11/12 mx-auto relative z-10">
                <h2 className='text-center text-4xl font-bold mb-12'>Venue</h2>
                
                <div className="flex justify-center mb-12">
                    <span className="bg-white text-IWDDeepPurple px-6 py-3 rounded-full font-bold text-lg">
                        14th March 2026
                    </span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                    {/* Left Column - Information */}
                    <div className="space-y-6">
                        <div>
                            <h3 className='text-2xl font-bold mb-4'>
                                {process.env.REACT_APP_VENUE_NAME || 'Blackett Laboratory, Imperial College London'}
                            </h3>
                            <p className='text-lg leading-relaxed'>
                                {process.env.REACT_APP_VENUE_ADDRESS ? (
                                    <>
                                        {process.env.REACT_APP_VENUE_ADDRESS.split(',').map((line, idx) => (
                                            <span key={idx}>
                                                {line}<br />
                                            </span>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        Imperial College London,<br />
                                        South Kensington Campus,<br />
                                        London,<br />
                                        SW7 2AZ
                                    </>
                                )}
                            </p>
                        </div>

                        {process.env.REACT_APP_VENUE_LEVEL && (
                            <p className='text-lg'>
                                <strong>Level:</strong> {process.env.REACT_APP_VENUE_LEVEL}
                            </p>
                        )}

                        <p className='text-lg'>
                            Please use these coordinates if you have difficulty locating the entrance: <strong>51.499699, -0.179409</strong>
                        </p>

                        <p className='text-lg'>
                            If you are using WHAT3WORDS, you can use <a href="https://w3w.co/film.jump.stir" className="text-IWDLightPurple hover:text-white underline">///FILM.JUMP.STIR</a>
                        </p>

                        {(process.env.REACT_APP_VENUE_TRANSPORT || !process.env.REACT_APP_VENUE_TRANSPORT) && (
                            <div className='text-lg'>
                                <strong>How to get to Blackett Laboratory</strong><br />
                                {process.env.REACT_APP_VENUE_TRANSPORT || 'The nearest underground station is South Kensington station on the District, Circle, and Piccadilly lines. The venue is a short walk from the station.'}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Venue Image */}
                    <div className="flex justify-center items-center">
                        <a href="https://g.co/kgs/q448MNh" target="_blank" rel="noopener noreferrer">
                            <img 
                                src={imperialImage} 
                                alt="Imperial College London - Blackett Laboratory"
                                className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform w-full max-w-md"
                            />
                        </a>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12">
                    <h3 className='text-2xl font-bold mb-6 text-center'>Location Map</h3>
                    <div className="rounded-lg overflow-hidden shadow-lg border-2 border-IWDLightPurple/30">
                        <iframe 
                            src={process.env.REACT_APP_VENUE_MAP_URL || "https://maps.google.com/maps?q=Blackett+Laboratory,+Imperial+College+London,+South+Kensington,+London,+SW7+2AZ&output=embed"}
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Venue Location Map"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;