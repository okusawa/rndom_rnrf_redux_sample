/* -*- mode: web -*- */
/* eslint new-cap: 0 */
import { Map } from 'immutable';

import * as Actions from '../actions/Test';

// @flow

const initialState = Map({
  count: 0
});

export default function test(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.TEST_ADD_COUNT:
      return state.set('count', state.get('count') + action.num);
    default:
      break;
  }
  return state;
}
