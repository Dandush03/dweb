import React, { Component } from 'react';
import { Provider } from 'react-redux';

import storeConfig from '../store';

import Header from '../components/Header';
import Paralax from '../components/ParalaxContainer';
import ContactForm from '../components/ContactForm';
import LoadingPage from '../container/LoadingPage';

const store = storeConfig();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.head = 'sub-container';
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Paralax />
        <ContactForm />
        <div className="container">
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
          <div className="sub-container" />
        </div>
        <LoadingPage />
      </Provider>
    );
  }
}
