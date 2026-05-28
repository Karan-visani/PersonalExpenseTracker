import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import SummaryCard from '../components/SummaryCard'
import TransactionList from '../components/TransactionList'
import API from '../api/axios'

const Dashboard = () => {

  const {user,token} = useContext(AuthContext)
  const [expenses, setExpenses] = useState([])

    const getExpenses = async()=>{
        const res = await API.get("/expense")
        setExpenses(res.data)        
    }

    useEffect(() => {
      getExpenses()
    }, [])

  return (
    <div className='h-[89%] w-full bg-zinc-100'>
      <h2 className='absolute left-2.5 top-23 text-xl text-emerald-800'>Welcome ,<span className='text-xl font-bold text-emerald-800'>{user?.name}</span></h2>
      <SummaryCard expenses={expenses} />
      <TransactionList expenses={expenses} getExpenses={getExpenses}/>
    </div>
  )
}

export default Dashboard