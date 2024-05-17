import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Layout = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
          return null
        }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;<Outlet></Outlet>