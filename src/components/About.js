import ContactForm from '../components/ContactForm'
import girlSunset from '../images/girlSunset.png'
import aboutB from '../images/aboutB.png'
import pillow from '../images/pillow.png'
import detox from '../images/detox.png'
import legs from '../images/legs.png'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import man from '../images/man.png'
import white from '../images/white.png'
import arrow from '../images/arrow.png'

function About() {
    return (
	<>
        <div className='font-textF'>
	{/* start of header*/}

	<div className='flex flex-col -mt-12 pt-24 pb-20 px-56 bg-aboutHeaderBg bg-cover'>
	
	<div className='flex justify-center'>
	<h1 className='text-white text-4xl tracking-wide  font-semibold'>
	About<span className='text-blue-500'> WellBe.</span>
	</h1>
	</div>
	<div className='mt-6 px-28'>
	<p className='text-white text-center text-md'>
	Founded in 2023, dedicated to providing help in increasing awareness about having healty lifestyle. 
	Making people believe that it is possible to live pain-free and zero hospital attendance.
	</p>
	</div>

	</div>

	{/* end of header*/}
	{/* start of second section(values)*/}
	<div className='flex flex-row w-full pt-16 pb-14 pl-4 px bg-white'>
	
	<div className='w-full'>
	<img src={girlSunset} alt=''/>
	</div>
	
	<div className='flex flex-col ml-4 pr-14'>
	<div className=''>
	<h2 className='text-black text-3xl font-normal'>
	Our Value<span className='text-blue-500'> To Help You</span>	
	</h2>
	<p className='mt-4'>We have main values that we abide by<br/>while helping you to live better.</p>
	</div>

	<div className='flex mt-6 flex-row'>
	<div className='flex flex-col rounded-xl shadow-xl py-6 px-4'>
	<div className='flex flex-row'>
	<svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="73" height="56" viewBox="0 0 73 56" fill="none">
	<path d="M69.2789 32.9282C68.4921 32.3218 67.59 31.8819 66.6277 31.6352C65.6654 31.3886 64.663 31.3404 63.6814 31.4935C69.3301 25.7907 72.1875 20.121 72.1875 14.5625C72.1875 6.60086 65.7839 0.125038 57.9124 0.125038C55.8238 0.111922 53.7577 0.556132 51.859 1.42648C49.9603 2.29683 48.2752 3.57223 46.9219 5.16312C45.5686 3.57223 43.8834 2.29683 41.9847 1.42648C40.0861 0.556132 38.0199 0.111922 35.9313 0.125038C28.0599 0.125038 21.6562 6.60086 21.6562 14.5625C21.6562 17.8711 22.6308 21.0865 24.6821 24.4883C23.0021 24.914 21.4688 25.7871 20.2456 27.0149L13.4419 33.8125H4.8125C3.53615 33.8125 2.31207 34.3196 1.40955 35.2221C0.50703 36.1246 0 37.3487 0 38.625L0 50.6563C0 51.9326 0.50703 53.1567 1.40955 54.0592C2.31207 54.9618 3.53615 55.4688 4.8125 55.4688H36.0938C36.2905 55.4689 36.4865 55.4446 36.6773 55.3966L55.9273 50.5841C56.05 50.5549 56.1698 50.5146 56.2852 50.4638L67.9766 45.4889L68.1089 45.4287C69.2325 44.8672 70.1947 44.029 70.9048 42.9929C71.615 41.9568 72.0496 40.7569 72.1679 39.5064C72.2861 38.2559 
	72.0841 36.9958 71.5808 35.845C71.0774 34.6941 70.2894 33.6904 69.291 32.9282H69.2789ZM66.0004 41.0945L54.5707 45.9611L35.793 50.6563H16.8438V37.2144L23.6504 30.4107C24.0957 29.9619 24.6257 29.606 25.2097 29.3639C25.7937 29.1217 26.42 28.998 27.0523 29H42.1094C43.0666 29 43.9847 29.3803 44.6616 30.0572C45.3385 30.7341 45.7188 31.6521 45.7188 32.6094C45.7188 33.5667 45.3385 34.4847 44.6616 35.1616C43.9847 35.8385 43.0666 36.2188 42.1094 36.2188H33.6875C33.0493 36.2188 32.4373 36.4723 31.986 36.9236C31.5348 37.3748 31.2812 37.9869 31.2812 38.625C31.2812 39.2632 31.5348 39.8753 31.986 40.3265C32.4373 40.7778 33.0493 41.0313 33.6875 41.0313H43.3125C43.4936 41.0308 43.6741 41.0106 43.8509 40.9711L64.0032 36.3361L64.0965 36.312C64.7117 36.1412 65.3683 36.204 65.94 36.4882C66.5117 36.7725 66.9581 37.2581 67.1933 37.8516C67.4284 38.4452 67.4358 39.1048 67.2139 39.7034C66.9921 40.3021 66.5566 40.7975 65.9914 41.0945H66.0004Z" fill="#407BFF"/>
	</svg>
	<p className='text-black font-normal text-3xl ml-4'>Become Healthier</p>
	</div>
	<div className='mt-6'>
	<p>
	Have a better healthy lifestyle using different tips and natural products.
	</p>
	</div>
	</div>
		
	<div className='flex flex-col ml-4 rounded-xl shadow-xl py-6 px-4'>
	<div className='flex flex-row'>
	<svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
	<path d="M31.3959 58.6667L46.9884 27.4497H36.2084V7.33341L20.1667 38.5505H31.3959V58.6667ZM33 0.916748C41.8229 0.916748 49.3625 4.12508 55.6188 10.3813C61.875 16.6376 65.0834 24.1772 65.0834 33.0001C65.0834 41.823 61.875 49.3626 55.6188 55.6188C49.3625 61.8751 41.8229 65.0834 33 65.0834C24.1771 65.0834 16.6375 61.8751 10.3813 55.6188C4.12502 49.3626 0.916687 41.823 0.916687 33.0001C0.916687 24.1772 4.12502 16.6376 10.3813 10.3813C16.6375 4.12508 24.1771 0.916748 33 0.916748Z" fill="#407BFF"/>
	</svg>
	<p className='text-black font-normal text-3xl ml-4'>
	Increase Energy
	</p>
	</div>
	<div className='mt-6'>
	<p className=''>
	One of our strongest values is helping people becoming more energetic.
	</p>
	</div>
	</div>
	</div>
	</div>
	
	</div>
	{/* end of second section(values)*/}
	{/* start of third of section*/}

	<div className='flex w-full flex-col pb-14 px-10 bg-blue-50'>
	
	<div className='self-center text-center w-1/2 pt-8'>
	<p className='text-black text-3xl font-semibold'>
	Our Advantages
	</p>
	<p className='mt-6 text-black'>
	We use our knowledge and expertise to help you live your best life. This means creating plant-based wellness products that help people make the most of the good times
	</p>
	</div>

	<div className='flex flex-row mt-6 w-full'>
	<div className='py-6 pr-16 pl-4 shadow-xl w-full bg-white rounded-xl'>
	<svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121" fill="none">
	<path d="M19.8238 16.6275C24.8655 28.3913 40.8946 36.7084 40.8308 40.9955C40.7602 45.7397 38.6561 55.3458 38.3099 60.3219C37.3856 71.506 37.3856 82.7472 38.3099 93.933C38.5519 97.284 30.492 103.462 38.3099 109.058C40.3636 110.527 48.3933 105.697 61.8377 109.058C66.0371 109.893 70.3423 110.058 74.5931 109.545C75.2376 109.454 75.8354 109.157 76.2978 108.699C76.7603 108.241 77.0626 107.646 77.16 107.003C77.2574 106.359 77.1446 105.701 76.8384 105.127C76.5322 104.553 76.0489 104.092 75.4603 103.815C71.716 102.072 66.7449 100.522 63.5183 98.9747C58.5606 96.5933 55.4735 94.212 53.729 91.1248C53.529 90.7635 53.4047 90.3669 53.3644 89.9551C51.9325 76.4939 57.7002 55.9793 61.8377 46.8758C62.9699 44.8181 63.549 42.5019 63.5183 40.1535C63.5183 36.7924 61.8377 35.1119 60.1572 31.7508C56.3877 24.2135 55.3726 19.6928 53.5559 15.8998C53.2617 15.3918 52.8399 14.9694 52.3324 14.6743C51.8248 14.3793 51.2491 14.2218 50.662 14.2175C42.4387 13.4496 34.1483 13.8354 26.0318 15.3637L19.8238 16.6275V16.6275Z" stroke="#D0CFCE" 
	stroke-miterlimit="10"/>
	<path d="M19.8238 16.6275C24.8655 28.3913 40.8946 36.7084 40.8308 40.9955C40.7602 45.7397 38.6561 55.3458 38.3099 60.3219C37.3856 71.506 37.3856 82.7472 38.3099 93.933C38.5519 97.284 30.492 103.462 38.3099 109.058C40.3636 110.527 48.3933 105.697 61.8377 109.058C66.0371 109.893 70.3423 110.058 74.5931 109.545C75.2376 109.454 75.8354 109.157 76.2978 108.699C76.7603 108.241 77.0626 107.646 77.16 107.003C77.2574 106.359 77.1446 105.701 76.8384 105.127C76.5322 104.553 76.0489 104.092 75.4603 103.815C71.716 102.072 66.7449 100.522 63.5183 98.9747C58.5606 96.5933 55.4735 94.212 53.729 91.1248C53.529 90.7635 53.4047 90.3669 53.3644 89.9551C51.9325 76.4939 57.7002 55.9793 61.8377 46.8758C62.9699 44.8181 63.549 42.5019 63.5183 40.1535C63.5183 36.7924 61.8377 35.1119 60.1572 31.7508C56.3877 24.2135 55.3726 19.6928 53.5559 15.8998C53.2617 15.3918 52.8399 14.9694 52.3324 14.6743C51.8248 14.3793 51.2491 14.2218 50.662 14.2175C42.4387 13.4496 34.1483 13.8354 26.0318 15.3637L19.8238 16.6275V16.6275Z" stroke="#D0CFCE" 
	stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M19.8239 16.6275C24.8655 28.3913 40.8947 36.7084 40.8308 40.9955C40.7602 45.7397 38.6562 55.3458 38.31 60.3219C37.3857 71.506 37.3857 82.7472 38.31 93.933C38.552 97.284 30.8197 104.589 38.31 109.058C41.1266 110.739 48.3933 105.697 61.8377 109.058C66.0371 109.893 70.3423 110.058 74.5932 109.545C75.2376 109.454 75.8354 109.157 76.2979 108.699C76.7603 108.241 77.0627 107.646 77.16 107.003C77.2574 106.359 77.1446 105.701 76.8384 105.127C76.5322 104.553 76.0489 104.092 75.4603 103.815C71.7161 102.072 66.745 100.522 63.5183 98.9747C58.5607 96.5933 55.4735 94.212 53.7291 91.1248C53.5291 90.7635 53.4047 90.3669 53.3644 89.9551C51.9326 76.4939 57.7002 55.9793 61.8377 46.8758C62.97 44.8181 63.549 42.5019 63.5183 40.1535C63.5183 36.7924 61.8377 35.1119 60.1572 31.7508C56.3877 24.2135 55.3726 19.6928 53.556 15.8998C53.2617 15.3918 52.84 14.9694 52.3324 14.6743C51.8249 14.3793 51.2491 14.2218 50.662 14.2175C42.4387 13.4496 34.1483 13.8354 26.0318 15.3637" stroke="black" stroke-width="2" stroke-linecap="round" 
	stroke-linejoin="round"/>
	<path d="M56.6717 44.8994C55.9184 44.6185 55.2459 44.1561 54.7139 43.5533C53.0165 41.5921 53.0888 38.1957 54.8382 34.9841M67.0693 30.3828L72.4908 25.1176L68.0003 22.9967L74.8116 16.3804M82.5926 54.7138L76.0704 50.8956L75.225 55.7911L67.0307 50.9931M69.37 38.4898L76.9006 37.8495L75.5561 42.6323L85.0176 41.829" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M67.0693 30.3828L72.4908 25.1176L68.0003 22.9967L74.8116 16.3804M82.5926 54.7138L76.0704 50.8956L75.225 55.7911L67.0307 50.9931M69.37 38.4898L76.9006 37.8495L75.5561 42.6323L85.0176 41.829" stroke="#D22F27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	<p className='text-blue-500 text-xl'>
	Pain relieve
	</p>
	<p className='text-black mt-2'>
	We create a painless lifestyle for our clients
	</p>
	</div>

	<div className='py-6 pl-4 ml-4 pr-16 shadow-xl w-full bg-white rounded-xl'>
	<img src={pillow} alt=''/>
	<p className='text-blue-500 text-xl'>
	Better sleep
	</p>
	<p className='text-black mt-2'>
	We help our clients regain their sleeping potential.
	</p>
	</div>

	<div className='py-6 pl-4 pr-16 ml-4 shadow-xl w-full bg-white rounded-xl'>
	<img src={aboutB} alt=''/>
	<p className='text-blue-500 text-xl'>
	Immune support
	</p>
	<p className='text-black mt-2'>
	We have various tips and products to boost immune.
	</p>
	</div>
     </div>

	<div className='flex flex-row mt-6 w-full'>
	<div className='py-6 pr-16 pl-4 shadow-xl w-full bg-white rounded-xl'>
	<img src={detox} alt=''/>
	<p className='text-blue-500 text-xl'>
	Pain relieve
	</p>
	<p className='text-black mt-2'>
	We create a painless lifestyle for our clients
	</p>
	</div>

	<div className='py-6 pl-4 ml-4 pr-16 shadow-xl w-full bg-white rounded-xl'>
	<img src={legs} alt=''/>
	<p className='text-blue-500 text-xl'>
	Better sleep
	</p>
	<p className='text-black mt-2'>
	We help our clients regain their sleeping potential.
	</p>
	</div>

	<div className='py-6 pl-4 pr-16 ml-4 shadow-xl w-full bg-white rounded-xl'>
	<svg xmlns="http://www.w3.org/2000/svg" width="101" height="95" viewBox="0 0 101 95" fill="none">
	<path d="M98.3958 52.5414C92.2112 50.0007 80.75 39.9375 60.5833 55.0617C55.2823 52.0972 45.4583 44.9792 30.3333 57.5826C28.5662 50.3841 28.2128 33.9979 30.3333 19.7701C31.2169 17.6528 34.8565 16.1539 45.4583 27.3328L58.0625 14.7289C57.1789 9.22397 50.5 2.125 30.3333 2.125C22.7708 2.125 15.868 8.59162 12.6875 19.7703C8.71173 31.2036 2.60416 57.5828 2.60416 72.7078C2.60413 77.3658 8.90624 87.8331 32.8542 87.8331C37.8958 87.8331 52.6432 88.4005 70.6667 80.2703L85.7917 92.8742" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	<p className='text-blue-500 text-xl'>
	Immune support
	</p>
	<p className='text-black mt-2'>
	We have various tips and products to boost immune.
	</p>
	</div>
     </div>

	</div>

	{/* start of third of section*/}
	{/*end of fourth(experts) section*/}
				<div className='flex flex-col pb-24 pt-4 px-10 justify-center'>

					<div className='flex flex-row justify-between'>
					<div className='flex items-center'>
					<h2 className='text-blue-500 text-3xl font-medium'>
						Meet our health experts
					</h2>
					</div>
				<div className='flex flex-row justify-between'>
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
				</div>

					<div className='flex flex-row mt-6'>

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

				</div>

				{/*end of fourth(experts) section*/}
			{/*start of fifth(painless) section*/}

			<div className='flex flex-col w-full px-20 pb-20 bg-white'>
		
			<div className='self-center w-full text-black'>
			<p className='text-5xl text-center px-16 font-semibold'>
			Imagine your life without pain, it is possible and we can help
			</p>
			<p className='text-center text-lg mt-5 px-28'>
			The skilled team of specialists at thrive medical of east setauket, NY use a comprehensive approach to care, which means we look at aspect of your life to find out which activities, habits or conditions are contributing to or exacerbating your pain.
			</p>
			</div>

			<div className='flex flex-row mt-6 '>
			
			<div className='w-full text-black'>
			<svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="122" height="121" viewBox="0 0 122 121" fill="none">
			<path d="M74.7638 67.1046C78.9076 61.5566 81.153 54.8206 81.1667 47.8959C81.1667 41.4144 79.2447 35.0785 75.6438 29.6894C72.0429 24.3002 66.9248 20.0999 60.9367 17.6195C54.9486 15.1392 48.3595 14.4902 42.0026 15.7547C35.6457 17.0192 29.8065 20.1403 25.2234 24.7234C20.6403 29.3065 17.5192 35.1457 16.2547 41.5026C14.9902 47.8595 15.6392 54.4486 18.1195 60.4367C20.5999 66.4248 24.8002 71.5429 30.1894 75.1438C35.5785 78.7447 41.9144 80.6667 48.3959 80.6667C55.6054 80.6667 62.21 78.2467 67.6046 74.2638L99.2663 105.875L106.375 98.7663L74.7638 67.1046ZM48.3959 70.5834C35.8421 70.5834 25.7083 60.4496 25.7083 47.8959C25.7083 35.3421 35.8421 25.2083 48.3959 25.2083C60.9496 25.2083 71.0834 35.3421 71.0834 47.8959C71.0834 60.4496 60.9496 70.5834 48.3959 70.5834Z" fill="#407BFF"/>
			<path d="M48.3958 30.25L44.4129 42.5517H32.0104L42.1442 50.5679L38.2621 63.0208L48.3958 55.3071L58.5296 63.0208L54.6475 50.5679L64.7812 42.5517H52.3787L48.3958 30.25Z" fill="#407BFF"/>
			</svg>
			<p className='text-2xl text-center mt-4'>
			Find
			</p>
			<p className='text-lg text-center mt-4'>
			State-of-art Diagnostics
			</p>
			</div>

			<div className='w-full text-black'>
			<svg className='w-full mt-4' xmlns="http://www.w3.org/2000/svg" width="91" height="90" viewBox="0 0 102 101" fill="none">
			<path d="M91.3333 20.2502H71.1667V10.1668C71.1667 4.621 66.6292 0.0834961 61.0833 0.0834961H40.9167C35.3708 0.0834961 30.8333 4.621 30.8333 10.1668V20.2502H10.6667C5.12083 20.2502 0.583328 24.7877 0.583328 30.3335V90.8335C0.583328 96.3793 5.12083 100.917 10.6667 100.917H91.3333C96.8792 100.917 101.417 96.3793 101.417 90.8335V30.3335C101.417 24.7877 96.8792 20.2502 91.3333 20.2502ZM40.9167 10.1668H61.0833V20.2502H40.9167V10.1668ZM66.125 65.6252H56.0417V75.7085C56.0417 78.4814 53.7729 80.7502 51 80.7502C48.2271 80.7502 45.9583 78.4814 45.9583 75.7085V65.6252H35.875C33.1021 65.6252 30.8333 63.3564 30.8333 60.5835C30.8333 57.8106 33.1021 55.5418 35.875 55.5418H45.9583V45.4585C45.9583 42.6856 48.2271 40.4168 51 40.4168C53.7729 40.4168 56.0417 42.6856 56.0417 45.4585V55.5418H66.125C68.8979 55.5418 71.1667 57.8106 71.1667 60.5835C71.1667 63.3564 68.8979 65.6252 66.125 65.6252Z" fill="#407BFF"/>
			</svg>
			<p className='text-2xl text-center mt-6'>
			Treat
			</p>
			<p className='text-lg text-center mt-4'>
			Personalized treament plan
			</p>
			</div>

			<div className='w-full text-black'>
			<svg className='w-full mt-4' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 101 101" fill="none">
			<path d="M50.5 0.0834961C55.0173 0.0834961 59.3935 0.678413 63.5579 1.79262L52.8393 12.5062C52.0261 13.3226 51.3089 14.2292 50.7016 15.2085H50.5C43.52 15.2085 36.6967 17.2783 30.893 21.1562C25.0893 25.0341 20.5659 30.5459 17.8947 36.9946C15.2236 43.4433 14.5247 50.5393 15.8864 57.3852C17.2482 64.2311 20.6094 70.5195 25.545 75.4551C30.4806 80.3908 36.769 83.752 43.6149 85.1137C50.4608 86.4755 57.5568 85.7766 64.0055 83.1054C70.4542 80.4343 75.966 75.9109 79.8439 70.1072C83.7218 64.3035 85.7916 57.4802 85.7916 50.5002V50.2985C86.7597 49.6935 87.6672 48.9826 88.4889 48.1558L99.2075 37.4422C100.322 41.6067 100.917 45.9828 100.917 50.5002C100.917 78.3453 78.3451 100.917 50.5 100.917C22.6549 100.917 0.083313 78.3453 0.083313 50.5002C0.083313 22.655 22.6549 0.0834961 50.5 0.0834961ZM48.4127 25.3775C48.4127 29.668 48.201 34.019 48.4329 38.3044L45.7104 41.0269C44.7739 41.9634 44.031 43.0752 43.5242 44.2988C43.0173 45.5224 42.7565 46.8339 42.7565 48.1583C42.7565 49.4827 43.0173 50.7942 43.5242 52.0178C44.031 
			53.2414 44.7739 54.3532 45.7104 55.2897C46.6469 56.2263 47.7587 56.9691 48.9823 57.476C50.2059 57.9828 51.5174 58.2437 52.8418 58.2437C54.1663 58.2437 55.4777 57.9828 56.7013 57.476C57.925 56.9691 59.0368 56.2263 59.9733 55.2897L62.6958 52.5672C66.9812 52.7992 71.3271 52.5874 75.6226 52.5874C75.2243 57.3787 73.4642 61.9562 70.5498 65.78C67.6354 69.6038 63.6883 72.5144 59.174 74.1686C54.6597 75.8227 49.7665 76.1514 45.0715 75.1159C40.3765 74.0804 36.0756 71.7239 32.6759 68.3242C29.2763 64.9246 26.9197 60.6236 25.8842 55.9286C24.8487 51.2337 25.1774 46.3405 26.8316 41.8262C28.4857 37.3119 31.3963 33.3647 35.2201 30.4503C39.0439 27.5359 43.6214 25.7758 48.4127 25.3775ZM83.291 0.723788C84.2112 1.10534 84.9978 1.75096 85.5514 2.57917C86.1051 3.40738 86.4009 4.38104 86.4017 5.37725V14.6035H95.6229C96.6199 14.6037 97.5944 14.8995 98.4233 15.4535C99.2522 16.0075 99.8983 16.7948 100.28 17.7159C100.661 18.6371 100.761 19.6506 100.567 20.6284C100.372 21.6063 99.8922 22.5045 99.1874 23.2096L81.355 41.0218C80.4097 
			41.9674 79.1275 42.4988 77.7905 42.499H65.625L56.4038 51.7202C55.4578 52.6656 54.1749 53.1964 52.8375 53.196C51.5001 53.1955 50.2177 52.6637 49.2723 51.7177C48.327 50.7717 47.7962 49.4889 47.7966 48.1515C47.7971 46.8141 48.3288 45.5316 49.2749 44.5863L58.4961 35.3752V23.2046C58.4955 22.5417 58.6257 21.8852 58.8792 21.2727C59.1327 20.6602 59.5045 20.1037 59.9733 19.6351L77.7956 1.81279C78.5006 1.10729 79.3991 0.626778 80.3773 0.432033C81.3555 0.237289 82.3695 0.337067 83.291 0.718746V0.723788Z" fill="#407BFF"/>
			</svg>
			<p className='text-2xl text-center mt-6'>
			Archive
			</p>
			<p className='text-lg text-center mt-4'>
			Long-term, Pain-free goals
			</p>
			</div>

			</div>
		
			</div>

			{/*end of fifth(painless) section*/}
			{/*start of sixth(contact) section*/}

				<div className="flex w-full flex-row px-12 pb-10">
					<div className='flex w-2/5 flex-col pt-8'>
						<h1 className='text-blue-500 text-3xl font-semibold'>WellBe.</h1>
						<h1 className='text-5xl mt-6 font-semibold'>Still have some Questions?</h1>
						<p className='mt-6 text-lg'>Send a message to one of our Health expert</p>
					</div>
				
					<div className='w-full w-3/5'><ContactForm /></div>					
				</div>


				{/*end of sixth(contact) section*/}

        </div>
	</>
    )
}

export default About