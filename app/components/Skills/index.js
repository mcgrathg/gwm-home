/**
*
* Skills
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

import { Grid, Row, Col } from 'react-bootstrap';
import H3 from 'components/H3';
import Card from 'components/Card';
import SkillsGroup from 'components/SkillsGroup';

function Skills({ columns }) {
  return (
    <Grid className={styles.skillsGroup}>
      <Row className={styles.row}>
        {columns.map((col, idx) => (
          <Col md={6} key={`skills-col-${idx}`} className={styles.col}>
            <Card className={styles.card}>
              <H3 className="text-center">{col.header}</H3>
              <SkillsGroup group={col.items} />
            </Card>
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
