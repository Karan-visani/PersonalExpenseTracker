import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { Bot } from 'lucide-react'

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
      <div className='flex justify-center gap-7 items-center '>
        {token?<Link to={'/dashboard'} className='text-xl font-semibold text-amber-50 hover:text-emerald-300'>Dashboard</Link>:""}
        {/* {token?<Link to={'/addExpense'} className='text-xl font-semibold text-amber-50'>Add</Link>:""} */}
        {token?<Link to={'/ai'}className='flex items-center gap-2 text-xl font-semibold text-amber-50 hover:text-emerald-300 '><Bot size={27}/>AI Bot</Link>:""}
        {token?<Link to={'/insights'} className='text-xl font-semibold text-amber-50 hover:text-emerald-300'>Insights</Link>:""}

        {user?<button onClick={logoutHandler} className='text-xl font-semibold text-red-600 hover:text-red-950'>Logout</button> : <Link to={'/'} className='text-xl font-semibold text-amber-50'>Login</Link>}
        
        
      </div>
    </div>
  )
}

export default Navbar
