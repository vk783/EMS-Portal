import React from 'react'

const LoginLeftSide = () => {
    return (
        <>

            {/* LEFT SIDE */}
            <div className="md:w-1/2 bg-[#1e1b4b] text-white flex flex-col justify-center px-6 py-12 md:px-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Employee <br /> Management System
                </h1>

                <p className="text-gray-300 text-sm md:text-base max-w-md">
                    Streamline your workforce operations, track attendance, manage payroll,
                    and empower your team securely.
                </p>
            </div>
        </>
    )
}

export default LoginLeftSide