import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginPage = ({ title, subtitle }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submit", { email, password });
        } catch (err) {
            console.log("Error", { err });
        }
    }

    return (
        <div className="h-screen w-full flex">
            <LoginLeftSide />
            {/* RIGHT SIDE */}

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:px-16">
                <div className='w-full max-w-md animate-made-in relative z-10'>
                    <Link to="/login" className='inline-flex items-center text-sm gap-2 mb-6 text-gray-500 hover:text-gray-700 transition-colors'>
                        <ArrowLeftIcon size={16} className='h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors' />
                        Back to portals
                    </Link>

                    {/* Header */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                        {title}
                    </h2>

                    <p className="text-gray-500 text-sm mb-6 text-center md:text-left">
                        Sign in {subtitle}
                    </p>


                    {
                        error && (
                            <div className='mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex item-start gap-3'>
                                {error}
                            </div>
                        )
                    }

                    <form className='space-y-5' onSubmit={handelSubmit}>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-slate-700 mb-2'>Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder="*******"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {
                                loading ? "Logging in..." : "Login"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage