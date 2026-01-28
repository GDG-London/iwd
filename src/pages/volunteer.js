import React from 'react';

const Volunteer = () => (
    <div>
        <h1 className='text-center my-10'>Volunteer Form</h1>

        {/* Invitation message for filling out the form */}
        <p className='text-center'>
            Please fill this form if you want to become a volunteer.
        </p>

        <div className='flex flex-wrap justify-center items-center my-10'>
            {/* Embed the Google Form using an iframe */}
            <iframe
                title='Google Volunteer Form'
                src="https://docs.google.com/forms/d/e/1FAIpQLSfr24_oWj7LjKdoLuuNc575OYbbXP4nkX6VwbEP55kqUEJRTg/viewform"
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
