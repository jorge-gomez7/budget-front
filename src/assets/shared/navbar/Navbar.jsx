import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Home from '../../../components/Home';

const Navbar = () => {
    return (
        <>
            <Sidebar/>
            <Topbar/>
            <Home/>
        </>
    );
};

export default Navbar;