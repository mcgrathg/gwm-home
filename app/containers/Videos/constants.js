/*
*
* Videos constants
*
*/

import {
  GOOGLE_API_KEY,
} from 'containers/App/constants';

export const CHANGE_CURRENT_VIDEO = 'app/Videos/CHANGE_VIDEO';
export const LOAD_VIDEOS = 'app/Videos/LOAD_VIDEOS';
export const LOAD_VIDEOS_SUCCESS = 'app/Videos/LOAD_VIDEOS_SUCCESS';
export const LOAD_VIDEOS_ERROR = 'app/Videos/LOAD_VIDEOS_ERROR';


const PLAYLIST_ID = 'PL-Lb0fMOtv2Ca4fcxioO4pWeQX3V0_ZBS';
export const YOUTUBE_PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${GOOGLE_API_KEY}`;
