import { PencilIcon, Trash2Icon } from 'lucide-react'
import React from 'react'

const EmployeeCard = ({ employee, onDelete, onEdit }) => {

    const handelDelete = (emp) => {
        if (window.confirm(`Are you sure you want to delete ${emp.firstName} ${emp.lastName}?`)) {
            console.log("Deleting employee with id:", emp.id);
            // onDelete(emp.id)
        };
    };
    return (
        <div className='group relative shadow-sm rounded-sm card card-hover overflow-hidden'>
            <div className='relative aspect-4/3 w-full overflow-hidden bg-linear-to-r from-slate-100 to-slate-50'>
                {/* circle icon */}
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-linear-to-r from-indigo-100 to-slate-100 rounded-full justify-center flex items-center">
                        <span className='text-2xl font-medium text-indigo-400'>{employee.firstName.charAt(0)}{employee.lastName.charAt(0)}</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-3 left-3 flex gap-4">
                <span className='bg-white/90 backdrop-blur-sm px-2.5 py-1 text-sm font-semibold text-slate-600 rounded-lg shadow-sm'>
                    {
                        employee.department || "Remote"
                    }
                </span>
                {employee.isDelete && (
                    <span className='bg-rose-100 text-rose-800 px-2.5 py-1 text-sm font-semibold rounded-lg shadow-sm'>
                        Deleted
                    </span>
                )}
            </div>
            {
                !employee.isDelete && (
                    <div className="absolute inset-0 bg-linear-to-t from-indigo-700/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                        <button onClick={() => onEdit(employee)} className="p-2.5 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-indigo-600 rounded-xl shadow-lg transition-all hover:scale-105">
                            <PencilIcon className="w-4 h-4" />
                        </button>
                        <button onClick={() => handelDelete(employee)} className="p-2.5 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-rose-600 rounded-xl shadow-lg transition-all hover:scale-105 disabled:opacity-50">
                            <Trash2Icon className='w-4 h-4' />
                        </button>
                    </div>
                )
            }
            <div className='p-5'>
                <h3 className='text-slate-900'>{employee.firstName} {employee.lastName}</h3>
                <p className="text-xs text-slate-500">{employee.position}</p>
            </div>
        </div>
    )
}

export default EmployeeCard