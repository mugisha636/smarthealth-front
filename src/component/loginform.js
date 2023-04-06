import React from "react";
// import image1 from "../img/orange1.png"
import "./loginform.css";

const Loginform = () => {
    return (
        <div className="form grid grid-cols-2 w-full">
            <div className="login-pic ">
              WELLBE.
                {/* <img src={image1} style={{width:"90%", height:"70vh"}} /> */}
            </div>
            
<div className="grid grod-cols-2"> 

  <div><h1 class="font-bold mr-12">WELCOME BACK!</h1>
       <h3>log in to manage your daily health progress!</h3>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="flex items-start mb-6">
    {/* <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div> */}
    <label for="forgot password" class="ml-200 text-sm font-large text-blue-300 underline dark:text-blue-300">forgot  password?</label>
  </div>
  <button type="login" class="text-white  font-large bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">login</button>
  <label>Don't have an account
    ?<span class="text-blue-300 font-large underline">Signup</span></label>
</div>
</div>



    )
}
export default Loginform;