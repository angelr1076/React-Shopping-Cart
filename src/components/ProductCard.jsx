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
      <div className='title'>
        <h3>{product.title}</h3>
      </div>
      <div className='content'>
        <img src={product.image} alt={product.title} className='image' />
        <p>${product.price}</p>
      </div>
      <div className='button-container'>
        <button onClick={decrementQuantity}>-</button>
        <input type='number' value={quantity} readOnly />
        <button onClick={incrementQuantity}>+</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {showMessage && <p>Press the + button to add an item quantity.</p>}
      </div>
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
