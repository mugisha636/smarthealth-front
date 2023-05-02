// import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import ChatAi from './components/ChatAi'
import About from './components/About'
import ForgotPassword from './components/ForgotPassword'
import UpdatePassword from './components/UpdatePassword'
import UpdatedPassword from './components/UpdatedPassword'
// import Departments from './components/Departments'
import Products from './components/Products'
import ChatAiSettings from './components/ChatAiSettings'
import Appointments from './components/Appointments'
import PatientSidebar from './components/PatientSidebar'
import PatientDashboard from './components/PatientDashboard'
import PatientMessages from './components/PatientMessages'
import PatientCalendar from './components/PatientCalendar'
import PatientAppointments from './components/PatientAppointments'
import PatientSettings from './components/PatientSettings'
import FrequentlyAsked from './components/FrequentlyAsked'
import ChatBoard from './components/ChatBoard'
import NewChat from './components/NewChat'
import ClearConversation from './components/ClearConversation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function WellBe() {
  return (
	<BrowserRouter>
	<Routes>
	<Route index element={<><NavBar/><Home/><Footer/></>}/>

	<Route path='/Login' element={<Login />}/>
	<Route path='/SignUp' element={<SignUp />}/>
	<Route path='/ForgotPassword' element={<ForgotPassword />}/>
	<Route path='/UpdatePassword' element={<UpdatePassword />}/>
	<Route path='/UpdatedPassword' element={<UpdatedPassword />}/>
	<Route path='/Products' element={<><NavBar/><Products/><Footer/></>}/>
	<Route path='/About' element={<><NavBar/><About /><Footer/></>}/>
	{/*<Route path='/Departments' element={<><NavBar/><Departments /><Footer/></>}/>*/}
	<Route path='/Appointments' element={<><NavBar/><Appointments /><Footer/></>}/>
	
	<Route path='/PatientSidebar' element={<PatientSidebar/>}>
		<Route index element={<PatientDashboard />}/>
		<Route path='PatientCalendar' element={<PatientCalendar />}/>
		<Route path='PatientMessages' element={<PatientMessages />}/>
		<Route path='PatientAppointments' element={<PatientAppointments />}/>
		<Route path='PatientSettings' element={<PatientSettings />}/>
	</Route>

	<Route path='/ChatAi' element={<ChatAi />}>
		<Route index element={<ChatBoard />}/>
		<Route path='FrequentlyAsked' element={<FrequentlyAsked />}/>
		<Route path='ChatBoard' element={<ClearConversation />}/>
		<Route path='ChatAiSettings' element={<ChatAiSettings />}/>
		<Route path='NewChat' element={<ChatBoard />}/>
	</Route>

	</Routes>
	
	</BrowserRouter>
  );
}

export default WellBe;