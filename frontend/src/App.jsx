import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Registration from './pages/Registration'
import AddExpense from './pages/AddExpense'
import TransactionList from './components/TransactionList'
import EditExpense from './pages/EditExpense'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/addExpense' element={<AddExpense/>}/>
        <Route path='/editExpense/:id' element={<EditExpense/>}/>
        <Route path='/transactions' element={<TransactionList/>}/>
      </Routes>
    </div>
  )
}

export default App
