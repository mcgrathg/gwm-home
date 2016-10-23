/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import {
  SET_WINDOW_WIDTH,
  MIN_STICKY_WIDTH,
  MAX_READ_MORE_WIDTH,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  windowWidth: window.innerWidth,
  isStickyEnabled: false,
  truncateLongText: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    case SET_WINDOW_WIDTH:
      return state
        .set('windowWidth', action.width)
        .set('isStickyEnabled', action.width >= MIN_STICKY_WIDTH)
        .set('truncateLongText', action.width < MAX_READ_MORE_WIDTH);
    default:
      return state;
  }
}

export default appReducer;
