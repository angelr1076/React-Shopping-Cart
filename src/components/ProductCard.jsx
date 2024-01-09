import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const url = import.meta.env.VITE_IMG_URL;
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
      addToCart({
        ...product,
        quantity: quantity,
      });
      setQuantity(0);
    } else {
      setShowMessage(true);
    }
  };

  const imageUrl = product.imageUrl.startsWith('http')
    ? product.imageUrl
    : `${url}${product.imageUrl}`;

  return (
    <div className='product-card'>
      <Link to={`/shop/${product.id}`}>
        <img src={imageUrl} alt={product.title} className='product-image' />
      </Link>
      <div className='product-info'>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <div className='product-actions'>
        <button className='minus btn' onClick={decrementQuantity}>
          -
        </button>
        <input type='number' value={quantity} readOnly />
        <button className='plus btn' onClick={incrementQuantity}>
          +
        </button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      {showMessage && (
        <p className='message'>Please add a quantity before adding to cart.</p>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
