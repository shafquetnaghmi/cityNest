import React, { useContext, useEffect, useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CityContext } from '../context/CityContext';

const Search = () => {
    const {city,setCity}=useContext(CityContext)
    const [searchValue,setSearchValue]=useState(city);
    const navigate=useNavigate();

    useEffect(()=>{
        setSearchValue(city)
    },[city])
    

    const handleSearch=()=>{
        if(!searchValue)return;
        navigate(`/results?query=${encodeURIComponent(searchValue)}`);
    }
  return (
    <div className='border border-gray-400 px-3 py-2 sm:w-[60%] m-auto w-[90%] rounded-full flex justify-between items-center mt-10'>
        <MdLocationOn className='text-2xl ' />
        <input className='w-full outline-none px-3' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder='Enter City, Locality, Project' />
        <button className='bg-black text-white px-10 py-3 rounded-full' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search