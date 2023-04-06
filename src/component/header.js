import  React from 'react';
import './header.css';
import { Button } from '@material-tailwind/react';

const Header =()=>{
    return(

<nav class="bg-white border-gray-200 shadow-lg dark:bg-gray-900">
    <div class="grid grid-cols-4  flex flex-wrap justify-between items-center  max-w-screen-xl p-4">
      <div className='log ml-8 '>
        <Button className='rounded-full  bg-white-300 text-blue-300 border border-blue-500 text-xl'>WELLBE chat</Button>
      </div>
      <div className='text-blue-300 text-2xl mx-72 font-bold'> WELLBE.</div>
        {/* <a href="https://flowbite.com" class="flex items-center">
            // <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a> */}
        
        <div class=" ml-5 ">
            <Button className='text-white ml-72 text-xl rounded-full'>Login</Button>
        </div>
        <div class=" ml-5 ">
            <Button className='text-white ml-48 text-xl rounded-full'>Signup</Button>
        </div>
    </div>
<nav class="">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-xl mt-0 mr-8 space-x-8 text-xl">
                <li>
                    <a href="#" class="text-blue-300 dark:text-white hover:underline text-xl" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-xl">About</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-xl">Departments</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-xl">Appointment</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-xl">Products</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-xl">Contact</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-xl">Newsletter</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</nav>


    );
};
export default Header;