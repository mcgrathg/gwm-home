/*
 *
 * Videos actions
 *
 */

import {
  CHANGE_VIDEO,
} from './constants';

export function changeVideo(video) {
  return {
    type: CHANGE_VIDEO,
    video,
  };
}
