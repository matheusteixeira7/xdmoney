import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Uber',
        amount: 400,
        transactionType: 'deposit',
        category: 'work',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'Supermarket',
        amount: 100,
        transactionType: 'withdraw',
        category: 'food',
        createdAt: new Date(),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
