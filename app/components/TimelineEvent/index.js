/**
*
* TimelineEvent
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';
import textStyle from '../../responsive-text-formatting.css';

import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function TimelineEvent(props) {
  const { title, company, location, start, end, responsibilities, isInverted } = props;
  const compLocDash = company && location ? ' — ' : '';
  const dateDash = start && end ? ' — ' : '';

  return (
    <ListGroupItem className={classNames(styles.timelineEvent, styles[isInverted ? 'inverted' : null])}>
      <div className={styles.badge}>
        <a><i className="glyphicon glyphicon-record"></i></a>
      </div>
      <div className={styles.panel}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <Row>
            <Col lg={8}>
              <h5>{company}{compLocDash}{location}</h5>
            </Col>
            <Col lg={4} className={textStyle['text-right-lg']}>
              <h5>{start}{dateDash}{end}</h5>
            </Col>
          </Row>
        </div>
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
                  <h4>{header}{subheader}</h4>
                  {description}
                </span>);
              }
              return (
                <ListGroupItem key={idx}>{val}</ListGroupItem>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </ListGroupItem>
  );
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
