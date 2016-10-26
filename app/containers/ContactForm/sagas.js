/**
 * Gets the videos from a Youtube playlist
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_URL,
 } from './constants';

import {
  ERROR_TOAST,
  SUCCESS_TOAST,
} from 'containers/App/constants';

import { messageSent, messageSentError } from './actions';
import { selectFormData } from './selectors';

import { post } from 'axios';

/**
 * Github videos request/response handler
 */
export function* sendMessage() {
  const formData = yield (select(selectFormData()));
  const { data } = yield call(post, SEND_MESSAGE_URL, formData);

  if (data.success) {
    yield put(messageSent(data));
  } else {
    yield put(messageSentError(data.error));
    yield put({ type: ERROR_TOAST, message: data.error.message.join('. ') });
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
