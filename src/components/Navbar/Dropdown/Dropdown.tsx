import React, { useMemo } from 'react';
import LogInButton from '../LogInButton/LogInButton';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useAuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { POUTER_PATH } from '../../../models/enums';

const Dropdown: React.FC = () => {
  const { currentUser } = useAuthContext() || {};

  const userName = useMemo(() => {
    return currentUser?.displayName || 'Profile';
  }, [currentUser]);

  const avatar = useMemo(() => {
    return !!currentUser ? (
      <img
        className='avatar'
        src={currentUser?.photoURL}
        alt='currentUser?.displayName'
        width={34}
        height={34}
      />
    ) : (
      'Login'
    );
  }, [currentUser]);

  return (
    <ul className='navbar-nav mb-2 mb-lg-0'>
      {' '}
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='navbarDropdown'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {avatar}
        </a>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
          {currentUser ? (
            <li>
              <Link to={POUTER_PATH.PROFILE} className='dropdown-item text-center'>
                {userName}
              </Link>
            </li>
          ) : (
            <li className='text-center'>Profile</li>
          )}

          <li>
            <hr className='dropdown divider' />
          </li>
          <div className='d-flex justify-content-center'>
            <LogInButton />
            <LogOutButton />
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;
