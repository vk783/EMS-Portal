import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'
import { ShieldIcon, UserIcon, ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Login = () => {

  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      subtitle: "Manage your organization",
      description: "Access the admin portal to manage employees, leave requests, attendance, and generate payslips. Streamline your HR processes and keep your organization running smoothly.",
      icon: ShieldIcon
    }, {
      to: "/login/employee",
      title: "Employee Portal",
      subtitle: "Access your employee dashboard",
      description: "Log in to your employee portal to view your schedule, request leave, and manage your personal information.",
      icon: UserIcon
    }
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      {/* RIGHT SIDE */}

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:px-16">
        <div className='w-full max-w-md animate-made-in relative z-10'>
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center md:text-left">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-sm mb-6 text-center md:text-left">
            Select your portal to securely access the system.
          </p>


          {/* Portal List */}
          <div className='space-y-4'>
            {
              portalOptions.map((option, index) => (
                <Link to={option.to} key={index} className="group block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:bg-slate-100 transition-all duration-300 flex items-center space-x-4">
                  <option.icon className="h-6 w-6 text-blue-500" />
                  <div className='relative z-10 flex items-center justify-between w-full gap-4 sm:gap-5'>
                    <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">{option.title}</h3>
                    <ArrowRightIcon className='h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors' />
                  </div>
                </Link>
              ))
            }
          </div>
          {/* Footer */}
          <div className='mt-12 text-center md:text-left text-sm text-slate-400'>
            <p>© {new Date().getFullYear()} EMS - Employee Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login