/**
*
* Skills
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

import { Grid, Row, Col } from 'react-bootstrap';
import H3 from 'components/H3';
import SkillsGroup from 'components/SkillsGroup';

function Skills({ columns }) {
  return (
    <Grid className={styles.skillsGroup}>
      <Row>
        {columns.map((col, idx) => (
          <Col md={6} key={`skills-col-${idx}`}>
            <H3>{col.header}</H3>
            <SkillsGroup group={col.items} />
          </Col>
        ))}
      </Row>
    </Grid>
  );
}


Skills.propTypes = {
  columns: PropTypes.array,
};

export default Skills;
