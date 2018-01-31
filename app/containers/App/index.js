/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'rc-scroll-anim';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as Sticky from 'react-stickynode';

import injectReducer from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import NotificationContainer from 'containers/NotificationContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { makeSelectIsStickyEnabled } from './selectors';
import { setWindowWidth } from './actions';
import reducer from './reducer';

import styles from './styles.css';
export class App extends Component {
  componentWillMount() {
    this.props.onResize();
  }
  componentDidMount() {
    window.addEventListener('resize', this.props.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onResize);
  }

  addAlert(msg, title = 'Success!', status = 'success') {
    this.container[status](msg, title, {
      closeButton: true,
    });
  }

  render() {
    const { isStickyEnabled } = this.props;

    return (
      <div>
        <Helmet
          titleTemplate="%s - Greg McGrath - Software Developer"
          defaultTitle=" Greg McGrath - Software Developer"
          meta={[{ name: 'description', content: "Greg McGrath's Site" }]}
        />
        <NotificationContainer />
        <Sticky enabled={isStickyEnabled} innerZ={3000}>
          <Header />
        </Sticky>
        <div className={styles.wrapper}>
          <Element id="home">
            <HomePage />
          </Element>
          <Element id="experience">
            <ResumePage />
          </Element>
          <Element id="contact">
            <ContactPage />
          </Element>
          <Footer />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  isStickyEnabled: false,
};

App.propTypes = {
  onResize: PropTypes.func,
  isStickyEnabled: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isStickyEnabled: makeSelectIsStickyEnabled,
});

export function mapDispatchToProps(dispatch) {
  return {
    onResize: () => dispatch(setWindowWidth(window.innerWidth)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });

export default compose(withReducer, withConnect)(App);
