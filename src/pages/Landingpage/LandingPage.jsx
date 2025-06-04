import { useInView } from 'react-intersection-observer';
import reviewsData from './LandingpageReviewsdata';
import { FaSearchLocation, FaRegCalendarCheck, FaRunning } from 'react-icons/fa';
import { FaMapMarkedAlt, FaUsers, FaHandshake } from 'react-icons/fa';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Landingpage.css"
const LandingPage = () => {
  const { ref: adminRef, inView: adminInView } = useInView({ triggerOnce: true });
  const { ref: playerRef, inView: playerInView } = useInView({ triggerOnce: true });

  const getBadgeClass = (role) => {
    return role === 'Player' ? 'bg-success' : 'bg-primary';
  };


  return (
    <>
      {/* Landing page navbar  */}
      <nav className="header">
        <div id="brand_name">
          <span className="fall-book">Book</span>
          <span className="funny-n">N</span>
          <span className="bounce-play">Play</span>
        </div>
        <div className="right_nav">
          {/* <Link to="/choose_role">
            <button className="log_sign_but" >Login</button>
          </Link> */}
        </div>
      </nav>

      {/* Landing Page Background main image and its content */}
      <div className='landing_page_bg_img'>
        <div className="landing_content">
          <h1>Own the Court</h1>
          <p> Where passion meets performance. Book your turf, sharpen your skills, and rise above the rest, <br />
            Every champion starts with a single step — make yours count today.
          </p>
          <button className="get_started">Get Started</button>
        </div>
      </div>

      {/* Register venue section */}
      <section
        className={`register-venue-section ${playerInView ? 'animate' : ''}`}
        id="player-section"
        ref={playerRef}
      >
        <div className="register-venue-content">
          <h2>Looking for a Turf or Sports Court?</h2>
          <p>Explore nearby venues, book your slot, and start playing with ease. Your next game is just a click away!</p>
          <div className="register-icons">
            <div className="register-feature">
              <FaSearchLocation className="register-icon" />
              <h4>Find Venues</h4>
              <p>Browse local turfs and courts based on your location and sport preference.</p>
            </div>
            <div className="register-feature">
              <FaRegCalendarCheck className="register-icon" />
              <h4>Book Instantly</h4>
              <p>Check availability, reserve your slot, and make secure payments — all online.</p>
            </div>
            <div className="register-feature">
              <FaRunning className="register-icon" />
              <h4>Play & Compete</h4>
              <p>Show up and play. Enjoy smooth experiences with organized facilities and events.</p>
            </div>
          </div>
          <a href="/book-now" className="register-btn">Find & Book Now</a>
        </div>
      </section>

      {/* Parallax effet and its image */}
      <section className="parallax_bg">

        {/*  */}
        <div className="content_wrapper">
          <h1>BOOKNPLAY</h1>
          <h3>Your Ultimate Sports Ground Booking Platform</h3>
          <p>Find, book, and enjoy your favorite sports courts anytime, anywhere.</p>
        </div>
      </section>


      <section
        className={`register-venue-section ${adminInView ? 'animate' : ''}`}
        id="register-venue"
        ref={adminRef}
      >
        <div className="register-venue-content">
          <h2>Own a Turf or Sports Court?</h2>
          <p>Let passionate players find you. List your space and start accepting bookings today!</p>
          <div className="register-icons">
            <div className="register-feature">
              <FaMapMarkedAlt className="register-icon" />
              <h4>Be Discoverable</h4>
              <p>Get listed on our platform with your location, images, and facilities.</p>
            </div>
            <div className="register-feature">
              <FaUsers className="register-icon" />
              <h4>Reach Thousands</h4>
              <p>Players across the city are looking for venues like yours right now.</p>
            </div>
            <div className="register-feature">
              <FaHandshake className="register-icon" />
              <h4>Start Earning</h4>
              <p>Take bookings online, manage slots, and grow your turf business easily.</p>
            </div>
          </div>
          <a href="/register-venue" className="register-btn">Register Your Venue</a>
        </div>
      </section>
      <section className="platform-highlights">
        <div className="highlight-box">
          <h4>Real-Time Availability</h4>
          <p>Live slot updates & instant bookings</p>
        </div>
        <div className="highlight-box">
          <h4>24/7 Access</h4>
          <p>Night matches & early-morning play</p>
        </div>
        <div className="highlight-box">
          <h4>Multi-Sport Venues</h4>
          <p>Cricket, Football, Badminton, and more</p>
        </div>
        <div className="highlight-box">
          <h4>Verified Listings</h4>
          <p>All venues are quality-checked</p>
        </div>
        <div className="highlight-box">
          <h4>Weekly Offers</h4>
          <p>Discounts on peak slots & group bookings</p>
        </div>
      </section>



      <div className="container my-5">
        <h2 className="text-center mb-4">What Our Users Say</h2>
        <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="card w-75 text-center shadow p-4">
                    <h5 className="card-title mb-2">
                      {review.name}{' '}
                      <span
                        className={`badge ${getBadgeClass(
                          review.role
                        )} text-white ms-2`}
                      >
                        {review.role}
                      </span>
                    </h5>
                    <p className="card-text fst-italic mb-3">"{review.text}"</p>
                    <p className="fw-bold text-dark bg-light d-inline-block px-3 py-1 rounded">
                      Rating: {review.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <Landingpage_Footer /> */}




    </>
  )
}

export default LandingPage
