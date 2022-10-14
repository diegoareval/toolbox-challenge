import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStateProvider from 'context/GlobalStateProvider'
import Index from './pages/Index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/global.css';

const toolbox = ReactDOM.createRoot(document.getElementById('root'));

toolbox.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Index />
    </GlobalStateProvider>
  </React.StrictMode>
);


