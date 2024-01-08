import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import logo from '../assets/images/logo-transparent-png.png';

function HomePage() {
  return (
    <div className='homepage'>
      <h1 className='title'>
        Welcome to Santa Carla. Sleep all day, surf all night.
      </h1>
      <section className='hero border'>
        <div className='hero-content'>
          <img
            src={logo}
            style={{ width: '400px', height: 'auto' }}
            alt='Logo'
            className='logo'
          />
          <div className='description-content'>
            <p className='description'>
              Dedicated to the (night)lifestyle of Santa Carla, its boardwalk,
              and its residents. Soon, you&apos;ll find information about the
              best surf spots, local events, and more.
            </p>
            <Link to='/shop' className='shop-button'>
              Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
