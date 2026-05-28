import React, { use, useEffect, useState } from 'react'
import API from '../api/axios'

const SummaryCard = ({expenses}) => {
  
  const totalIncome = expenses
  .filter((item)=>item.type == "Income")
  .reduce((acc,item)=>acc + Number(item.amount),0)
  
  const totalExpense = expenses
  .filter((item)=>item.type == "Expense")
  .reduce((acc,item)=>acc + Number(item.amount),0)
  
  const totalBalance = totalIncome - totalExpense
  
  return (
    <div className='flex justify-center items-center lg:gap-15 md:gap-10 sm:gap-5 lg:mx-40 md:mx-20 pt-9'>
      <div className='bg-emerald-700 shadow-md border-l-6 border-emerald-900 shadow-zinc-500 p-8 w-[30%] m-6 rounded-xl' >
        <p className='text-lg text-white'>Total Amount</p>
        <h2 className='lg:text-3xl md:text-2xl sm:text-xl font-semibold text-white'>RS. {totalBalance} /-</h2>
    </div>
    <div className='bg-white shadow-md border-l-6 border-emerald-900 shadow-zinc-500 p-8 w-[30%] m-6 rounded-xl' >
        <p className='text-lg text-emerald-900'>Total Income</p>
        <h2 className='lg:text-3xl md:text-2xl sm:text-xl font-semibold text-emerald-900'>RS. {totalIncome} /-</h2>
    </div>
    <div className='bg-white shadow-md border-l-6 border-red-600 shadow-zinc-500 p-8 w-[30%] m-6 rounded-xl' >
        <p className='text-lg text-red-700'>Total Expense</p>
        <h2 className='lg:text-3xl  md:text-2xl sm:text-xl font-semibold text-red-700'>RS. {totalExpense} /-</h2>
    </div>
    </div>
  )
}

export default SummaryCard
