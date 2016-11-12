/**
*
* Skills
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Row, Col } from 'react-bootstrap';
import H3 from 'components/H3';
import Card from 'components/Card';
import SkillsGroup from 'components/SkillsGroup';

import styles from './styles.css';

function Skills({ columns }) {
  return (
    <div className={styles.skillsGroup}>
      <Row className={styles.row}>
        {columns.map((col, idx) => (
          <Col xs={12} sm={7} md={6} key={`skills-col-${idx}`} className={styles.col}>
            <Card className={styles.card}>
              <H3 className={classNames(styles.heading, 'text-center')}>{col.header}</H3>
              <SkillsGroup group={col.items} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


Skills.propTypes = {
  columns: PropTypes.array,
};

export default Skills;
