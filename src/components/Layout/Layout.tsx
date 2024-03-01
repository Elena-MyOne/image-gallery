import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import UploadForm from '../UploadForm/UploadForm';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className='container mt-5'>
        <UploadForm />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
