import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Home/Navbar';

const DetailsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DetailsLayout;