import React from 'react';
import { useAuthContext } from '../../../context/AuthContext';

const LogInButton: React.FC = () => {
  const { login, currentUser } = useAuthContext() || {};

  return (
    <>
      {!currentUser && (
        <button type='button' className='btn btn-success' onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

export default LogInButton;
