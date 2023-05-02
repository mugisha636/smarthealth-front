import bloodSugar from '../images/bloodSugar.png'
import bloodPressure from '../images/bloodPressure.png'
import heartRate from '../images/heartRate.png'
import BloodS from '../images/BloodS.png'
import BloodP from '../images/BloodP.png'
import HeartR from '../images/HeartR.png'
import body from '../images/body.png'
import {useState} from 'react'

function PatientDashboard() {
	
	const [weight, setWeight] = useState(1)
	const [height, setHeight] = useState(1)
	const [bmi, setBmi] = useState('')
	const [message, setMessage] = useState('')
	
	function calculateBmi(e) {
		e.preventDefault()
		
		if (weight === 0 || weight === 0) {
			alert('Height or Weight is invalid')
		} else {
			let bmi = (weight / (height * height) * 730)
			setBmi(bmi.tofixed(1))
			
				if (bmi < 25){
					setMessage('you are under weight')
				} else if (bmi >= 25 && bmi < 30){
					setMessage('You are healthy weight')
				} else{
					setMessage('you are overweight')
				}
		}
	}
	
	function reload() {
		window.location.reload()
	}

    return(
	<>
        <div className="flex flex-row bg-white w-full">
		
			{/*start of left section*/}
			<div className="flex flex-col justify-between bg-white w-full px-8 pt-10 pb-6">
			
			<div>
			{/*start of top section*/}
			<div className='flex flex-row justify-between'>
			
				<div className='flex flex-col'>
					<p className='text-black text-xl font-semibold'>Health Overview</p>
				</div>
				
				<div className='flex'>
					<div className='h-content border rounded-lg p-2'>
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
						<path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" fill="#407BFF"/>
						</svg>
					</div>
					
					<div className='h-content ml-4 border rounded-lg p-2'>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
						<path d="M2 16H16V9.031C16 5.148 12.866 2 9 2C5.134 2 2 5.148 2 9.031V16ZM9 0C13.97 0 18 4.043 18 9.031V18H0V9.031C0 4.043 4.03 0 9 0ZM6.5 19H11.5C11.5 19.663 11.2366 20.2989 10.7678 20.7678C10.2989 21.2366 9.66304 21.5 9 21.5C8.33696 21.5 7.70107 21.2366 7.23223 20.7678C6.76339 20.2989 6.5 19.663 6.5 19Z" fill="#407BFF"/>
						</svg>
					</div>
				</div>
			
			</div>
			
			<div>
				<p className='text-gray-500 text-sm'>August 12, 2021</p>
			</div>
			{/*end of top section*/}
			
			{/*start of second section(patient status)*/}
			<div className='flex w-full flex-row mt-6'>
			
				<div className='flex flex-col p-3 bg-white rounded-lg shadow-xl '>
					<div className='flex'>
						<img className='bg-orange-200 bg-opacity-80 py-2 px-3 h-10 rounded-lg' src={bloodSugar} alt=''/>
						<p className='text-md self-center font-semibold ml-2'>
							Blood Sugar
						</p>
					</div>
					<div className='mt-2'>
						<p className='text-black text-xl'>
							80
							<span className='ml-2 text-sm text-gray-500'>
								mg/dl
							</span>
						</p>
						<p className='p-1 bg-orange-200 bg-opacity-80 mt-2 rounded-lg w-16'>
							Normal
						</p>
						<img className='mt-2' src={BloodS} alt='' />
					</div>
				</div>
				
				<div className='flex flex-col ml-6 p-3 bg-white rounded-lg shadow-xl '>
					<div className='flex'>
						<img className='bg-fuchsia-200 bg-opacity-80 py-2 px-3 h-10 rounded-lg' src={heartRate} alt=''/>
						<p className='text-md self-center font-semibold ml-2'>
							Heart Rate
						</p>
					</div>
					<div className='mt-2'>
						<p className='text-black text-xl'>
							98
							<span className='ml-2 text-sm text-gray-500'>
								bpm
							</span>
						</p>
						<p className='p-1 bg-fuchsia-200 bg-opacity-80 mt-2 rounded-lg w-16'>
							Normal
						</p>
						<img className='mt-2' src={BloodP} alt='' />
					</div>
				</div>
				
				<div className='flex flex-col p-3 ml-6 bg-white rounded-lg shadow-xl '>
					<div className='flex'>
						<img className='bg-sky-200 bg-opacity-80 py-2 px-3 h-10 rounded-lg' src={bloodPressure} alt=''/>
						<p className='text-md self-center font-semibold ml-2'>
							Blood Pressure
						</p>
					</div>
					<div className='mt-2'>
						<p className='text-black text-xl'>
							120
							<span className='ml-2 text-sm text-gray-500'>
								/72 mmhg
							</span>
						</p>
						<p className='p-1 bg-sky-200 bg-opacity-80 mt-2 rounded-lg w-16'>
							Normal
						</p>
						<img className='mt-2' src={HeartR} alt='' />
					</div>
				</div>
			
			</div>
			{/*end of second section(patient status)*/}
			
			{/*end of left section*/}
			</div>
			
			<div>
				<div className='flex flex-col bg-white px-4 py-5 shadow-lg rounded-xl'>
					<div className='flex mt-3 justify-between'>
						<p className='text-black font-semibold text-xl'>
						Upcoming Appointment
						</p>
						<p className='font-semibold text-black ml-4 p-2 bg-sky-200 bg-opacity-80 rounded-lg'>
						August 14, 2021
						</p>
					</div>
					<div className='flex flex-col'>
						<p className='text-black'>
						Consultation with dr. James
						</p>
					</div>
				</div>
			</div>
			
			</div>
			
			{/*start of right section*/}
			
			<div className='flex flex-col px-6 py-10 w-full bg-black bg-opacity-90 rounded-l-[30px]'>
			
				{/*start of right top section*/}
				<div className='pb-10 border-b border-white border-opacity-40'>
					<div className='flex justify-between text-white'>
						<div>
							<p>
								BMI Calculator
							</p>
						</div>
						<div className='border p-2 rounded-lg '>
							<p>
								last week
								<select className='ml-2 bg-transparent'>
								
								</select>
							</p>
						</div>
					</div>
					<div className='flex flex-row mt-6'>
						<div className='flex flex-col w-full'>
							<div className='flex flex-col bg-orange-200 px-3 py-2 rounded-xl'>
								<div className='flex flex-col'>
									<input type='range'
										   className=''
										   min='1'
										   max='500'
										   step='1'
										   value={height}
										   onChange={(e) => setHeight(e.target.value)}
										   placeholder=''
									/>
									<div className='flex justify-between'>
										<p className='text-black'>
											Height
										</p>
										<p className='text-gray-500 ml-4'>
											{height} cm
										</p>
									</div>
								</div>
							</div>
							<div className='flex flex-col bg-sky-200 px-3 py-2 mt-3 rounded-xl'>
								<div className='flex flex-col'>
									<input type='range'
										   className=''
										   min='1'
										   max='1000'
										   step='1'
										   value={weight}
										   onChange={(e) => setWeight(e.target.value)}
										   placeholder=''
									/>
									<div className='flex justify-between'>
										<p className='text-black'>
											Weight
										</p>
										<p className='text-gray-500 ml-4'>
											{weight} kg
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col bg-white bg-opacity-10 px-3 py-2 ml-6 w-full rounded-xl'>
								<div className='flex flex-col'>
									<p className='text-white'>
									Body Mass Index(BMI)
									</p>
								</div>
								<div className='flex mt-3 justify-between'>
										<p className='text-white text-xl'>
											{bmi}
										</p>
										<p className='text-black ml-4 p-1 bg-sky-200 bg-opacity-80 rounded-lg'>
											{message}
										</p>
									</div>
								<div>
									<input type='range'
										   className='mt-5'
										   min='1'
										   max='1000'
										   step='1'
										   value={bmi}
										   onChange={(e) => setBmi(e.target.value)}
										   placeholder=''
									/>
									
								</div>
							</div>
					</div>
				</div>
				{/*end of right top section*/}
				
				{/*start of right second section*/}
				
				{/*start of right second(a) section*/}
				<div className='flex flex-row justify-between'>
				
					<div className='flex flex-col mt-12'>
						<div className='text-white'>
							<p className='text-lg'>Body Measurements</p>
							<p className='mt-4 text-sm opacity-70'>Last checked 2 days ago</p>
							<p className='mt-4 p-2 opacity-80 bg-white bg-opacity-40 text-sm rounded-xl'>Invented triangle body shape</p>
						</div>
						<div className='mt-20'>
							<div className='bg-white rounded-xl w-2/3 py-5 px-8'>
								<p className=''>Chest(in)</p>
								<div className='flex mt-2'>
									<p className='text-2xl'>44.5</p>
									<span className=' ml-4 self-center'>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
										<path d="M9.00017 4.14807V16.3201H7.00017V4.14807L1.63617 9.51207L0.222168 8.09807L8.00017 0.320068L15.7782 8.09807L14.3642 9.51207L9.00017 4.14807Z" fill="#E95D5C"/>
										</svg>
									</span>
								</div>
							</div>
							<div className='bg-white rounded-xl mt-4 w-2/3 py-5 px-8'>
								<p className=''>Waist(in)</p>
								<div className='flex mt-2'>
									<p className='text-2xl'>34</p>
									<span className=' ml-4 self-center'>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
										<path d="M9.00017 12.4921L14.3642 7.12807L15.7782 8.54207L8.00017 16.3201L0.222168 8.54207L1.63617 7.12807L7.00017 12.4921V0.320068H9.00017V12.4921Z" fill="#90DF9E"/>
										</svg>
									</span>
								</div>
							</div>
							<div className='bg-white rounded-xl w-2/3 mt-4 py-5 px-8'>
								<p className=''>hip(in)</p>
								<div className='flex mt-2'>
									<p className='text-2xl'>42.5</p>
									<span className=' ml-4 self-center'>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
										<path d="M9.00017 12.4921L14.3642 7.12807L15.7782 8.54207L8.00017 16.3201L0.222168 8.54207L1.63617 7.12807L7.00017 12.4921V0.320068H9.00017V12.4921Z" fill="#90DF9E"/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					{/*end of right second(a) section*/}
					
					{/*start of right second(image) section*/}
					
					<div className='mt-6'>
						<img src={body} alt='' />
					</div>
					
					{/*end of right second(image) section*/}
				
				</div>
				
				{/*end of right second section*/}
				
			</div>
			
			{/*end of right section*/}
		
		</div>
	</>
    )

}
export default PatientDashboard