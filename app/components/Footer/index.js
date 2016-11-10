import React from 'react';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';

import SocialBar from 'components/SocialBar';

import { links } from 'components/Navigation/links';

import styles from './styles.css';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <Grid>
        <Row>
          <Col md={4} className="text-left">Page Links</Col>
          <Col md={4} className="text-center">
            <SocialBar className={styles.social} iconClassName={styles.socialButton} />
            Made By Greg McGrath
          </Col>
          <Col md={4} className="text-right">
            <a
              className={styles.btnLink}
              href="https://github.com/mcgrathg/sample-extjs"
              target="_blank"
            >
              Site&apos;s Git Repo
              <i className={classNames('fa fa-github-alt', styles.icon)} />
            </a>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}

export default Footer;
