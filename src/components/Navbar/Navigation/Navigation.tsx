import React from 'react';
import { NavLink } from 'react-router-dom';
import { POUTER_PATH } from '../../../models/enums';
import { useAuthContext } from '../../../context/AuthContext';

const Navigation: React.FC = () => {
  const { currentUser } = useAuthContext() || {};

  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <NavLink to={POUTER_PATH.MAIN} className='nav-link' aria-current='page'>
          Home
        </NavLink>
      </li>
      {currentUser && (
        <li className='nav-item'>
          <NavLink to={POUTER_PATH.STOCKS} className='nav-link' aria-current='page'>
            My Stock Images
          </NavLink>
        </li>
      )}
      {currentUser && (
        <li className='nav-item'>
          <NavLink to={POUTER_PATH.PROFILE} className='nav-link' aria-current='page'>
            Profile
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
