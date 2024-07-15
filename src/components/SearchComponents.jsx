import Calendar from '@/components/common/dropdownSearch/Calendar';
import Location from '@/components/common/dropdownSearch/Location';
import TourType from '@/components/common/dropdownSearch/TourType';
import { useEffect, useState, useRef } from 'react';
import { DateObject } from 'react-multi-date-picker';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [currentActiveDD, setCurrentActiveDD] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [calendar, setCalendar] = useState('');
  const [cats, setCats] = useState(1);

  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(1, 'day'),
  ]);

  const handleDateChange = (newDates) => {
    setDates(newDates);
  };

  useEffect(() => {
    setCurrentActiveDD('');
  }, [name, location, calendar, cats, setCurrentActiveDD]);

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD('');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const checkInTimestamp = dates[0].format('YYYY-MM-DD');
    const checkOutTimestamp = dates[1].format('YYYY-MM-DD');
    navigate(
      `/search?name=${encodeURIComponent(name)}&check_in=${encodeURIComponent(
        checkInTimestamp
      )}&check_out=${encodeURIComponent(
        checkOutTimestamp
      )}&location=${encodeURIComponent(location)}&cats=${encodeURIComponent(
        cats
      )}`
    );
  };

  return (
    <section className='hero -type-2'>
      <input
        type='hidden'
        id='check_in'
        name='check_in'
        value={dates[0] ? dates[0].format('YYYY-MM-DD') : ''}
      />
      <input
        type='hidden'
        id='check_out'
        name='check_out'
        value={dates[1] ? dates[1].format('YYYY-MM-DD') : ''}
      />

      <input
        type='hidden'
        id='location'
        name='location'
        value={location ? location : ''}
      />

      <input type='hidden' id='cats' name='cats' value={cats ? cats : 1} />

      <div className='container'>
        <div ref={dropDownContainer} className='hero__filter'>
          <div className='searchForm -type-1 shadow-1'>
            <div className='searchForm__form'>
              <div className='searchFormItem js-select-control js-form-dd'>
                <div
                  className='searchFormItem__button'
                  onClick={() =>
                    setCurrentActiveDD((pre) => (pre == 'name' ? '' : 'name'))
                  }
                >
                  <div className='searchFormItem__icon size-50 rounded-12 bg-accent-1-05 flex-center'>
                    <i className='text-20 icon-pin'></i>
                  </div>
                  <div className='searchFormItem__content'>
                    <h5>Search</h5>
                    <div className='js-select-control-chosen'>
                      <input
                        placeholder='Enter cat hotel name or location'
                        type='text'
                        name='name'
                        id='name'
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        value={name ? name : ''}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='searchFormItem js-select-control js-form-dd js-calendar'>
                <div
                  className='searchFormItem__button'
                  onClick={() =>
                    setCurrentActiveDD((pre) =>
                      pre == 'calendar' ? '' : 'calendar'
                    )
                  }
                >
                  <div className='searchFormItem__icon size-50 rounded-12 bg-accent-1-05 flex-center'>
                    <i className='text-20 icon-calendar'></i>
                  </div>
                  <div className='searchFormItem__content'>
                    <h5>When</h5>
                    <div>
                      <span className='js-first-date'>
                        {' '}
                        <Calendar
                          active={currentActiveDD === 'calendar'}
                          dates={dates}
                          setDates={handleDateChange}
                        />
                      </span>
                      <span className='js-last-date'></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='searchFormItem js-select-control js-form-dd'>
                <div
                  className='searchFormItem__button'
                  onClick={() =>
                    setCurrentActiveDD((pre) => (pre == 'cats' ? '' : 'cats'))
                  }
                >
                  <div className='searchFormItem__icon size-50 rounded-12 bg-accent-1-05 flex-center'>
                    <i className='text-20 icon-flag'></i>
                  </div>
                  <div className='searchFormItem__content'>
                    <h5>How Many Cats?</h5>

                    <div className='mt-5'>
                      <div className='d-flex items-center justify-between'>
                        <div className='d-flex items-center js-counter'>
                          <button
                            onClick={() =>
                              setCats((pre) => (pre > 1 ? pre - 1 : pre))
                            }
                            className='button size-30 border-1 rounded-full js-down'
                          >
                            <i className='icon-minus text-10'></i>
                          </button>

                          <div className='flex-center ml-10 mr-10'>
                            <div className='text-14 size-20 js-count'>
                              {cats}
                            </div>
                          </div>

                          <button
                            onClick={() => setCats((pre) => pre + 1)}
                            className='button size-30 border-1 rounded-full js-up'
                          >
                            <i className='icon-plus text-10'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='searchForm__button'>
              <button
                className='button -dark-1 bg-accent-1 text-white'
                onClick={handleSubmit}
              >
                <i className='icon-search text-16 mr-10'></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchComponent;
