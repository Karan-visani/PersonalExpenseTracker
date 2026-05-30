import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import {toast} from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useContext(AuthContext)

    const loginHandler =async (e) =>{
        e.preventDefault()

        try{
          const formData = {
          email,
          password
        }

        await login(formData)
        toast.success("Logged-In Successfully")
        navigate("/dashboard")
        }catch(error){
          toast.error(error.response.data.message)
        }
    }
  return (
    <div className='h-[89%] w-full flex justify-center items-center bg-zinc-100'>
        <div className='rounded-2xl border-6 border-emerald-900  lg:h-[60%]  sm:w-[70%] md:w-[50%] lg:w-[33%] p-10'>
        <h2 className='text-3xl font-semibold flex justify-center'>Login Page!</h2>
        <form onSubmit={loginHandler} className='flex flex-col gap-9 mt-11 '>
        <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} className='text-xl font-semibold border-3 py-2 px-4 rounded-2xl outline-none  autofill:bg-amber-50 border-emerald-900'  type="text" name='email' id='email'placeholder='Enter Your Email'/>
        <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} className='text-xl font-semibold border-3 py-2 px-4 rounded-2xl outline-none  autofill:bg-amber-50 border-emerald-900'  type="password" name="password" id="password" placeholder='Enter Your Password' />
        <Link to={'/registration'} className='text-lg font-semibold underline'>New user? Register</Link>
        <button className='text-xl font-semibold bg-emerald-900 hover:bg-emerald-950 p-3 rounded-3xl text-white'>Login</button>
      </form>
        </div>
    </div>
  )
}

export default Login
