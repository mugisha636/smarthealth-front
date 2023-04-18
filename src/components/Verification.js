

function Verification() {
    return (
        <div className='bg-black font-textF bg-opacity-95'>
            <div className="flex mx-auto h-screen bg-white shadow-lg dark:bg-gray-800">
                <div className="px-8 pt-14 bg-blue-500 w-[40%] lg:block">
                    <h1 className='text-white text-xl font-semibold'>
                        WellBe.
                    </h1>
                    <div className=' border-l border-white border-opacity-40 ml-6 mt-14 h-20  ' />
                    <h1 className='text-white text-[55px] mt-2'>
                        Welcome to
                    </h1>
                    <h1 className='text-white text-[55px] -mt-4 font-bold'>WellBe.</h1>
                    <p className='text-white text-xl '>Verify your account to be able to manage your health progress daily!</p>
                    <div className=' border-l border-white border-opacity-40 ml-6 mt-4 h-20  ' />
                </div>
                <div className="w-full pt-36 mx-8 md:px-8 lg:w-1/2">
                    <div >
                        <h1 className=' text-2xl text-blue-500  font-bold'>
                            Account verification
                        </h1>
                        <p className="text-sm mt-3 ">
                            We have sent a verification code to your phone number
                        </p>
                        <p className="mt-1" >********42</p>
                    </div>
                    <div className='flex flex-row mt-8'>
                        <input type="text"
                            maxLength={1}
                            className="block w-[25%] h-[70px] py-3 text-4xl text-center text-gray-700 bg-gray-200 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="" />
                        <input type="text"
                            maxLength={1}
                            className="block w-[25%] ml-4 py-3 text-4xl text-center text-gray-700 bg-gray-200 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="" />
                        <input type="text"
                            maxLength={1}
                            className="block w-[25%] ml-4 py-3 text-4xl text-center text-gray-700 bg-gray-200 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="" />
                        <input type="text"
                            maxLength={1}
                            className="block w-[25%] ml-4 py-3 text-4xl text-center text-gray-700 bg-gray-200 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="" />
                        <input type="text"
                            maxLength={1}
                            className="block w-[25%] ml-4 py-3 text-4xl text-center text-gray-700 bg-gray-200 rounded-lg px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="" />
                    </div>
                    <p className=" mt-12 text-sm">
                        Didn't receive code?
                        <a href="#" className='text-blue-500 ml-1 hover:underline font-bold' >Resend</a>
                    </p>
                    <button className="w-full px-6 py-3 mt-4 text-sm font-bold tracking-wide shadow-lg shadow-blue-300 text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Verify account
                    </button>
                    <div className='flex flex-row justify-center mt-8'>
                        <a href='#' className="text-blue-500 hover:underline font-bold">
                            Change number
                        </a>
                        <p className='ml-1 text-gray-700 font-normal'>
                            or
                        </p>
                        <a href='#' className="ml-1 text-blue-500 hover:underline font-bold">
                            verify with email
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verification;