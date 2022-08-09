import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil'
import { loginModalState } from '../../atoms/style'

import { useSession, signIn, signOut } from "next-auth/react";


const LoginForm = () => {

    const { data: session, status } = useSession();

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

                    <h2 class="text-center text-xl font-extrabold text-gray-900 dark:text-gray-200">Tech Blog Merge</h2>

                </div>

                <div class="flex flex-col mt-10">


                    <button onClick={() => signIn("google")} type="submit" class="m-2 w-full flex justify-center py-2 px-4 border text-sm font-medium border-gray-300 rounded-md  dark:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <img class="w-4 h-4 mr-2 mt-[0.1rem]" src="/google_logo.png" /> Google Login
                    </button>

                    <button onClick={() => signIn("github")} type="submit" class="m-2 w-full flex justify-center py-2 px-4 border text-sm font-medium border-gray-300 rounded-md  dark:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <img class="w-4 h-4 mr-2 mt-[0.1rem]" src="/github_logo.png" />Github Login
                    </button>


                </div>

            </div>
        </div>


    );
};

export default LoginForm;