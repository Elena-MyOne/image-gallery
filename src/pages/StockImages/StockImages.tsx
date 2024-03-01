import React, { useContext, useMemo } from 'react';
import List from '../../components/List/List';
import { Context } from '../../context/FirestoreContext';
import { useAuthContext } from '../../context/AuthContext';
import { getUserName } from '../../utils/getUserName';
import { setCartItems } from '../../utils/setCartItems';

const StockImages: React.FC = () => {
  const { state } = useContext(Context!)!;
  const { currentUser } = useAuthContext() || {};

  const items = useMemo(() => {
    const filteredResults = state.items.filter((item) => {
      const userName = getUserName(currentUser?.displayName);
      return item.user === userName;
    });
    return currentUser ? filteredResults : [];
  }, [currentUser, state.items]);

  return (
    <section>
      <h1 className='mb-5 text-center'>My Stock Images</h1>
      <List items={setCartItems(items)} />
    </section>
  );
};

export default StockImages;
