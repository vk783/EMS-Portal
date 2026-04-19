import React, { useEffect, useState } from 'react'
import { dummyEmployeeDashboardData, dummyAdminDashboardData } from '../assets/assets'
import Loading from '../components/Loading'
import EmployeeDashboard from '../components/EmployeeDashboard'
import AdminDashboard from '../components/AdminDashboard'

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setData(dummyEmployeeDashboardData) // Replace with actual API call
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  if (loading) return <Loading />
  if (!data) return <div className='text-center text-salte-500 py-12'>Faild to load Dashboard</div>

  if (data.role === 'ADMIN') {
    return (
      <AdminDashboard data={data} />
    )
  } else {
    return (
      <EmployeeDashboard data={data} />
    )
  }



}

export default Dashboard