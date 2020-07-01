import React, { Component } from 'react';

import Header from '../components/Header';
import Paralax from '../components/Paralax';
import ContactForm from '../components/ContactForm';

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
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
        </div>
      </>
    );
  }
}
