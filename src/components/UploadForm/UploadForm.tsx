import React, { useMemo } from 'react';
import { FileItem } from '../../models/interfaces';
import Preview from './Preview/Preview';

interface UploadFormProps {
  isVisible: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputs: FileItem;
}

const UploadForm: React.FC<UploadFormProps> = ({ isVisible, onChange, onSubmit, inputs }) => {
  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some((input) => !input);
  }, [inputs]);

  return (
    <>
      {isVisible && (
        <>
          <p className='display-6 text-center mb-3'>Upload Stock Image</p>
          <div className='mb-5 d-flex align-items-center justify-content-center'>
            <Preview {...inputs} />
            <form className='mb-2' style={{ textAlign: 'left' }} onSubmit={onSubmit}>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='title'
                  placeholder='title'
                  aria-describedby='text'
                  onChange={onChange}
                />
              </div>
              <div className='mb-3'>
                <input type='file' className='form-control' name='file' onChange={onChange} />
              </div>
              <button type='submit' className='btn btn-success float-end' disabled={isDisabled}>
                Save changes
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default UploadForm;
