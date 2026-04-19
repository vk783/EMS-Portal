import './App.css'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import Employees from './pages/Employees'
import Leave from './pages/Leave'
import Attendance from './pages/Attendance'
import Payslips from './pages/Payslip'
import Login from './pages/Login'
import Printpayslip from './pages/Printpayslip'
import LoginPage from './components/LoginPage'
import { Settings } from 'lucide-react'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" replace />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/admin' element={<LoginPage role="admin" title="Admin Portal" subtitle="Manage your organization" />} />
        <Route path='/login/employee' element={<LoginPage role="employee" title="Employee Portal" subtitle="Access your personal information" />} />
        <Route path='/print/payslip/:id' element={<Printpayslip />} />
        <Route element={<Layout />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/employee' element={<Employees />} />
          <Route path='/leave' element={<Leave />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/payslips' element={<Payslips />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
