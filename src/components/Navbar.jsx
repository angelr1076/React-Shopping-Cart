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
      <div className='navbar-left'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
      </div>
      <div className='navbar-right'>
        <div className='navbar__cart'>Cart Items: {totalItems}</div>
      </div>
    </nav>
  );
}

export default Navbar;
