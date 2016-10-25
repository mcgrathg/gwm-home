/**
 * Gets the videos from a Youtube playlist
 */

import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  YOUTUBE_PLAYLIST_URL,
  LOAD_VIDEOS,
 } from './constants';
import { videosLoaded, videosLoadingError } from './actions';

import request from 'utils/request';

/**
 * Github videos request/response handler
 */
export function* getVideos() {
  // Call our request helper (see 'utils/request')
  const playlist = yield call(request, YOUTUBE_PLAYLIST_URL);

  if (!playlist.err) {
    yield put(videosLoaded(playlist.data));
  } else {
    yield put(videosLoadingError(playlist.err));
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
