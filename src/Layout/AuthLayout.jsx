import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function AuthLayout() {
  return (
 <>
 <Navbar auth={true}/>
 <div className='w-50 mx-auto my-5'>
 <Outlet/>
 </div>
 </>
  )
}
