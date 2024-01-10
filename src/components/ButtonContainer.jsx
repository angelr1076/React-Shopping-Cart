import { useContext, useState, useEffect } from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { CartContext } from '../contexts/CartContext';
import PropTypes from 'prop-types';
import '../styles/ButtonContainer.css';

function ButtonContainer({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setShowMessage(false);
  };

  const decrementQuantity = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
    if (quantity <= 1) {
      setShowMessage(false);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantity(0);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <>
      <div className='button-container'>
        <button className='icon minus btn' onClick={decrementQuantity}>
          <FiMinusCircle />
        </button>
        <input type='number' value={quantity} readOnly />
        <button className='icon plus btn' onClick={incrementQuantity}>
          <FiPlusCircle />
        </button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      {showMessage && (
        <p className='message'>Please add a quantity before adding to cart.</p>
      )}
    </>
  );
}

ButtonContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ButtonContainer;
