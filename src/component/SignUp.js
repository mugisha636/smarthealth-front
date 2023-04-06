import '../App.css';

function SignUp() {
    return (
        <div className='bg-black bg-opacity-90 m-0 font-textF h-screen'>
            <div className="flex h-screen bg-white shadow-lg dark:bg-gray-800">

                {/* start of left side div with welcome header */}

                <div className="bg-cover px-14 pt-14 bg-no-repeat bg-blue-500 w-[45%] lg:block">
                    <h1 className='text-white -ml-6 text-4xl font-extrabold'>
                        WellBe.
                    </h1>
                    <div className=' border-l border-opacity-40 border-white ml-6 mt-14 h-20  ' />
                    <h1 className='text-white text-[55px] mt-4'>
                        Welcome to
                    </h1>
                    <h1 className='text-white text-[55px] -mt-4 font-bold'>WellBe.</h1>
                    <p className='text-white mt-4 ml-2 text-xl '>Sign up to be able to manage <br /> your health progress daily!</p>
                    <div className=' border-l border-opacity-40 border-white ml-6 mt-8 h-20  ' />
                </div>

                {/* end of left side div with welcome header */}

                {/* start of right side div with filling form */}

                <div className="w-[55%] flex flex-col mx-20 px-20 pt-20">

                    <h3 className="mt-3 text-2xl font-bold text-black dark:text-gray-200">
                        Sign Up
                    </h3>

                    {/* Start of names */}

                    <div className='flex'>
                        <div className="relative flex flex-col mt-8">
                            <p className=' text-xs'>
                                First name
                            </p>
                            <input type='text'
                                className="block w-[200px] mt-2 h-8 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40" placeholder="" />
                        </div>

                        <div className="relative flex flex-col ml-2 mt-8">
                            <p className=' text-xs'>
                                Second name
                            </p>
                            <input type="text"
                                className="block w-[200px] mt-2 h-8 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40" placeholder="" />
                        </div>
                    </div>

                    {/* End of names */}

                    {/* Start of phone number */}

                    <div className='flex mt-2'>
                        <div className="relative flex flex-col">
                            <p className=' text-xs'>
                                Phone number
                            </p>
                            <input type="tel"
                                className="block w-[150px] mt-2 h-8 py-3 text-xs text-center text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40" placeholder="+250" />
                        </div>

                        <div className="relative flex flex-col ml-2">
                            <input type="tel"
                                className="block w-[250px] mt-[23px] h-8 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300
          dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
          focus:ring focus:ring-opacity-40" placeholder="" />
                        </div>
                    </div>

                    {/* End of phone number */}

                    {/* Start of gender */}

                    <div className='flex mt-2'>
                        <div className="relative flex flex-col">
                            <p className=' text-xs'>
                                Select your gender
                            </p>
                            <button className="w-[200px] py-1.5 mt-2 text-xs font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:bg-blue-500">
                                Male
                            </button>
                        </div>

                        <div className="relative flex flex-col ml-2">
                            <button className="w-[200px] py-1.5 mt-[23px] font-medium tracking-wide text-black text-xs capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:bg-blue-500">
                                Female
                            </button>
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

                    <div className=" flex flex-col mt-2">
                        <p className=' text-xs'>
                            Email
                        </p>
                        <input type="email"
                            className="block text-xs w-[410px] h-8 py-3 mt-2 text-gray-700 bg-gray-50 border-2 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="you@example.com" />

                    </div>
                   

                        {/* end of email */}

                        {/* Start of password */}

                        <div className='flex mt-2'>
                            <div className="relative flex flex-col">
                                <p className=' text-xs'>
                                    Password
                                </p>
                                <input type="password"
                                    className="block w-[200px] mt-2 h-8 px-2 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="********" />
                                <p className='text-[0.6rem] text-gray-400 '>
                                    must be 6 or more characters
                                </p>
                            </div>

                            <div className="relative flex flex-col ml-2">
                                <p className=' text-xs'>
                                    Repeat assword
                                </p>
                                <input type="password" className="block w-[200px] h-8 mt-2 px-2 py-3 text-gray-700 bg-gray-50 border-2 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="********" />
                            </div>
                        </div>

                        {/* End of password */}

                        {/* start of terms and conditions check box */}

                        <div className='mt-8'>
                            <p className='text-black text-sm '>
                                I agree to all
                                <a href="#" className='text-blue-500 font-bold hover:underline' > terms & conditions
                                </a>
                            </p>
                        </div>

                        {/* End of terms and conditions check box */}

                        <div className="mt-3">
                            <button className="w-[410px] px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>

                            <div className="mt-6 text-center ">
                                <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account?
                                </a>
                        </div>
                    </div>
                    {/* end of left side div with welcome header */}
                </div>
            </div>
            </div>
            );
}

            export default SignUp;