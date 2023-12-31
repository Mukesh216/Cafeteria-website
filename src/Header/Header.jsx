import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  const { cartItems } = props;


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
          <span className=' navbar-toggler-icon'>
          
          </span>
          {
              cartItems.length > 0 && (
                <span className='position-absolute top-0 start-100 translate-middle badge border border-black rounded-circle bg-success p-1'>
                  <i className='fa-solid fa-shopping-cart fli text-white'></i>
                </span>
              )
            }
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id='navbarTogglerDemo02'>
          <ul className='navbar-nav text-center pt-3 pt-sm-0 ms-auto mt-3 mt-sm-0 mb-2 mb-lg-0 me-xl-5'>
            <li className='nav-item me-4  me-xl-5'>
              <Link
                className='nav-link rounded-2 px-2 fs-6 mt-3 mt-md-0 mb-2 border border-0 border-bottom border-black  '
                to='/'
                onClick={() => {
                  window.scrollTo(0, 0);
                  handleLinkClick();
                }}
              >
                HOME
              </Link>

            </li>
            <li className='nav-item me-4  me-xl-5'>
              <Link className='nav-link mb-2 rounded-2 px-2 fs-6 border border-0 border-bottom border-black' to='/menu' onClick={handleLinkClick}>
                MENU
              </Link>
            </li>
            <li className='nav-item me-4  me-xl-5'>
              <Link className='nav-link mb-2  rounded-2 px-2 fs-6 border border-0 border-bottom border-black' to='/events'
                onClick={handleLinkClick}>
                EVENTS
              </Link>
            </li>
            <li className='nav-item me-4  me-xl-5 position-relative'>
              <Link className='nav-link mb-2  rounded-2 px-2 fs-6 border border-0 border-bottom border-black' to='/order' onClick={handleLinkClick}>
                ORDER NOW
                <span className='d-md-none '>
                  {
                    cartItems.length > 0 && (
                      <span className='px-2 bg-success rounded-pill mx-2 border  text-white border-white '>
                        {cartItems.length}
                      </span>
                    )
                  }
                </span>

                {
                  cartItems.length > 0 && (
                    <span className="position-absolute d-none top-0 mt-2 d-md-block start-100 translate-middle badge border border-white  rounded-circle bg-danger p-2">
                      {cartItems.length}
                    </span>
                  )
                }


              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
