import React, { Component } from 'react';
import BackgroundSlider from '../components/BackgroundSlider';

import Card from '../components/Card';

import front1 from './../images/front/front1.png';
import front2 from './../images/front/front2.png';
import front3 from './../images/front/front3.png';
import front4 from './../images/front/front4.png';

class Header extends Component {
  render() {
    return (
      <div id='home' className='header-wraper'>
        <div className='card-container'>
          <Card />
        </div>

        <BackgroundSlider
          images={[front1, front2, front3, front4]}
          duration={8}
          transition={2}
        />
      </div>
    );
  }
}

export default Header;
