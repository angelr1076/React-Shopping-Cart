import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { formatPriceWithComma, truncateTitle } from '../utils/Helpers';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import '../styles/CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useContext(CartContext);

  const renderCartItem = item => (
    <div key={item.product.id} className='cart-item'>
      <h4>{truncateTitle(item.product.title)}</h4>
      <p>{item.quantity}</p>
      <p>${formatPriceWithComma(item.product.price)}</p>
      <div className='cart-buttons'>
        <button
          className='icon minus btn'
          onClick={() =>
            item.quantity > 1 && updateQuantity(item.product, item.quantity - 1)
          }>
          <FiMinusCircle />
        </button>
        <button
          className='icon plus btn'
          onClick={() => updateQuantity(item.product, item.quantity + 1)}>
          <FiPlusCircle />
        </button>
        <button
          className='buy btn'
          onClick={() => removeFromCart(item.product)}>
          Remove From Cart
        </button>
      </div>
    </div>
  );

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    clearCart();
  };

  return (
    <div className='cart'>
      <h2>My Cart</h2>
      <h3>Total: ${formatPriceWithComma(totalPrice)}</h3>
      {cartItems.length > 0 ? (
        <>
          <div className='items'>{cartItems.map(renderCartItem)}</div>
          <hr className='cart-item-divider' />
          <div className='cart-buttons'>
            <button className='checkout btn' onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
