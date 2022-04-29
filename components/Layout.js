import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Layout = (props) => {
    return (
        <div class="min-h-full dark:bg-black">
            <Header />
            <Nav />
            {props.children}
        </div>
    );
};

export default Layout;