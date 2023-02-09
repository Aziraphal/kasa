import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Banner />
            <Gallery />
            <Footer />   
            <Outlet />  
        </div>
    );
};

export default Layout;