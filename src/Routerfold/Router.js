import React from 'react'
import Home from '../Pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
