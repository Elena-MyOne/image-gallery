import React from 'react';

const Navigation: React.FC = () => {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <a className='nav-link active' aria-current='page' href='#'>
          Home
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
