import {NavLink, Outlet} from 'react-router-dom'
import {
	FaTh,
	FaUserAlt,
	FaRegChartBar,
	FaCommentAlt,
	FaShoppingBag
	} from 'react-icons/fa'

function PatientSidebar() {

	const menuItems=[
	{
	path:"",
	name:"Dashboard",
	icon:<FaUserAlt/>
	},
	{
	path:"PatientCalendar",
	name:"Calendar",
	icon:<FaTh/>
	},
	{
	path:"PatientMessages",
	name:"Messages",
	icon:<FaRegChartBar/>
	},
	{
	path:"PatientAppointments",
	name:"Appointments",
	icon:<FaCommentAlt/>
	},
	{
	path:"PatientSettings",
	name:"Settings",
	icon:<FaShoppingBag/>
	}
	]

    return(
	<>
        <div className="container flex">
		<div className="sidebar bg-black-white shadow-lg rounded-r-xl">
			<div className=" top_section flex justify-between items-center py-6 px-4">
			<span className='bars'>
			<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
			<path d="M1.5 20.625C1.18125 20.625 0.913879 20.517 0.697879 20.301C0.481879 20.085 0.374254 19.818 0.375004 19.5V12.75C0.375004 12.4313 0.483004 12.1639 0.699004 11.9479C0.915004 11.7319 1.182 11.6243 1.5 11.625C1.81875 11.625 2.08613 11.733 2.30213 11.949C2.51813 12.165 2.62575 12.432 2.625 12.75V16.8L16.8 2.625H12.75C12.4313 2.625 12.1639 2.517 11.9479 2.301C11.7319 2.085 11.6243 1.818 11.625 1.5C11.625 1.18125 11.733 0.913879 11.949 0.697879C12.165 0.481879 12.432 0.374254 12.75 0.375004H19.5C19.8188 0.375004 20.0861 0.483004 20.3021 0.699004C20.5181 0.915004 20.6258 1.182 20.625 1.5V8.25C20.625 8.56875 20.517 8.83613 20.301 9.05213C20.085 9.26813 19.818 9.37575 19.5 9.375C19.1813 9.375 18.9139 9.267 18.6979 9.051C18.4819 8.835 18.3743 8.568 18.375 8.25V4.2L4.2 18.375H8.25C8.56875 18.375 8.83613 18.483 9.05213 18.699C9.26813 18.915 9.37575 19.182 9.375 19.5C9.375 19.8188 9.267 20.0861 9.051 20.3021C8.835 20.5181 8.568 20.6258 8.25 20.625H1.5Z" fill="#407BFF"/>
			</svg>
			</span>
			<h1 className='ml-20 text-blue-500 font-semibold text-2xl'>
			WellBe.
			</h1>
        		</div>
			{
				menuItems.map((item, index)=>(
					<NavLink to={item.path}
					key={index}
					className='flex text-black hover:text-white hover:bg-blue-500 py-4 px-4 gap-4 items-center focus:bg-blue-300 focus:text-blue-700'>
						<div className='text-sm'>{item.icon}</div>
						<div className=' text-xl font-semibold tracking-wide'>{item.name}</div>
					</NavLink>
				))
			}
        	</div>
		<div className='w-full p-4 h-screen'><Outlet/></div>
        </div>
	</>
    )

}
export default PatientSidebar