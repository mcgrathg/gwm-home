/*
 *
 * NotificationContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NotificationSystem from 'react-notification-system';

import injectReducer from 'utils/injectReducer';

import { makeSelectNotification } from './selectors';
import reducer from './reducer';

export class NotificationContainer extends Component {
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
    return <NotificationSystem ref={(c) => (this.notificationSystem = c)} />;
  }
}

NotificationContainer.propTypes = {
  notification: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notification: makeSelectNotification(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'notifications', reducer });

export default compose(withReducer, withConnect)(NotificationContainer);
