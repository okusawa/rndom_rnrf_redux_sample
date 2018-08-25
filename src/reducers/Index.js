/* -*- mode: web -*- */
/* eslint new-cap: 0 */
import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';
import { Map } from 'immutable';

import test from './Test';

// @flow

const initialState = Map({
  scene: null
});

function root(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return state.set('scene', action.scene);
    default:
      return state;
  }
}

export default reducer = combineReducers({
  root,
  test
});
