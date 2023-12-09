import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Header2 from './Header2';

const Layout = () => {
  return (
    <>
      <Header />
      <Header2 />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
