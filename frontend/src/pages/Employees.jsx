import React, { useCallback, useEffect, useState } from 'react'
import { dummyEmployeeData, DEPARTMENTS } from '../assets/assets'
import { Plus, Search, X } from 'lucide-react'
import EmployeeCard from '../components/EmployeeCard'
import EmployeeForm from '../components/EmployeeForm'

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState()
  const [selectedDept, setSelectedDept] = useState("")
  const [showCreateModel, setShowCreateModel] = useState("")
  const [editEmployee, setEditEmployee] = useState("")

  const fetchEployees = useCallback(async () => {
    try {
      console.log("Fetching employees...")
      setEmployees(dummyEmployeeData.filter((emp) => (selectedDept ? emp.department === selectedDept : emp)))

    } catch (err) {
      console.error("Error fetching employees:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  const filteredEmployees = employees.filter((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName} ${emp.position}`.toLowerCase();
    return fullName.includes(search?.toLowerCase() || "");
  });

  useEffect(() => {
    fetchEployees();
  }, [])
  return (
    <div className='animate-fade-in'>
      {/* header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
        <div>
          <h1 className='page-title font-semibold text-lg'>Employees</h1>
          <p className="page-subtitle">Manage your team members and their information</p>
        </div>
        <button onClick={() => setShowCreateModel(true)} className='btn-blue bg-indigo-500 p-5 py-2 rounded-md text-white text-center inline-flex items-center justify-center gap-2 hover:bg-indigo-600'>
          <Plus size={16} /> Add Employee
        </button>
      </div>
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">

        {/* 🔍 Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />

          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
      transition-all duration-200 shadow-sm"
          />
        </div>

        {/* 🏢 Department Filter */}
        <div className="w-full sm:w-56">
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
      transition-all duration-200 shadow-sm"
          >
            <option value="">All Departments</option>
            {DEPARTMENTS.map((depName) => (
              <option key={depName} value={depName}>
                {depName}
              </option>
            ))}
          </select>
        </div>

      </div>
      {/* Employee Cards */}
      {
        loading ? (
          <div className='flex justify-center p-12'>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5'>{
            filteredEmployees.length === 0 ? (
              <p className='text-center text-slate-500 col-span-full'>No employees found.</p>
            ) : (
              filteredEmployees.map((emp) => (
                <EmployeeCard key={emp.id} employee={emp} onDelete={fetchEployees} onEdit={(e) => setEditEmployee(e)} />
              ))
            )
          }</div>
        )
      }

      {/* Create Employee Model */}
      {
        showCreateModel && (
          <div className='fixed bg-black/40 backdrop-blur-sm inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto' onClick={() => setShowCreateModel(false)}>
            <div className='fixed inset-0'></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 pb-0">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Add New Employee</h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Create a user account and employee profile
                  </p>
                </div>
                <button onClick={() => setShowCreateModel(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
                  <X className='w-4 h-4' />
                </button>
              </div>
              <div className="p-6">
                <EmployeeForm
                  onSuccess={() => {
                    setShowCreateModel(false)
                    fetchEployees()
                  }}
                  onCancel={() => {
                    setShowCreateModel(false)
                  }}
                />
              </div>
            </div>
          </div>
        )}
      {/* Edit Employee Model */}

      {
        editEmployee && (
          <div className='fixed bg-black/40 backdrop-blur-sm inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto' onClick={() => setEditEmployee(false)}>
            <div className='fixed inset-0'></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 pb-0">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Edit Employee</h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Update employee Details
                  </p>
                </div>
                <button onClick={() => setEditEmployee(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
                  <X className='w-4 h-4' />
                </button>
              </div>
              <div className="p-6">
                <EmployeeForm
                  initialData={editEmployee}
                  onSuccess={() => {
                    setEditEmployee(null)
                    fetchEployees()
                  }}
                  onCancel={() => {
                    setEditEmployee(null)
                  }}
                />
              </div>
            </div>
          </div>
        )}
    </div >
  )
}

export default Employees