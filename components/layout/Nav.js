import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { listState } from '../../atoms/style';


const Nav = () => {

    const [isList, setIsList] = useRecoilState(listState);

    const router = useRouter();
    
    return (

        <div class="hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:block bg-white dark:bg-black">
            <nav class="flex items-center justify-between">
                <div class="py-3 px-6 sm:px-12 lg:px-0">
                    {/* <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1> */}
                    <div class="max-w-7xl mx-auto flex items-baseline space-x-4">
                        <a href="/" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium  ${router.asPath === '/' ? "border-b-2 border-gray-400" : null }`} aria-current="page">Tranding</a>
                        <a href="/new" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${router.asPath === '/new' ? "border-b-2 border-gray-400" : null }`}>New</a>
                        <a href="/search" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${router.asPath === '/search' ? "border-b-2 border-gray-400" : null }`}>Search</a>
                        {/* <CompanySelectBox/> */}
                    </div>
                </div>

                <div class="flex items-baseline sm:px-11 lg:px-0">

                    <div class="mr-2 cursor-pointer" onClick={() => setIsList(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>

                    <div class="cursor-pointer" onClick={() => setIsList(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Nav;