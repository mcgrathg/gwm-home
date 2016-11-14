/**
*
* FooterNavigation
*
*/

import React from 'react';
import classNames from 'classnames';

import Navigation from 'containers/Navigation';

import styles from './styles.css';
import linkStyles from './linkStyles.css';

function FooterNavigation() {
  const icon = <i className={classNames('fa fa-angle-right', styles.icon)} />;
  return (
    <Navigation className={styles.footerNavigation} linkStyles={linkStyles} icon={icon} />
  );
}

export default FooterNavigation;
