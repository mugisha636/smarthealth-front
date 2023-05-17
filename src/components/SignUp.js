import '../App.css'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [telephone, setTelephone] = useState("")
    const [sex, setSex] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    async function register() {
        const signupCredentials = { firstName, lastName, telephone, sex, email, password }
        console.log(signupCredentials)
        try {
            const response = await fetch("https://smart-health.onrender.com/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupCredentials),
            });
            const result = await response.json();
            console.log(result)
            if (response.ok) {
                // Login successful, navigate to dashboard
                navigate('/login');

                // notification
alert('check your email to verify if you are not robot')
               
                // end notification
              } else {
                // Login failed, display error message
                console.log(result.message);
              }
        } catch (error) {
            console.log(error)
        }
    }
    
	
		const sexChanged = (e) => {
			e.preventDefault();
			setSex(e.target.value)
		}


    return (
        <div className='bg-black bg-opacity-90 m-0 font-textF'>
            <div className="flex bg-white shadow-lg h-screen w-screen dark:bg-gray-800">

                {/* start of left side div with welcome header */}

                <div className="bg-cover px-14 pt-14 bg-no-repeat bg-signBg w-[45%] lg:block">
                    <NavLink to='/' className='text-white -ml-6 text-4xl font-extrabold'>
                        WellBe.
                    </NavLink>
                    <div className=' border-l border-opacity-40 border-white ml-6 mt-14 h-20  ' />
                    <h1 className='text-white text-[55px] tracking-wider mt-4'>
                        Welcome to
                    </h1>
                    <h1 className='text-white text-[55px] -mt-4 font-bold'>WellBe.</h1>
                    <p className='text-white mt-4 ml-2 text-xl '>Sign up to be able to manage <br /> your health progress daily!</p>
                    <div className=' border-l border-opacity-40 border-white ml-6 mt-8 h-20  ' />
                </div>

                {/* end of left side div with welcome header */}

                {/* start of right side div with filling form */}

                <div className="w-[55%] flex flex-col px-20 pt-16">

                    <h3 className="text-2xl font-bold text-blue-500 text-center dark:text-gray-200">
                        Sign Up
                    </h3>

                    {/* Start of names */}

                    <div className='flex'>
                        <div className="flex flex-col w-screen mt-8">
                            <p className=' text-xs'>
                                First name
                            </p>
                            <input type="text"
                                className="block mt-2 h-8 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="" />
                        </div>

                        <div className="flex flex-col w-screen ml-2 mt-8">
                            <p className=' text-xs'>
                                Second name
                            </p>
                            <input type="text"
                                className="block mt-2 h-8 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="" />
                        </div>
                    </div>

                    {/* End of names */}

                    {/* Start of phone number */}

                        {/* <div className="flex flex-col w-full ml-2">
                            <p className=' text-xs'>
                                Phone number
                            </p>
                            <PhoneInput type="number"
                                className='mt-2'
                                value={telephone}
                                onChange={(e) => setTelephone(telephone)}
                                placeholder="enter phone number here" />
                        </div> */}

<div className="flex flex-col w-screen mt-8">
                            <p className=' text-xs'>
                                telephone
                            </p>
                            <input type="number"
                                className="block mt-2 h-8 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                placeholder="" />
                        </div>

                    {/* End of phone number */}

                    {/* Start of gender */}

                    <div className='flex flex-row mt-4'>
                        <p className=' text-xs font-medium'>
                            Select your gender
                        </p>
                        <div className="ml-4 flex flex-row">
                            <input type='radio' 
									name='sex'
									value='male'
									checked={sex === 'male'}
									onChange={sexChanged}
							/>
                            <p className="w-full ml-1 text-xs tracking-wide text-black capitalize">
                                Male
                            </p>
                        </div>

                        <div className="ml-4 flex flex-row">
                            <input type='radio' 
									name='sex'
									value='female'
									checked={sex === 'female'}
									onChange={sexChanged}
							/>
                            <p className="w-full ml-1 tracking-wide text-black text-xs capitalize">
                                Female
                            </p>
                        </div>
                    </div>

                    {/* End of gender */}

                    {/* <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>

            <input id="dropzone-file" type="file" className="hidden" />
          </label> */}

                    {/* Start of email */}

                    <div className=" flex flex-col mt-4">
                        <p className=' text-xs'>
                            Email
                        </p>

                        <input type="email"
                            className="block text-xs w-full h-8 py-3 mt-2 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com" />

                    </div>

                    {/* end of email */}

                    {/* Start of password */}

                    <div className='flex mt-4'>
                        <div className="flex w-screen flex-col">
                            <p className=' text-xs'>
                                Password
                            </p>
                            <input type="password"
                                className="block w-full mt-2 h-8 px-2 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="" />
                            <p className='text-[0.6rem] text-gray-400 '>
                                must be 6 or more characters
                            </p>
                        </div>


                        <div className="flex flex-col w-screen ml-2">
                            <p className=' text-xs'>
                                Repeat assword
                            </p>
                            <input type="password"
                                className="block w-full h-8 mt-2 px-2 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="" />
                        </div>
                    </div>
                    {/* End of password */}

                    {/* start of terms and conditions check box */}

                    <div className='flex mt-8'>
                        <input type='checkbox' />
                        <p className='text-black ml-2 text-sm '>
                            I agree to all
                            <NavLink to='TermsAndConditions' className='text-blue-500 hover:underline font-bold' > terms & conditions</NavLink>

                        </p>
                    </div>

                    {/* End of terms and conditions check box */}

                    <div className="mt-3">
                        <button
                            onClick={register}
                            className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white text-clip capitalize shadow-lg shadow-blue-300 transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                        </button>

                        <div className="mt-6 text-center ">
                            <NavLink to='/Login' className="text-sm text-blue-500 underline hover:shadow-lg hover:shadow-blue-100 hover:no-underline dark:text-blue-400">
                                Already have an account?
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* end of left side div with welcome header */}
            </div>
        </div>
    );
}

export default SignUp;