import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const renderCartItem = item => (
    <div key={item.product.id}>
      <h3>{item.product.title}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.product.price}</p>
      <button onClick={() => updateQuantity(item.product, item.quantity - 1)}>
        -
      </button>
      <button onClick={() => updateQuantity(item.product, item.quantity + 1)}>
        +
      </button>
      <button onClick={() => removeFromCart(item.product)}>Remove</button>
    </div>
  );

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    clearCart();
  };

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(renderCartItem)}
          <button onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
