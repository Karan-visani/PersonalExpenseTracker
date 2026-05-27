import React, { useEffect, useState } from 'react'
import {Utensils} from 'lucide-react'
import API from '../api/axios'

const TransactionList = () => {
    const [expenses, setExpenses] = useState([])

    const getExpenses = async()=>{
        const res = await API.get("/expense")
        setExpenses(res.data)        
    }

    useEffect(() => {
      getExpenses()
    }, [])
    

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 mx-8 my-4 border border-zinc-200'>

  <div className='flex items-center justify-between mb-6'>
    <h2 className='text-2xl font-bold text-zinc-800'>
      Transactions
    </h2>
  </div>
  <div className='overflow-hidden rounded-xl border border-zinc-200'>

    <div className='grid grid-cols-4 bg-zinc-100 px-6 py-4 text-zinc-600 font-semibold text-sm'>
      <h2>Title</h2>
      <h2>Category</h2>
      <h2>Date</h2>
      <h2>Amount</h2>
    </div>

    {expenses.map((expenses,idx)=>{
        return <div key={idx} className='grid grid-cols-4 items-center px-6 py-5 hover:bg-zinc-50 transition border-t border-zinc-200'>

      <div className='flex items-center gap-3'>
        <div>
          <h3 className='font-semibold text-zinc-800'>
            {expenses.title}
          </h3>
        </div>
      </div>
      <div>
        <span className='bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium'>
          {expenses.category}
        </span>
      </div>
      <h2 className='text-zinc-600'>
        {expenses.date.slice(0,10)}
      </h2>
      {expenses.type == "Expense" ?<h2 className='text-red-500 font-bold'>
        - ${expenses.amount}/-
      </h2> : <h2 className='text-green-500 font-bold'>
        + ${expenses.amount}/-
      </h2>}
    </div>
    })}


    
  </div>
</div>
  )
}

export default TransactionList
