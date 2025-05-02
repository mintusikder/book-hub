import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Home/Navbar';
import Banner from '../components/Home/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;