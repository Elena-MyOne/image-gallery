import React from 'react';
import Card from '../Card/Card';

const MainPage: React.FC = () => {
  return (
    <section className='container text-center mt-5'>
      <h1 className='mb-5'>Gallery</h1>
      <div className='cards row'>
        {Array.from({ length: 8 }).map((_, index) => (
          <Card index={index} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
