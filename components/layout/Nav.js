import React, { useState } from 'react';

import { Disclosure } from '@headlessui/react'



import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { listState } from '../../atoms/style';
import { userState } from "../../atoms/auth";


import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

import { searchFilterState } from '../../atoms/search';

import InputSearch from '../search/InputSearch';

const unit = [
    { name: "1일", value: "days" },
    { name: "1주", value: "weeks" },
];

const companys = [
    { name: "라인", value: 1 },
    { name: "카카오", value: 2 },
    { name: "우아한형제들", value: 3 },
    // { name: "뱅크샐러드", value: "banksalad" }
]



const Nav = () => {

    const router = useRouter();
    const [user, setUser] = useRecoilState(userState);

    const [filterState, setFilterState] = useRecoilState(searchFilterState);

    const handleKeywordChange = (e) => {

        const newFilter = {
            ...filterState
        };
        newFilter.keyword = e.target.value;

        setFilterState(newFilter);

    };

    const handleCompanyCheckbox = (e) => {

        const targetCompany = Number(e.target.value);

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




