import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Registration = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const {register} = useContext(AuthContext)

    const registrationHandler =async (e) =>{
        e.preventDefault()
    
        try{
            const formData = {
            name,
            email,
            password
        }

        await register(formData)
        toast.success("Registeration Complete")
        navigate("/")
        }catch(error){
            toast.error(error.response.data.message)
        }
    }
  return (
    <div className='h-[89%] w-full flex justify-center items-center bg-zinc-100'>
        <div className='rounded-2xl border-6 border-emerald-900  h-[66%]  sm:w-[70%] md:w-[50%] lg:w-[33%] p-10'>
        <h2 className='text-3xl font-semibold flex justify-center'>Registration Page!</h2>
        <form onSubmit={registrationHandler} className='flex flex-col gap-9 mt-11 '>
        <input value={name} onChange={(e)=>{
            setName(e.target.value)
        }} className='text-xl font-semibold border-3 py-2 px-4 rounded-2xl outline-none  autofill:bg-amber-50 border-emerald-900'  type="text" name='name' id='name'placeholder='Enter Your Name'/>
        
        <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} className='text-xl font-semibold border-3 py-2 px-4 rounded-2xl outline-none  autofill:bg-amber-50 border-emerald-900'  type="text" name='email' id='email'placeholder='Enter Your Email'/>
        <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} className='text-xl font-semibold border-3 py-2 px-4 rounded-2xl outline-none  autofill:bg-amber-50 border-emerald-900'  type="password" name="password" id="password" placeholder='Enter Your Password' />
        <button className='text-xl font-semibold bg-emerald-900 hover:bg-emerald-950 p-3 rounded-3xl text-white'>Register</button>
      </form>
        </div>
    </div>
  )
}

export default Registration
