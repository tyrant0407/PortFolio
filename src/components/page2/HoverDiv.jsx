import React from 'react'

const HoverDiv = (props) => {
    
    const mouseEntered = ()=>{
        props.setImageScroll(props.translate)
    }

    return (
        <div onMouseEnter={mouseEntered}  id="hoveredText" className='relative flex items-center justify-between p-20 border-t-2 hover:px-40 hover:text-gray-400'>
            <div id='overlay' className='absolute top-0 left-0 z-40 w-full h-full'></div>
            <h1 className='capitalize text-9xl'>{props.h1}</h1>
            <p className='text-lg'>Interaction and Development</p>
        </div>
    )
}

export default HoverDiv