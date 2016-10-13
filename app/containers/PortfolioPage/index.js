/*
 *
 * PortfolioPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectPortfolioPage from './selectors';
import styles from './styles.css';

export class PortfolioPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.portfolioPage}>
        <Helmet
          title="PortfolioPage"
          meta={[
            { name: 'description', content: 'Description of PortfolioPage' },
          ]}
        />
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src="https://www.youtube.com/embed/?listType=playlist&list=PL-Lb0fMOtv2Ca4fcxioO4pWeQX3V0_ZBS"
          frameBorder="0" allowFullScreen
        />
      </div>
    );
  }
}

const mapStateToProps = selectPortfolioPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
