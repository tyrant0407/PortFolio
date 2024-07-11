import React from 'react'
import Navbar from './navbar/Navbar'
import HeroImage from './heroComponents/HeroImage'
import HeroText from './heroComponents/HeroText'
import CenterFlex from './flexdiv/CenterFlex'

const HomePage = () => {
  return (
    <div className='relative overflow-x-hidden'>
        <Navbar/>
        <HeroImage/>
        <CenterFlex/>
        <HeroText/>
               
    </div>
  )
}

export default HomePage