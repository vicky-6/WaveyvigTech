import React from 'react'
import HeroSection from './HeroSectionmain'
import OurSolution from './OurSolution'
import OurServices from './OurServices'
import WhyChoose from './WhyChoose'

const HomeMain = () => {
  return (
    <div style={{ backgroundColor: "#0b1d57" }}>
        <HeroSection/>
        <OurSolution />
        <OurServices />
        <WhyChoose />

    </div>
  )
}

export default HomeMain