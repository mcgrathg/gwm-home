  /*
 *
 * ContactPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { Form } from 'formsy-react';
import { ParentContextMixin, Input, Textarea } from 'formsy-react-components';
import { Button } from 'react-bootstrap';

import {
  selectWindowWidth,
} from 'containers/App/selectors';

import Map from 'components/Map';
import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';

import btnStyle from './buttons.css';
import styles from './styles.css';

const MIN_WIN_WIDTH = 767;

export class ContactPage extends Component { // eslint-disable-line react/prefer-stateless-function

  mixins: [ParentContextMixin]

  submitForm = (data) => {
    console.log(data);
  }

  render() {
    const { windowWidth } = this.props;
    const mapProps = {};

    if (windowWidth < MIN_WIN_WIDTH) {
      // window is too small to see town, move to right
      mapProps.center = [42.999045, -73.850716];
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
              <H2>
                <HeaderIcon className="fa-paper-plane" />
                Send a Message
              </H2>

              <Input
                name="name"
                value=""
                label="Name"
                labelClassName="col-md-6"
                elementWrapperClassName={classNames('col-md-12', styles.formInput)}
                type="text"
                required
              />
              <Input
                name="email"
                value=""
                label="Email"
                labelClassName="col-md-6"
                elementWrapperClassName={classNames('col-md-12', styles.formInput)}
                type="email"
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
                labelClassName="col-md-6"
                elementWrapperClassName={classNames('col-md-12', styles.formInput)}
                type="text"
              />
              <Textarea
                name="message"
                value=""
                label="Message"
                labelClassName="col-md-6"
                elementWrapperClassName={classNames('col-md-12', styles.formInput)}
                type="text"
                required
              />
              <Button className={classNames('pull-right', btnStyle.submitBtn)} formNoValidate type="submit" defaultValue="Submit" >Send</Button>
            </Form>
          </div>
          <h2>test</h2>
        </div>
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
