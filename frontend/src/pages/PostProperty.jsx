import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { all_cities } from "../assets/cities.js";

const PostProperty = () => {
  const roles = ["Owner", "Agent", "Tenant"];
  const bhk = ["1 Bhk", "2 Bhk", "3 Bhk", "4 Bhk", "5 Bhk"];
  const [role, setRole] = useState();
  const [chosenBhk, setChosenBhk] = useState();
  useEffect(() => {
    console.log(role);
  }, [role]);
  return (
    
      <form className="flex flex-col gap-6 sm:max-w-100 w-[90%] m-auto">
        <h1>Let's get you started</h1>
        <div className="">
          {roles.map((item, index) => (
            <label
              key={index}
              className={`px-4 py-2 rounded-full border cursor-pointer mr-1 ${
                role === item
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                onChange={() => setRole(item)}
                value={item}
                name="role"
              />
              {item}
            </label>
          ))}
        </div>
        <div className="flex gap-3 ">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
        
        <label htmlFor="" className="flex gap-2 text-lg">
          Price :
          <input type="text" placeholder="Price " className="border border-gray-300 outline-none px-3 py-1 "/>
        </label>

        <div className="">
          <p className="mb-3">Property Type</p>
          {bhk.map((item, index) => (
            <label
            //   htmlFor="bhk"
              key={index}
              className={`px-3 py-2 rounded-full border cursor-pointer mr-1 ${
                chosenBhk === item
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              } `}
            >
              <input
                type="radio"
                name="bhk"
                className="hidden"
                value={item}
                onChange={() => setChosenBhk(item)}
              />
              {item}
            </label>
          ))}
        </div>
        
        <div>
          <p>City</p>
          
            <select>
            {all_cities.map((city,index)=>
              <option key={index} value={city.name}>{city.name}</option>
            )}</select>
          
        </div>
        <div>
          <p>Adress</p>
          <input type="text" placeholder="Adress" />
        </div>
        <label htmlFor="" className="flex gap-2 text-lg">
            Contact Number :
            <input type="tel" placeholder="Whatsapp number"  className="border border-gray-300 outline-none px-3 py-1 "/>
        </label>
        <button type="submit" className="px-12 py-3 bg-black text-white  mt-4 w-fit m-auto">Submit</button>

      </form>
    
  );
};

export default PostProperty;
