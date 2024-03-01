import React, { useMemo, useContext, useEffect } from 'react';
import { Context } from '../../context/FirestoreContext';
import { useAuthContext } from '../../context/AuthContext';
import List from '../../components/List/List';
import { setCartItems } from '../../utils/setCartItems';

const MainPage: React.FC = () => {
  const { state, read } = useContext(Context!)!;
  const { authenticate = () => Promise.resolve() } = useAuthContext() || {};

  const count = useMemo(() => {
    return `You have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`;
  }, [state.items]);

  const items = useMemo(() => {
    return setCartItems(state.items);
  }, [state.items]);

  useEffect(() => {
    read();
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1 className='mb-5 text-center'>Gallery</h1>
      <p>{count}</p>
      <div className='cards row'>
        <List items={items} />
      </div>
    </section>
  );
};

export default MainPage;
