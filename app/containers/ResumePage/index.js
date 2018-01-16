/*
 *
 * ResumePage
 *
 */

import React, { Component } from 'react';
import { header, skills, work, education } from './text';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

import { RESUME_DOWNLOAD_URL } from 'containers/App/constants';

import H2 from 'components/H2';
import HeaderIcon from 'components/HeaderIcon';
import Skills from 'components/Skills';
import Timeline from 'components/Timeline';
import CenteredButtonToolbar from 'components/CenteredButtonToolbar';

import styles from './styles.css';
import btnStyle from 'containers/App/buttons.css';

export class ResumePage extends Component {
  render() {
    return (
      <article className={styles.resumePage}>
        <section className={styles.introCard}>
          <div className="container">
            <p className="lead">{header.intro}</p>
          </div>
          <CenteredButtonToolbar>
            <Button
              className={classNames(
                btnStyle.accentGhostBtn,
                styles.downloadBtn
              )}
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
            >
              <i className={classNames('fa fa-download fa-2x', styles.icon)} />
              Download Résumé
            </Button>
          </CenteredButtonToolbar>
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

export default ResumePage;
