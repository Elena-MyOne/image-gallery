import { Timestamp } from 'firebase/firestore';
import React, { useMemo } from 'react';

export interface CardProps {
  title: string;
  path: string;
  createdAt: Timestamp | string;
  user: string;
}

const Card: React.FC<CardProps> = ({ path, title, createdAt, user }) => {
  const timestamp = useMemo(() => {
    if (typeof createdAt === 'string') {
      return ``;
    } else {
      const date = `${new Date(createdAt.seconds * 1000)}`.split(' ');
      return `${date[1]} ${date[2]}, ${date[3]}`;
    }
  }, [createdAt]);

  return (
    <>
      <div className='col mb-5'>
        <div className='card' style={{ width: '18rem' }}>
          <div
            style={{
              height: '220px',
              backgroundImage: `url(${path})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className='card-body'>
            <h6 className='card-title text-center fw-semibold text-capitalize'>{title}</h6>
            <div className='content d-flex gap-2 justify-content-between'>
              <p>{timestamp}</p>
              <p className='fst-italic'>{`@${user}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
