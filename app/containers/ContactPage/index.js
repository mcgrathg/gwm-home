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
  ToastContainer,
  ToastMessage,
} from 'react-toastr';

import {
  selectWindowWidth,
} from 'containers/App/selectors';

import Map from 'components/Map';
import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import LoadingIndicator from 'components/LoadingIndicator';

import btnStyle from './buttons.css';
import styles from './styles.css';

const MIN_WIN_WIDTH = 767;
const ToastMessageFactory = React.createFactory(ToastMessage.animation);


export class ContactPage extends Component { // eslint-disable-line react/prefer-stateless-function

  mixins: [ParentContextMixin]

  constructor(props) {
    super(props);

    this.addAlert = this.addAlert.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      canSubmit: false,
      isSubmitting: false,
    };
  }

  addAlert(msg) {
    this.container.success(`${msg}`, 'Message Sent', {
      closeButton: true,
    });
  }

  clearAlert() {
    this.container.clear();
  }

  submitForm = (data) => {
    console.log(data);
    this.addAlert(JSON.stringify(data, null, 4));
    this.contactForm.reset();
    this.contactForm.disable();
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    const { windowWidth } = this.props;
    const { isSubmitting } = this.state;
    const mapProps = {};

    if (windowWidth < MIN_WIN_WIDTH) {
      // window is too small to see town, move to right
      mapProps.center = [42.999045, -73.850716];
    }

    let submittingIndicator;
    if (isSubmitting) {
      submittingIndicator = (<div className={styles.loadingIndicator}><LoadingIndicator /></div>);
    }

    return (
      <div className={styles.contactPage}>
        <Helmet
          title="ContactPage"
          meta={[
            { name: 'description', content: 'Description of ContactPage' },
          ]}
        />
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref={(c) => (this.container = c)}
          className="toast-top-right"
        />
        <div className="container">
          <div className={styles.map} >
            <Map
              zoom={14}
              {...mapProps}
            />
            <Form
              disabled={isSubmitting}
              className={styles.contactForm}
              onSubmit={this.submitForm}
              onValid={this.enableButton}
              onInvalid={this.disableButton}
              ref={(c) => (this.contactForm = c)}
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
              <Button
                className={classNames('pull-right', btnStyle.submitBtn)}
                type="submit"
                disabled={!this.state.canSubmit}
              >
                Send
              </Button>
              {submittingIndicator}
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
