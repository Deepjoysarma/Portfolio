import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from "@remixicon/react"


const Navbar = () => {

    const [menu, openMenu] = useState(false)
    const [showMenu, setShowMenu] = useState(true)

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 py-6 md:px-20'>
      <span className='text-xl font-bold tracking-wide'><img className='w-25 h-15 bg-transparent' src="https://static.vecteezy.com/system/resources/previews/044/038/314/non_2x/gold-alphabet-letter-and-number-free-png.png" alt="" /></span>
      <ul className={`${menu ? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#About">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
        </a>
        <a href="#Experience">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
        </a>
        <a href="#Projects">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#Platforms">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>CodingPlatforms</li>
        </a>
        <a href="#Contact">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line 
            size={30}
            className='md:hidden absolute right-10 top-6 transition-all duration-300'
            onClick={() => {
                openMenu(!menu);
                setShowMenu(!showMenu);
            }}
        />
      ) : (
        <RiCloseLine 
            size={30}
            className='md:hidden absolute right-10 top-6 transition-all duration-300'    
            onClick={() => {
                openMenu(!menu);
                setShowMenu(!showMenu);
              }
            } 
        />
      )}
    </nav>
  )
}

export default Navbar
