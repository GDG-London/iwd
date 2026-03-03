import React, { useEffect } from 'react';

const Schedule = () => {
    const scheduleApiUrl = process.env.REACT_APP_SESSIONIZE_SCHEDULE_API || 'https://sessionize.com/api/v2/2g40sb2m/view/GridSmart';
    const scheduleEmbedStyle = process.env.REACT_APP_SESSIONIZE_EMBED_STYLE || 'https://sessionize.com/api/v2/2g40sb2m/embedstyle';

    useEffect(() => {
        // Add Sessionize stylesheet to document head
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = scheduleEmbedStyle;
        document.head.appendChild(link);

        return () => {
            // Cleanup: remove stylesheet when component unmounts
            if (link.parentNode) {
                document.head.removeChild(link);
            }
        };
    }, [scheduleEmbedStyle]);

    return (
        <section className="text-center bg-DFBackground py-16">
            <div className="w-11/12 mx-auto max-w-6xl mb-8">
                <h2 className="text-4xl font-bold text-black mb-4">Conference Schedule</h2>
                <p className="text-DFBlue text-lg">Speakers selected and agenda published — view the full Build with AI · IWD 2026 schedule</p>
                {/* Note: Green colors in the schedule come from Sessionize's default theme.
                    To customize colors, go to your Sessionize dashboard → API/Embed → 
                    Customize colors to match your IWD London theme (blue/green). */}
            </div>
            <div id="sessionize" className="sessionize-wrapper w-11/12 mx-auto">
                <div className="w-full border-2 border-DFBlue rounded-lg overflow-hidden shadow-lg bg-white">
                    <iframe 
                        src={scheduleApiUrl}
                        title="IWD London Schedule" 
                        width="100%" 
                        height="800px"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Schedule;
