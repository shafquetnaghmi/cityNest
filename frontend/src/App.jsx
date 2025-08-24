import React from 'react'
import Navbar from './component/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Results from './pages/Results'
import PostProperty from './pages/PostProperty'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/post" element={<PostProperty/>}/>
      </Routes>
    </div>
  )
}

export default App