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
      {events.map((evtDetails, idx) => (
        <TimelineEvent className={evtDetails.styling} key={idx} {...evtDetails} />)
      )}
    </ListGroup>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

export default Timeline;
