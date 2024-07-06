import React, { useEffect, useState } from 'react';
import './YourNeeds.css';

const YourNeeds = () => {
 

  return (
    <>
    <div className='section-background-color' id='whyus'>
                    <div className='container'>
                    <p className='subHeading'>Why us</p>
                        <h1 className="heading-gradient">All Your needs at one place</h1>
                        
                        <div class="mainwe1">

                        <div class="firstwe1">
                        <img className="needimg" src='https://blueslag.com/wp-content/uploads/2024/07/facebook.png' />
                            <h3>Facebook ads</h3>
                            <p>At Blueslag Technologies, we craft strategic and creative Facebook ad campaigns tailored to your goals. Our approach includes meticulous ad creation, rigorous testing, and data-driven optimizations for maximum ROI and sustainable growth.</p>
                        </div>  

                        <div className="mid">
                        <img className="midimg" src='https://blueslag.com/wp-content/uploads/2024/07/mta.webp' />
                        </div>  

                        <div class="secwe1">
                        <img className='needimg' src='https://blueslag.com/wp-content/uploads/2024/07/instagram-2.png' />
                            <h3>Instagram Ads</h3>
                            <p>Transform your brand with powerful Instagram ads by Blueslag Technologies. We create compelling visuals and effective messaging to engage your audience and drive results, from initial strategy to final optimization.</p>
                        </div>
                
                    </div>

                    <div class="mainwe1">

                        <div class="firstwe1">
                        <img className='needimg' src='https://blueslag.com/wp-content/uploads/2024/07/5873599.webp' />
                            <h3>Ad Creative</h3>
                            <p>We'll create highly engaging ad creatives tailored for catalogs, retargeting campaigns, and lookalike audiences, featuring compelling offers and striking color combinations</p>
                        </div>  

                        <div class="secwe1">
                        <img  className='needimg' src='https://blueslag.com/wp-content/uploads/2024/07/5552859.webp' />
                            <h3>Marketing Support</h3>
                            <p>Our services include managing your ads and website, optimizing landing pages, crafting offers, creating UGC videos, integrating advanced payment gateways, and providing support for WhatsApp API integration to enhance your business operations.
                            </p>
                        </div>
                
                    </div>
                    </div>
    </div>
                    
                     </>
  );
};

export default YourNeeds;
