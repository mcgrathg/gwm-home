import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header"><a className="navbar-brand navbar-link text-right" href="#"><i className="fa fa-desktop"></i>Greg McGrath<small>Front End Developer</small></a>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="#"><i className="fa fa-home"></i>Home</a></li>
              <li><a href="#"><i className="fa fa-flask"></i>Resume</a></li>
              <li><a href="#"><i className="fa fa-flask"></i>Portfolio</a></li>
              <li><a href="#"><i className="fa fa-flask"></i>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
