import { createSelector } from 'reselect';

/**
 * Direct selector to the notifications state domain
 */
const selectNotifications = (state) => state.get('notifications');

const makeSelectNotification = () =>
  createSelector(selectNotifications, (notifState) =>
    notifState.get('notification')
  );

export { selectNotifications, makeSelectNotification };
