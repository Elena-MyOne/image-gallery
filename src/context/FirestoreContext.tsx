import { Dispatch, createContext, useCallback, useMemo, useReducer } from 'react';
import { FileItem } from '../models/interfaces';
import Firestore from '../handlers/firestore';

const { readDocs } = Firestore;

const photos: FileItem[] = [];

export enum ACTION {
  SET_ITEM = 'SET_ITEM',
  SET_ITEMS = 'SET_ITEMS',
  READ_ITEM = 'READ_ITEM',
  TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE',
  SET_INPUTS = 'SET_INPUTS',
  FILTER_ITEMS = 'FILTER_ITEMS',
}

interface State {
  items: FileItem[];
  placeholders: FileItem[];
  count: number;
  inputs: FileItem;
  isCollapsed: boolean;
}

type Action =
  | { type: ACTION.SET_ITEM }
  | { type: ACTION.SET_ITEMS; payload: { items: FileItem[] } }
  | { type: ACTION.SET_INPUTS; payload: { value: string | File } }
  | { type: ACTION.TOGGLE_COLLAPSE; payload: { bool: boolean } }
  | { type: ACTION.FILTER_ITEMS; payload: { results: FileItem[] } };

const initialState: State = {
  items: photos,
  placeholders: photos,
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
        placeholders: [newItem, ...state.items],
        count: state.items.length + 1,
        inputs: { title: null, file: null, path: null },
      };
    case ACTION.FILTER_ITEMS:
      return {
        ...state,
        items: action.payload.results,
      };
    case ACTION.SET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        placeholders: action.payload.items,
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
  read: () => Promise<void>;
  filterItems: (input: string) => void;
}

export const Context = createContext<ContextValue | null>(null);

const Provider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const read = useCallback(async () => {
    const items = await readDocs('stock');
    dispatch({ type: ACTION.SET_ITEMS, payload: { items } });
  }, [dispatch]);

  const filterItems = useCallback(
    (input: string) => {
      if (input === '' || !!input) {
        dispatch({ type: ACTION.SET_ITEMS, payload: { items: state.placeholders } });
      }
      let list = state.placeholders.flat();
      let results = list.filter((item) => {
        const name = item.title?.toLowerCase();
        const searchInput = input.toLowerCase();
        return name && name.indexOf(searchInput) > -1;
      });
      dispatch({ type: ACTION.FILTER_ITEMS, payload: { results } });
    },
    [state.placeholders]
  );

  const value = useMemo(() => {
    return {
      state,
      dispatch,
      read,
      filterItems,
    };
  }, [state, dispatch, read, filterItems]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
