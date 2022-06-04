import React, { useState, useEffect, Fragment } from 'react';

import { Menu, Transition, Listbox, Popover, Disclosure } from '@headlessui/react'



import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { listState } from '../../atoms/style';


import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

import { searchFilterState } from '../../atoms/search';

import InputSearch from '../search/InputSearch';

const unit = [
    { name: "1일", value: "days" },
    { name: "1주", value: "weeks" },
];

const solutions = [
    {
        name: 'Insights',
        description: 'Measure actions',
        href: '##',
        icon: IconOne,
    },
    {
        name: 'Automations',
        description: 'targeted content',
        href: '##',
        icon: IconTwo,
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
        icon: IconThree,
    },
];

const companys = [
    { name: "라인", value: 1 },
    { name: "카카오", value: 2 },
    { name: "우아한형제들", value: 3 },
    // { name: "뱅크샐러드", value: "banksalad" }
]



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

    const handleCompanyCheckbox = (e) => {

        const targetCompany =  Number(e.target.value);

        const newFilter = {
            ...filterState
        };

        const newCompanyFilter = [...filterState.company];

        // 이미 포함 되어 있으면 지워야 함
        if (newFilter.company.includes(targetCompany)) {

            const filterdCompany = newCompanyFilter.filter((company) => company !== targetCompany);
            newFilter.company = filterdCompany;

        } else {


            newCompanyFilter.push(targetCompany);

            const set = new Set(newCompanyFilter);
            const uniqueArr = [...set];

            newFilter.company = uniqueArr;

        }

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

                    <div className="">
                        <div className="mr-2 border rounded-md">
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex justify-between w-full px-5 pb-2 text-left rounded-lg">
                                            <span className="mr-2 text-sm text-gray-600">Company</span>
                                            <ChevronDownIcon
                                                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="absolute z-40 p-2 mt-2 bg-white border rounded-md top-30">
                                            <div className="grid gap-4 p-3 bg-white elative lg:grid-cols-3">
                                                {companys.map((company) => (
                                                    <div><input onChange={handleCompanyCheckbox} class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={company.value} id="flexCheckDefault" /><span className="text-sm">{company.name}</span></div>
                                                ))}
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>

                        </div>
                    </div>


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



function IconOne() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
                d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                stroke="#FB923C"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
        </svg>
    )
}

function IconTwo() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
                d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                stroke="#FB923C"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
        </svg>
    )
}

function IconThree() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
            <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
            <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
            <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
            <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
            <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}