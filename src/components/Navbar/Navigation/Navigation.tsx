import React from 'react';
import { Link } from 'react-router-dom';
import { POUTER_PATH } from '../../../models/enums';
import { useAuthContext } from '../../../context/AuthContext';

const Navigation: React.FC = () => {
  const { currentUser } = useAuthContext() || {};

  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <Link to={POUTER_PATH.MAIN} className='nav-link active' aria-current='page'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        {currentUser && (
          <Link to={POUTER_PATH.STOCKS} className='nav-link' aria-current='page'>
            My Stock Images
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
