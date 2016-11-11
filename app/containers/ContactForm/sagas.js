/**
 * Gets the videos from a Youtube playlist
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_URL,
 } from './constants';

import { messageSent, messageSentError } from './actions';
import { addNotification, resetNotification } from 'containers/NotificationContainer/actions';

import { selectFormData } from './selectors';

import { post } from 'axios';

/**
 * Email Contact Form entry to me
 */
export function* sendMessage() {
  const formData = yield (select(selectFormData()));
  // const { data }
  try {
    const { data } = yield call(post, `${SEND_MESSAGE_URL}`, formData);

    // make sure that the `notification` is considered new by clearing its props
    yield put(resetNotification());
    const {
      success,
      error = { message: ['Unknown Error'] },
    } = data;

    if (success) {
      yield put(messageSent(data));
      yield put(addNotification('Your message was sent successfully!', 'success'));
    } else {
      const { message } = error;
      yield put(messageSentError(message));
      yield put(addNotification(`Your message failed to send because: "${message.join('. ')}"`, 'error'));
    }

    yield put(resetNotification());
  } catch (error) {
    yield put(messageSentError([error]));
    yield put(addNotification(`Your message failed to send because: "${error}"`, 'error'));
    yield put(resetNotification());
  }
}

/**
 * Watches for LOAD_VIDEOS action and calls handler
 */
export function* sendMessageWatcher() {
  while (yield take(SEND_MESSAGE)) {
    yield call(sendMessage);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* messageData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(sendMessageWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  messageData,
];
