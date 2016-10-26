import { createSelector } from 'reselect';

/**
 * Direct selector to the videos container state domain
 */
const selectNotifications = () => (state) => state.get('notifications');

const selectNotification = () => createSelector(
  selectNotifications(),
  (notifState) => notifState.get('notification')
);

export {
  selectNotification,
};
