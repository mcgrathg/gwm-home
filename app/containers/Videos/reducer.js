/*
 *
 * Videos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_VIDEO,
} from './constants';

const initialState = fromJS({});

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIDEO:
      console.log('video reducer: ', arguments);
      return state;
    default:
      return state;
  }
}

export default videosReducer;
