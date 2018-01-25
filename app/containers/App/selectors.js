/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectApp = (state) => state.get('app');

const makeSelectWindowWidth = () =>
  createSelector(selectApp, (appState) => appState.get('windowWidth'));

const makeSelectIsStickyEnabled = () =>
  createSelector(selectApp, (appState) => appState.get('isStickEnabled'));

const makeSelectTruncateLongText = () =>
  createSelector(selectApp, (appState) => appState.get('truncateLongText'));

const makeSelectIsSmallDevice = () =>
  createSelector(selectApp, (appState) => appState.get('isSmallDevice'));

export {
  selectApp,
  makeSelectWindowWidth,
  makeSelectIsStickyEnabled,
  makeSelectTruncateLongText,
  makeSelectIsSmallDevice,
};
