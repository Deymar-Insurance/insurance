import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

const Testimonials = () => {
  return (
    <div id='reviews' className='testimonials'>
      <h1>Our Happy Customers</h1>
      <div className='container'>
        <div className='testimonials-content'>
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
