import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import UploadForm from '../UploadForm/UploadForm';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className='d-flex flex-column justify-content-between h-100'>
      <Header />
      <main className='container mt-5 flex-grow-1'>
        <UploadForm />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
