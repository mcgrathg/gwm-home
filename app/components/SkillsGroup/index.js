/**
 *
 * SkillsGroup
 *
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

function SkillsGroup({ group }) {
  return (
    <div className={styles.skillsGroup2}>
      {group.map(({ items, sizes }, idx) => (
        <div key={idx} className={styles.col}>
          <div className={styles.listGroup}>
            {items.map((skill) => (
              <div key={skill} className={styles.item}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

SkillsGroup.propTypes = {
  group: PropTypes.arrayOf(PropTypes.object),
};

export default SkillsGroup;
