import reception from '../images/reception.png'
import contact from '../images/contact.png'

function Appointments() {

    return(
	<>
        <div className="font-textF ">

	{/* start of header*/}

	<div className='-mt-12 py-32 px-56 bg-appoint bg-cover'>
	
	<div className='flex justify-center'>
	<h1 className='text-white text-4xl tracking-wide font-semibold'>
	Book<span className='text-blue-500'> an appointment</span>
	</h1>
	</div>
	<div className='mt-6 px-48'>
	<p className='text-white text-center text-xl'> 
	All of our clients care, education and research are driven to make discoveries that can help heal you.
	</p>
	</div>

	</div>

	{/* end of header*/}

	{/* start of second section(book appointment) */}

	<div className='flex flex-row w-full px-12 pt-6 pb-6'>
	
	<div className='flex flex-col w-full'>
	<p className='text-blue-500 text-2xl font-semibold'>
	Get in touch
	</p>
	<p className='text-black text-3xl font-semibold pr-24 mt-4'>
	Meetup with one of our health experts to know more!
	</p>
	<img className='mt-8' src={reception} alt=''/>
	</div>

	<div className='w-full mt-16'>
	<input
	 type='date'
	 className='py-6 px-4 bg-blue-50 rounded-lg w-full border focus:outline-none focus:ring focus:ring-blue-300'
	 placeholder=''
	 />
	<div className='relative mt-8'>
	<select className='absolute inset-y-0 top-0 right-4 bg-transparent focus:outline-none'></select>
	<input
	 type=''
	 className='py-6 px-4 bg-blue-50 rounded-lg w-full border focus:outline-none focus:ring focus:ring-blue-300'
	 placeholder='choose an expert'
	 />
	</div>
	<input
	 type='text'
	 className='mt-8 py-6 px-4 h-40 bg-blue-50 rounded-lg w-full border focus:outline-none focus:ring focus:ring-blue-300'
	 placeholder='additional message'
	/>
	<button className=" shadow-lg shadow-blue-300 mt-4 px-6 py-3 text-lg font-bold tracking-wide text-white transition-colors duration-300 bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Book an appointment
        </button>
	</div>

	</div>

	{/* start of second section(book appointment) */}
	{/* start of third section(consultation) */}

	<div className='flex flex-row w-full px-12 pt-6 pb-16'>

	<div className='w-full'>
	<div>
	<p className='text-blue-500 text-2xl tracking-wide font-semibold'>
	WellBe
	</p>
	<p className='text-black text-3xl font-semibold pr-24 mt-4'>
	Quick consultation for our clients
	</p>
	<p className='pr-56 text-black text-lg font-Normal mt-4'>
	Tell us how you feel for a quick consultation
	</p>
	</div>
	<div className='mt-4'>
	<div className='relative'>
	<p className='text-black text-lg font-normal'>
	Choose a category
	</p>
	<select className='absolute inset-y-0 top-10 right-4 bg-transparent focus:outline-none'></select>
	<input
	 type=''
	 className='py-6 px-4 mt-3 bg-blue-50 rounded-lg w-full border focus:outline-none focus:ring focus:ring-blue-300'
	 placeholder='headache'
	 />
	</div>
	<div className='relative mt-6'>
	<p className='text-black text-lg font-normal'>
	Select a subcategory 
	</p>
	<select className='absolute inset-y-0 top-10 right-4 bg-transparent focus:outline-none'></select>
	<input
	 type=''
	 className='py-6 px-4 mt-3 bg-blue-50 rounded-lg w-full border focus:outline-none focus:ring focus:ring-blue-300'
	 placeholder='back headache'
	 />
	</div>
`	<div className='mt-6'>
	<p className='text-black text-lg font-normal'>
	Add more information 
	</p>
	<input
	 type='text'
	 className='mt-6 py-6 px-4 h-40 bg-blue-50 rounded-lg w-full border focus:outline-none focus:ring focus:ring-blue-300'
	 placeholder='type more information...'
	/>
	</div>
	<button className=" shadow-lg shadow-blue-300 mt-4 w-1/3 py-3 text-lg font-bold tracking-wide text-white transition-colors duration-300 bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Send
        </button>
	</div>
	</div>
	<div className='flex flex-col ml-10 w-full'>
	<img className='mt-8' src={contact} alt=''/>
	</div>

	</div>

	{/* start of third section(consultation) */}

        </div>
	</>
    )

}
export default Appointments