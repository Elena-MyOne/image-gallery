import React, { useMemo, useContext } from 'react';
import { ACTION, Context } from '../../context/context';
import Card from '../Card/Card';
import UploadForm from '../UploadForm/UploadForm';
import { FileItem } from '../../models/interfaces';

const defaultTitle = 'Image One';
const defaultPath = 'https://picsum.photos/id/1006/200/200';

const MainPage: React.FC = () => {
  const { state, dispatch } = useContext(Context!)!;

  const toggleCollapse = (bool: boolean) =>
    dispatch({ type: ACTION.TOGGLE_COLLAPSE, payload: { bool } });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'file' && files && files.length > 0) {
      const selectedFile = files[0];
      dispatch({ type: ACTION.SET_INPUTS, payload: { value: selectedFile } });
    } else {
      dispatch({ type: ACTION.SET_INPUTS, payload: { value } });
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.inputs.path) {
      dispatch({ type: ACTION.SET_ITEM });
    }
    toggleCollapse(!state.isCollapsed);
  };

  const count = useMemo(() => {
    return `You have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`;
  }, [state.items]);

  return (
    <section className='container mt-5'>
      <button
        className='btn btn-success float-end'
        onClick={() => toggleCollapse(!state.isCollapsed)}
      >
        {state.isCollapsed ? 'Close' : 'Add file'}
      </button>
      <div className='clearfix mb-4'></div>
      <UploadForm
        isVisible={state.isCollapsed}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        inputs={state.inputs}
      />
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
