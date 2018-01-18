/**
 *
 * Timeline
 *
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

import { ListGroup } from 'react-bootstrap';
import TimelineEvent from 'components/TimelineEvent';

function Timeline({ events }) {
  return (
    <ListGroup className={styles.timeline}>
      {events.map((evtDetails) => (
        <TimelineEvent
          key={evtDetails.title}
          className={evtDetails.cardClass}
          {...evtDetails}
        />
      ))}
    </ListGroup>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

export default Timeline;
