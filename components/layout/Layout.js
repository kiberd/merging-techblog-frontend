import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Login from '../common/Login';

import { useRecoilValue } from 'recoil';
import { loginModalState } from '../../atoms/style';

const Layout = (props) => {

    const isLoginModalOpen = useRecoilValue(loginModalState);

    return (
        <div class="min-h-full dark:bg-black">
            <Header />
            <Nav />
            {props.children}
            {isLoginModalOpen ? <Login /> : null}
        </div>
    );
};

export default Layout;