import React from 'react';
import classNames from 'classnames';

import SocialBar from 'components/SocialBar';
import FooterNavigation from 'components/FooterNavigation';

import textStyle from '../../responsive-text-formatting.css';
import styles from './styles.css';

function Footer() {
  const colStyle = (def) =>
    classNames(
      textStyle['text-center-sm'],
      textStyle['text-center-xs'],
      textStyle[`text-${def}-md`],
      textStyle[`text-${def}-lg`]
    );
  return (
    <footer className={classNames(styles.footer, 'container')}>
      <div className={styles.footerRow}>
        <FooterNavigation />
        <SocialBar
          className={styles.social}
          iconClassName={styles.socialButton}
        />
        <div className={(colStyle('center'), styles.copyright)}>
          Copyright &copy; {new Date().getFullYear()} by Greg McGrath
        </div>
      </div>
    </footer>
  );
}

export default Footer;
