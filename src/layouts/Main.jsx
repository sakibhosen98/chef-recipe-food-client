import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className=''>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Main;