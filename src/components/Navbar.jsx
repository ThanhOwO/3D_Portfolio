import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>
          AH
        </p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <div className='w-full px-2 rounded-lg bg-white items-center justify-center flex shadow-md'>
          <NavLink to="/about" className={({isActive}) => isActive ? 'blue-gradient_text' : 'text-black'}>
            About
          </NavLink>
        </div>
        <div className='w-full px-2 rounded-lg bg-white items-center justify-center flex shadow-md'>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'blue-gradient_text' : 'text-black'}>
            Projects
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar