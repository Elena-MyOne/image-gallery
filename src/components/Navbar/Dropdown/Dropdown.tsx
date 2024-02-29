import React from 'react';
import LogInButton from '../LogInButton/LogInButton';
import LogOutButton from '../LogOutButton/LogOutButton';

const Dropdown: React.FC = () => {
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
          Login
        </a>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
          <li>
            <a className='dropdown-item text-center' href='#'>
              Profile
            </a>
          </li>
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
