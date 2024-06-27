import React from 'react';
import './HeroSection.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
 
    return (
       <>
       <div className="section-background-color">
            <div className="container">
                <h1 className="heading-gradient">Learn Performance Marketing: <br />The New-Age Digital Marketing</h1>

                <p className='subHeading'>Learn secret strategies & tactics that generated over $100M in revenue for <br /> various big & small brands</p>
                
                <div className="main">

                    <div className="first">

                        <div className="main1">                            
                            <div className="first1">
                                <p> <FontAwesomeIcon icon={faClock} className='icon-color'/> <b>3 Hours Total</b></p>
                            </div>
                            
                           <div class="second1">                
                                <p><FontAwesomeIcon icon={faGlobe} className='icon-color'/><b> Online Stream</b></p>
                            </div>
                        </div>
                        
                        <div className='calenderPara'>
                            <p><FontAwesomeIcon icon={faCalendarAlt} className='icon-color'/><b> 30th June, Sunday </b><br /><span className='smallFont1' >11:00 AM- 2:00 PM IST<br />
                            Q&A - 8 PM to 9 PM IST</span>
                        </p>
                        </div>

                        <div className="main2">
                            <div className="first2">
                                <img className="partnerSection" src="https://blueslag.com/new/wp-content/uploads/2024/06/18-e1719214238476-removebg-preview.png" alt="" />
                                <p>Certified Shopify<br /> Business Partner</p>
                            </div>

                            <div className="second2">
                                <img className="partnerSection" src="https://blueslag.com/new/wp-content/uploads/2024/06/19-e1719214346252-removebg-preview.png" alt="" />
                                <p>Meta Business <br />  Partner</p>                               
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item vdo" src="https://www.youtube.com/embed/w5UrGT2z0RU?rel=0" allowFullScreen title="YouTube Video"></iframe>
                        </div>
                        <p>Reserve a seat before June 22, 2024 to </p>
                        {/* <button type="button" class="btn btn-primary btnhero">Get Call Back</button> */}
                        <button type="button" class="btnhero">Get Started</button>
                        <p>*Use code "15LAKH" on checkout</p>

                    </div>
        
                </div>

                    <div className="bordertop">
                    <h2>People we've trained work at</h2>
                        <div>
                        <img className="imgsize" src="https://blueslag.com/new/wp-content/uploads/2024/06/shopify.svg" alt="" />
                        <img className="imgsize" src="https://blueslag.com/new/wp-content/uploads/2024/06/clutch.svg" alt="" />
                        <img className="imgsize" src="https://blueslag.com/new/wp-content/uploads/2024/06/trustpilot.svg" alt="" />
                        <img className="imgsize" src="https://blueslag.com/new/wp-content/uploads/2024/06/google.svg" alt="" />
                        <img className="imgsize" src="https://blueslag.com/new/wp-content/uploads/2022/08/review.svg" alt="" /> 
                        <img className="imgsize" src="https://blueslag.com/new/wp-content/uploads/2024/06/trustpilot.svg" alt="" />
                        <br />
                        <img className="imgsize1" src="https://blueslag.com/new/wp-content/uploads/2024/06/trustpilot.svg" alt="" />
                        <img className="imgsize1" src="https://blueslag.com/new/wp-content/uploads/2024/06/google.svg" alt="" />
                        <img className="imgsize1" src="https://blueslag.com/new/wp-content/uploads/2022/08/review.svg" alt="" /> 
                        <img className="imgsize1" src="https://blueslag.com/new/wp-content/uploads/2024/06/trustpilot.svg" alt="" />     
                        <img className="imgsize1" src="https://blueslag.com/new/wp-content/uploads/2024/06/shopify.svg" alt="" />
                        <img className="imgsize1" src="https://blueslag.com/new/wp-content/uploads/2024/06/clutch.svg" alt="" />   
                        </div>
                    </div>

                    <div className="mainvdo">
                            <div className="vdosize">
                                <video className="covervdo" width="200" height="200" controls >
                                    <source src="https://videos.pexels.com/video-files/10464565/10464565-sd_506_960_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="vdosize">
                                <video className="covervdo" width="200" height="200" controls>
                                    <source src="https://videos.pexels.com/video-files/6948550/6948550-uhd_1440_2560_24fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="vdosize">
                                <video className="covervdo" width="200" height="200" controls>
                                    <source src="https://videos.pexels.com/video-files/7005834/7005834-uhd_1440_2560_24fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="vdosize">
                                <video className="covervdo" width="200" height="200" controls>
                                    <source src="https://videos.pexels.com/video-files/7426663/7426663-hd_1080_1920_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                    </div>

                    <div className="mainach">

                        <div className="secondach">
                            <h3>$2M+</h3>
                            <p>ads spend</p>
                        </div>

                        <div className="secondach">
                            <h3>$10M+</h3>
                            <p>revenue</p>
                        </div>

                        <div className="secondach">
                            <h3>5Yr+</h3>
                            <p>experience</p>
                        </div>

                        <div className="secondach">
                            <h3>200+</h3>
                            <p>clients</p>
                        </div>

                    </div>           


            </div>
       </div>
       </>
    );
};
        
export default HeroSection;