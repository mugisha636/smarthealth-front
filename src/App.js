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
import Departments from './components/Departments'
import Products from './components/Products'
import Appointments from './components/Appointments'
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
	<Route path='/ChatAi' element={<ChatAi />}/>
	<Route path='/Products' element={<><NavBar/><Products/><Footer/></>}/>
	<Route path='/About' element={<><NavBar/><About /><Footer/></>}/>
	{/*<Route path='/Departments' element={<><NavBar/><Departments /><Footer/></>}/>*/}
	<Route path='/Appointments' element={<><NavBar/><Appointments /><Footer/></>}/>
    	
	</Routes>
	</BrowserRouter>
  );
}

export default WellBe;