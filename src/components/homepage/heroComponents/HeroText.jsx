import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const HeroText = () => {
  const {scrollY} = useScroll();
  const [direction, setdirection] = useState(1)

  const handleSrolling = ()=>{
     const current = scrollY.get()-scrollY.getPrevious();
     if(current>0){
      setdirection(1)
     }
     else{
      setdirection(-1)
     }
  }
    useEffect(() => {
      scrollY.on("change",handleSrolling)
    }, [scrollY])
    
  return (
    <motion.div 
    className='relative flex mt-0'
    initial={{
        x:-2075,
    }}
    animate={{
    x:direction>0?-4150:0,
        
    }}
    transition={{
        duration:6,
        ease:'linear',
        repeat:Infinity,
    }}
    
    >
        <h1 className='text-[14.5vw] font-light tracking-tight whitespace-nowrap text-white'>-AmanKushwaha</h1>
        <h1 className='text-[14.5vw] font-light tracking-tight whitespace-nowrap text-white'>-AmanKushwaha</h1>
        <h1 className='text-[14.5vw] font-light tracking-tight whitespace-nowrap text-white'>-AmanKushwaha</h1>
        
    </motion.div>
  )
}

export default HeroText