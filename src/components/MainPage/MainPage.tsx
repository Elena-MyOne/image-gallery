import React, { useState } from 'react';
import Card from '../Card/Card';
import UploadForm from '../UploadForm/UploadForm';

const photos: string[] = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
];

const MainPage: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [items, setItems] = useState<string[]>(photos);
  const [input, setInput] = useState<string>('');

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setItems([input, ...items]);
  };

  return (
    <section className='container text-center mt-5'>
      <button className='btn btn-success float-end' onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Close' : 'Add file'}
      </button>
      <div className='clearfix mb-4'></div>
      <UploadForm isVisible={isCollapsed} onChange={handleOnChange} onSubmit={handleOnSubmit} />
      <h1 className='mb-5'>Gallery</h1>
      <div className='cards row'>
        {items.map((photo, index) => (
          <Card key={index} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
