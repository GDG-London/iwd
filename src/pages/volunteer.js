import React from 'react';

const Volunteer = () => (
    <div>
        <h1 className='text-center my-10'>Volunteer Form</h1>

        {/* Invitation message for filling out the form */}
        <p className='text-center'>
            Please fill this form if you want to become a volunteer.
        </p>

        <div className='flex flex-wrap justify-center items-center my-10'>
            {/* Embed the IWD London Form using an iframe */}
            <iframe
                title='IWD London Volunteer Form'
                src="https://forms.gle/CvnSJFKVR7tjYhfk7"
                width="640"
                height="1561"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
            >
                Loading…
            </iframe>
        </div>
    </div>
);


export default Volunteer;
