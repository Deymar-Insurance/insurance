import React from 'react';
import logo from '../components/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-black'>
      <a className='navbar-brand' href='#'>
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
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
