



import React, { useState, useEffect } from 'react';
import ShoeProductItem from '../ShoeProductItem/ShoeProductItem.jsx'
import './HomeDisplay.css'
import { products } from '../Arraydata/shoesdata.js';



const HomeDisplay = () => {

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.5 }
      );
  
      const element = document.querySelector('.home-display-container');
      if (element) observer.observe(element);
  
      return () => observer.disconnect();
    }, [hasAnimated]);

      



  return (
   <>

        <div  className={`home-display-container ${hasAnimated ? 'animated' : ''}`}>



            <div className={'home-display-wrapper'}>

               <div><p>SAVE 25%</p></div>
               <div><p>SAVE 25%</p></div>
               <div><p>SAVE 25%</p></div>


            </div>



            <div className={'home-display-shoe-wrapper'}>
              {products.slice(0, 3).map((data) => (
                <div key={data._id}>
                <ShoeProductItem _id={data._id} image={data.image} name={data.name} hoverImage={data.hoverImage}
                     oldprice={data.oldprice} price={data.price} description={data.description}  />
                </div>
              ))}

            </div>


            



        </div>







   </>
  )
}





export default HomeDisplay
