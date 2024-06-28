import React from 'react';
import './CTA.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CTA = () => {
 
    return (
        <>
       <div className="section-background-color">
            <div className="container">

                <div className='ctaBackground'>
                <h2>Schedule a Demo</h2>
                <p>See our solution in action. Schedule a demo today and discover how we can help your business grow!</p>
                <button type="button" class="btn btncta">Get Call Back</button>

                </div>

            </div>
       </div>
       </>
    );
};
        
export default CTA;