import {NavLink, Outlet} from 'react-router-dom'

function UpdatePassword() {
    return (

        <div className='bg-white'>
            <div className="flex h-screen bg-white font-textF">

                {/* start of left side div with welcome header */}

               <div className="bg-gradient-to-tl from-blue-700 to-blue-200 pr-12 pl-16 pb-7 pt-14 w-[45%]">
                    
                    <h2 className='mt-52 text-white tracking-wide text-2xl font-semibold'>
                        WellBe!
                    </h2>
                    <p className='text-white text-3xl tracking-wide font-textF mt-4'>
                    Explore more about how to have a healthy lifestyle
		     </p>
                </div>

                {/* end of left side div with welcome header */}

                {/* start of right side div with filling form */}

                <div className=" w-[55%] flex flex-col px-20 pt-36">

                    <h3 className="align-middle text-xl font-bold text-blue-500 dark:text-gray-200">
                        Update your password
                    </h3>

                    <div className="mt-6">
                        <div className="relative flex flex-col justify-center mt-2">
                            <p className=" font-normal">
                                new password
                            </p>
				<span className="absolute inset-y-0 top-[45px] right-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
<path d="M11 0.554688C6 0.554688 1.73 3.66469 0 8.05469C1.73 12.4447 6 15.5547 11 15.5547C16 15.5547 20.27 12.4447 22 8.05469C20.27 3.66469 16 0.554688 11 0.554688ZM11 13.0547C8.24 13.0547 6 10.8147 6 8.05469C6 5.29469 8.24 3.05469 11 3.05469C13.76 3.05469 16 5.29469 16 8.05469C16 10.8147 13.76 13.0547 11 13.0547ZM11 5.05469C9.34 5.05469 8 6.39469 8 8.05469C8 9.71469 9.34 11.0547 11 11.0547C12.66 11.0547 14 9.71469 14 8.05469C14 6.39469 12.66 5.05469 11 5.05469Z" fill="black"/>
</svg></span>

                            <input type="password"
                                className="block bg-gray-100 mt-2 pl-4 pr-12 w-full py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="********" />
                        </div>

                        <div className="relative flex flex-col justify-center mt-2">
                            <p className="mt-4">
                                Repeat Password
                            </p>
				<span className="absolute inset-y-0 top-[60px] right-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
<path d="M11 0.554688C6 0.554688 1.73 3.66469 0 8.05469C1.73 12.4447 6 15.5547 11 15.5547C16 15.5547 20.27 12.4447 22 8.05469C20.27 3.66469 16 0.554688 11 0.554688ZM11 13.0547C8.24 13.0547 6 10.8147 6 8.05469C6 5.29469 8.24 3.05469 11 3.05469C13.76 3.05469 16 5.29469 16 8.05469C16 10.8147 13.76 13.0547 11 13.0547ZM11 5.05469C9.34 5.05469 8 6.39469 8 8.05469C8 9.71469 9.34 11.0547 11 11.0547C12.66 11.0547 14 9.71469 14 8.05469C14 6.39469 12.66 5.05469 11 5.05469Z" fill="black"/>
</svg></span>

                            <input type="password" 
                            className="block bg-gray-100 mt-2 w-full justify-center pl-4 pr-12 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            placeholder="********" />
                        </div>

                        {/* End of password */}
			<div className='flex mt-8'>
                        <input type='checkbox' />
                        <p className='text-black ml-2 text-sm '>
                            Sign out of all active logins

                        </p>
                    </div>

                        <div className="mt-6">
                            <button className="w-full shadow-lg shadow-blue-300 mt-4 px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Update password
                            </button>

                        </div>
                    </div>
                    {/* end of left side div with welcome header */}
                </div>
            </div>
        </div>
        );
}

export default UpdatePassword