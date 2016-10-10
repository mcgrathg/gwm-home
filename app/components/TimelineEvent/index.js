/**
*
* TimelineEvent
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function TimelineEvent(props) {
  const { title, company, location, start, end, responsibilities } = props;
  const compLocDash = company && location ? ' — ' : '';
  const dateDash = start && end ? ' — ' : '';

  return (
    <ListGroupItem className={styles.timelineEvent}>
      <div className="timeline-badge primary">
        <a><i className="glyphicon glyphicon-record"></i></a>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h2>{title}</h2>
          <Row className="row">
            <Col lg={8}>
              <h5>{company}{compLocDash}{location}</h5>
            </Col>
            <Col lg={4} className="text-right-lg">
              <h5>{start}{dateDash}{end}</h5>
            </Col>
          </Row>
        </div>
        <div className="timeline-body">
          <ListGroup>
            {responsibilities.map((task) => {
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
                <ListGroupItem>{val}</ListGroupItem>
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
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      subheader: PropTypes.string,
      description: PropTypes.string,
    }),
  ])
),
};

export default TimelineEvent;
