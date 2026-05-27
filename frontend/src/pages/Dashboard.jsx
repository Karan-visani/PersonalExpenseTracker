import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import SummaryCard from '../components/SummaryCard'
import TransactionList from '../components/TransactionList'

const Dashboard = () => {

  const {user,token} = useContext(AuthContext)

  return (
    <div className='h-[89%] w-full bg-zinc-100'>
      <SummaryCard/>
      <TransactionList/>
    </div>
  )
}

export default Dashboard