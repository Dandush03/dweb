import React, { Component } from 'react';

import Logo from './Logo';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.head = 'test';
  }

  render() {
    return (
      <header>
        <Logo />
      </header>
    );
  }
}
