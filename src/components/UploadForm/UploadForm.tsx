import React, { useContext, useMemo } from 'react';
import Preview from './Preview/Preview';
import { ACTION, Context } from '../../context/FirestoreContext';
import Firestore from '../../handlers/firestore';
import Storage from '../../handlers/storage';
import { useAuthContext } from '../../context/AuthContext';

const { writeDoc } = Firestore;
const { uploadFile, downloadFile } = Storage;

const UploadForm: React.FC = () => {
  const { state, dispatch, read } = useContext(Context!)!;
  const { currentUser } = useAuthContext() || {};

  const toggleCollapse = (bool: boolean) =>
    dispatch({ type: ACTION.TOGGLE_COLLAPSE, payload: { bool } });

  const userName = useMemo(() => {
    return currentUser?.displayName.split(' ') || '';
  }, [currentUser]);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    uploadFile(state.inputs)
      .then(downloadFile)
      .then((url) => {
        writeDoc({ ...state.inputs, path: url, user: userName[0] }, 'stocks').then(() => {
          if (state.inputs.path) {
            read();
            dispatch({ type: ACTION.SET_ITEM });
          }
          toggleCollapse(!state.isCollapsed);
        });
      });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file' && files && files.length > 0) {
      const selectedFile = files[0];
      dispatch({ type: ACTION.SET_INPUTS, payload: { value: selectedFile } });
    } else {
      dispatch({ type: ACTION.SET_INPUTS, payload: { value } });
    }
  };

  const isDisabled = useMemo(() => {
    return !!Object.values(state.inputs).some((input) => !input);
  }, [state.inputs]);

  return (
    <>
      <button
        className='btn btn-success float-end'
        onClick={() => toggleCollapse(!state.isCollapsed)}
      >
        {state.isCollapsed ? 'Close' : 'Add file'}
      </button>
      <div className='clearfix mb-4'></div>
      {state.isCollapsed && (
        <>
          <p className='display-6 text-center mb-3'>Upload Stock Image</p>
          <div className='mb-5 d-flex align-items-center justify-content-center'>
            <Preview />
            <form className='mb-2' style={{ textAlign: 'left' }} onSubmit={handleOnSubmit}>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='title'
                  placeholder='title'
                  aria-describedby='text'
                  onChange={handleOnChange}
                />
              </div>
              <div className='mb-3'>
                <input type='file' className='form-control' name='file' onChange={handleOnChange} />
              </div>
              <button type='submit' className='btn btn-success float-end' disabled={isDisabled}>
                Save and upload
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default UploadForm;
