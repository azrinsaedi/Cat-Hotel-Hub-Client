import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const currencies = [
  { title: 'Dashboard', link: '/account/dashboard/', icon: 'icon-dashboard' },
  {
    title: 'Bookings',
    link: '/account/dashboard/booking',
    icon: 'icon-booking',
  },
  {
    title: 'Profile',
    link: '/account/dashboard/profile',
    icon: 'icon-account',
  },
  { title: 'Logout', link: '/account/dashboard/logout', icon: 'icon-logout' },
];

export default function UserMenu({ parentClass, user }) {
  const [currentdd, setCurrentdd] = useState('');
  const [selectedUserMenu, setSelectedUserMenu] = useState('Dashboard');
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentdd('');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div
      ref={dropDownContainer}
      className={`${parentClass ? parentClass : 'headerDropdown  js-form-dd'}`}
    >
      <div
        className='headerDropdown__button'
        onClick={() =>
          setCurrentdd((pre) => (pre == 'userMenu' ? '' : 'userMenu'))
        }
      >
        <div>
          <img
            className='img profile mr-10'
            src='/img/dashboard/header/1.png'
            alt='image'
          />
        </div>
        {user.username} <i className='icon-chevron-down text-18'></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd == 'userMenu' ? 'is-active' : ''
        } `}
      >
        <div className='headerDropdown'>
          <div className='headerDropdown__container'>
            {currencies.map((elm, i) => (
              <div
                onClick={() => {
                  setSelectedUserMenu(elm.title);
                  setCurrentdd('');
                }}
                key={i}
                className='headerDropdown__item'
              >
                <div className='d-flex flex-row'>
                  <div>
                    <i className={`${elm.icon} text-20 profile_icon pr-10`}></i>
                  </div>
                  <div>
                    {' '}
                    <Link className='profile_dropdown' to={elm.link}>
                      {elm.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
