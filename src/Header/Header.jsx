import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className='navbar navbar-expand-lg  fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand d-none d-sm-block' to='/'>
          <h3 className='me-xl-5 me-lg-3 fs-2'>CoffeeCafe</h3>
        </Link>
        <div className='col-lg-4 col-md-6'>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2 search'
              type='search'
              placeholder='Search your item here..'
              aria-label='Search'
            />
            <button className='p-2 rounded-3  '>
              <span>
                <i className='fa-solid fa-magnifying-glass fs-4 text-danger '></i>
              </span>
            </button>
          </form>
        </div>

        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={handleToggleNav}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div  className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id='navbarTogglerDemo02'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item me-3'>
              <Link
                className='nav-link fs-5 '
                to='/'
                onClick={() => {
                  window.scrollTo(0, 0);
                  handleLinkClick();
                }}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item me-3'>
              <Link className='nav-link fs-5' to='/menu' onClick={handleLinkClick}>
                MENU
              </Link>
            </li>
            <li className='nav-item me-3'>
              <Link className='nav-link fs-5' to='/events'
                onClick={handleLinkClick}>
                EVENTS
              </Link>
            </li>
            <li className='nav-item me-3'>
              <Link className='nav-link fs-5' to='/order' onClick={handleLinkClick}>
                ORDER NOW
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
