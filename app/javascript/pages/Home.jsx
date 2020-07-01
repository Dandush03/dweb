import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Paralax from '../components/Paralax';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.head = 'sub-container';
  }

  render() {
    return (
      <>
        <Header />
        <Paralax />
        <div className="container">
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
        </div>
      </>
    );
  }
}
