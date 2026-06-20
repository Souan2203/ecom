import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Regular from './Components/Regular'
import Formal from './Components/Formal'
import Shoe from './Components/Shoe'
import Traditional from './Components/Traditional'
import Ladies from './Components/Ladies'
import Over from './Components/Over'
import Shirt from './Components/Shirt'
import AddtoCart from './Components/AddtoCart'

const App = () => {
  return (
    <div>
      
      
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/regular' element={<Regular/>}/>
        <Route path='/formal' element={<Formal/>}/>
        <Route path='/shoe' element={<Shoe/>}/>
        <Route path='/traditional' element={<Traditional/>}/>
        <Route path='/ladies' element={<Ladies/>}/>
        <Route path='/over' element={<Over/>}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path='/cart' element={<AddtoCart/>}/>
      </Routes>
    </div>
  )
}

export default App