import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ()=> {

  const navigate  = useNavigate()

  const handleNavigate = () =>{
    navigate('/login')
  }
  return (
    <div>
      <h3 className='DashboardHead'>Authenticated Login Page</h3>
      <h5 className='Dashboardlink'>Go to the Login page</h5>
      <button onClick={handleNavigate}>Login Page</button>


    </div>
  )
}

export default Dashboard