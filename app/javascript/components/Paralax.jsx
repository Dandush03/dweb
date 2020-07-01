import React from 'react';

import ParalaxImg1 from '../../assets/images/paralax/paralax1.jpg';
import ParalaxImg2 from '../../assets/images/paralax/paralax2.jpg';
import ParalaxImg3 from '../../assets/images/paralax/paralax3.jpg';
import ParalaxImg4 from '../../assets/images/paralax/paralax4.jpg';
import ParalaxImg5 from '../../assets/images/paralax/paralax5.jpg';

export default () => (
  <div className="paralax">
    <div className="cover" />
    <div>
      <img src={ParalaxImg1} alt="First Paralax Img" />
    </div>
    <div>
      <img src={ParalaxImg2} alt="Second Paralax Img" />
    </div>
    <div>
      <img src={ParalaxImg3} alt="Third Paralax Img" />
    </div>
    <div>
      <img src={ParalaxImg4} alt="Fourth Paralax Img" />
    </div>
    <div>
      <img src={ParalaxImg5} alt="Fifth Paralax Img" />
    </div>
  </div>
);
