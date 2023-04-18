import {NavLink, Outlet} from 'react-router-dom'

function ForgotPassword() {
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

                <div className=" w-[55%] flex flex-col px-20 pt-12">
			<div className='flex flex-row justify-between'>
			<NavLink to='/Login' ><div className='flex flex-start justify-center py-2 w-8 border rounded-[50%] bg-gray-200'>
				<svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M6.07744 12.9872L0.664282 7.57403C0.582264 7.49201 0.524032 7.40316 0.489584 7.30747C0.455137 7.21178 0.438187 7.10926 0.438734 6.99991C0.438734 6.89055 0.455957 6.78803 0.490405 6.69234C0.524852 6.59665 0.582811 6.5078 0.664282 6.42578L6.07744 1.01263C6.22781 0.86226 6.4159 0.783797 6.64172 0.777235C6.86754 0.770674 7.0622 0.849137 7.22569 1.01263C7.38972 1.16299 7.47529 1.35108 7.4824 1.57691C7.48951 1.80273 7.41077 1.99738 7.24619 2.16087L3.22733 6.17973H12.3928C12.6252 6.17973 12.8201 6.25847 12.9776 6.41594C13.135 6.57341 13.2135 6.76807 13.213 6.99991C13.213 7.23229 13.1345 7.42722 12.9776 7.58469C12.8206 7.74217 12.6257 7.82063 12.3928 7.82008H3.22733L7.24619 11.8389C7.39656 11.9893 7.47529 12.1807 7.4824 12.4131C7.48951 12.6454 7.41077 12.8368 7.24619 12.9872C7.09582 13.1512 6.90445 13.2332 6.67207 13.2332C6.43968 13.2332 6.24148 13.1512 6.07744 12.9872Z" fill="black"/>
</svg></div></NavLink>
                                <p className="mt-2 text-sm font-semibold">
                                    Not a member? <NavLink to='/SignUp' className='text-blue-500 hover:underline'>sign up now</NavLink>
                                </p>
			</div>
			<p className="mt-28 align-middle text-lg font-bold text-blue-500 dark:text-gray-200">
			Forgot password?
			</p>
                    <p className="mt-8 align-middle text-md font-normal text-black dark:text-gray-200">
                        Enter the email address you used when you joined and we'll send you instructions to reset your password.<br/><br/> For security reasons, rest assured that we will never send your password via email.
                    </p>

                    <div className="mt-4">
                        <div className="relative flex flex-col justify-center mt-2">

                            <input type="password" 
                            className="block bg-gray-100 w-full justify-center px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            placeholder="" />
                        </div>

                        {/* End of password */}

                        <div className=" flex mt-4 justify-center">
                            <button className=" shadow-lg shadow-blue-300 mt-4 px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send reset instructions
                            </button>

                            
                        </div>
                    </div>
                    {/* end of left side div with welcome header */}
                </div>
            </div>
        </div>
        );
}

export default ForgotPassword