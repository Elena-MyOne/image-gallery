import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className='d-flex justify-content-center align-items-center flex-column gap-4 mt-5'
      style={{ height: '50vh' }}
    >
      <h1 className='text-center'>404</h1>
      <h3 className='text-center'>Looks like you are lost</h3>
      <button className='btn btn-secondary' onClick={() => navigate('/')}>
        Home Page
      </button>
    </div>
  );
};

export default NotFound;
