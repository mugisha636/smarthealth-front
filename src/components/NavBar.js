import arrow from '../images/arrow.png'
import arrow2 from '../images/arrow2.png'
import {NavLink, Outlet} from 'react-router-dom'

function NavBar() {

    return (
<>
            <div className="bg-white z-40 shadow-2xl rounded-b-[50px] shadow-gray-200 sticky top-0 font-textF px-16 py-4">

                {/* start of top navbar */}
                <div className='flex justify-between flex-row'>

                    <div className="flex">
                        <NavLink to='/ChatAi'>
							<button className='border font-bold flex flex-row rounded-lg py-2 px-3 text-blue-500 border-blue-200'>
								WellBe chatAi
								<img className='ml-3 h-4 mt-1' src={arrow} alt="" />
							</button>
						</NavLink>
						<NavLink to='/Bmi'>
							<button className='ml-6 border font-bold flex flex-row rounded-lg py-2 px-5 text-blue-500 border-blue-200'>
								Check BMI
								<img className='ml-3 h-4 mt-1' src={arrow} alt="" />
							</button>
						</NavLink>
                    </div>

                    <div className=''>
                        <NavLink to='/' className='text-3xl text-blue-500 font-bold'>
							WellBe.
						</NavLink>
                    </div>

                    <div className='flex flex-row'>
						<NavLink to='/Login'>
							<button className='bg-blue-500 tracking-wide text-white border-2 border-blue-500 py-1 px-4 justify-center font-bold rounded-full flex flex-row'>
								<img className='mr-3 h-4 mt-1' src={arrow2} alt='' />
								Login
							</button>
						</NavLink>
			
						<NavLink to='/SignUp'>
							<button className='ml-4 bg-white text-blue-500 border-2 border-blue-500 py-1 px-2 justify-center font-bold tracking-wide rounded-full flex flex-row'>
								<svg className='mr-2 mt-1' xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
								<path d="M14 0C12.9391 0 11.9217 0.421427 11.1716 1.17157C10.4214 1.92172 10 2.93913 10 4C10 5.06087 10.4214 6.07828 11.1716 6.82843C11.9217 7.57857 12.9391 8 14 8C15.0609 8 16.0783 7.57857 16.8284 6.82843C17.5786 6.07828 18 5.06087 18 4C18 2.93913 17.5786 1.92172 16.8284 1.17157C16.0783 0.421427 15.0609 0 14 0ZM14 1.9C14.2758 1.9 14.5489 1.95432 14.8036 2.05985C15.0584 2.16539 15.2899 2.32007 15.4849 2.51508C15.6799 2.71008 15.8346 2.94158 15.9401 3.19636C16.0457 3.45115 16.1 3.72422 16.1 4C16.1 4.27578 16.0457 4.54885 15.9401 4.80364C15.8346 5.05842 15.6799 5.28992 15.4849 5.48492C15.2899 5.67993 15.0584 5.83461 14.8036 5.94015C14.5489 6.04568 14.2758 6.1 14 6.1C13.7242 6.1 13.4511 6.04568 13.1964 5.94015C12.9416 5.83461 12.7101 5.67993 12.5151 5.48492C12.3201 5.28992 12.1654 5.05842 12.0599 4.80364C11.9543 4.54885 11.9 4.27578 11.9 4C11.9 3.44305 12.1212 2.9089 12.5151 2.51508C12.9089 2.12125 13.443 1.9 14 1.9ZM3 3V6H0V8H3V11H5V8H8V6H5V3H3ZM14 9C11.33 9 6 10.33 6 13V16H22V13C22 10.33 16.67 9 14 9ZM14 10.9C16.97 10.9 20.1 12.36 20.1 13V14.1H7.9V13C7.9 12.36 11 10.9 14 10.9Z" fill="#407BFF"/>
								</svg>
								Sign Up
							</button>
						</NavLink>
                    </div>

                </div>
                {/* end of top navbar */}

                {/* start of navigation */}
                <div className='mt-7 flex justify-between px-32 font-semibold '>
					<NavLink to='/' className='hover:text-blue-500 focus:text-blue-500' >Home</NavLink>
                    <NavLink to='/About' className='hover:text-blue-500 focus:text-blue-500' >About</NavLink>
                    <NavLink to='' className='hover:text-blue-500 focus:text-blue-500'>Departments</NavLink>
					<NavLink to='/Appointments' className='hover:text-blue-500 focus:text-blue-500'>Appointments</NavLink>
                    <NavLink to='/Products' className='hover:text-blue-500 focus:text-blue-500'>Products</NavLink>
                    <NavLink to='/NewsLetter' className='hover:text-blue-500 focus:text-blue-500'>Newsletter</NavLink>
                </div>
                {/* end of navigation */}

            </div>
        </>

    )

}
export default NavBar