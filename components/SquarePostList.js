import React from 'react';
import SquarePost from './SquarePost';


const SquarePostList = () => {
    return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />
                    <SquarePost />

                </div>
            </div>
        </div>
    );
};

export default SquarePostList;