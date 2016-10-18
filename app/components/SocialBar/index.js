/**
*
* SocialBar
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

import SocialButton from 'components/SocialButton';

function SocialBar({ ...props }) {
  const { className, ...rest } = props;
  return (
    <div
      className={classNames(styles.socialBar, className)}
      {...rest}
    >
      <ul className="text-center list-inline">
        <SocialButton href="https://github.com/mcgrathg" className={styles.socialButton} iconClassName="fa fa-github" name="Github" />
        <SocialButton href="http://stackoverflow.com/users/3688026/mcgrathg" className={styles.socialButton} iconClassName="fa fa-stack-overflow" name="Stack Overflow" />
        <SocialButton href="https://www.linkedin.com/in/gregmcgrath" className={styles.socialButton} iconClassName="fa fa-linkedin-square" name="LinkedIn" />
        <SocialButton href="https://www.facebook.com/greg.mcgrath" className={styles.socialButton} iconClassName="fa fa-facebook" name="Facebook" />
        <SocialButton href="https://plus.google.com/+GregMcGrath8" className={styles.socialButton} iconClassName="fa fa-google-plus" name="Google" />
      </ul>
    </div>
  );
}

SocialBar.propTypes = {
  className: PropTypes.string,
};

export default SocialBar;
