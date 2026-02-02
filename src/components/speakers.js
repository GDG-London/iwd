
import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import BioModal from './modal';


const SpeakerProfiles = () => {

    const [speakers, setSpeakers] = useState([])

    const fetchData = () => {
        fetch(process.env.REACT_APP_SESSIONIZE_SPEAKERS_API || 'https://sessionize.com/api/v2/jvtd8pme/view/Speakers')
            .then(response => {
                return response.json()
            })
            .then(data => {
                data.sort((a, b) => a.lastName.localeCompare(b.lastName));
                setSpeakers(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className="text-center py-16 bg-white">
            <div className='w-11/12 mx-auto max-w-6xl'>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Last Year's Speakers</h2>
                <p className="text-gray-600 text-lg mb-12">Meet our amazing lineup of speakers</p>

                {speakers.length > 0 && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {speakers.map(speaker => {
                            const linkedInLink = speaker.links.find(link => link.linkType === 'LinkedIn');

                            return (
                                <div
                                    key={speaker.id}
                                    className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 hover:border-IWDPurple hover:scale-105'
                                >
                                    {/* Profile Picture with Gradient Background */}
                                    <div className="relative mb-6 mx-auto" style={{ width: '180px', height: '180px' }}>
                                        {/* Gradient Background Circle */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-IWDPurple via-IWDMagenta to-IWDPink"></div>

                                        {/* Profile Picture */}
                                        <div className="relative rounded-full w-40 h-40 mx-auto mt-4 border-4 border-white shadow-lg overflow-hidden">
                                            <img
                                                src={speaker.profilePicture}
                                                alt={speaker.fullName}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className='text-lg font-bold mb-2 text-gray-900'>{speaker.fullName}</h3>

                                    {/* Tagline */}
                                    <p className='text-gray-600 text-sm mb-4 min-h-[40px]'>{speaker.tagLine}</p>

                                    {/* Links */}
                                    <div className="flex items-center justify-center gap-4">
                                        {linkedInLink && (
                                            <a
                                                href={linkedInLink.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='text-IWDPurple hover:text-IWDMagenta text-sm font-semibold flex items-center gap-1 transition-colors'
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedin className="text-xl" />

                                            </a>
                                        )}
                                        {/* Read More Button */}
                                        <BioModal speaker={speaker} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default SpeakerProfiles;