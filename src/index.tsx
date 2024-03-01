import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import Provider from './context/FirestoreContext';
import AuthProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
