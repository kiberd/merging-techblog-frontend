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
                    <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <div class="max-w-7xl mx-auto flex items-baseline space-x-4">
                        <a href="/" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium  ${router.asPath === '/' ? "border-b-2 border-gray-400" : null}`} aria-current="page">Tranding</a>
                        <a href="/new" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${router.asPath === '/new' ? "border-b-2 border-gray-400" : null}`}>New</a>
                        <a href="/search" class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${router.asPath === '/search' ? "border-b-2 border-gray-400" : null}`}>Search</a>
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

