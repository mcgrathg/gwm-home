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
        <SocialButton href="https://www.facebook.com/greg.mcgrath" className="fa fa-facebook" />
        <SocialButton href="https://github.com/mcgrathg" className="fa fa-github" />
        <SocialButton href="http://stackoverflow.com/users/3688026/mcgrathg" className="fa fa-stack-overflow" />
        <SocialButton href="https://www.linkedin.com/in/gregmcgrath" className="fa fa-linkedin-square" />
        <SocialButton href="https://plus.google.com/+GregMcGrath8" className="fa fa-google-plus" />
      </ul>
    </div>
  );
}

SocialBar.propTypes = {
  className: PropTypes.string,
};

export default SocialBar;
