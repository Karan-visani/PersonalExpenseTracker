import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Dashboard = () => {

  const {user,token} = useContext(AuthContext)

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>User : {user?.name}</h2>

      <h3>Token : {token ? "Logged In" : "Not Logged In"}</h3>
    </div>
  )
}

export default Dashboard