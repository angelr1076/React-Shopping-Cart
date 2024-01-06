import '../styles/HomePage.css';
import logo from '../assets/images/logo-transparent-png.png';
import BoardwalkImg from '../assets/images/boardwalk.png'; // replace with your image paths
import SantaCarImg from '../assets/images/panshot.png';
import WelcomeImg from '../assets/images/welcomeSign.png';

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
      <section className='gallery'>
        <h2>Gallery</h2>
        <div className='images'>
          <img src={BoardwalkImg} alt='Santa Carla Boardwalk' />
          <img src={SantaCarImg} alt='Santa Carla Roller Coaster' />
          <img src={WelcomeImg} alt='Welcome Sign' />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
