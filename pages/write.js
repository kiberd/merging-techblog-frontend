import React from 'react';
import WriteLayout from '../components/layout/WriteLayout';
import Head from 'next/head';
import WriteContainer from '../components/write/WriteContainer';

const Search = () => {

    return (
        <>

            <WriteLayout>
                <Head>
                    <meta name="google" content="notranslate" />
                </Head>

                {/* main section */}
                <main class="bg-white dark:bg-black">
                    <div class="max-w-25xl mx-auto py-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
                        <div class="px-4 py-2 sm:px-0 bg-white dark:bg-black">
                            <div class="h-100">

                                <WriteContainer />


                            </div>
                        </div>
                    </div>
                </main>
            </WriteLayout>
        </>
    );
};

export default Search;