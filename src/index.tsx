import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Provider from './context/FirestoreContext';
import AuthProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
