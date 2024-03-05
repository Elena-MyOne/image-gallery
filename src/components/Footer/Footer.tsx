import React from 'react';

const Footer: React.FC = () => {
  const year = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className='text-lg-start text-dark' style={{ background: '#ECEFF1' }}>
      <div className='container'>
        <div className='p-3 text-center'>
          &copy; {year()} Copyright{' '}
          <a
            className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
            href='https://myoneweb.us/'
            target='_black'
          >
            MyOne
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
