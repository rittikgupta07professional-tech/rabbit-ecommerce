import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Toaster} from 'sonner'
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/Home'

const App = () => {
  return (
   <BrowserRouter>
   <Toaster position="top-right"/>
   <Routes>
    <Route path='/' element={<UserLayout/>}>
      {/* User Layout */}
      <Route index element={<Home/>} />

    </Route>
    <Route>
       {/* Admin Layout */}
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App