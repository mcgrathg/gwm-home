/*
 *
 * NotificationContainer
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NotificationSystem from 'react-notification-system';

import {
  addNotification,
} from './actions';

import {
  selectNotification,
} from './selectors';

export class NotificationContainer extends Component { // eslint-disable-line react/prefer-stateless-function

  componentWillReceiveProps({ notification }) {
    const message = notification.get('message');
    const level = notification.get('level');

    if (message && level) {
      this.notificationSystem.addNotification({
        message,
        level,
      });
    }
  }

  render() {
    return (
      <NotificationSystem
        ref={(c) => (this.notificationSystem = c)}
      />
    );
  }
}

NotificationContainer.propTypes = {
  notification: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    addNotification: (...rest) => {
      debugger;
      dispatch(addNotification(rest));
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  notification: selectNotification(),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
