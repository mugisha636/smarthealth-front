import React, {useState} from "react";

function ContactForm() {
	
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [message, setMessage] = useState("")
	const [contact, setContact] = useState("")

	const handleNameChange = (e) => {
		setName(e.target.value);
	  };
	
	  const handleEmailChange = (e) => {
		setEmail(e.target.value);
	  };
	  const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	  };
	
	  const handleMessageChange = (e) => {
		setMessage(e.target.value);
	  };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://smart-health.onrender.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, phone , message }),
        })
        const data = await response.json();
        if (response.ok) {
     	window.alert('coment sent')
		
		 setName('');
		 setEmail('');
		 setPhone('');
		 setMessage('');
        } else {
          
          setContact(data.message);
        }

    }

	return (

	
		<>
<form onSubmit={handleSubmit}>
		<div className='bg-white w-full'>

			<div className='flex flex-row w-full'>
				<input type='text'
					id="name"
					className='px-3 text-md w-full font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder='Full Names'
					value={name}
					onChange={handleNameChange}
					/>
				<input type='text'
					id="email"
					className='px-3 ml-4 w-full text-md font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder='Email' 
					value={email}
					onChange={handleEmailChange}
					/>
			</div>

			<div className='flex mt-4 flex-row w-full'>
				<input type='tel'
					id="phone"
					className='px-3 text-md w-full font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder='Phone Number'
					value={phone}
					onChange={handlePhoneChange}
					/>
				{/* <input type='text'
					className='px-3 ml-4 text-md w-full font-normal py-5 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md '
					placeholder="Health expert's name" 
					
					/> */}
			</div>

			<div>
			<textarea
			className=' mt-4 pl-5 h-40 w-full text-top text-md font-normal border border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-30 rounded-md'
			onChange={handleMessageChange}
			value={message}
			>
			Message
			</textarea>
			</div>
			<div>
			<button type="submit" className='bg-blue-500 text-white rounded-full py-4 w-44 mt-6 text-lg font-semibold border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-white focus:border-blue-500 focus:bg-blue-300 focus:text-white'>Submit</button>
			</div>
		</div>
		{contact && <p className="text-2xl">{contact}</p>}
		</form>
		</>
	);
}

export default ContactForm      