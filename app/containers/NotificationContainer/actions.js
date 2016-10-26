/*
 *
 * NotificationContainer actions
 *
 */

import {
  ADD_NOTIFICATION,
  RESET_NOTIFICATION,
} from './constants';

export function addNotification(message, level) {
  return {
    type: ADD_NOTIFICATION,
    message,
    level,
  };
}

export function resetNotification() {
  return {
    type: RESET_NOTIFICATION,
  };
}
