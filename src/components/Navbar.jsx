import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import ServiceDropdown from "./ServicesPage/ServiceDropdown"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [service, setService] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1500) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1500) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onServiceEnter = () => {
    if (window.innerWidth < 1500) {
      setService(false);
    } else {
      setService(true);
    }
  }

  const onServiceLeave = () => {
    if (window.innerWidth < 1500) {
      setService(false);
    } else {
      setService(false);
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Byte-Sense
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
         
          <li className='nav-item' onMouseEnter={onServiceEnter} onMouseLeave={onServiceLeave}>
            <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
            {service && <ServiceDropdown />}
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/Product' className='nav-links' onClick={closeMobileMenu}>
              Product <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link to='/News' className='nav-links' onClick={closeMobileMenu}>
              News
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Career' className='nav-links' onClick={closeMobileMenu}>
              Career
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Cart' className='nav-links' onClick={closeMobileMenu}>
              Cart
            </Link>
          </li>

          <li className='nav-item'>
              <div class="lang-menu">
                <div class="selected-lang">English
                </div>
                <ul>
                  <li>
                    <a>Chinese</a>
                  </li>
                </ul>
              </div>
          </li>

          <li className='nav-item'>
            <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
}

export default Navbar;
