import React, { Component } from 'react';

import Header from '../components/Header';
import Paralax from '../components/ParalaxContainer';
import ContactForm from '../components/ContactForm';
import Content1 from '../../assets/images/content/drawing.svg';

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
        <ContactForm />
        <div className="container">
          <div className="sub-container">
            {/* <img src={Content1} alt="content 1" /> */}
          </div>
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
        </div>
      </>
    );
  }
}
