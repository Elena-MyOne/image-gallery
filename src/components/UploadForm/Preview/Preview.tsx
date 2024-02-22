import React from 'react';

interface PreviewProps {
  path: string | null;
}

const Preview: React.FC<PreviewProps> = ({ path }) => {
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
