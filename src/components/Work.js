import React from 'react';
import './Work.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Work = () => {

    return (
        <>
        <div className='section-background-color-dark' id='work'>
            <div className='container'>
                <h1 className="heading-gradient">How We Work</h1>

                <div class="mainwe1">

                <div class="firstwe1">
                    <h3>Initial Consultation</h3>
                    <p>We initiate a quick call to deeply understand and analyze your business, and identify any areas that may need improvement.</p>
                </div>  

                <div class="secwork">
                    <img className='stepheight' src='https://blueslag.com/wp-content/uploads/2024/06/1ss-removebg-preview.png' />
                </div>
          
            </div>
            <div class="mainwe1">

            <div class="secwork">
                <img className='stepheight' src='https://blueslag.com/wp-content/uploads/2024/06/2s-removebg-preview.png' />
            </div>
            <div class="firstwe1">
                <h3>Follow-up Meeting</h3>
                <p>If we determine we're a good fit for your needs, we schedule a follow-up meeting to discuss essential elements and services needed to achieve optimal results.</p>
            </div>  

            </div>
            <div class="mainwe1">

            <div class="firstwe1">
                <h3>Service Implementation</h3>
                <p>We begin implementing the necessary services to maximize profits for your business.</p>
            </div>  

            <div class="secwork">
                <img className='stepheight' src='https://blueslag.com/wp-content/uploads/2024/06/3s-removebg-preview.png' />
            </div>

            </div>

            </div>
        </div>
        </>
    );
};
        
export default Work;