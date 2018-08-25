/* -*- mode: web -*- */
/* eslint global-require: 0, no-undef: 0  */
import { createStore, applyMiddleware, compose } from 'redux';
import Reactotron from 'reactotron-react-native';
import createReactotronEnhancer from 'reactotron-redux';

import reducer from '../reducers/Index';

export default function configureStore(initialState) {
  if (__DEV__) {
    const reactotronEnhancer = createReactotronEnhancer(Reactotron);
    const store = createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(
        ),
        reactotronEnhancer
      )
    );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers/Index').default;
        store.replaceReducer(nextReducer);
      });
    }

    return store;
  }

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
      ),
    )
  );
  return store;
}
