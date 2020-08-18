import React from 'react';

// Containers
import Img from '../containers/Img'

// Assets

import logo from '../assets/images/logo.svg'
import Sea from './Sea';
export default function Header() {
  return (
    <header>
      <Sea />
      <div className="logo">
        <Img imgUrl={logo} imgAlt="Company Logo" imgClass="logo-svg" />
      </div>
    </header>
  );
}