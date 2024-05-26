import { NextUIProvider } from '@nextui-org/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>,
);
