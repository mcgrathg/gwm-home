/*
 *
 * ContactPage
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectContactPage from './selectors';

import Map from 'components/Map';

import styles from './styles.css';

export class ContactPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.contactPage}>
        <Helmet
          title="ContactPage"
          meta={[
            { name: 'description', content: 'Description of ContactPage' },
          ]}
        />
        <h1>test</h1>
        <div className={styles.map} >
          <Map zoom={14} />
        </div>
        <h2>test</h2>
      </div>
    );
  }
}

const mapStateToProps = selectContactPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
