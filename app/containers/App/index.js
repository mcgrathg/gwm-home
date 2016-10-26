/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import * as Sticky from 'react-stickynode';

import {
  selectIsStickyEnabled,
  selectErrorToast,
  selectSuccessToast,
} from './selectors';

import {
  setWindowWidth,
} from './actions';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import { ToastContainer, ToastMessage } from 'react-toastr';

import styles from './styles.css';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export class App extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onResize();
  }
  componentDidMount() {
    window.addEventListener('resize', this.props.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onResize);
  }

  componentWillUpdate({ successToast, errorToast }) {
    if (successToast) {
      this.addAlert(successToast, 'Success!', 'success');
    }
    if (errorToast) {
      this.addAlert(errorToast, 'Error!', 'error');
    }
  }

  addAlert(msg, title = 'Success!', status = 'success') {
    this.container[status](msg, title, {
      closeButton: true,
    });
  }

  render() {
    const { children, isStickyEnabled, routes } = this.props;

    return (
      <div>
        <Helmet
          titleTemplate="%s - Greg McGrath - Front End Developer"
          defaultTitle=" Greg McGrath - Front End Developer"
          meta={[
            { name: 'description', content: 'Greg McGrath\'s Site' },
          ]}
        />
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref={(c) => (this.container = c)}
          className="toast-right"
        />
        <Sticky
          enabled={isStickyEnabled}
          top={-92}
          innerZ={3000}
        >
          <Navigation currentRoute={routes[routes.length - 1]} />
        </Sticky>
        <div className={styles.wrapper}>
          {React.Children.toArray(children)}
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  onResize: PropTypes.func,
  isStickyEnabled: PropTypes.bool,
  routes: PropTypes.array,
  errorToast: PropTypes.string,
  successToast: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onResize: () => dispatch(setWindowWidth(window.innerWidth)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  isStickyEnabled: selectIsStickyEnabled(),
  errorToast: selectErrorToast(),
  successToast: selectSuccessToast(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
