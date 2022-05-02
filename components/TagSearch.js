import React from 'react';
import SelectBox from './SelectBox';
import Script from 'next/script';

const TagSearch = () => {


    return (
        <>
            <Script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js" strategy='beforeInteractive' />
            <div class="w-[50%] mr-1 flex justify-start"><SelectBox category={'카테고리'}/></div>
            <div class="w-[50%] flex justify-start"><SelectBox category={'스택'} /></div>

        </>
    );
};

export default TagSearch;