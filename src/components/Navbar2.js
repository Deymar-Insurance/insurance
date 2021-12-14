import React from 'react';
import logo from '../components/logo.png';

const Navbar2 = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-black'>
      <div className='container'>
        <a
          className='navbar-brand'
          href='https://goo.gl/maps/N7ViGVcjDR6A8qPS7'
          target='_blank'
          rel='noreferrer'
        >
          <img classNamer='logo' src={logo} alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Us
              </a>
              <a href='tel:630-994-0722'>+1(630)994-0722</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
