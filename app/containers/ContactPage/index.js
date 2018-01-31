/*
 *
 * ContactPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectWindowWidth } from 'containers/App/selectors';

import Map from 'components/Map';
import ContactForm from 'containers/ContactForm';

import styles from './styles.css';

const MIN_WIN_WIDTH = 767;

export class ContactPage extends Component {
  render() {
    const { windowWidth } = this.props;
    const mapProps = {};

    if (windowWidth < MIN_WIN_WIDTH) {
      // window is too small to see town, move its center to right
      mapProps.center = [43.016305, -73.852519];
    }

    return (
      <article className={styles.contactPage}>
        <div className={styles.map}>
          <Map zoom={14} {...mapProps} />
          <div className="container">
            <ContactForm />
          </div>
        </div>
      </article>
    );
  }
}

ContactPage.propTypes = {
  windowWidth: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  windowWidth: makeSelectWindowWidth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
