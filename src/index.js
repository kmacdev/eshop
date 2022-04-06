import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { CartContextProvider } from './store/cart-context';

const container = document.getElementById('app');

const root = ReactDOMClient.createRoot(container);

root.render(
  <CartContextProvider>
    <App tab='home' />
  </CartContextProvider>,
);
