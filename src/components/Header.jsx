import React, { useContext, useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

import { Link, useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import UserMenu from './UserMenu';

export default function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await customFetch('/account/current-user-fetch');

        if (response.data === '') {
          setUser(null);
          return;
        }
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);
  const navigate = useNavigate();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className='header -type-2 js-header'>
        <div className='header__container container'>
          <div className='headerMobile__left'>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className='header__menuBtn js-menu-button'
            >
              <i className='icon-main-menu'></i>
            </button>
          </div>

          <div className='header__logo'>
            <Link to='/' className='header__logo'>
              <img src='/img/general/logo-1.png' alt='logo icon' />
            </Link>
          </div>

          <div className='headerMobile__right'>
            <button
              onClick={() => pageNavigate('/tour-list-1')}
              className='d-flex'
            >
              <i className='icon-search text-18'></i>
            </button>

            <button
              onClick={() => pageNavigate('/login')}
              className='d-flex ml-20'
            >
              <i className='icon-person text-18'></i>
            </button>
          </div>

          <div className='header__right xl:d-none'>
            <Link to='/admin/register' className='ml-15 mr-15'>
              List cat hotel
            </Link>

            <Link to='/admin/login' className='ml-15 mr-15'>
              Login as Admin
            </Link>

            {user === null && (
              <>
                <Link
                  to='/account/register'
                  className='button -sm -outline-dark-1 rounded-200 text-dark-1 ml-30'
                >
                  Sign up
                </Link>

                <a
                  href='/account/login'
                  className='button -sm -outline-dark-1 rounded-200 text-dark-1 ml-15'
                >
                  Log in
                </a>
              </>
            )}

            {user !== null && (
              <>
                <UserMenu user={user} />
              </>
            )}
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
