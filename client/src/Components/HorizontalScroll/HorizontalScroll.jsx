




import React from 'react'
import './HorizontalScroll.css'
import Men_Sneakers from  '../Images/Updated simple green shoe.png'
import Men_Sneakers_Two from  '../Images/Updated simple, brown shoe.png'
import Men_Sneakers_Three from  '../Images/Updated simple, light gray shoe.png'






const HorizontalScroll = () => {

  return (
    <>

        <div className='HorizontalScroll-Container'>
            <div className='HorizontalScroll-Wrapper'>

            <div><img src={Men_Sneakers} alt='Sneaker 1' /></div>
        <div><img src={Men_Sneakers_Two} alt='Sneaker 2' /></div>
        <div><img src={Men_Sneakers_Three} alt='Sneaker 3' /></div>
        {/* Duplicate images for seamless loop */}
        <div><img src={Men_Sneakers} alt='Sneaker 1' /></div>
        <div><img src={Men_Sneakers_Two} alt='Sneaker 2' /></div>
        <div><img src={Men_Sneakers_Three} alt='Sneaker 3' /></div>






            </div>
        </div>


    </>
  )



}




export default HorizontalScroll
