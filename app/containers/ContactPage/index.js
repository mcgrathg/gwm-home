  /*
 *
 * ContactPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';

import {
   selectWindowWidth,
} from 'containers/App/selectors';

import Map from 'components/Map';
import ContactForm from 'containers/ContactForm';
import SocialBar from 'components/SocialBar';

import styles from './styles.css';

const MIN_WIN_WIDTH = 767;

export class ContactPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { windowWidth } = this.props;
    const mapProps = {};

    if (windowWidth < MIN_WIN_WIDTH) {
      // window is too small to see town, move its center to right
      mapProps.center = [43.000112, -73.854407];
    }

    return (
      <div className={styles.contactPage}>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Description of ContactPage' },
          ]}
        />
        <SocialBar className={styles.social} />
        <article className="container">
          <div className={styles.map} >
            <Map
              zoom={14}
              {...mapProps}
            />
            <ContactForm />
          </div>
        </article>
      </div>
    );
  }
}

ContactPage.propTypes = {
  windowWidth: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  windowWidth: selectWindowWidth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
