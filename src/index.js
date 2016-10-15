
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import {AppContainer} from 'react-hot-loader';
import Root from './containers/root';
import routes from './routes';







const store = configureStore();


render(
  <AppContainer>
  <Root store ={store} routes={routes}/>
  </AppContainer>,
  document.getElementById('root')
);



if (module.hot) {
  
  module.hot.accept('./containers/root', () => {
    const RootContainer = require('./containers/root').default;
    render(
      <AppContainer>
        <RootContainer
          store={store} routes={routes}
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}