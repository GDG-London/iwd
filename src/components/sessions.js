import React, { useEffect, useState } from 'react';

const Sessions = () => {
    const [sessions, setSessions] = useState([]);

    const fetchData = () => {
        console.log("called sessionize")
        fetch('https://sessionize.com/api/v2/f0q5wqwj/view/Sessions')
            .then(response => response.json())
            .then(data => {
                console.log("data",data)

                if (data && data[0] && data[0].sessions) {
                    setSessions(data[0].sessions);
                }
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="text-center bg-white py-16">
            <div className="w-11/12 mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Program</h2>
                <p className="text-gray-600 text-lg mb-12">Explore our sessions, talks, and workshops</p>
                
                {sessions.length > 0 && (
                    <div className="grid gap-6">
                        {sessions.map((session, idx) => (
                            <div 
                                className='bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-DFBlue transition-all hover:shadow-lg text-left' 
                                key={idx}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <h3 className='text-xl font-bold text-gray-900 mb-2'>{session.title}</h3>
                                        {session.speakers && session.speakers.length > 0 && (
                                            <div className='flex flex-wrap gap-2'>
                                                {session.speakers.map((speaker, speakerIdx) => (
                                                    <span key={speakerIdx} className="text-DFBlue font-semibold">
                                                        {speaker.name}
                                                        {speakerIdx < session.speakers.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {session.categories.map(category =>
                                            category.categoryItems.map((item, itemIdx) => {
                                                const isTalk = item.name.includes("Talk");
                                                return (
                                                    <span 
                                                        key={itemIdx} 
                                                        className={`px-4 py-2 rounded-full text-white font-semibold text-sm ${
                                                            isTalk 
                                                                ? 'bg-DFBlue' 
                                                                : 'bg-DFGreen'
                                                        }`}
                                                    >
                                                        {isTalk ? 'Talk' : 'Workshop'}
                                                    </span>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                                <p className='text-gray-700 leading-relaxed'>{session.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Sessions;
