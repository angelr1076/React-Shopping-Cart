import '../styles/HomePage.css';
import logo from '../assets/images/logo-transparent-png.png';

function HomePage() {
  return (
    <div className='homepage'>
      <h1>Welcome to Santa Carla. Sleep all day, surf all night.</h1>
      <section className='hero border'>
        <img
          src={logo}
          style={{ width: '400px', height: 'auto' }}
          alt='Logo'
          className='logo'
        />
        <p className='description'>
          Dedicated to the (night)lifestyle of Santa Carla, its boardwalk, and
          its residents. Here you can find information about the best surf
          spots, local events, and more.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
