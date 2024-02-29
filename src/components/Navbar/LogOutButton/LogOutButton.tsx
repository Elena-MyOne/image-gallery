import React from 'react';
import { useAuthContext } from '../../../context/AuthContext';

const LogOutButton: React.FC = () => {
  const { logout, currentUser } = useAuthContext() || {};

  return (
    <>
      {!!currentUser && (
        <button type='button' className='btn btn-danger' onClick={logout}>
          Logout
        </button>
      )}
    </>
  );
};

export default LogOutButton;
