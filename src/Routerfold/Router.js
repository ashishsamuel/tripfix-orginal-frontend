import React from 'react'
import Home from '../Pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Bookings from '../Components/Bookings'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import TourdetailsupdatePage from '../Pages/TourdetailsupdatePage'
import ThankYou from '../Pages/Thankyou'
import TourDetails from '../Pages/TourDetails'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tourdetails/edit' element={<TourdetailsupdatePage/>}></Route>
        <Route path='/thank-you' element={<ThankYou/>}/>
        {/* <Route path='/tours' element={<Tou/>}/> */}
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
