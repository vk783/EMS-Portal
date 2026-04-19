import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { DEPARTMENTS } from '../assets/assets'
import { Loader2Icon } from 'lucide-react'

const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const isEditMode = !!initialData;

    const handleSubmit = async (e) => {
        e.preventDefault();

    }
    console.log({ navigate });
    return (
        <form className='space-y-6 max-w-3xl animate-fade-in' onSubmit={handleSubmit}>
            <div className="card p-5 sm:p-6">
                <h3 className="font-medium mb-6 pb-4 border-b border-slate-100">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
                    <div>
                        <label htmlFor="firstName" className='block mb-2'>First Name</label>
                        <input type="text" name='firstName' required defaultValue={initialData?.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className='block mb-2'>Last Name</label>
                        <input type="text" name='lastName' required defaultValue={initialData?.lastName} />
                    </div>
                    <div>
                        <label htmlFor="phone" className='block mb-2'>Phone</label>
                        <input type="text" name='phone' required defaultValue={initialData?.phone} />
                    </div>
                    <div>
                        <label htmlFor="joinDate" className='block mb-2'>Join Date</label>
                        <input type="date" name='joinDate' required defaultValue={initialData?.joinDate ? new Date(initialData?.joinDate).toISOString().split("T")[0] : ""} />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="joinDate" className='block mb-2'>Bio (Optional)</label>
                        <textarea name="bio" id="" defaultValue={initialData?.bio} rows={3} className="resize-none" placeholder='brief Description...'></textarea>
                    </div>
                </div>
            </div>


            {/* Employment Details */}
            <div className="card p-5 sm:p-6">
                <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">Employment Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
                    <div>
                        <label className='block mb-2'>Department</label>
                        <select name="department" id="" defaultValue={initialData?.department}>
                            <option value="">Select Department</option>
                            {
                                DEPARTMENTS.map((department) => (
                                    <option key={department} value={department}>{department}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="position" className='block mb-2'>Position</label>
                        <input type="text" name='position' required defaultValue={initialData?.position} />
                    </div>
                    <div>
                        <label htmlFor="basicSalary" className='block mb-2'>Basic Salary</label>
                        <input type="text" name='basicSalary' min="0" step="0.01" required defaultValue={initialData?.basicSalary || 0} />
                    </div>
                    <div>
                        <label htmlFor="allowances" className='block mb-2'>Allowances</label>
                        <input type="text" name='allowances' min="0" step="0.01" required defaultValue={initialData?.allowances || 0} />
                    </div>
                    <div>
                        <label htmlFor="deducations" className='block mb-2'>Deducations</label>
                        <input type="text" name='deducations' min="0" step="0.01" required defaultValue={initialData?.deducations || 0} />
                    </div>

                    {
                        isEditMode && (
                            <div>
                                <label className='block mb-2'>Status</label>
                                <select name="emplymentStatus" id="" defaultValue={initialData?.emplymentStatus}>
                                    <option value="Active">Active</option>
                                    <option value="Inative">Inative</option>
                                </select>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Account Setup */}

            <div className="card p-5 sm:p-6">
                <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">Account Setup</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
                    <div className='sm:col-span-2'>
                        <label htmlFor="position" className='block mb-2'>Work Email</label>
                        <input type="email" name='email' required defaultValue={initialData?.email} />
                    </div>

                    {
                        !isEditMode && (
                            <div>
                                <label className='block mb-2'>Temporary Password</label>
                                <input type="password" name='password' required />
                            </div>
                        )
                    }

                    {
                        isEditMode && (
                            <div>
                                <label className='block mb-2'>Change Password</label>
                                <input type="password" name='password' placeholder='Leave blank to keep current' />
                            </div>
                        )
                    }

                    <div>
                        <label className='block mb-2'>System Role</label>
                        <select name="role" id="" defaultValue={initialData?.role}>
                            <option value="Employee">Employee</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
                <button type="button" onClick={() => onCancel ? onCancel() : navigate(-1)} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary flex items-center justify-center">
                    {
                        loading && <Loader2Icon className='w-4 h-4 mr-2 animate-spin' />
                    }
                    {
                        isEditMode ? "Update Employee" : "Create Employee"
                    }
                </button>
            </div>
            {/* button */}
        </form>
    )
}

export default EmployeeForm