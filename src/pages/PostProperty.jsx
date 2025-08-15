import React, { useEffect, useState } from 'react'

const PostProperty = () => {
    const roles=["Owner","Agent","Tenant"]
    const [role,setRole]=useState();
    useEffect(()=>{
        console.log(role)
    },[role])
  return (
    <div>
        <form >
            <p>Let's get you started</p>
            <div>
                {
                    // roles.map((item,index)=><p key={index} className='border border-gray-300 px-5 py-3' onClick={()=>setRole(item)}>{item}</p>)
                    roles.map((item,index)=><label key={index} className={`px-4 py-2 rounded-full border cursor-pointer ${
              role === item ? "bg-red-500 text-white" : "bg-white text-gray-700"
            }`}>
                        <input type="radio" className='hidden' onChange={()=>setRole(item)} value={item}/>{item}
                    </label>)
                    
                }
            </div>
        </form>
    </div>
  )
}

export default PostProperty