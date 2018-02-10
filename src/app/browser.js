import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './modules';
import App from './index';

render(
  <Provider store={createStore(reducers)}>
    <App {...window.__APP_INITIAL_STATE__} />
  </Provider>,
  document.getElementById('root')
);
