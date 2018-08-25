/* -*- mode: web -*- */
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import './config/ReactotronConfig';
import configureStore from './store/ConfigureStore';
import TitleScreen from './containers/TitleScreen';
import TestScreen from './containers/TestScreen';

// @flow

const RouterWithRedux = connect()(Router);
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" animationStyle={null}>
            <Scene key="_title" title="title" component={TitleScreen} />
            <Scene key="test" title="test" component={TestScreen} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
