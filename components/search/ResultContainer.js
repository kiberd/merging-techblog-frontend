import React from 'react';

import RectanglePost from '../post/RectanglePost';
import SquarePost from '../post/SquarePost';


import { listState } from '../../atoms/style';
import { useRecoilState } from 'recoil';


const data = {
    title: "title",
    id: "id",
    url: "https://velog.velcdn.com/images/limsaehyun/post/8f076de5-1a20-4e8b-a2bb-19e080c8d2c5/image.jpg"
}


const ResultContainer = () => {

    const [isList, setIsList] = useRecoilState(listState);

    return (

        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-0 lg:max-w-7xl lg:px-8">
                <div class="flex w-[100%]">


                    <div class="bg-white dark:bg-black">


                        <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-0 lg:max-w-7xl lg:px-1">


                            {isList ? <RectanglePost data={data} /> : 
                            
                            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                <SquarePost data={data} />
                                <SquarePost data={data} />
                                <SquarePost data={data} />
                                <SquarePost data={data} />
                            </div>
                            }





                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResultContainer;

