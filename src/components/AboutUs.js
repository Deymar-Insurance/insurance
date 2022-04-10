import React from 'react';
import author from '../Marina.jpg';

const AboutUs = () => {
  return (
    <div id='about-us' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img
              className='profile-img'
              src={author}
              alt='Owner...'
            />
          </div>
        </div>

        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>About Us</h1>
          <p>
            Hello, my name is Marina and I am happy to welcome you to
            the Deymar Insurance Family. Correct, we are more of a
            family, than just an agency. It's not about being
            family-owned, it's about being family to our clients and
            always being there to help. {' '}
          </p>
          <p>
            I devoted many years of work and all my love and time to
            make Deymar the most professional and knowledgeable agency
            in the whole Chicagoland area. Since insurance requires a
            lot of specific knowledge and experience, my mission is to
            make it easy, understandable and affordable to all
            customers with no regards to knowledge and background. 
          </p>
          <p>
            Today we offer the widest range of services to protect
            your family and your business. Property, auto, business or
            health - you name it, we can cover it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
