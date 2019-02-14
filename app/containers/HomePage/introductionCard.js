import React, { Component, PropTypes } from 'react';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';

import { intro, blurb, description } from './text';

import H1 from 'components/H1';
import H3 from 'components/H3';
import Profile from './profile.jpg';
import SocialBar from 'components/SocialBar';
import Card from 'components/Card';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import styles from './styles.css';
import btnStyle from 'containers/App/buttons.css';

const MIN_WIN_WIDTH = 750;

class IntroductionCard extends Component {
  getIntro() {
    return <H1 className={styles.intro}>{intro}</H1>;
  }

  getBlurb() {
    return <H3 className={styles.blurb}>{blurb}</H3>;
  }

  getDivider() {
    return (
      <div className={styles.divider}>
        <hr />
      </div>
    );
  }

  getDescription() {
    return (
      <div className={styles.description}>
        {description.map((txt, idx) => <p key={idx}>{txt}</p>)}
      </div>
    );
  }

  getLinks() {
    return (
      <CenteredButtonToolbar>
        <Link to="/#experience">
          <Button className={btnStyle.accentBtn}>See My Experience</Button>
        </Link>
        <Link to="/#contact">
          <Button className={classNames(btnStyle.accentGhostBtn, styles.ghostButton)}>Message Me</Button>
        </Link>
      </CenteredButtonToolbar>
    );
  }

  getProfileSection() {
    return (
      <div className={styles.profile}>
        <Image
          responsive
          className={styles.profileImg}
          src={Profile}
          alt="Greg McGrath"
        />
        <SocialBar
          className={styles.social}
          liClassName={styles.socialListItem}
        />
      </div>
    );
  }

  renderLargeCard() {
    return (
      <div className={classNames(styles.wrapper, styles.largeWrapper)}>
        <div className={styles.contents}>
          {this.getIntro()}
          {this.getBlurb()}
          {this.getDivider()}
          {this.getDescription()}
        </div>
        {this.getProfileSection()}
      </div>
    );
  }

  renderSmallCard() {
    return (
      <div className={classNames(styles.wrapper, styles.smallWrapper)}>
        {this.getIntro()}
        {this.getBlurb()}
        <div className={styles.contents}>
          {this.getDivider()}
          {this.getProfileSection()}
          {this.getDescription()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Card className={styles.introductionCard}>
        <div className="container">
          {MIN_WIN_WIDTH <= this.props.windowWidth
            ? this.renderLargeCard()
            : this.renderSmallCard()}
          {this.getLinks()}
        </div>
      </Card>
    );
  }
}

IntroductionCard.propTypes = {
  windowWidth: PropTypes.number,
};

export default IntroductionCard;
