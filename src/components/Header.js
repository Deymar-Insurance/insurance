import React from 'react';
import HeaderCarousel from './HeaderCarousel';

const Header = () => {
  return (
    <>
      <div id='home' className='header-wraper'>
        <div className='main-info'>
          <HeaderCarousel />
        </div>
      </div>
    </>
  );
};

export default Header;
