import React from 'react'
import NavRight from './NavRight'
import NavLeft from './NavLeft'

const Navbar = () => {
    return (
        <div className='relative z-10 flex items-center justify-between px-20 text-white py-9' >
            <NavLeft />
            <NavRight />
        </div>
    )
}

export default Navbar
