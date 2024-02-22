import { Dispatch, createContext, useReducer } from 'react';
import { FileItem } from '../models/interfaces';

const photos: FileItem[] = [];

export enum ACTION {
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

interface ContextValue {
  state: State;
  dispatch: Dispatch<Action>;
}

export const Context = createContext<ContextValue | null>(null);

const Provider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default Provider;
