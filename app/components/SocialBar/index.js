/**
 *
 * SocialBar
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { sites } from './social-networks';

import styles from './styles.css';

import SocialButton from 'components/SocialButton';

function SocialBar({ ...props }) {
  const { className, liClassName, iconClassName, ...rest } = props;

  const socialButtons = sites.map((link) => (
    <SocialButton
      key={link.name}
      name={link.name}
      href={link.href}
      className={classNames(styles.socialButton, liClassName)}
      iconClassName={classNames(link.icon, iconClassName)}
    />
  ));

  return (
    <div className={classNames(styles.socialBar, className)} {...rest}>
      <ul
        className={classNames(styles.socialGroup, 'text-center', 'list-inline')}
      >
        {socialButtons}
      </ul>
    </div>
  );
}

SocialBar.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  liClassName: PropTypes.string,
};

export default SocialBar;
