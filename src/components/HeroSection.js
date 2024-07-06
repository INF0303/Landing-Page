import React from 'react';
import './HeroSection.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
 
    return (
       <>      
       <div className="section-background-color" >
            <div className="container">
                <div className='toppadding' id='home'>
                <h1 className="heading-gradient">We build full-funnel Performance Marketing <br /> journeys that capture your customer's heart.</h1>

                <p className='subHeading'>“A dedicated team of specialists, delivering remarkable results worldwide!”
                </p>

                <div className="main">

                    <div className="first">

                        <div className="main1">                            
                            <div className="first1">
                                <p> <FontAwesomeIcon icon={faClock} className='icon-color'/> <b>Minium 3 Month Onboarding</b></p>
                            </div>
                            
                           <div class="second1">                
                                <p><FontAwesomeIcon icon={faCalendarAlt} className='icon-color'/><b>  15 days <br />notice period</b></p>
                            </div>
                        </div>
                        
                        <div className='calenderPara'>
                            <p><FontAwesomeIcon icon={faGlobe} className='icon-color'/><b> Boost sales with us</b><br /><span className='smallFont1' >Creative testing, audience segmentation, advanced bidding, and remarketing for maximum ROI.</span>
                        </p>
                        </div>

                        <div className="main2">
                            <div className="first2">
                            <img className="partnerSection" src="https://blueslag.com/new/wp-content/uploads/2024/06/19-e1719214346252-removebg-preview.png" alt="" />
                            <p>Meta Business <br />  Partner</p>   
                            </div>

                            <div className="second2">
                            <img className="partnerSection" src="https://blueslag.com/new/wp-content/uploads/2024/06/18-e1719214238476-removebg-preview.png" alt="" />
                            <p>Certified Shopify<br /> Business Partner</p>                                                         
                            </div>
                        </div>
                    </div>

                    <div className="second">
                    <div className="embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item vdo"
                src="https://www.youtube.com/embed/XlW48uZyu5U?autoplay=1&mute=1"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
        </div>

                        <p>Reserve a seat before June 22, 2024 to </p>
                        {/* <button type="button" class="btn btn-primary btnhero">Get Call Back</button> */}
                        <button type="button" class="btnhero">Get Started</button>
                        <p>*Use code "15LAKH" on checkout</p>

                    </div>
        
                </div>
                </div>

                    <div className="bordertop">
                    <h2>People we've trained work at</h2>
                        <div>
                        <img className="imgsize1" src="https://blueslag.com/wp-content/uploads/2024/07/black-e1720182412142.png" alt="" />
                        <img className="imgsize7" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-1-e1720182480205.png" alt="" />
                        <img className="imgsize2" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-11.png" alt="" />                        
                        <img className="imgsize4" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-4.png" alt="" />
                        <img className="imgsize5" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-8.png" alt="" />
                        <img className="imgsize11" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-6-e1720181471595.png" alt="" />                       
                        <br />
                        <img className="imgsize8" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-9-e1720181414994.png" alt="" />  
                        <img className="imgsize22" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-3.png" alt="" />        
                        <img className="imgsize6" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-2.png" alt="" />
                        <img className="imgsize3" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-12-e1720181348687.png" alt="" />
                        <img className="imgsize9" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-7.png" alt="" />                       
                        <img className="imgsize33" src="https://blueslag.com/wp-content/uploads/2024/07/blbg-5.png" alt="" />
                        </div>
                    </div>

                    <div className="mainach">

                        <div className="secondach">
                            <h3>5Cr+</h3>
                            <p>ads spend</p>
                        </div>

                        <div className="secondach">
                            <h3>25Cr+</h3>
                            <p>revenue</p>
                        </div>

                        <div className="secondach">
                            <h3>5Yr+</h3>
                            <p>experience</p>
                        </div>

                        <div className="secondach">
                            <h3>50+</h3>
                            <p>clients</p>
                        </div>

                    </div>           


            </div>
            
       </div>
       </>
    );
};
        
export default HeroSection;