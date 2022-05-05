import React from 'react';

const Button = ({ name, isActive }) => {
    return (
        <>
        <button type="button" class={` ${isActive ? 'bg-gray-400 dark:bg-gray-600' :  null} w-[100%] text-gray-900 bg-white border border-gray-300  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>{name}</button>
        </>
    );
};

export default Button;