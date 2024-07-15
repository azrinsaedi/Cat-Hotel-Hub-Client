import { Link } from 'react-router-dom';
import Stars from '@/components/common/Stars';
import { useMainPageContext } from '../pages/MainPage';

export default function HotelsView() {
  const { hotels, user } = useMainPageContext();
  return (
    <section className='layout-pt-xl layout-pb-xl'>
      <div className='container'>
        <div className='row justify-between items-end y-gap-10'>
          <div className='col-auto'>
            <h2
              data-aos='fade-right'
              data-aos-delay=''
              className='text-30 md:text-24'
            >
              Popular Cat Hotels
            </h2>
          </div>

          <div className='col-auto'>
            <Link
              to={'/search'}
              data-aos='fade-left'
              data-aos-delay=''
              className='buttonArrow d-flex items-center '
            >
              <span>See all</span>
              <i className='icon-arrow-top-right text-16 ml-10'></i>
            </Link>
          </div>
        </div>

        <div
          data-aos='fade-up'
          data-aos-delay=''
          className='row y-gap-30 pt-40 sm:pt-20 mobile-css-slider -w-300'
          // className="row y-gap-30 justify-between pt-40 sm:pt-20 mobile-css-slider -w-300"
        >
          {hotels.map((elm, i) => (
            <div key={i} className='col-lg-3 col-md-6'>
              <Link
                to={`/booking/${elm._id}`}
                className='tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow'
              >
                <div className='tourCard__header'>
                  <div className='tourCard__image ratio ratio-28:20'>
                    <img
                      // src={elm.imageSrc}
                      src={elm.images[0]}
                      alt='image'
                      className='img-ratio rounded-12'
                    />
                  </div>

                  <div
                    className={`tourCard__favorite ${
                      user?.wishlist?.includes(elm._id) ? 'bg-red-3' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      // e.stopPropagation(); // Stop event propagation
                      handleUpdateWishlist(elm._id); // Call your wishlist update function
                    }}
                    // style={{ cursor: "pointer", zIndex: 1000 }}
                  >
                    <i
                      className={`icon-heart ${
                        user?.wishlist?.includes(elm._id) ? 'text-red-4' : ''
                      }`}
                    ></i>
                  </div>
                </div>

                <div className='tourCard__content px-10 pt-10'>
                  <div className='tourCard__location d-flex items-center text-13 text-light-2'>
                    <i className='icon-pin d-flex text-16 text-light-2 mr-5'></i>
                    {/* {elm.location} */}
                    Kuala Lumpur, Malaysia
                  </div>

                  <h3 className='tourCard__title text-16 fw-500 mt-5'>
                    <span>{elm.name}</span>
                  </h3>

                  <div className='tourCard__rating d-flex items-center text-13 mt-5'>
                    <div className='d-flex x-gap-5'>
                      {/* <Stars star={elm.rating} /> */}
                      <Stars star={elm?.averageRating} font={12} />
                      {/* <Stars star={4} /> */}
                    </div>

                    <span className='text-dark-1 ml-10'>
                      {/* {elm.rating} ({elm.ratingCount}) */}
                      {Number(elm?.averageRating?.toFixed(2))} (
                      {elm.totalRatings})
                    </span>
                  </div>

                  <div className='d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10'>
                    {/* <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>
                      {"1 day"}
                    </div> */}

                    <div className='d-flex'>
                      {/* From <span className="text-16 fw-500">${elm.price}</span> */}
                      {/* From <span className="text-16 fw-500">${50}</span> */}
                      <div className='text-16 fw-500 ml-10'>
                        {elm.price.currency +
                          ' ' +
                          (
                            elm.price.amount *
                            (1 - elm.price.discountInPercentage / 100)
                          )?.toFixed(2)}
                      </div>
                      {elm.price.discountInPercentage > 0 && (
                        <div className='text-12 text-error-2 fw-500 ml-10 pt-2'>
                          <del>
                            {elm.price.currency + ' ' + elm.price.amount}
                          </del>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
