import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.map(item => (
        <div key={item.product.id}>
          <h3>{item.product.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price}</p>
          <button
            onClick={() => updateQuantity(item.product, item.quantity - 1)}>
            -
          </button>
          <button
            onClick={() => updateQuantity(item.product, item.quantity + 1)}>
            +
          </button>
          <button onClick={() => removeFromCart(item.product)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
