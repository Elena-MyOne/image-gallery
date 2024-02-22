import React, { useReducer, useMemo } from 'react';
import Card from '../Card/Card';
import UploadForm from '../UploadForm/UploadForm';
import { FileItem } from '../../models/interfaces';

const photos: FileItem[] = [];

const defaultTitle = 'Image One';
const defaultPath = 'https://picsum.photos/id/1006/200/200';

enum ACTION {
  SET_ITEM = 'SET_ITEM',
  TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE',
  SET_INPUTS = 'SET_INPUTS',
}

interface State {
  items: FileItem[];
  count: number;
  inputs: FileItem;
  isCollapsed: boolean;
}

type Action =
  | { type: ACTION.SET_ITEM }
  | { type: ACTION.SET_INPUTS; payload: { value: string | File } }
  | { type: ACTION.TOGGLE_COLLAPSE; payload: { bool: boolean } };

const initialState: State = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTION.SET_ITEM:
      const newItem: FileItem = {
        title: state.inputs.title,
        file: state.inputs.file,
        path: state.inputs.path,
      };
      return {
        ...state,
        items: [newItem, ...state.items],
        count: state.items.length + 1,
        inputs: { title: null, file: null, path: null },
      };
    case ACTION.SET_INPUTS:
      if (action.payload.value instanceof File) {
        const selectedFile = action.payload.value;
        return {
          ...state,
          inputs: {
            ...state.inputs,
            file: selectedFile,
            path: URL.createObjectURL(selectedFile),
          },
        };
      } else {
        return {
          ...state,
          inputs: {
            ...state.inputs,
            title: action.payload.value as string,
          },
        };
      }
    case ACTION.TOGGLE_COLLAPSE:
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };
    default:
      return state;
  }
}

const MainPage: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        {state.items.map((item: FileItem, index) => (
          <Card key={index} title={item.title ?? defaultTitle} path={item.path ?? defaultPath} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
