import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(0);
  };

  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <input type='number' value={quantity} readOnly />
        <button onClick={incrementQuantity}>+</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
