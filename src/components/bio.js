import React from 'react';

const SpeakerBio = ({ speaker }) => {
    if (!speaker) return null;

    return (
        <div className="space-y-4">
            <div>
                <h4 className="text-gray-600 text-sm font-medium">{speaker.tagLine}</h4>
                <p className="text-gray-700 leading-relaxed mt-2 whitespace-pre-line">{speaker.bio}</p>
            </div>
            {speaker.sessions && speaker.sessions.length > 0 && (
                <div>
                    <h4 className="font-semibold text-gray-900">Sessions</h4>
                    <ul className="list-disc list-inside text-gray-700 mt-1">
                        {speaker.sessions.map((session) => (
                            <li key={session.id}>{session.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SpeakerBio;