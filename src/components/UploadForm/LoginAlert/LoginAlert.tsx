import React from 'react';

interface LoginAlertProps {
  setIsLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginAlert: React.FC<LoginAlertProps> = ({ setIsLoginPopup }) => {
  return (
    <div className='alert alert-warning d-flex justify-content-between' role='alert'>
      <div>Please login to add a new image</div>
      <button
        type='button'
        className='btn-close '
        aria-label='Close'
        onClick={() => setIsLoginPopup(false)}
      ></button>
    </div>
  );
};

export default LoginAlert;
