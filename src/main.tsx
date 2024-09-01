import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import '@/styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// t1
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
