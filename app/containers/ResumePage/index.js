/*
 *
 * ResumePage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { header, skills, work, education } from './messages';
import classNames from 'classnames';
import * as Sticky from 'react-stickynode';

import { Button } from 'react-bootstrap';

import {
  selectIsStickyEnabled,
} from 'containers/App/selectors';

import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import Skills from 'components/Skills';
import Timeline from 'components/Timeline';
import SocialBar from 'components/SocialBar';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import styles from './styles.css';
import btnStyle from './buttons.css';

export class ResumePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isStickyEnabled } = this.props;

    return (
      <article className={styles.resumePage}>
        <Helmet
          title={header.title}
          meta={[
            { name: 'description', content: 'Greg McGrath\'s Resume' },
          ]}
        />
        <section>
          <div className={styles.introCard}>
            <div className="container">
              <SocialBar className={styles.social} />
              <p className="lead">{header.intro}</p>
            </div>
          </div>
          <Sticky
            enabled={isStickyEnabled}
            top={55}
            innerZ={2500}
          >
            <div className={styles.stickyButtons}>
              <div>
                <CenteredButtonToolbar>
                  <Button className={btnStyle.resumeBtn}>Download Resume</Button>
                  <Button className={btnStyle.contactBtn}>Contact Me</Button>
                </CenteredButtonToolbar>
              </div>
            </div>
          </Sticky>
        </section>
        <div className={classNames('container', styles.wrapper)}>
          <section className={styles.technicalSkills}>
            <H2>
              <HeaderIcon className="fa-wrench" />
              Technical Skills
            </H2>
            <Skills columns={skills} />
          </section>
          <section className={styles.workExperience}>
            <H2>
              <HeaderIcon className="fa-briefcase" />
              Work Experience
            </H2>
            <Timeline events={work} />
          </section>
          <section className={styles.education}>
            <H2>
              <HeaderIcon className="fa-pencil" />
              Education
            </H2>
            <Timeline events={education} />
          </section>
        </div>
      </article>
    );
  }
}

ResumePage.propTypes = {
  isStickyEnabled: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isStickyEnabled: selectIsStickyEnabled(),
});

export default connect(mapStateToProps)(ResumePage);
