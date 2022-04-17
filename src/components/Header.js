import React, { Component } from 'react';
import logo from '../images/Logo/logo2.png';
import BackgroundSlider from '../components/BackgroundSlider';
import { Link } from 'react-scroll';

import front1 from './../images/header-background/image1.png';
import front2 from './../images/header-background/image2.png';
import front3 from './../images/header-background/image3.png';
import front4 from './../images/header-background/image4.png';
import front5 from './../images/header-background/image5.png';

class Header extends Component {
  render() {
    return (
      <div id='home' className='header-wraper'>
        <BackgroundSlider
          images={[front1, front2, front3, front4, front5]}
          duration={8}
          transition={2}
        />
        <div className='main-info'>
          <div className='backgroundFrame'>
            <div>
              <img className='logo2' src={logo} alt='logo' />
            </div>
            <div href='#quote' className='btn-main-offer'>
              <Link
                smooth={true}
                to='quote'
                offset={-80}
                className='nav-link'
                href='#'
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
