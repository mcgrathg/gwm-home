/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
const Sticky = require('react-stickynode');


// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import styles from './styles.css';

const MIN_STICKY_WIDTH = 769;

export class App extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);

    this.state = {
      windowWidth: window.innerWidth,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          titleTemplate="%s - Greg McGrath - Front End Developer"
          defaultTitle=" Greg McGrath - Front End Developer"
          meta={[
            { name: 'description', content: 'Greg McGrath\'s Site' },
          ]}
        />
        <Sticky
          enabled={this.state.windowWidth > MIN_STICKY_WIDTH}
          top={-92}
          innerZ={3000}
        >
          <Navigation />
        </Sticky>
        <div className={classNames('container', styles.wrapper)}>
          {React.Children.toArray(this.props.children)}
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
