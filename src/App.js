import React from 'react'
import Start from './start/start.jsx'
import Home from './home/home.jsx'
import Cal from './calculator/cal.jsx'
import Subsidy from './subsidy/subsidy.jsx'
import Reg from './registrartion/registration.jsx'
import Customer from './customer/customer.jsx'
import More from './more/more.jsx'
import Terms from './terms/terms.jsx'
import Status from './customerstatus/customerstatus.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cal' element={<Cal/>}/>
          <Route path='/sub' element={<Subsidy/>}/>
          <Route path='/cust' element={<Customer/>}/>
          <Route path='/reg' element={<Reg/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/status' element={<Status/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}