import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => setShowMessage(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setShowMessage(false);
  };
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(0);
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} className='product-image' />
      <div className='product-info'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
      <div className='product-actions'>
        <button onClick={decrementQuantity}>-</button>
        <input type='number' value={quantity} readOnly />
        <button onClick={incrementQuantity}>+</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      {showMessage && (
        <p className='message'>Press the + button to add an item quantity.</p>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
