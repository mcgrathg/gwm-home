/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const SET_WINDOW_WIDTH = 'app/App/SET_WINDOW_WIDTH';

export const SMALL_DEVICE_WIDTH = 769;
export const MIN_STICKY_WIDTH = SMALL_DEVICE_WIDTH;
export const MAX_READ_MORE_WIDTH = SMALL_DEVICE_WIDTH;
export const RESUME_DOWNLOAD_URL = 'Gregory-W-McGrath-Resume.pdf';
export const YOUTUBE_PLAYLIST = 'https://www.youtube.com/playlist?list=PL-Lb0fMOtv2Ca4fcxioO4pWeQX3V0_ZBS';
