import {NavLink, Outlet} from 'react-router-dom'

function UpdatedPassword() {
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
			
                	<div className='flex flex-col justify-center px-20 w-[55%]'>
			<span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 63 63" fill="none">
<path d="M61.5776 35.1094C59.1714 47.1407 50.0998 58.4693 37.3708 61.0007C31.1626 62.237 24.7226 61.4832 18.9678 58.8465C13.213 56.2099 8.43668 51.8248 5.31902 46.3157C2.20136 40.8066 0.901258 34.4544 1.60384 28.1634C2.30642 21.8724 4.97587 15.9635 9.23209 11.2779C17.962 1.66254 32.7026 -0.984338 44.7339 3.82816" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6719 30.2969L32.7031 42.3281L61.5781 11.0469" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>	
			<p className="mt-6 align-middle text-4xl font-bold text-black dark:text-gray-200">
			Your password has been successfully updated!
			</p>
                    <p className="mt-8 align-middle text-md font-normal text-black dark:text-gray-200">
                        For security purposes we've sent an email to your account confirming this change.
                    </p>

                        <div className=" flex mt-4 justify-end mr-16">
                            <button className=" shadow-lg shadow-blue-300 mt-4 px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Continue
                            </button>
                    </div>
                    {/* end of left side div with welcome header */}
                </div>
            </div>
        </div>
        );
}

export default UpdatedPassword