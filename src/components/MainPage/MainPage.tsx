import React, { useMemo, useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import Card from '../Card/Card';
import UploadForm from '../UploadForm/UploadForm';
import { FileItem } from '../../models/interfaces';

const defaultTitle = 'Image One';
const defaultPath = 'https://picsum.photos/id/1006/200/200';

const MainPage: React.FC = () => {
  const { state, read } = useContext(Context!)!;

  const count = useMemo(() => {
    return `You have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`;
  }, [state.items]);

  useEffect(() => {
    read();
  }, []);

  return (
    <section className='container mt-5'>
      <UploadForm />
      <h1 className='mb-5 text-center'>Gallery</h1>
      <p>{count}</p>
      <div className='cards row'>
        {state.items.map((item: FileItem, index: number) => (
          <Card key={index} title={item.title ?? defaultTitle} path={item.path ?? defaultPath} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
