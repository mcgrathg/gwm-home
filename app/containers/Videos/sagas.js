/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_VIDEOS } from 'containers/App/constants';
import { YOUTUBE_PLAYLIST_URL } from './constants';
import { videosLoaded, videosLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getVideos() {
  // Call our request helper (see 'utils/request')
  const repos = yield call(request, YOUTUBE_PLAYLIST_URL);

  if (!repos.err) {
    yield put(videosLoaded(repos.data));
  } else {
    yield put(videosLoadingError(repos.err));
  }
}

/**
 * Watches for LOAD_VIDEOS action and calls handler
 */
export function* getVideosWatcher() {
  while (yield take(LOAD_VIDEOS)) {
    yield call(getVideos);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* playlistData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getVideosWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  playlistData,
];
