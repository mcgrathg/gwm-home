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
  const { title, company, location, start, end, responsibilities, styling, isInverted } = props;
  const compLocDash = company && location ? ' — ' : '';
  const dateDash = start && end ? ' — ' : '';

  if (styling) debugger;
  return (
    <ListGroupItem className={classNames(styles.timelineEvent, styles[isInverted ? 'inverted' : ''])}>
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
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        header: PropTypes.string.isRequired,
        subheader: PropTypes.string,
        description: PropTypes.string,
      }),
    ])
  ),
  styling: PropTypes.string,
};

export default TimelineEvent;
