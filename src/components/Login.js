import login from '../images/login.png'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Login() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signIn() {
        let loginCredentials = { email, password }
        console.log(loginCredentials)

        let result = await fetch("https://smart-health.onrender.com/api/login", {
            method: "GET",
            body: JSON.stringify(loginCredentials),
            headers: {
                "Content-type": 'application/json',
                "Accept": 'application/json'
            }
        })
        const response = await result.json();
        console.log("user:", result)
    }

    return (

        <div className='bg-white'>
            <div className="flex h-screen bg-white font-textF">

                {/* start of left side div with welcome header */}

                <div className="bg-blue-50 pl-16 pb-7 pt-14 w-[45%]">
                    <NavLink to='/' className='text-blue-500 text-4xl -ml-6 font-extrabold'>
                        WellBe.
                    </NavLink>
                    <img className='mt-20 ml-12 h-[300px]' src={login} alt='' />
                    <h2 className='text-black mt-16 text-xl font-bold'>
                        Welcome!
                    </h2>
                    <p className='text-black font-textF mt-4'>
                        Start managing your daily health with us,<br /> we do health care just well!
                    </p>
                </div>

                {/* end of left side div with welcome header */}

                {/* start of right side div with filling form */}

                <div className=" w-[55%] flex flex-col px-20 pt-20">

                    <h3 className="align-middle unde mrline text-3xl font-bold text-blue-500 text-center dark:text-gray-200">
                        Login
                    </h3>

                    <div className="mt-14">
                        <div className="relative flex flex-col justify-center mt-2">
                            <p className=" font-semibold">
                                Email
                            </p>
                            <span className="absolute inset-y-0 top-[45px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block mt-2 w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Email address" />
                        </div>

                        <div className="relative flex flex-col justify-center mt-2">
                            <p className="mt-4 font-semibold">
                                Password
                            </p>
                            <span className="absolute inset-y-0 top-[60px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="block mt-2 w-full justify-center px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="********" />
                        </div>

                        {/* End of password */}
                        <div className='float-right mt-8'>
                            <NavLink to='/ForgotPassword' className='text-blue-500 underline hover:no-underline font-bold'>
                                forgot password?
                            </NavLink>
                        </div>

                        <div className="mt-3">
                            <button
                                onClick={signIn}
                                className="w-full shadow-lg shadow-blue-300 mt-4 px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Login
                            </button>

                            <div className="mt-8">

                                <p className="text-sm font-semibold">
                                    don't have an account? <NavLink to='/SignUp' className='text-blue-500 hover:underline'>sign up</NavLink>
                                </p>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    {/* end of left side div with welcome header */}
                </div>
            </div>
        </div>
    );
}

export default Login