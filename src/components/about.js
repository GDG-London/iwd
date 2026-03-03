import React from 'react';

const About = () => (

    <section className='my-20 flex justify-center'>
        <div className='my-2 text-center m-4 sm:w-3/4 border-solid border-4 border-Yellow500 rounded-3xl p-5 sm:p-10 grid grid-cols-1  lg:grid-cols-2'>
            <div className=''>
                <div className='aspect-w-16 aspect-h-9'>                
                    <iframe src="https://www.youtube.com/embed/Gou_5qTPzwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='z-0'></iframe>
                </div>
            </div>
            <div>
                <h2 className='my-4'>About Build with AI · IWD</h2>
                <p className='my-2 sm:my-4 sm:px-10 sm:text-xl'>Build with AI are community-led technical workshops and hackathons hosted by GDGs and GDG on Campus. Our goal is to introduce the latest Google AI technologies and models—including Gemini, Vertex AI, AI Studio, and Antigravity—while bringing the local software development community together to network and learn. IWD 2026 by GDG London celebrates empowering voices and building the future with AI. <span className="font-semibold text-IWDPurple">#BuildwithAI</span></p>
                <div className='my-4 p-2'>
                    <a href='https://developers.google.com/community/devfest' className='text-white bg-Yellow500 hover:text-white rounded-full text-md px-6 py-4 '>Learn More</a>
                </div>
            </div> 
        </div>
    </section>
);

export default About;
