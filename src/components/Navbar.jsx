import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <div className='logo-placeholder'>Logo</div>
      <div className='navbar-links'>
        <Link to='/'>Home</Link> |<Link to='/shop'>Shop</Link> |
        <Link to='/cart'>
          Cart
          <span className='navbar__cart'>{totalItems}</span>
        </Link>
      </div>
      <div className='navbar-spacer'></div>
    </nav>
  );
}

export default Navbar;
