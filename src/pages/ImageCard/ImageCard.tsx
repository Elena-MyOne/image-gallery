import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../context/FirestoreContext';
import { IoIosArrowBack } from 'react-icons/io';

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
      <button
        className='btn btn-link link-success link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover'
        onClick={() => navigate(-1)}
      >
        <span style={{ display: 'inline-block', marginRight: '5px' }}>
          <IoIosArrowBack />
        </span>
        <span> Back</span>
      </button>
      <div className='d-flex justify-content-center my-5'>
        <Card {...item} />
      </div>
    </>
  );
};

export default ImageCard;
