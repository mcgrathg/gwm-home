/**
 *
 * Skills
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import H3 from 'components/H3';
import SkillsGroup from 'components/SkillsGroup';

import styles from './styles.css';

function Skills({ columns }) {
  return (
    <div className={styles.skills}>
      {columns.map(({ header, icon, items }) => (
        <div key={header} className={styles.col}>
          <H3 className={classNames(styles.heading, 'text-center')}>
            {header}
          </H3>
          <div className={styles.divider}>
            <div className={styles.line} />
            <span className="fa-layers fa-fw fa-2x">
              <i className="fas fa-circle" />
              <i
                className={classNames(icon, styles.icon)}
                data-fa-transform="shrink-8"
              />
            </span>
            <div className={styles.line} />
          </div>
          <SkillsGroup group={items} />
        </div>
      ))}
    </div>
  );
}

Skills.propTypes = {
  columns: PropTypes.array,
};

export default Skills;
