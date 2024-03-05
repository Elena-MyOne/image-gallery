import React from 'react';
import Card, { CardProps } from '../Card/Card';

interface ListProps {
  items: CardProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className='row mt-3 mt-3 justify-content-center'>
      {items.map((item, i) => (
        <div key={i} className='col-lg-4 col-md-6 mb-5 d-flex justify-content-center'>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default List;
