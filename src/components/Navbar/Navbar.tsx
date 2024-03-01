import React from 'react';
// import React, { useState } from 'react';
import { MdImagesearchRoller } from 'react-icons/md';
import Navigation from './Navigation/Navigation';
import SearchForm from './SearchForm/SearchForm';
import Dropdown from './Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import { POUTER_PATH } from '../../models/enums';

const Navbar: React.FC = () => {
  // const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
      <div className='container'>
        <Link to={POUTER_PATH.MAIN} className='navbar-brand d-flex align-items-center gap-2'>
          <MdImagesearchRoller />
          <span className='mr-2'>Gallery</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <Navigation />
          <Dropdown />
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
