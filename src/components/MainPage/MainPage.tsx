import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import UploadForm from '../UploadForm/UploadForm';
import { FileItem } from '../../models/interfaces';

const photos: string[] = [
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
];

const MainPage: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [items, setItems] = useState<string[]>(photos);
  const [inputs, setInputs] = useState<FileItem>({ title: null, file: null, path: null });
  const [message, setMessage] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;

    if (name === 'file' && files && files.length > 0) {
      const selectedFile = files[0];

      setInputs({
        ...inputs,
        file: selectedFile,
        path: URL.createObjectURL(selectedFile),
      });
    } else {
      setInputs({ ...inputs, title: value });
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputs.path) {
      setItems([inputs.path, ...items]);
    }
    setInputs({ title: null, file: null, path: null });
    setIsCollapsed(false);
  };

  useEffect(() => {
    setMessage(`I've add a new image ${inputs.title}`);
  }, [inputs]);

  return (
    <section className='container text-center mt-5'>
      <button className='btn btn-success float-end' onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Close' : 'Add file'}
      </button>
      <div className='clearfix mb-4'></div>
      {inputs.title && <p>{message}</p>}
      <UploadForm
        isVisible={isCollapsed}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        inputs={inputs}
      />
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
