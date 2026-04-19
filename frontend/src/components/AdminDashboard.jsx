import { Building2Icon, CalendarIcon, FileTextIcon, UserIcon } from 'lucide-react'
import React from 'react'

const AdminDashboard = ({ data }) => {
    const stats = [
        {
            icon: UserIcon,
            value: data.totalEmployees,
            label: "Total Employee",
            desciption: "Active Workforce"
        },
        {
            icon: Building2Icon,
            value: data.totalDepartments,
            label: "Departments",
            desciption: "Organization Units"
        },
        {
            icon: CalendarIcon,
            value: data.totalAttendance,
            label: "Today's Attendance",
            desciption: "Checked in Today"
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            label: "Pending Leaves",
            desciption: "Awaiting Approval"
        },
    ]
    return (
        <div className='animate-fade-in'>
            <div className="page-header">
                <h1 className="page-title">Dashboard</h1>
                <p className='page-subtitle'>
                    Welcome back, Admin - here's your overview
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 mt-5">
                {
                    stats.map((stat, index) => (
                        <div key={index} className='card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between bg-white shadow-sm hover:shadow-md '>
                            <div>
                                <div className='absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-400/60 group-hover:bg-indigo-500 transition-all duration-300' />
                                <p className="text-sm font-medium text-slate-700">{stat.label}</p>
                                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                {/* <p className="text-xs text-slate-500">{stat.description}</p> */}
                            </div>
                            <stat.icon className='size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminDashboard