import React, { useState, useEffect, Fragment } from 'react';

import { Menu, Transition, Listbox } from '@headlessui/react'

import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { listState } from '../../atoms/style';


import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';


import { searchFilterState } from '../../atoms/search';

import InputSearch from '../search/InputSearch';

const unit = [
    { name: "1일", value: "days" },
    { name: "1주", value: "weeks" },
];


const Nav = () => {

    const router = useRouter();

    const [selected, setSelected] = useState(unit[0]);
    const [isList, setIsList] = useRecoilState(listState);

    const [filterState, setFilterState] = useRecoilState(searchFilterState);

    const handleKeywordChange = (e) => {

        const newFilter = {
            ...filterState
        };
        newFilter.keyword = e.target.value;

        setFilterState(newFilter);

    };


    return (

        <div class="hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:block bg-white dark:bg-black">
            <nav class="flex items-center justify-between">
                <div class="py-3 px-6 sm:px-12 lg:px-0">
                    {/* <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1> */}
                    <div class="max-w-7xl mx-auto flex items-baseline space-x-4">
                        <a href="/" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium  ${router.asPath === '/' ? "border-b-2 border-gray-400" : null}`} aria-current="page">Tranding</a>
                        <a href="/new" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${router.asPath === '/new' ? "border-b-2 border-gray-400" : null}`}>New</a>
                        <a href="/search" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${router.asPath === '/search' ? "border-b-2 border-gray-400" : null}`}>Search</a>
                        {/* <CompanySelectBox/> */}
                    </div>
                </div>

                <div class="flex items-baseline sm:px-11 lg:px-0">

                    <div>
                        <input onChange={handleKeywordChange} type="search" id="default-search" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="키워드를 입력해 주세요" required="" />
                    </div>

                    {/* <div class="mr-2 cursor-pointer" onClick={() => setIsList(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>

                    <div class="cursor-pointer" onClick={() => setIsList(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </div> */}

                    {/* <Listbox value={selected} onChange={(e) => handleSelected(e)} class="border-black p-1 rounded-md mt-3">
                        <div className="relative mt-3 border-black">
                            <Listbox.Button className="relative w-full pl-3 pr-10 text-left bg-white cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="justify-center block text-center">
                                    {selected.name}
                                </span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <ChevronDownIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full py-2 mt-3 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {unit.map((person, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pr-4 ${active
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "text-gray-900"
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate text-center ${selected ? "font-medium" : "font-normal"
                                                            } `}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon
                                                                className="w-5 h-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>

                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox> */}


                </div>


            </nav>
        </div>

    );
};

export default Nav;