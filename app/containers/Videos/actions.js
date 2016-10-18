/*
 *
 * Videos actions
 *
 */

import {
  CHANGE_CURRENT_VIDEO,
  LOAD_VIDEOS,
  LOAD_VIDEOS_SUCCESS,
  LOAD_VIDEOS_ERROR,
} from './constants';


export function changeVideo(video) {
  return {
    type: CHANGE_CURRENT_VIDEO,
    video,
  };
}

/**
 * Load the videos from my YouTube playlist, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_VIDEOS
 */
export function loadVideos() {
  return {
    type: LOAD_VIDEOS,
  };
}

/**
 * Dispatched when the videos are loaded by the request saga
 *
 * @param  {array} items The videos data
 *
 * @return {object}      An action object with a type of LOAD_VIDEOS_SUCCESS passing the videos
 */
export function videosLoaded({ items }) {
  return {
    type: LOAD_VIDEOS_SUCCESS,
    videos: items,
  };
}

/**
 * Dispatched when loading the YouTube playlist data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_VIDEOS_ERROR passing the error
 */
export function videosLoadingError(error) {
  return {
    type: LOAD_VIDEOS_ERROR,
    error,
  };
}
