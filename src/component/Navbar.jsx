import React from 'react'
import { Link } from 'react-router-dom'
import CityDropdown from './CityDropDown'

const Navbar = () => {
  return (
    <div className='bg-black  flex justify-between items-center sm:pl-40 sm:pr-40 h-15 '>
        <div className='flex gap-6 items-center'>
            <Link to="/" ><span className='text-3xl text-white'>CityNest</span></Link>
           <span className='hidden sm:block '><CityDropdown/></span>
        </div>
        <div className='flex gap-5 items-center'>
            <Link to="/login " ><p className='text-xl hover:scale-125 text-white'>Login</p></Link>
            <Link to="/post" ><p className='bg-white text-black px-4 py-1 rounded-full'>Post Property</p></Link>
        </div>
        

    </div>
  )
}

export default Navbar