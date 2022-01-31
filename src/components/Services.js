import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  faCarCrash,
  faHouseUser,
  faShippingFast,
  faStoreAlt,
} from '@fortawesome/free-solid-svg-icons';
/* eslint-disable */

function Services() {
  return (
    <>
      <div id='services' className='services'>
        <h1 className='py-5'>our services</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faShippingFast}
                    size='2x'
                  />
                </div>
                <h3>Commercial auto insurance</h3>
              </div>
            </div>
            {/* - */}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faCarCrash}
                    size='2x'
                  />
                </div>
                <h3>Auto, Motorcycle and Boat Insurance</h3>
              </div>
            </div>
            {/* - */}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faStoreAlt}
                    size='2x'
                  />
                </div>
                <h3>General liability Insurance</h3>
              </div>
            </div>
            {/* - */}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faHouseUser}
                    size='2x'
                  />
                </div>
                <h3>Home Insurance</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
