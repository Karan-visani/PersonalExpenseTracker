import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {
  const navigate = useNavigate()
  const {logout,user,token} = useContext(AuthContext)
  const logoutHandler = async() =>{
    await logout()
    navigate("/")
  }
  return (
    <div className='flex justify-between items-center bg-emerald-900 p-6'>
      <h2 className='text-4xl font-bold text-amber-50'>💲PET</h2>
      <div className='flex justify-center gap-7 items-center'>
        {token?<Link to={'/dashboard'} className='text-xl font-semibold text-amber-50'>Dashboard</Link>:""}
        {token?<Link to={'/addExpense'} className='text-xl font-semibold text-amber-50'>Add</Link>:""}

        {token?<Link to={'/transactions'} className='text-xl font-semibold text-amber-50'>Transactions</Link>:""}
        
        
        
        {user?<button onClick={logoutHandler} className='text-xl font-semibold text-red-500'>Logout</button> : <Link to={'/'} className='text-xl font-semibold text-amber-50'>Login</Link>}
        
        
      </div>
    </div>
  )
}

export default Navbar
