/**
*
* TimelineEvent
*
*/

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import styles from './styles.css';
import textStyle from '../../responsive-text-formatting.css';

class TimelineEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  getHeaderContents() {
    const { title, company, location, start, end } = this.props;
    const titleTag = <h2>{title}</h2>;


    const divider = (first, second) => (
      (first && second) ? ' — ' : ''
    );

    const dateCol = (lgWidth) => (
      <Col
        className={classNames(textStyle['text-right-lg'], styles.headingCol)}
        lg={lgWidth}
      >
        <h5>
          {start}{divider(start, end)}{end}
        </h5>
      </Col>
    );

    let heading;
    if (company || location) {
      heading = (
        <div>
          {titleTag}
          <Row className={styles.headingRow}>
            <Col lg={8} className={styles.headingCol}>
              <h5>{company}{divider(company, location)}{location}</h5>
            </Col>
            {dateCol(4)}
          </Row>
        </div>
      );
    } else {
      heading = (
        <Row className={styles.headingRow}>
          <Col lg={11} className={styles.headingCol}>{titleTag}</Col>
          {dateCol(1)}
        </Row>
      );
    }

    return heading;
  }

  getBodyContents() {
    const { responsibilities } = this.props;

    return (
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
            <ListGroupItem key={idx} className={styles.responsibility}>
              <div className={styles.responsibilityText}>{val}</div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
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
          <CardHeader className={styles.header}>
            {this.getHeaderContents()}
          </CardHeader>
          <CardBody className={styles.body}>
            {this.getBodyContents()}
          </CardBody>
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
