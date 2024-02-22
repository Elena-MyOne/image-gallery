import React, { useContext } from 'react';
import { Context } from '../../../context/context';

const Preview: React.FC = () => {
  const { state } = useContext(Context!)!;

  const path = state.inputs.path;

  return (
    <>
      {path && (
        <div
          className='rounded p-1 m-5'
          style={{
            width: '30%',
            height: '300px',
            backgroundImage: `url(${path}`,
            backgroundSize: 'cover',
          }}
        ></div>
      )}
    </>
  );
};

export default Preview;
