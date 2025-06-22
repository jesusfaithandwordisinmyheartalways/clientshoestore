





import React from 'react'
import './Hero.css'
import { image_logo } from '../Arraydata/logodata'


const Hero = () => {

    const homepage = () => {
      window.location.href = '/'
    }


  return (
   <>

        <div className={'hero-container'}>

            <div className={'hero-wrapper'}>

                <div onClick={homepage}><img className='hero-image'
                 src={image_logo.simple_hero_banner} alt='Shoe Hero Images' loading="lazy"></img>
                 </div>

            </div>



        </div>






   </>
  )
}

export default Hero
