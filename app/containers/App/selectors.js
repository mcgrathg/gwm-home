/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectWindowWidth = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('windowWidth')
);

const selectIsStickyEnabled = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isStickyEnabled')
);

const selectTruncateLongText = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('truncateLongText')
);

const selectIsSmallDevice = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isSmallDevice')
);

export {
  selectGlobal,
  selectLocationState,
  selectWindowWidth,
  selectIsStickyEnabled,
  selectTruncateLongText,
  selectIsSmallDevice,
};
