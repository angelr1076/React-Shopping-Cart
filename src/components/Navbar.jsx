import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiWaveSurfer } from 'react-icons/gi';
import { MdOutlineSurfing } from 'react-icons/md';
import { TfiShoppingCart, TfiShoppingCartFull } from 'react-icons/tfi';
import { CartContext } from '../contexts/CartContext';
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
          <GiWaveSurfer className='icon' /> Home
        </Link>
      </div>
      <div className='navbar-shop'>
        <Link to='/shop'>
          <MdOutlineSurfing className='icon' /> Shop
        </Link>
      </div>
      <div className='navbar-cart'>
        <Link to='/cart'>
          {cartItems.length > 0 ? (
            <TfiShoppingCartFull className='icon' />
          ) : (
            <TfiShoppingCart className='icon' />
          )}{' '}
          | <span className='navbar__cart'>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
