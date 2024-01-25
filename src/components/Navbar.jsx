import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiWaveSurfer } from 'react-icons/gi';
import { MdOutlineSurfing } from 'react-icons/md';
import { TfiShoppingCart, TfiShoppingCartFull } from 'react-icons/tfi';
import { CartContext } from '../contexts/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { cartItems, itemAdded, setItemAdded } = useContext(CartContext);
  const totalItems = cartItems.reduce((total, item) => {
    const itemQuantity = item.quantity || 0;
    return total + itemQuantity;
  }, 0);

  useEffect(() => {
    if (itemAdded) {
      const timer = setTimeout(() => setItemAdded(false), 500);
      return () => clearTimeout(timer);
    }
  }, [itemAdded, setItemAdded]);

  const cartIconClass = itemAdded
    ? 'navbar-cart__icon shake-animation'
    : 'navbar-cart__icon';

  return (
    <nav className='navbar'>
      <div className='logo-placeholder'>
        <Link to='/'>
          <GiWaveSurfer className='icon' />{' '}
          <span className='navbar__title'>Home</span>
        </Link>
      </div>
      <div className='navbar-shop'>
        <Link to='/shop'>
          <MdOutlineSurfing className='icon' />{' '}
          <span className='navbar__title'>Shop</span>
        </Link>
      </div>
      <div className='navbar-cart'>
        <Link to='/cart'>
          {cartItems.length > 0 ? (
            <TfiShoppingCartFull className={cartIconClass} />
          ) : (
            <TfiShoppingCart className={cartIconClass} />
          )}{' '}
          | <span className='navbar-cart__qty'>{Number(totalItems)}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
