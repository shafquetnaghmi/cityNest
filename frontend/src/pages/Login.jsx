import React,{useState} from 'react'
import CityDropdown from '../component/CityDropDown'
import Title from '../component/Title'

const Login = () => {

    const [currentState,setCurrentState]=useState("Signup")
    const [email,setEmail]=useState();
    const [password,setPassword]=useState()

    const handleSubmit=(e)=>{
      e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center sm:max-w-96 m-auto mt-14 w-[90%] gap-4 text-gray-800'>
        <div className='flex items-center gap-4'>
            <p className='text-3xl'>{currentState}</p>
            <hr className='bg-gray-800 border-none h-[1.5px] w-8'/>
        </div>
        {currentState==="Login"?"":<input type="text" name="" placeholder='Name' className='border border-gray-700 w-full px-3 py-2'/>}
        {currentState==="Login"?"":<input type="email" name="" placeholder='Email' className='border border-gray-700 w-full px-3 py-2'/>}
        <input type="text" name="" placeholder='Mobile Number' className='border border-gray-700 w-full px-3 py-2'/>
        <input type="text" name="" placeholder='Password' className='border border-gray-700 w-full px-3 py-2'/>
        <div className='flex justify-between items-center text-sm w-full mt-[-8px] cursor-pointer'>
            <p>Forgot your password?</p>
            <p >{currentState==="Login"?<p onClick={()=>setCurrentState("Signup")}>Create account</p>:<p onClick={()=>setCurrentState("Login")}> Login here</p>}</p>
        </div>
        <button className='bg-black text-white px-10 py-2 mt-3'>{currentState==="Login"?"Sign in":"Sign up"}</button>
        
    </form>
  )
}

export default Login