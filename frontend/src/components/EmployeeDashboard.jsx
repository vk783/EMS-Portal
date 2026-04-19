import { ArrowRightIcon, CalendarIcon, DollarSignIcon, FileTextIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

const EmployeeDashboard = ({ data }) => {
    const emp = data.employee;
    const cards = [
        {
            icon: CalendarIcon,
            value: data.currentMonthAttendance,
            title: "Days Present",
            subtitle: "This month"
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            title: "Pending Leaves",
            subtitle: "This month"
        },
        {
            icon: DollarSignIcon,
            value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocaleString()}` : "N/A",
            title: "Latest Payslip",
            subtitle: "Most recent payout"
        },
    ]
    return (
        <div className='animate-fade-in'>
            <div className="page-header">
                <h1 className="page-title">Welcome, {emp?.firstName}!</h1>
                <p className='page-subtitle'>
                    {emp?.position} at {emp?.department || "No Department"}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 mt-5">
                {
                    cards.map((card, index) => (
                        <div key={index} className='card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between bg-white shadow-sm hover:shadow-md '>
                            <div>
                                <div className='absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-400/60 group-hover:bg-indigo-500 transition-all duration-300' />
                                <p className="text-sm font-medium text-slate-700">{card.title}</p>
                                <p className="text-2xl font-bold text-slate-900">{card.value}</p>
                                {/* <p className="text-xs text-slate-500">{card.subtitle}</p> */}
                            </div>
                            <card.icon className='size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300' />
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
                <Link to="/attendance" className='btn-blue bg-indigo-500 p-5 py-2 rounded-md text-white text-center inline-flex items-center justify-center gap-2 hover:bg-indigo-600'>
                    Mark Attendance <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <Link to="/leave" className='border border-slate-100 text-center p-5 py-2 rounded-md inline-flex items-center justify-center gap-2'>
                    Apply For Leaves
                </Link>
            </div>
        </div>
    )
}

export default EmployeeDashboard