import React from 'react';

interface CardProps {
  title: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ path, title }) => {
  return (
    <>
      <div className='col mb-5'>
        <div className='card' style={{ width: '18rem' }}>
          <img src={path} className='card-img-top' alt={title} />
          <div className='card-body'>
            <p className='card-text'>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
