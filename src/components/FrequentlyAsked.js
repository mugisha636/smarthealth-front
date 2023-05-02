import { NavLink } from 'react-router-dom'
import {useState} from 'react'

function FrequentlyAsked() {

	const [isOpen, setIsOpen] = useState(false)

    return(
        <>
	<div className='flex flex-col font-textF justify-between w-full bg-white px-8 pt-8 pb-4'>

{/* start chat header */}
<div className='flex justify-center text-blue-500 w-full'>
				<h1 className='text-2xl font-semibold'>
				WellBe Chat
				</h1>
		</div>
{/* end chat header */}

{/* start of Frequently asked questions contents */}
		<div className='w-full'>
			<div className='flex justify-center mt-20 text-blue-500 text-xl font-semibold'>
				Frequently asked questions
			</div>
			<div className='flex flex-row w-full mt-10'>
				<div className='flex flex-col w-full'>
					<div className='rounded-xl p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>What is a dietary supplements? <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
        {isOpen && <p>hello</p>}
        </div>
					<div className='rounded-xl mt-3 p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>What is a dietary supplements? <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
        {isOpen && <p>hello</p>}
        </div>
					<div className='rounded-xl mt-3 p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>
        What kind of sports should i do? 
        <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
					</div>
					<div className='rounded-xl mt-3 p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>
        can people get all their nutrients they need from their diet? 
        <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
					</div>
				</div>
				<div className='flex flex-col ml-4 w-full'>
					<div className='rounded-xl p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>
        Can i take a supplement on my own without a doctor?
        <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
					</div>
					<div className='rounded-xl mt-3 p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>
        How do i take supplements? 
        <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
					</div>
					<div className='rounded-xl mt-3 p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>
        Is it posssible to take too much of a cerain vitamin or mineral? 
        <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
					</div>
					<div className='rounded-xl mt-3 p-4 shadow-lg bg-white'>
						<p className='text-sm flex flex-row justify-between font-semibold'>
        Why should i do sports?
        <span onClick={()=>setIsOpen(!isOpen)} className='self-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
									<path d="M6.99993 8.24997L0.989014 2.24047L2.9936 0.237305L6.99993 4.24364L11.0063 0.237305L13.0108 2.24047L6.99993 8.25139V8.24997Z" fill="black"/>
								</svg>
							</span>
						</p>
        {isOpen && <p>hi</p>}
        </div>
				</div>
			</div>
		</div>
{/* end of Frequently asked questions contents */}
	</div>
</>
    )

}
export default FrequentlyAsked