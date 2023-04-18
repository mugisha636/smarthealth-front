// import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import ChatAi from './components/ChatAi'
import ForgotPassword from './components/ForgotPassword'
import UpdatePassword from './components/UpdatePassword'
import UpdatedPassword from './components/UpdatedPassword'
// import Contact from './components/Contact'
// import Products from './components/Products'
// import ContactForm from './components/ContactForm'
// import Verification from './components/Verification'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function WellBe() {
  return (
	<BrowserRouter>
	<Routes>
	<Route index element={<> <NavBar /> <Home/> <Footer/> </>}/>

	<Route path='/Login' element={<Login />}/>
	<Route path='/SignUp' element={<SignUp />}/>
	<Route path='/ForgotPassword' element={<ForgotPassword />}/>
	<Route path='/UpdatePassword' element={<UpdatePassword />}/>
	<Route path='/UpdatedPassword' element={<UpdatedPassword />}/>
	<Route path='/ChatAi' element={<ChatAi />}/>
    	
	</Routes>
	</BrowserRouter>
  );
}

export default WellBe;