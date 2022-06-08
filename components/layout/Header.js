import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Login from "../common/Login";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRecoilState, useSetRecoilState } from "recoil";
import { listState } from "../../atoms/style";
import { loginModalState } from "../../atoms/style";
import { searchFilterState } from "../../atoms/search";

import {
	Menu,
	Transition,
	Listbox,
	Popover,
	Disclosure,
} from "@headlessui/react";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/solid";

const unit = [
	{ name: "1일", value: "days" },
	{ name: "1주", value: "weeks" },
];

const solutions = [
	{
		name: "Insights",
		description: "Measure actions",
		href: "##",
		icon: IconOne,
	},
	{
		name: "Automations",
		description: "targeted content",
		href: "##",
		icon: IconTwo,
	},
	{
		name: "Reports",
		description: "Keep track of your growth",
		href: "##",
		icon: IconThree,
	},
];

const companys = [
	{ name: "라인", value: 1 },
	{ name: "카카오", value: 2 },
	{ name: "우아한형제들", value: 3 },
	// { name: "뱅크샐러드", value: "banksalad" }
];

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
	);
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
	);
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
	);
}

const Header = () => {
	const router = useRouter();

	const { theme, setTheme } = useTheme();
	const [isLoginModalOpen, setIsLoginModalOpen] =
		useRecoilState(loginModalState);

	const [selected, setSelected] = useState(unit[0]);
	const [isList, setIsList] = useRecoilState(listState);

	const [filterState, setFilterState] = useRecoilState(searchFilterState);

	const handleKeywordChange = (e) => {
		const newFilter = {
			...filterState,
		};
		newFilter.keyword = e.target.value;

		setFilterState(newFilter);
	};

	const handleCompanyCheckbox = (e) => {
		const targetCompany = Number(e.target.value);

		const newFilter = {
			...filterState,
		};

		const newCompanyFilter = [...filterState.company];

		// 이미 포함 되어 있으면 지워야 함
		if (newFilter.company.includes(targetCompany)) {
			const filterdCompany = newCompanyFilter.filter(
				(company) => company !== targetCompany
			);
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
		<>
			<header class="bg-white dark:bg-black fixed w-full z-50">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div class="flex items-center justify-between h-16">
						{/* left icon */}
						<div class="flex items-center">
							<div class="hidden md:block sm:ml-12 lg:ml-1">
								<a href="/">
									{/* Logo */}
									<svg
										width="71"
										height="24"
										viewBox="0 0 71 24"
										fill="none"
										data-testid="velog-logo"
										class="velog-logo"
									>
										<path
											d="M12.248 5.328L7.76 18H4.64L0.152 5.328H3.056L6.248 15.768L9.488 5.328H12.248ZM17.7586 12.528C17.8386 13.76 18.1906 14.688 18.8146 15.312C19.4546 15.92 20.2546 16.224 21.2146 16.224C21.8066 16.224 22.3666 16.136 22.8946 15.96C23.4386 15.768 23.9906 15.488 24.5506 15.12L25.7026 16.752C25.1106 17.248 24.4146 17.632 23.6146 17.904C22.8146 18.176 21.9746 18.312 21.0946 18.312C19.1586 18.312 17.6546 17.712 16.5826 16.512C15.5106 15.296 14.9746 13.68 14.9746 11.664C14.9746 10.4 15.2066 9.264 15.6706 8.256C16.1346 7.232 16.8066 6.432 17.6866 5.856C18.5666 5.28 19.5906 4.992 20.7586 4.992C22.4386 4.992 23.7666 5.56 24.7426 6.696C25.7346 7.816 26.2306 9.36 26.2306 11.328C26.2306 11.808 26.2066 12.208 26.1586 12.528H17.7586ZM20.7826 6.984C19.9186 6.984 19.2146 7.296 18.6706 7.92C18.1266 8.544 17.8146 9.472 17.7346 10.704H23.6146C23.5826 9.504 23.3266 8.584 22.8466 7.944C22.3666 7.304 21.6786 6.984 20.7826 6.984ZM35.4853 14.544C35.4853 15.616 36.1253 16.152 37.4053 16.152C38.0453 16.152 38.7173 16.008 39.4213 15.72L40.0933 17.592C39.2133 18.072 38.1253 18.312 36.8293 18.312C35.5653 18.312 34.5733 17.96 33.8533 17.256C33.1493 16.536 32.7973 15.552 32.7973 14.304V2.208H28.9813V0.24H35.4853V14.544ZM49.3959 4.992C51.2199 4.992 52.6279 5.592 53.6199 6.792C54.6119 7.976 55.1079 9.592 55.1079 11.64C55.1079 13.688 54.6039 15.312 53.5959 16.512C52.5879 17.712 51.1799 18.312 49.3719 18.312C47.5479 18.312 46.1319 17.728 45.1239 16.56C44.1319 15.376 43.6359 13.744 43.6359 11.664C43.6359 9.648 44.1399 8.032 45.1479 6.816C46.1719 5.6 47.5879 4.992 49.3959 4.992ZM49.3959 7.08C48.4199 7.08 47.6839 7.456 47.1879 8.208C46.7079 8.96 46.4679 10.112 46.4679 11.664C46.4679 13.232 46.7079 14.392 47.1879 15.144C47.6679 15.88 48.3959 16.248 49.3719 16.248C50.3479 16.248 51.0759 15.872 51.5559 15.12C52.0359 14.368 52.2759 13.208 52.2759 11.64C52.2759 10.088 52.0359 8.944 51.5559 8.208C51.0759 7.456 50.3559 7.08 49.3959 7.08ZM70.0745 5.952C69.6105 6.112 69.0825 6.224 68.4905 6.288C67.9145 6.336 67.2185 6.36 66.4025 6.36C67.1705 6.712 67.7465 7.152 68.1305 7.68C68.5145 8.208 68.7065 8.848 68.7065 9.6C68.7065 10.432 68.4985 11.168 68.0825 11.808C67.6825 12.448 67.1065 12.952 66.3545 13.32C65.6025 13.688 64.7145 13.872 63.6905 13.872C62.9705 13.872 62.3945 13.8 61.9625 13.656C61.7865 13.784 61.6505 13.944 61.5545 14.136C61.4585 14.312 61.4105 14.504 61.4105 14.712C61.4105 15.352 61.9305 15.672 62.9705 15.672H65.1785C66.0745 15.672 66.8745 15.824 67.5785 16.128C68.2825 16.432 68.8265 16.856 69.2105 17.4C69.6105 17.928 69.8105 18.528 69.8105 19.2C69.8105 20.464 69.2665 21.44 68.1785 22.128C67.0905 22.832 65.5225 23.184 63.4745 23.184C62.0505 23.184 60.9225 23.032 60.0905 22.728C59.2745 22.44 58.6905 22.008 58.3385 21.432C58.0025 20.872 57.8345 20.144 57.8345 19.248H60.2345C60.2345 19.728 60.3225 20.104 60.4985 20.376C60.6905 20.664 61.0185 20.872 61.4825 21C61.9465 21.144 62.6185 21.216 63.4985 21.216C64.7785 21.216 65.6985 21.056 66.2585 20.736C66.8185 20.432 67.0985 19.976 67.0985 19.368C67.0985 18.856 66.8745 18.456 66.4265 18.168C65.9945 17.896 65.4025 17.76 64.6505 17.76H62.4665C61.3305 17.76 60.4665 17.528 59.8745 17.064C59.2985 16.6 59.0105 16.016 59.0105 15.312C59.0105 14.88 59.1305 14.464 59.3705 14.064C59.6105 13.664 59.9545 13.32 60.4025 13.032C59.6505 12.632 59.0985 12.152 58.7465 11.592C58.4105 11.016 58.2425 10.312 58.2425 9.48C58.2425 8.6 58.4665 7.824 58.9145 7.152C59.3625 6.464 59.9865 5.936 60.7865 5.568C61.5865 5.184 62.4985 4.992 63.5225 4.992C64.8985 5.008 65.9865 4.912 66.7865 4.704C67.6025 4.496 68.4665 4.168 69.3785 3.72L70.0745 5.952ZM63.5465 6.864C62.6985 6.864 62.0585 7.104 61.6265 7.584C61.1945 8.048 60.9785 8.68 60.9785 9.48C60.9785 10.296 61.1945 10.944 61.6265 11.424C62.0745 11.888 62.7225 12.12 63.5705 12.12C64.3705 12.12 64.9785 11.888 65.3945 11.424C65.8105 10.96 66.0185 10.296 66.0185 9.432C66.0185 7.72 65.1945 6.864 63.5465 6.864Z"
											fill="currentColor"
										></path>
									</svg>
									{/* <Logo /> */}
								</a>
							</div>
						</div>

						{/* right icon */}
						<div class="hidden md:flex">
							<div>
								<button
									onClick={() =>
										setIsLoginModalOpen(!isLoginModalOpen)
									}
									type="button"
									class="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 dark:bg-transparent dark:text-white"
								>
									Login
								</button>
							</div>

							<div class="ml-4 flex items-center md:ml-2">
								<button
									type="button"
									class="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 dark:bg-transparent dark:text-white"
								>
									<Link href={"/write"}>글쓰기</Link>
								</button>
							</div>

							{/* <div class="ml-4 flex items-center md:ml-6">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            <div class="ml-4 flex items-center md:ml-6">


                                {theme === 'light' || theme === undefined ?
                                    <button onClick={() => setTheme('dark')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    </button> :
                                    <button onClick={() => setTheme('light')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </button>
                                }


                            </div> */}
						</div>
					</div>

					{/* Nav */}
					<nav class="flex items-center justify-between">
						<div class="py-3 px-6 sm:px-12 lg:px-0">
							{/* <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1> */}
							<div class="max-w-7xl mx-auto flex items-baseline space-x-4">
								<a
									href="/"
									class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium  ${
										router.asPath === "/"
											? "border-b-2 border-gray-400"
											: null
									}`}
									aria-current="page"
								>
									Tranding
								</a>
								<a
									href="/new"
									class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${
										router.asPath === "/new"
											? "border-b-2 border-gray-400"
											: null
									}`}
								>
									New
								</a>
								<a
									href="/search"
									class={`text-gray-500 dark:text-gray-300 px-3 py-2 text-sm font-medium ${
										router.asPath === "/search"
											? "border-b-2 border-gray-400"
											: null
									}`}
								>
									Search
								</a>
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
													<span className="mr-2 text-sm text-gray-600">
														Company
													</span>
													<ChevronDownIcon
														className={`${
															open
																? "rotate-180 transform"
																: ""
														} h-5 w-5`}
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="absolute z-40 p-2 mt-2 bg-white border rounded-md top-30">
													<div className="grid gap-4 p-3 bg-white elative lg:grid-cols-3">
														{companys.map(
															(company) => (
																<div>
																	<input
																		onChange={
																			handleCompanyCheckbox
																		}
																		class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
																		type="checkbox"
																		value={
																			company.value
																		}
																		id="flexCheckDefault"
																	/>
																	<span className="text-sm">
																		{
																			company.name
																		}
																	</span>
																</div>
															)
														)}
													</div>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								</div>
							</div>

							<div>
								<input
									onChange={handleKeywordChange}
									type="search"
									id="default-search"
									class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
									placeholder="키워드를 입력해 주세요"
									required=""
								/>
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
			</header>
		</>
	);
};

export default Header;

{
	/* mobile nav */
}
{
	/* <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div> */
}
