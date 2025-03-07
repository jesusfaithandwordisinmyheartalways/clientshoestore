





import React, { useState, useEffect } from 'react';
import './HomeBanner.css'


const HomeBanner = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true); // Trigger the animation when the component comes into view
          }
        },
        { threshold: 0.5 }
      );
  
      const element = document.querySelector('.home-banner-container');
      if (element) observer.observe(element);
  
      return () => observer.disconnect();
    }, [hasAnimated]);




  return (
   <>

        <div className={`home-banner-container ${hasAnimated ? 'animated' : ''}`}>


            <div className={'home-banner-wrapper'}>

                <div className='Home-banner-image'><div></div></div>
                <div  className='Home-banner-image-two'><div></div></div>

              


            </div>


        </div>




   </>
  )
}

export default HomeBanner
