import React from 'react';
import WriteEditor from './WriteEditor';

const WriteContainer = () => {
    return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-0 lg:max-w-7xl lg:px-8">
                <div class="flex w-[100%]">
                    <WriteEditor />
                </div>
            </div>
        </div>
    );
};

export default WriteContainer;