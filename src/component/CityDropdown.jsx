import React, { useContext, useState } from 'react';
import { cities } from "../assets/cities.js";
import { assets } from '../assets/assets.js';
import { CityContext } from '../context/CityContext.jsx';

const { nearbyCities, popularCities, otherCities } = cities;

const CityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {city,setCity}=useContext(CityContext)

  return (  
    <div 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <button className="hover:bg-white hover:text-black text-white px-4  rounded-tl-md rounded-tr-md h-15 text-lg ">
        {city} <span className={`${isOpen ?"rotate-90":""} inline-block transition-transform `}><img className='h-3 ml-1' src={assets.dropdown_icon} alt=""/></span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0  sm:w-[400px] md:w-[500px] lg:w-[700px] bg-white shadow-lg rounded-lg p-6 z-50 transition-all duration-200 ease-in-out">
          
          {/* Nearby Cities */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Nearby Cities</h3>
            <div className="flex flex-wrap gap-x-8">
              {nearbyCities.map((city, idx) => (
                <p key={idx} onClick={()=>{setCity(city); setIsOpen(false)}}  className="cursor-pointer hover:text-red-500">{city}</p>
              ))}
            </div>
          </div>

          {/* Popular Cities */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Popular Cities</h3>
            <div className="flex flex-wrap gap-x-8">
              {popularCities.map((city, idx) => (
                <p key={idx} onClick={()=>{setCity(city); setIsOpen(false)}} className="cursor-pointer hover:text-red-500">{city}</p>
              ))}
            </div>
          </div>

          {/* Other Cities */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Other Cities</h3>
            <div className="flex flex-wrap gap-x-8">
              {otherCities.map((city, idx) => (
                <p key={idx} onClick={()=>{setCity(city); setIsOpen(false)}} className="cursor-pointer hover:text-red-500">{city}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;
