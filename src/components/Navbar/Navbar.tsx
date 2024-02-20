import React, { useState } from 'react';
import { MdImagesearchRoller } from 'react-icons/md';
import Navigation from './Navigation/Navigation';
import SearchForm from './SearchForm/SearchForm';
import Dropdown from './Dropdown/Dropdown';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand d-flex align-items-center gap-2' href='#'>
          <MdImagesearchRoller />
          <span className='mr-2'>Gallery</span>
        </a>
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
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Navigation />
          <SearchForm />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
