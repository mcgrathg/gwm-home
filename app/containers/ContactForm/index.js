/*
 *
 * ContactForm
 *
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Form } from 'formsy-react';
import { ParentContextMixin, Input, Textarea } from 'formsy-react-components';
import { Button } from 'react-bootstrap';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import LoadingIndicator from 'components/LoadingIndicator';

import btnStyle from 'containers/App/buttons.css';

import {
  makeSelectEmail,
  makeSelectError,
  makeSelectSending,
  makeSelectSent,
  makeSelectFormValidity,
} from './selectors';

import {
  sendMessage,
  setFormValidity,
  messageSentAcknowledged,
} from './actions';

import reducer from './reducer';
import saga from './sagas';
import styles from './styles.css';

export class ContactForm extends Component {
  mixins: [ParentContextMixin];

  componentWillReceiveProps({ sent }) {
    if (sent) {
      this.contactForm.reset();
      this.props.messageSentAcknowledged();
    }
  }

  setFormValid = (isFormValid) => {
    this.setState({ isFormValid });
  };

  addAlert(msg, title = 'Success!', status = 'success') {
    this.container[status](msg, title, {
      closeButton: true,
    });
  }

  clearAlert() {
    this.container.clear();
  }

  render() {
    const { className, isSending, error } = this.props;
    let submittingIndicator;
    let errorMessage;

    if (isSending) {
      submittingIndicator = (
        <div className={styles.loadingIndicator}>
          <LoadingIndicator />
        </div>
      );
    }

    if (error && error.length) {
      errorMessage = (
        <div className={classNames(styles.error, 'pull-left')}>
          <h4>Errors</h4>
          <ul>{error.map((msg) => <li key={msg}>{msg}</li>)}</ul>
        </div>
      );
    }

    return (
      <Form
        disabled={isSending}
        className={classNames(styles.contactForm, className)}
        onSubmit={(...props) => this.props.onFormSubmit(...props)}
        onValid={() => this.props.setFormValidity(true)}
        onInvalid={() => this.props.setFormValidity(false)}
        ref={(c) => (this.contactForm = c)}
      >
        <H2 disableBorder>
          <HeaderIcon className="fa-paper-plane" />
          Contact Me
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
          name="from"
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
          required
        />
        <Textarea
          name="html"
          value=""
          label="Message"
          labelClassName="col-md-6"
          elementWrapperClassName={classNames('col-md-12', styles.formInput)}
          type="text"
          required
        />
        {errorMessage}
        <Button
          className={classNames('pull-right', btnStyle.submitBtn)}
          type="submit"
          disabled={isSending}
        >
          <i className={classNames('fa fa-send-o', styles.icon)} />
          Send
        </Button>
        {submittingIndicator}
      </Form>
    );
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
  isSending: PropTypes.bool,
  sent: PropTypes.bool,
  error: React.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onFormSubmit: PropTypes.func,
  setFormValidity: PropTypes.func,
  messageSentAcknowledged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  error: makeSelectError(),
  isSending: makeSelectSending(),
  sent: makeSelectSent(),
  isFormValid: makeSelectFormValidity(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: (formData) => dispatch(sendMessage(formData)),
    setFormValidity: (isValid) => dispatch(setFormValidity(isValid)),
    messageSentAcknowledged: () => dispatch(messageSentAcknowledged()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(withReducer, withSaga, withConnect)(ContactForm);
