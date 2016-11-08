import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.columns, 'container')}>
        <section>
          <p>
            All Links
          </p>
        </section>
        <section>
          Made By Greg McGrath
        </section>
        <section>
          Git Repo Link
        </section>
      </div>
    </footer>
  );
}

export default Footer;
