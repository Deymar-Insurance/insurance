import React from 'react';
import logo from '../components/logo5.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-black'>
      <div className='container'>
        <a
          className='navbar-brand'
          href='https://goo.gl/maps/N7ViGVcjDR6A8qPS7'
          target='_blank'
          rel='noreferrer'
        >
          <img className='logo' src={logo} alt='logo' />
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
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'></span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Request a Quote
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Find our location
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
