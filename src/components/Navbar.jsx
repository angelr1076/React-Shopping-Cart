import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import SantaCarlaLogo from '../assets/images/logo-transparent-png.png';
import '../styles/Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className='navbar'>
      <div className='logo-placeholder'>
        <Link to='/'>
          <img
            src={SantaCarlaLogo}
            style={{ width: '50px', height: 'auto' }}
            alt='Santa Carla Logo'
          />
        </Link>
      </div>
      <div className='navbar-shop'>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className='navbar-cart'>
        <Link to='/cart'>
          Cart | <span className='navbar__cart'>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
