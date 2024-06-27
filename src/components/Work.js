import React from 'react';
import './Work.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Work = () => {

    return (
        <>
        <div className='section-background-color-dark'>
            <div className='container'>
                <h1 className="heading-gradient">How We Work</h1>

                <div class="mainwe1">

                <div class="firstwe1">
                    <h3>Step 1 </h3>
                    <p>We have strong experience in generating quality leads or growing & scaling your business. You can just relax and let our team take things forward.</p>
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
                <h3>Step 2</h3>
                <p>We have strong experience in generating quality leads or growing & scaling your business. You can just relax and let our team take things forward.</p>
            </div>  

            </div>
            <div class="mainwe1">

            <div class="firstwe1">
                <h3>Step 3</h3>
                <p>We have strong experience in generating quality leads or growing & scaling your business. You can just relax and let our team take things forward.</p>
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