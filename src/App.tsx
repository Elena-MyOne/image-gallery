import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import StockImages from './pages/StockImages/StockImages';
import NotFound from './pages/NotFound/NotFound';
import { POUTER_PATH } from './models/enums';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useAuthContext() || {};

  return (
    <Routes>
      <Route path={POUTER_PATH.MAIN} element={<Layout />}>
        <Route path={POUTER_PATH.MAIN} index element={<MainPage />} />
        {currentUser && <Route path={POUTER_PATH.STOCKS} element={<StockImages />} />}
        <Route path={POUTER_PATH.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
