import React from 'react';

import Logo from '../../assets/images/SimpleLog.svg';

export default () => (
  <div className="loading-page">
    <img src={Logo} alt="Logo Img" className="logo-img" />
    <div>
      <h1 className="dot one">.</h1>
      <h1 className="dot two">.</h1>
      <h1 className="dot three">.</h1>
      <h1 className="dot fourth">.</h1>
    </div>
  </div>
);
