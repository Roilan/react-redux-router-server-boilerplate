import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/modules';
import App from './app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const appString = renderToString(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify({})
  }));
});

server.listen(8181);
console.log('listening');
