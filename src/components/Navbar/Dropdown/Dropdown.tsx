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
        alt={currentUser?.displayName}
        width={34}
        height={34}
      />
    ) : (
      <span className='pt-1' style={{ height: '34px', display: 'inline-block' }}>
        Login
      </span>
    );
  }, [currentUser]);

  return (
    <ul className='navbar-nav mb-2 mb-lg-0'>
      {' '}
      <li className='nav-item dropdown'>
        <div
          className='nav-link dropdown-toggle'
          id='navbarDropdown'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {avatar}
        </div>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
          {currentUser ? (
            <li>
              <Link to={POUTER_PATH.PROFILE} className='dropdown-item text-center'>
                {userName}
              </Link>
            </li>
          ) : (
            <li className='text-center'>{userName}</li>
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
