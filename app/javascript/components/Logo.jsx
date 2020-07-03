import React from 'react';

import Logo from '../../assets/images/SimpleLog.svg';
import LogoText from '../../assets/images/LogoTexts.svg';

export default () => (
  <div className="logo">
    <img src={Logo} alt="Logo Img" className="logo-img" />
    <img src={LogoText} alt="Logo Text" className="logo-text" />
  </div>
);
