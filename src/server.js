import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/modules';
import App from './app';
import template from './template';
import isMobile from './utils/is-mobile';
import { isMobileAction } from './app/modules/device';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isUAMobile = isMobile(req.headers['user-agent']);
  const store = createStore(reducers);

  store.dispatch(isMobileAction(isUAMobile));

  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(store.getState())
  }));
});

server.listen(8181);
console.log('listening');
