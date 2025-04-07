import React from 'react'
import { Header } from '../Header'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Email from '../pages/Email'

const AppRoutes = () => {
  return (
    <div>
        <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/email" element={<Email />} />
    

  </Routes>

    </div>
  )
}

export default AppRoutes