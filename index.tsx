import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';

import './style.css';

const client = new QueryClient();

render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
