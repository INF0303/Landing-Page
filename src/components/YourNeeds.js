import React, { useEffect, useState } from 'react';
import './YourNeeds.css';

const YourNeeds = () => {
 

  return (
    <>
    <div className='section-background-color'>
                    <div className='container'>
                        <h1 className="heading-gradient">All Your needs at one place</h1>
                        
                        <div class="mainwe1">

                        <div class="firstwe1">
                        <img className="needimg" src='https://blueslag.com/wp-content/uploads/2024/06/meta.png' />
                            <h3>Meta Ad</h3>
                            <p>We have strong experience in generating quality leads or growing & scaling your business. You can just relax and let our team take things forward.</p>
                        </div>  

                        <div class="secwe1">
                        <img className='needimg' src='https://blueslag.com/wp-content/uploads/2024/06/immmgg-removebg-preview.png' />
                            <h3>CRO</h3>
                            <p>In a crowded market, our creative team knows what it takes to get customers' attention. Hence, we create highly optimized visuals & drives action.</p>
                        </div>
                
                    </div>

                    <div class="mainwe1">

                        <div class="firstwe1">
                        <img className='needimg' src='https://cdn3d.iconscout.com/3d/premium/thumb/seo-process-5617616-4674327.png?f=webp' />
                            <h3>SEO</h3>
                            <p>We have strong experience in generating quality leads or growing & scaling your business. You can just relax and let our team take things forward.</p>
                        </div>  

                        <div class="secwe1">
                        <img  className='needimg' src='https://blueslag.com/wp-content/uploads/2024/06/social-media-management-2602882-2194270.webp' />
                            <h3>SMM</h3>
                            <p>In a crowded market, our creative team knows what it takes to get customers' attention. Hence, we create highly optimized visuals & drives action.</p>
                        </div>
                
                    </div>
                    </div>
    </div>
                    
                     </>
  );
};

export default YourNeeds;
