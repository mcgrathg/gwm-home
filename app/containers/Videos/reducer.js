/*
 *
 * Videos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_CURRENT_VIDEO,
  LOAD_VIDEOS,
  LOAD_VIDEOS_SUCCESS,
  LOAD_VIDEOS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  currentVideo: false,
  userData: fromJS({
    videos: false,
  }),
});

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_VIDEO:
      return state
        .set('currentVideo', action.video);
    case LOAD_VIDEOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'videos'], false);
    case LOAD_VIDEOS_SUCCESS:
      return state
        .setIn(['userData', 'videos'], action.videos)
        .set('loading', false)
        .set('currentVideo', action.videos[0]);
    case LOAD_VIDEOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default videosReducer;
