/*
*
* Videos constants
*
*/

export const CHANGE_VIDEO = 'app/PortfolioPage/CHANGE_VIDEO';

const API_KEY = 'AIzaSyBOVFEGzo9Z52dpKnZyauD8KPlVUk1jO2M';
const PLAYLIST_ID = 'PL-Lb0fMOtv2Ca4fcxioO4pWeQX3V0_ZBS';
export const YOUTUBE_PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
