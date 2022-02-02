import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// AVATARS IMPORTS

import avatar1 from '../images/avatars/avatar1.png';
import avatar2 from '../images/avatars/avatar2.png';
import avatar3 from '../images/avatars/avatar3.png';
import avatar4 from '../images/avatars/avatar4.png';

const TestimonialsCarousel = () => {
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
        <img src={avatar1} alt='William Lockwood' />
        <div className='myCarousel'>
          <h3>William Lockwood</h3>
          <p>
            Thank you, Marina, and the whole “Deymar Agency” team for
            the excellent service! It is a pleasure to work with you.
            I appreciate your immediate response to all my requests,
            on-time reminders and the best rates on my personal
            (Health and Dental Insurance) and BUSINESS Liability and
            Worker’s Compensation Insurance.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt='Sergey Yurin' />
        <div className='myCarousel'>
          <h3>Sergey Yurin</h3>
          <p>
            Hi everyone! I would like to share my experience of
            working with Deymar Insurance Agency. Me and my wife were
            completely out of the whole insurance area. We didn’t know
            anything about it and thought that medical insurance is so
            expensive. We chose to work with DIA and hit the target.
            An agent helped find best affordable option for us in a
            matter of short time along with clear explanation of every
            step and final documentation.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt='Lana Shkrobinets' />
        <div className='myCarousel'>
          <h3>Lana shkrobinets</h3>
          <p>
            Deymar the best insurance company with exceptional
            customer service. I cannot say enough about the efforts
            the staff and agency has put forth on my behalf. I really
            feel like I am in good hands with Deymar Insurance Agency!
            They have provided us with great coverages policies that
            meet our needs, and I think the best compliment we can pay
            is all we ever need is one email or call, and it's handled
            quickly, and responsively. Thank you all for working so
            hard and living up to great customer service that shows
            you care!
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt='Andriy Vedenivskyy' />
        <div className='myCarousel'>
          <h3>Andriy Vedenivskyy</h3>
          <p>
            They have very good rates and the customer service is the
            best! All of my questions and requests have been done
            immediately, so easy to deal with them, always a pleasure.
            Highly recommend if you are looking for good prices for
            auto insurance.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
