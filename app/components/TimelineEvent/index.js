/**
*
* TimelineEvent
*
*/

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import styles from './styles.css';
import textStyle from '../../responsive-text-formatting.css';

import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class TimelineEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  renderHeader() {
    const { title, company, location, start, end } = this.props;
    const compLocDash = company && location ? ' — ' : '';
    const dateDash = start && end ? ' — ' : '';
    const titleTag = <h2>{title}</h2>;
    const dateCol = (
      <Col lg={2} className={classNames(textStyle['text-right-lg'], styles.headingCol)}>
        <h5>{start}{dateDash}{end}</h5>
      </Col>
    );

    let details;
    if (company || location) {
      details = (
        <div>
          {titleTag}
          <Row className={styles.headingRow}>
            <Col lg={8} className={styles.headingCol}>
              <h5>{company}{compLocDash}{location}</h5>
            </Col>
            <Col lg={4} className={classNames(textStyle['text-right-lg'], styles.headingCol)}>
              <h5>{start}{dateDash}{end}</h5>
            </Col>
          </Row>
        </div>
      );
    } else {
      details = (
        <Row className={styles.headingRow}>
          <Col lg={11} className={styles.headingCol}>{titleTag}</Col>
          <Col lg={1} className={classNames(textStyle['text-right-lg'], styles.headingCol)}>
            <h5>{start}{dateDash}{end}</h5>
          </Col>
        </Row>
      );
    }

    return (
      <div className={styles.heading}>
        {details}
      </div>
    );
  }

  renderBody() {
    const { responsibilities } = this.props;

    return (
      <div className={styles.body}>
        <ListGroup>
          {responsibilities.map((task, idx) => {
            let val = task;
            if (typeof (task) === 'object') {
              const { header, description } = task;
              let { subheader } = task;

              if (subheader) {
                subheader = <small>{subheader}</small>;
              }
              val = (<span>
                <h4 className={styles.taskHeader}>{header}{subheader}</h4>
                {description}
              </span>);
            }
            return (
              <ListGroupItem key={idx} className={styles.responsibility}>{val}</ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }

  render() {
    const { isInverted } = this.props;

    return (
      <ListGroupItem className={classNames(styles.timelineEvent, styles[isInverted ? 'inverted' : null])}>
        <div className={styles.badge}>
          <a><i className="glyphicon glyphicon-record"></i></a>
        </div>
        <div className={styles.panel}>
          {this.renderHeader()}
          {this.renderBody()}
        </div>
      </ListGroupItem>
    );
  }
}

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  location: PropTypes.string,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isInverted: PropTypes.bool,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        header: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
        subheader: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
        description: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      }),
    ])
  ),
};

export default TimelineEvent;
