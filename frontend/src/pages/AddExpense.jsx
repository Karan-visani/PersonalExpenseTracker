import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/axios'

const AddExpense = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [type, setType] = useState("")

    const addHandler =async (e)=>{
        e.preventDefault()

        const formData = {
            title,
            amount,
            category,
            type,
            date
        }

        const res = await API.post("/expense",formData)
        navigate("/dashboard")

        setTitle("")
        setAmount("")
        setCategory("")
        setDate("")
        setType("")
    }

    const cancel = ()=>{
        navigate("/dashboard")
    }

  return (
      <div className='h-[89%] w-full flex justify-center items-center bg-zinc-100'>
        <div className='rounded-2xl bg-white shadow-md shadow-zinc-600  h-[84%]  sm:w-[70%] md:w-[50%] lg:w-[33%] p-10'>
        <h2 className='text-2xl font-medium flex items-center'>💵 Add Transaction</h2>
        <p className='text-sm text-zinc-800'>Record a new transaction to track your spending</p>
        <form onSubmit={addHandler} className='flex flex-col gap-6 mt-11 '>
        <div className='flex flex-col justify-center'>
            <p className='text-lg text-zinc-800'>Transaction Title :</p>
        <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} className='text-xl border-2 rounded-lg border-zinc-500 px-3 py-1 mt-1' type="text" name="title" id="title" placeholder='e.g Weekly Groceries'/>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col justify-center me-9'>
                <p className='text-lg text-zinc-800'>Amount :</p>
        <input value={amount} onChange={(e)=>{
            setAmount(e.target.value)
        }} className='text-xl w-[80%] border-2 rounded-lg border-zinc-500 px-3 py-1 mt-1' type="number" name="amount" id="amount" placeholder='$ 0.0'/>

            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-lg text-zinc-800'>Category</p>
        <input value={category} onChange={(e)=>{
            setCategory(e.target.value)
        }} className='text-xl w-[80%] border-2 rounded-lg border-zinc-500 px-3 py-1 mt-1' type="text" name="category" id="category" placeholder='e.g Food'/>
          </div>
          </div>

        <div className='flex flex-col justify-center'>
            <p className='text-lg text-zinc-800'>Type :</p>
        <input value={type} onChange={(e)=>{
            setType(e.target.value)
        }} className='text-xl border-2 rounded-lg border-zinc-500 px-3 py-1 mt-1' type="text" name="type" id="type" placeholder='Expense Or Income'/>
        </div>

          <div className='flex flex-col justify-center mb-5'>
            <p className='text-lg text-zinc-800'>Transaction Date :</p>
        <input value={date} onChange={(e)=>{
            setDate(e.target.value)
        }} className='text-xl border-2 text-zinc-500 rounded-lg border-zinc-500 px-3 py-1 mt-1' type="date" name="date" id="date"/>
        </div>

        <div className='flex justify-between items-center'>
            <button className='text-xl bg-emerald-900 text-white px-5 py-2 rounded-2xl w-[57%]'>Add Transaction</button>
            <button onClick={cancel} className='text-xl bg-zinc-500 text-white px-5 py-2 rounded-2xl w-[35%]'>Cancel</button>
        </div>
      </form>
        </div>
    </div>
  )
}

export default AddExpense
