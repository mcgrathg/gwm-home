/*
 *
 * NotificationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_NOTIFICATION,
  RESET_NOTIFICATION,
} from './constants';

const initialState = fromJS({
  notification: fromJS({
    message: false,
    level: false,
  }),
});

function notificationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return state
        .setIn(['notification', 'message'], action.message)
        .setIn(['notification', 'level'], action.level);
    case RESET_NOTIFICATION:
      return state
        .setIn(['notification', 'message'], false)
        .setIn(['notification', 'level'], false);
    default:
      return state;
  }
}

export default notificationContainerReducer;
