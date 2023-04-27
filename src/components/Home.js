import ContactForm from "./ContactForm"
import nurse from '../images/nurse.png'
import doctors from '../images/doctors.png'
import diseases from '../images/diseases.png'
import diabetes from '../images/diabetes.png'
import faty from '../images/faty.png'
import Wavy from '../images/Wavy.png'
// import phone from '../images/phone.png'
import tab from '../images/tab.png'
import arrow from '../images/arrow.png'
import arrow3 from '../images/arrow3.png'
import run from '../images/run.png'
import head from '../images/head.png'
import apple from '../images/apple.png'
import people from '../images/people.png'
import bag from '../images/bag.png'
import compass from '../images/compass.png'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import man from '../images/man.png'
import white from '../images/white.png'
// import {NavLink} from 'react-router-dom'


function Home() {

	return (
		<>
			<div className='py-14 px-12 w-full font-textF'>
				{/*start of top(first) section*/}
				<div className='flex flex-row w-full'>
					{/* start of search bar */}
					<div className='flex flex-col w-4/6'>
						<h1 className="text-6xl text-blue-500 text-center font-semibold">Health Topics</h1>
						<p className='text-center font-medium tracking-wide text-2xl mt-6 '>
							Find trusted information on <br />medical conditions from our experts
						</p>
						<input type="searchBox"
							className="rounded-lg w-4/6 self-center mt-4 py-4 px-4 text-lg font-semibold bg-blue-50 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Cancer" />
						<p className='text-2xl underline mt-12 font-semibold tracking-wide text-center'>Frequently Visited</p>
						<div className='flex w-full flex-row mt-10 pr-4'>
							<div className='flex flex-col w-1/5 justify-center pb-4 px-4 bg-white rounded-[50%] shadow-lg'>
								<img className='w-20 self-center' src={diseases} alt='' />
								<p className=' font-medium text-center text-lg'>Respiratory<br />diseases</p>
							</div>
							<div className='flex flex-col ml-2 w-1/5 justify-center pb-4 px-4 bg-white rounded-[50%] shadow-lg'>
								<img className='self-center w-20' src={tab} alt='' />
								<p className='text-center font-medium text-lg'>Liver<br />diseases</p>
							</div>
							<div className='flex flex-col justify-center ml-2 w-1/5 pb-4 px-4 bg-white rounded-[50%] shadow-lg'>
								<img className='w-20 self-center' src={diabetes} alt='' />
								<p className='text-center font-medium text-lg'>type 2<br />diabetes</p>
							</div>
							<div className='flex flex-col justify-center ml-2 w-1/5 pb-4 px-4 bg-white rounded-[50%] shadow-lg'>
								<img className='w-20 self-center' src={faty} alt='' />
								<p className='text-center font-medium text-lg'>Obesity</p>
							</div>
							<div className='flex flex-col justify-center ml-2 w-1/5 pb-4 px-4 bg-white rounded-[50%] shadow-lg'>
								<img className='w-20 self-center' src={Wavy} alt='' />
								<p className='text-center font-medium text-lg'>Cancer</p>
							</div>
							<div className='flex p-1 self-center h-8 border rounded-[50%] ml-4 border'>
								<img className='w-24' src={arrow} alt='' />
							</div>
						</div>
					</div>
					{/* end of search bar */}
					{/* start of right div with images */}
					<div className="w-full flex flex-col w-2/6">
						<div className='flex flex-col'>
						<div className='pl-40 h-20'>
							<img className='' src={doctors} alt='' />
						</div>
							<div className=''>
								<div className='mt-2'>
								<img className='h-[430px]' src={nurse} alt='' />
								</div>
								<div className='flex flex-col pr-24 -mt-[186px] items-end text-blue-500 text-[80px] tracking-wide'>
								<p className='' >.......</p>
								<p className='-mt-[100px]' >.......</p>
								<p className='-mt-[100px]' >.......</p>
								<p className='-mt-[100px]' >.......</p>
								<p className='-mt-[100px]' >.......</p>
								</div>
							</div>
							
						</div>
						
					</div>
					{/* end of right div with images */}
				</div>
				{/*end of top(first) section*/}
				{/*start of second section*/}
				<div className='flex flex-col w-full pt-14'>
					<div>
					   <h1 className='text-4xl text-center font-semibold'><span className='text-blue-500'>We care</span> about your Mental health</h1>
					</div>
					<div className='flex flex-row mt-6'>
						<div className='w-2/3 px-16'>
							<p className='text-center text-lg'>We are dedicated to mental health of children, adolescets & for the past 15 years. We help you address many academic, relation, behaviour & emotional concerns.</p>
						</div>
						<div className='w-1/3 flex items-center justify-center'>
							<button className='flex flex-row text-xl bg-blue-500 rounded-full text-white py-5 px-5 hover:bg-blue-300 border-2 hover:border-blue-500'>
								Get in touch
								<img className=' ml-2' src={arrow3} alt='' />
							</button>
						</div>
					</div>
				</div>
				{/*end of second section*/}
				
				{/*start of third(articles) section*/}
				<div className='pt-14'>
					<h1 className='text-4xl text-center font-bold'>Featured Articles</h1>
					<div className='flex flex-row pt-12'>
						<div className='text-blue-500 mt-[260px] text-[80px] tracking-wide'>
							<p className='' >.......</p>
							<p className='-mt-[100px]' >.......</p>
							<p className='-mt-[100px]' >.......</p>
							<p className='-mt-[100px]' >.......</p>
							<p className='-mt-[100px]' >.......</p>
						</div>
						<img className='h-[380px] -ml-20 rounded-lg' src={run} alt='' />
						<div className='flex flex-col bg-white mr-20 mt-10 mb-[120px] -ml-24 pl-8 py-6 border rounded-lg'>
							<h1 className='text-xl'>THE LATEST</h1>
							<h1 className='mt-4 text-3xl font-semibold mr-56'>Body benefits from doing physical exercise</h1>
							<p className='mt-4 mr-20 text-sm'>Enganging in regular physical exercise can have a significant positive impact on your overall healt and well-being</p>
							<button className='py-2 w-40 mt-4 rounded-lg bg-blue-500 text-white border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500'>Learn more</button>
						</div>
					</div>
					<div className='flex justify-center '>
						<button className='py-4 px-5 rounded-full text-blue-500 border border-blue-500 text-lg'>
							More articles
						</button>
					</div>
				</div>
				{/*end of third(articles) section*/}

				{/*start of fourth(departments) section*/}
				<div className='flex flex-row mt-8'>
					<div className='flex flex-col mr-4'>
						<div className='flex flex-row'>

							<div className='py-2 pl-4 pr-8 mb-20 rounded-lg rounded-tr-[50%] bg-blue-500 text-white'>
								<img className='h-12 p-2 bg-white rounded-lg' src={head} alt='' />
								<h2 className='font-semibold text-xl mt-6'>Mental Health</h2>
								<p className='mt-4'>We help different people<br />get to know how to manage their mental health.</p>
							</div>

							<div className='py-2 ml-4 pr-8 mt-12 mb-12 pl-4 rounded-lg rounded-tr-[50%] bg-blue-500 text-white'>
								<img className='h-12 p-2 bg-white rounded-lg' src={apple} alt='' />
								<h2 className='font-semibold text-xl mt-6'>Food & Diet</h2>
								<p className='mt-4'>We provide advice and<br />educational contents regarding food and diets</p>
							</div>

						</div>

						<div className='flex flex-row'>

							<div className='py-2 pr-8 -mt-16 mb-12 pl-4 rounded-lg rounded-tr-[50%] bg-blue-500 text-white'>
								<img className='h-12 p-2 bg-white rounded-lg' src={people} alt='' />
								<h2 className='font-semibold text-xl mt-6'>Sports</h2>
								<p className='mt-4'>Different consultations<br />about doing sports are also provided</p>
							</div>

							<div className='py-2 ml-4 pr-4 -mt-4 pl-4 rounded-lg rounded-tr-[50%] bg-blue-500 text-white'>
								<img className='h-12 p-2 bg-white rounded-lg' src={bag} alt='' />
								<h2 className='font-semibold text-xl mt-6'>Medics</h2>
								<p className='mt-4'>we also advice our<br />clients on what kind of medicine to take</p>
							</div>

						</div>
					</div>
					<div className='ml-8 mt-32'>
						<h1 className='text-blue-500 text-6xl font-semibold'>The Departments</h1>
						<h1 className='text-5xl font-medium mt-6'>you can find find with us</h1>
						<p className='text-lg mt-6'>in terms of patients demand we have different sort of departments to serve best treaments in the country</p>
						<button className='flex flex-row py-4 px-6 mt-6 text-blue-500 text-xl font-semibold rounded-full border border-blue-500 '>
							Explore
							<img className='ml-2' src={compass} alt='' />
						</button>
					</div>
				</div>
				{/*end of fourth(departments) section*/}

				{/*start of fifth(clients) section*/}

				<div className='pt-12 '>
					<div className='flex flex-row justify-between'>
						<h1 className='text-blue-500 mt-4 text-2xl font-medium'>What say our clients?</h1>
						<div className='flex flex-row'>
							<div className='flex items-center px-4 mr-4 border rounded-[50%]'>
							<svg className='' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
							<path d="M6.87502 15.3001L0.275016 8.70006C0.175016 8.60006 0.104015 8.49173 0.0620154 8.37506C0.0200154 8.25839 -0.000651042 8.13339 1.56251e-05 8.00006C1.56251e-05 7.86673 0.0210158 7.74173 0.0630158 7.62506C0.105016 7.50839 0.175682 7.40006 0.275016 7.30006L6.87502 0.70006C7.05835 0.516727 7.28768 0.421061 7.56302 0.413061C7.83835 0.405061 8.07568 0.500727 8.27501 0.70006C8.47501 0.883394 8.57935 1.11273 8.58802 1.38806C8.59668 1.66339 8.50068 1.90073 8.30002 2.10006L3.40002 7.00006H14.575C14.8583 7.00006 15.096 7.09606 15.288 7.28806C15.48 7.48006 15.5757 7.71739 15.575 8.00006C15.575 8.28339 15.4793 8.52106 15.288 8.71306C15.0967 8.90506 14.859 9.00073 14.575 9.00006H3.40002L8.30002 13.9001C8.48335 14.0834 8.57935 14.3167 8.58802 14.6001C8.59668 14.8834 8.50068 15.1167 8.30002 15.3001C8.11668 15.5001 7.88335 15.6001 7.60002 15.6001C7.31668 15.6001 7.07502 15.5001 6.87502 15.3001Z" fill="#407BFF"/>
							</svg>
							</div>
							<div>
							<img className='h-12 p-4 border rounded-[50%]' src={arrow} alt='' />
							</div>
						</div>
					</div>

					<div className='flex flex-row pt-8'>

						<div className='pt-6 pl-6 pr-12 pb-8 bg-blue-200 rounded-lg'>
							<div className='flex flex-row'>
								<img className='h-20 rounded-[50%]' src={girl} alt='' />
								<p className='text-blue-500 text-xl mt-6 ml-4 font-semibold'>RIB Nyamata</p>
							</div>
							<p className='mt-4 text-sm'>
								"my experience with wellbe was outstanding! From the state-of-the-art facilities to the caring and attentive staff, everything exceeded me expectations. Thanks to their expert health treatments, i am feeling better than ever before. I would highly recommend Wellbe to anyone seeking exceptional health care services"
							</p>
						</div>

						<div className='pt-6 pb-8 pr-12 ml-4 pl-6 bg-blue-200 rounded-lg'>
							<div className='flex flex-row'>
								<img className='h-20 rounded-[50%]' src={boy} alt='' />
								<p className='text-blue-500 text-xl mt-6 ml-4 font-semibold'>Eloi Rwangagi</p>
							</div>
							<p className='mt-4 text-sm'>
								"my experience with wellbe was outstanding! From the state-of-the-art facilities to the caring and attentive staff, everything exceeded me expectations. Thanks to their expert health treatments, i am feeling better than ever before. I would highly recommend Wellbe to anyone seeking exceptional health care services"
							</p>
						</div>

					</div>
				</div>
				{/*end of fifth(clients) section*/}

				{/*end of sixth(experts) section*/}
				<div className='pt-14 flex flex-col justify-center'>

					<h2 className='text-blue-500 underline text-2xl text-center font-medium'>
						Meet our health experts
					</h2>

					<div className='flex flex-row mt-8'>

						<div className='rounded-lg flex flex-col pb-4 shadow-lg'>
							<img className='h-80' src={man} alt='' />
							<p className='text-blue-500 text-xl text-center mt-6'>Henry MANZI</p>
							<p className='text-xl text-center'>Food & Diet Expert</p>
						</div>

						<div className='ml-4 rounded-lg flex flex-col pb-4 shadow-lg'>
							<img className='h-80' src={boy} alt='' />
							<p className='text-blue-500 text-xl text-center mt-6'>Olivier KAREKEZI</p>
							<p className='text-xl text-center'>Sports Expert</p>
						</div>

						<div className='rounded-lg ml-4 flex flex-col pb-4 shadow-lg'>
							<img className='h-80' src={girl} alt='' />
							<p className='text-blue-500 text-xl text-center mt-6'>Jacy RULINDA</p>
							<p className='text-xl text-center'>Mental Health Expert</p>
						</div>

						<div className='ml-4 rounded-lg flex flex-col pb-4 shadow-lg'>
							<img className=' h-80' src={white} alt='' />
							<p className='text-blue-500 text-xl text-center mt-6'>Ines BRANDY</p>
							<p className='text-xl text-center'>Medics Expert</p>
						</div>

					</div>
					<div className='flex flex-row justify-center mt-8'>
						<img className='bg-blue-500 p-6 rounded-sm rounded-tl-[80%] h-8 mr-4' src={arrow} />
						<img className='bg-blue-500 p-6 rounded-sm rounded-tr-[80%] h-8' src={arrow} />
					</div>



				</div>

				{/*end of sixth(experts) section*/}
				{/*start of seventh(contact) section*/}

				<div className="flex w-full flex-row mt-8">
					<div className='flex w-full flex-col pt-8'>
						<h1 className='text-blue-500 text-3xl font-semibold'>WellBe.</h1>
						<h1 className='text-5xl mt-6 font-semibold'>Still have some Questions?</h1>
						<p className='mt-6 text-lg'>Send a message to one of our Health expert</p>
					</div>
				
					<div className='w-full'><ContactForm /></div>					
				</div>


				{/*end of seventh(contact) section*/}

			</div>
		</>
	)

}
export default Home