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
            Hello and welcome to the 77th annual Golden Globe Awards,
            live from the Beverly Hilton Hotel here in Los Angeles.
            I’m Ricky Gervais, thank you. You’ll be pleased to know
            this is the last time I’m hosting these awards, so I don’t
            care anymore. I’m joking. I never did. I’m joking, I never
            did. NBC clearly don’t care either — fifth time. I mean,
            Kevin Hart was fired from the Oscars for some offensive
            tweets — hello? Lucky for me, the Hollywood Foreign Press
            can barely speak English and they’ve no idea what Twitter
            is, so I got offered this gig by fax. Let’s go out with a
            bang, let’s have a laugh at your expense. Remember,
            they’re just jokes. We’re all gonna die soon and there’s
            no sequel, so remember that. But you all look lovely all
            dolled up. You came here in your limos. I came here in a
            limo tonight and the license plate was made by Felicity
            Huffman. No, shush. It’s her daughter I feel sorry for.
            OK? That must be the most embarrassing thing that’s ever
            happened to her. And her dad was in Wild Hogs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
