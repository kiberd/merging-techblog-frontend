import React from 'react';
import Layout from '../components/layout/Layout';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Head from 'next/head';

import SearchContainer from '../components/search/SearchContainer';
import ResultContainer from '../components/search/ResultContainer';




const Search = () => {



    return (
        <>
        {/* <Script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js" strategy='beforeInteractive' /> */}
        <Layout>
            {/* <Head>
                <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js" />
            </Head> */}
            {/* main section */}
            <main class="bg-white dark:bg-black">
                <div class="max-w-25xl mx-auto py-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
                    <div class="px-4 py-2 sm:px-0 bg-white dark:bg-black">
                        <div class="h-100">
                            <SearchContainer />
                            <ResultContainer />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
        </>
    );
};

export default Search;