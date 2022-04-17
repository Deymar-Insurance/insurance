import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

/* eslint-disable */

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>Rolling Meadows, IL 60008</p>
            </div>
            <div className='d-flex'>
              <a href='tel:847-496-0006'>+1(847)4960006</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link
                  smooth={true}
                  to='home'
                  offset={-70}
                  className='footer-nav'
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='services'
                  offset={-70}
                  className='footer-nav'
                >
                  Our Services
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='reviews'
                  offset={-70}
                  className='footer-nav'
                >
                  Reviews
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-2 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <a
                href='https://www.instagram.com/deymar.insurance/?hl=en'
                className='instagram social'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </a>
              <a
                href='https://www.facebook.com/DeymarInsurance/'
                className='facebook social'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </a>
            </div>
            <p className='py-3 text-center'>
              {new Date().getFullYear()}&nbsp;Deymar Insurance | All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
