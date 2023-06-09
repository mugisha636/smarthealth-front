import twitter from '../images/twitter.png'
import {NavLink} from 'react-router-dom'
import {FaFacebookSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
    return (
	<>
	<div className='bg-black bg-opacity-90 pb-10 font-textF'>
        <div className='flex flex-row font-textF'>
	<div className='w-full flex flex-row mt-1 pt-6 px-10 justify-between border-r border-white'>

	<div className='flex flex-col w-full'>
	<p className='text-blue-500 text-xl text-center font-medium'>Balanced Being</p>
	<div className='flex mt-2 justify-center space-x-2'>
	<FaFacebookSquare size={30} color='white'/>
	<FaInstagram size={30} color='white'/>
	<FaTwitterSquare size={30} color='white'/>
	<FaFacebookSquare size={30} color='white'/>
	<FaFacebookSquare size={30} color='white'/>
	
	</div>
	</div>
	<div className='flex flex-col w-full ml-10 text-white space-y-2 text-md'>
	<NavLink to='/About' className='hover:underline' >About us</NavLink>
	<NavLink to='/Careers' className='hover:underline' >Careers</NavLink>
	<NavLink to='/PrivacyPolicy' className='hover:underline' >Privacy policy</NavLink>
	<NavLink to='/Trending' className='hover:underline' >Trending</NavLink>
	<NavLink to='/Feedback' className='hover:underline' >Feedback</NavLink>
	<NavLink to='/Contact' className='hover:underline' >Contact us</NavLink>
	</div>

	<div className='flex flex-col ml-8 w-full text-white space-y-2 text-md'>
	<NavLink to='/NewsLetter' className='hover:underline' >Newsletter</NavLink>
	<NavLink to='/HealthNews' className='hover:underline' >Health news</NavLink>
	<NavLink to='/PopularTopics' className='hover:underline' >Popular topics</NavLink>
	<NavLink to='/CommonQuestions' className='hover:underline' >Common questions</NavLink>
	<NavLink to='/TermsOfUse' className='hover:underline' >Terms of use</NavLink>
	<NavLink to='/HealthExperts' className='hover:underline' >Meet our health experts network</NavLink>
	</div>

	</div>

	<div className='flex flex-col w-full pl-8 pr-16 pt-6'>
	<div className='flex flex-row items-center'>
	<span className=''>
	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
	<path d="M4.66668 30.1668H27.3333C28.0848 30.1668 28.8055 29.8683 29.3368 29.337C29.8682 28.8056 30.1667 28.0849 30.1667 27.3335V4.66683C30.1667 3.91538 29.8682 3.19471 29.3368 2.66336C28.8055 2.13201 28.0848 1.8335 27.3333 1.8335H10.3333C9.5819 1.8335 8.86123 2.13201 8.32987 2.66336C7.79852 3.19471 7.50001 3.91538 7.50001 4.66683V27.3335C7.50001 28.0849 7.2015 28.8056 6.67015 29.337C6.13879 29.8683 5.41812 30.1668 4.66668 30.1668ZM4.66668 30.1668C3.91523 30.1668 3.19456 29.8683 2.66321 29.337C2.13185 28.8056 1.83334 28.0849 1.83334 27.3335V14.5835C1.83334 13.0252 3.10834 11.7502 4.66668 11.7502H7.50001M24.5 18.8335H13.1667M20.25 24.5002H13.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	</span>
	<p className='text-white text-2xl mt-2 ml-1'>Newsletter</p>
	</div>
	<h1 className='text-white text-4xl pr-32 font-medium mt-4'>get the best in health and wellness</h1>
	<input className='mt-4 py-2 w-full text-white bg-transparent border-b border-white focus:bg-transparent focus:outline-none focus:border-b-2' placeholder='Enter your email'/>
	<button className='mt-6 py-2 w-56 bg-blue-500 text-white font-medium rounded-xl hover:text-blue-500 hover:bg-white '>Subscribe</button>
	<p className='h-8 text-white text-sm mt-4'>By subscribing you agree to our <NavLink to='/TermsOfUse' className='underline hover:no-underline hover:text-lg' > Terms of use</NavLink> and<NavLink to='/PrivacyPolicy' className='underline hover:no-underline hover:text-lg' > Privacy policy</NavLink></p>
	</div>

        </div>
	<div className='flex justify-center mt-8 text-white'>
	&copy; Copyright 2023 WellBe
	</div>
	</div>
	</>
    )
}

export default Footer