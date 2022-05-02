import React, { useEffect } from 'react';
import Script from 'next/script';



const SelectBox = ({ category, list }) => {

    useEffect(() => {
        if (typeof window !== 'undefined'){
            console.log(window);
            require('flowbite');
          }
          
    },[])

    return (
        
        <>
            
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-[100%] text-black focus:ring-blue-300 border border-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                <div class="flex justify-between w-[100%]">

                {category}
                
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>

                </div>


            </button>

            <div id="dropdown" class="w-72 z-10 hidden bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
        </>


    );
};

export default SelectBox;