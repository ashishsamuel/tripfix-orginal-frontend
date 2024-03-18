import React from 'react'
import Home from '../Pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Bookings from '../Components/Bookings'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
