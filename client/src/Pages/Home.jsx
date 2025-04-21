


import React from 'react'
import './CSS/Home.css'
import Hero from '../Components/Hero/Hero'
import HomeDisplay from '../Components/HomeDisplay/HomeDisplay'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import PopularShoes from '../Components/PopularShoes/PopularShoes'
import HorizontalScroll from '../Components/HorizontalScroll/HorizontalScroll'




const Home = () => {

    
  return (
   <>
  
    <Hero />
    <HorizontalScroll />
    <HomeDisplay />
    <HomeBanner />
    <PopularShoes />


   </>
  )
}

export default Home
