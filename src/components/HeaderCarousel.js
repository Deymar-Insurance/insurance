import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Front Imports //
import front1 from './../images/front/front1.png';
import front2 from './../images/front/front2.png';
import front3 from './../images/front/front3.png';
import front4 from './../images/front/front4.png';

const HeaderCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <div className='frontCarousel'>
          <img src={front1} alt='image1' />
        </div>
      </>
      <>
        <div className='frontCarousel'>
          <img src={front2} alt='image2' />
        </div>
      </>
      <>
        <div className='frontCarousel'>
          <img src={front3} alt='image3' />
        </div>
      </>
      <>
        <div className='frontCarousel'>
          <img src={front4} alt='image4' />
        </div>
      </>
    </Carousel>
  );
};

export default HeaderCarousel;
