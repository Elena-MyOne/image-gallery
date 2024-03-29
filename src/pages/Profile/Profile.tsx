import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Profile: React.FC = () => {
  const { currentUser } = useAuthContext() || {};

  return (
    <>
      <h1 className='text-center'>Profile</h1>
      <hr style={{ width: '50%', margin: '3rem auto' }} />
      <div className='d-flex justify-content-center align-items-center flex-lg-row flex-column'>
        <img
          style={{ borderRadius: '4px ' }}
          src={currentUser?.photoURL}
          alt={currentUser?.displayName}
          width='150'
          height='150'
        />
        <ul className='list-group mx-lg-5 my-5'>
          <li className='list-group-item'>
            <span className='fs-5 text-capitalize'>name:</span> {currentUser?.displayName}
          </li>
          <li className='list-group-item'>
            <span className='fs-5 text-capitalize'>email:</span> {currentUser?.email}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
