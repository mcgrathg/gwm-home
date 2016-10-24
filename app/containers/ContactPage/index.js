  /*
 *
 * ContactPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import classNames from 'classnames';
import Helmet from 'react-helmet';
import { Form } from 'formsy-react';
import { ParentContextMixin, Input, Textarea } from 'formsy-react-components';

import {
  selectWindowWidth,
} from 'containers/App/selectors';

import Map from 'components/Map';


import styles from './styles.css';

const MIN_WIN_WIDTH = 767;

export class ContactPage extends Component { // eslint-disable-line react/prefer-stateless-function

  mixins: [ParentContextMixin]

  render() {
    const { windowWidth } = this.props;
    const mapProps = {};

    if (windowWidth < MIN_WIN_WIDTH) {
      mapProps.center = [42.998292, -73.850716];
    }

    return (
      <div className={styles.contactPage}>
        <Helmet
          title="ContactPage"
          meta={[
            { name: 'description', content: 'Description of ContactPage' },
          ]}
        />
        <div className="container">
          <div className={styles.map} >
            <Map
              zoom={14}
              {...mapProps}
            />
            <Form
              className={styles.contactForm}
              onSubmit={this.submitForm}
              ref={(c) => { this.contactForm = c; }}
            >
              <Input
                name="name"
                value=""
                label="Name"
                type="text"
                required
              />
              <Input
                name="email"
                value=""
                label="Email"
                type="email"
                placeholder="email"
                validations="isEmail"
                validationErrors={{
                  isEmail: 'This doesn’t look like a valid email address.',
                }}
                required
              />
              <Input
                name="subject"
                value=""
                label="Subject"
                type="text"
              />
              <Textarea
                name="message"
                value=""
                label="Message"
                type="text"
                required
              />
            </Form>
          </div>
          <h2>test</h2>
        </div>
      </div>
        );
  }
}

ContactPage.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
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
