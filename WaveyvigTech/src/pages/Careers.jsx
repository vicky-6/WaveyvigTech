import React from 'react'
import OpenPositions from './Careers/OpenPosition'
import JoinUs from './Careers/JoinUs'
import WhyJoin from './Careers/WhyJoin'
import TeamStories from './Careers/TeamStories'

function Careers() {
  return (
    <div style={{ backgroundColor: "#0b1d57" }}>
      <OpenPositions />
      <WhyJoin />
      <TeamStories />
      <JoinUs />
    </div>
  )
}

export default Careers