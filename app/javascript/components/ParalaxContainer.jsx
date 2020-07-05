import React from 'react';

import Parallax from '../container/Paralax';
import img1 from '../../assets/images/paralax/paralax1.jpg';
import img2 from '../../assets/images/paralax/paralax2.jpg';
import img3 from '../../assets/images/paralax/paralax3.jpg';
import img4 from '../../assets/images/paralax/paralax4.jpg';
import img5 from '../../assets/images/paralax/paralax5.jpg';

export default () => (
  <div className="paralax">
    <Parallax imgUrl={img1} loadItem="1" />
    <Parallax imgUrl={img2} loadItem="2" />
    <Parallax imgUrl={img3} loadItem="3" />
    <Parallax imgUrl={img4} loadItem="4" />
    <Parallax imgUrl={img5} loadItem="5" />
  </div>
);
