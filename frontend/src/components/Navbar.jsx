import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {
  const navigate = useNavigate()
  const {logout} = useContext(AuthContext)
  const logoutHandler = async() =>{
    await logout()
    navigate("/login")
  }
  return (
    <div className='flex justify-between items-center bg-emerald-900 p-6'>
      <h2 className='text-4xl font-bold text-amber-50'>💲PET</h2>
      <div className='flex justify-center gap-7 items-center'>
        <Link to={'/dashboard'} className='text-xl font-semibold text-amber-50'>Dashboard</Link>
        <h3 className='text-xl font-semibold text-amber-50'>AboutUS</h3>
        <h3 className='text-xl font-semibold text-amber-50'>Contact</h3>
        <Link to={'/login'} className='text-xl font-semibold text-amber-50'>Login</Link>
        <button onClick={logoutHandler} className='text-xl font-semibold text-red-500'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
