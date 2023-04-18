

function ContactForm() {
	return (

		<div className='bg-white w-full'>

			<div className='flex flex-row'>
				<input type='text'
					className='px-3 text-md w-full font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder='Full Names' />
				<input type='text'
					className='px-3 ml-4 w-full text-md font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder='Email' />
			</div>

			<div className='flex mt-4 flex-row'>
				<input type='tel'
					className='px-3 text-md w-full font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder='Phone Number' />
				<input type='text'
					className='px-3 ml-4 text-md w-full font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder="Health expert's name" />
			</div>


			<input type='text'
				className=' mt-4 pl-5 h-40 w-full text-top text-md font-normal border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
				placeholder="Message" />

			<button className='bg-blue-500 text-white rounded-full py-4 w-44 mt-6 text-lg font-semibold border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-white focus:border-blue-500 focus:bg-blue-300 focus:text-white'>Submit</button>

		</div>
	);
}

export default ContactForm