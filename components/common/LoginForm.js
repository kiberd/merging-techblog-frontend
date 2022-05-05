import React from 'react';


import { useRecoilState } from 'recoil'
import { loginModalState } from '../../atoms/style'


const LoginForm = () => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(loginModalState);

    return (
        
        <div class="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full">

                <div class="flex flex-row-reverse">

                    <button onClick={() => setIsLoginModalOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>


                </div>

                <div>

                    <h2 class="text-center text-2xl font-extrabold text-gray-900 dark:text-gray-200">Sign in to your account</h2>

                </div>

                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-slate-300" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-slate-300" placeholder="Password" />
                        </div>
                    </div>

                    {/* <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                        </div>

                        
                    </div> */}

                    <div class="flex flex-row px-4">
                        <button type="submit" class="m-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </button>

                        <button type="submit" class="m-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </button>
                    </div>


                    <div class="text-sm text-center text-gray-500">
                        or Sign In With Social Account
                    </div>
                    <div class="grid grid-cols-4 gap-1">
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Google</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Facebook</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Github</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Apple</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Instagram</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Twitter</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Naver</div>
                        <div class="border-2 rounded-md text-center dark:text-gray-400">Kakao</div>
                    </div>



                </form>
            </div>
        </div>
        

    );
};

export default LoginForm;