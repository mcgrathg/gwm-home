import React from 'react';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';

import SocialBar from 'components/SocialBar';
import FooterNavigation from 'components/FooterNavigation';

import textStyle from '../../responsive-text-formatting.css';
import styles from './styles.css';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <Grid>
        <Row>
          <Col md={4} className={classNames(textStyle['text-left-md'], textStyle['text-center-not-md'])}>
            <FooterNavigation />
          </Col>
          <Col md={4} className={classNames(textStyle['text-center-md'], textStyle['text-center-not-md'])}>
            <SocialBar className={styles.social} iconClassName={styles.socialButton} />
            Made By Greg McGrath
          </Col>
          <Col md={4} className={classNames(textStyle['text-right-md'], textStyle['text-center-not-md'])}>
            <a
              className={styles.btnLink}
              href="https://github.com/mcgrathg/home"
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
