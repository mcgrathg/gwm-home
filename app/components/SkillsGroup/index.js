/**
*
* SkillsGroup
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function SkillsGroup({ group }) {
  return (
    <Row className={styles.skillsGroup}>
      {group.map(({ items, sizes }, idx) => (
        <Col {...sizes} key={idx}>
          <ListGroup className={styles.listGroup}>
            {items.map((skill) => (
              <ListGroupItem key={skill} className={styles.item}>{skill}</ListGroupItem>)
            )}
          </ListGroup>
        </Col>
      ))}
    </Row>
  );
}

SkillsGroup.propTypes = {
  group: PropTypes.arrayOf(PropTypes.object),
};

export default SkillsGroup;
