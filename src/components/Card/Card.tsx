import React from 'react';

interface CardProps {
  photo: string;
}

const Card: React.FC<CardProps> = ({ photo }) => {
  return (
    <div className='col mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={photo} className='card-img-top' alt='placeholder' />
        <div className='card-body'>
          <p className='card-text'>Some content</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
