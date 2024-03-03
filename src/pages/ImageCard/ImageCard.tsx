import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../context/FirestoreContext';

const ImageCard: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useContext(Context!)!;
  const { state: routerState } = useLocation();

  const defaultPath = 'https://picsum.photos/id/1006/200/200';

  const filteredItem = state.items.find((item) => item.id === routerState.id);

  const item = {
    title: filteredItem?.title ?? '',
    path: filteredItem?.path ?? defaultPath,
    createdAt: filteredItem?.createdAt ?? '',
    user: filteredItem?.user ?? '',
    id: filteredItem?.id ?? '',
  };

  return (
    <>
      <button className='btn btn-link' onClick={() => navigate(-1)}>
        Back
      </button>
      <div className='d-flex justify-content-center my-5'>
        <Card {...item} />
      </div>
    </>
  );
};

export default ImageCard;
