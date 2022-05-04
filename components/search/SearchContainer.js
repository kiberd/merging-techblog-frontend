import React, { useState, useEffect } from 'react';
import TagSearch from './TagSearch';
import InputSearch from './InputSearch';

import Button from '../../components/common/Button';
import RecommandTag from './RecommandTag';

const SearchContainer = () => {

    const [isTag, setIsTag] = useState(true);

    return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-0 lg:max-w-7xl lg:px-8">
                <div class="flex w-[100%]">
                    <nav class="w-[50%] p-2">


                        <div class="flex flex-col w-[100%]">

                            <div class="flex">
                                <div class="w-[30%] mr-2" onClick={() => setIsTag(true)} >
                                    <Button name={'Tag로 검색'} isActive={isTag ? true : false} />
                                </div>
                                <div class="w-[30%]" onClick={() => setIsTag(false)} >
                                    <Button name={'Keyword로 검색'} isActive={isTag ? false : true} />
                                </div>

                            </div>

                            <div class="flex">

                                {isTag ? <TagSearch /> : <InputSearch />}



                            </div>




                        </div>



                    </nav>

                    <div className="w-[50%] p-3">
                        {isTag ? <RecommandTag /> : null}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SearchContainer;