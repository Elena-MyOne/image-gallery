import React from 'react';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className='col mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src='https://via.placeholder.com/200' className='card-img-top' alt='placeholder' />
        <div className='card-body'>
          <p className='card-text'>Some content</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
