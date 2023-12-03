import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Pricing from '../Components/Pricing'
import Features from '../Components/Features'
import FAQs from '../Components/FAQs'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Pricing/>
    <FAQs/>
    <Testimonials/>
    </>
    
  )
}

export default Home