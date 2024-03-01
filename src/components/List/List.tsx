import React from 'react';
import Card, { CardProps } from '../Card/Card';

interface ListProps {
  items: CardProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className='row mt-3'>
      {items.map((item, i) => (
        <div key={i} className='col-4 mb-5'>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default List;
