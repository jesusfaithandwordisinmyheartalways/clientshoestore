

import React, { useEffect, useState } from 'react';
import './TopHeader.css'



const TopHeader = () => {
    const [showHeader, setShowHeader] = useState(false);


    useEffect(() => {
        setTimeout(() => {
          setShowHeader(true);
        }, 200); // Small delay for a better effect
      }, []);
    


  return (
  <>

    <div className={'TopHeader-Container'}>


        <div className={`TopHeader-Wrapper ${showHeader ? 'show' : ''}`}>

                <div><h3> Free Shipping on orders $500+ </h3></div>


        </div>




    </div>





  </>
  )
}

export default TopHeader
