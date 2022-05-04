import React from 'react';
import SelectBox from './SelectBox';

const TagSearch = () => {


    return (
        <>
            
            <div class="w-[50%] mr-1 flex justify-start"><SelectBox category={'카테고리'}/></div>
            <div class="w-[50%] flex justify-start"><SelectBox category={'스택'} /></div>

        </>
    );
};

export default TagSearch;