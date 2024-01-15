import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';
import { formatPriceWithComma, truncateTitle } from '../utils/Helpers';
import Ratings from './Ratings';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className='product-card' style={{ marginBottom: '1.5em' }}>
      <Link to={`/shop/${product.id}`}>
        <div className='product-image-container'>
          <img
            src={product.imageUrl}
            alt={product.title}
            className='product-image'
          />
        </div>
      </Link>
      <div className='product-info'>
        <h3 style={{ marginBottom: '5px' }}>{truncateTitle(product.title)}</h3>
        <Ratings rating={product.rating} className='ratings-center' />
        <p>${formatPriceWithComma(product.price.toFixed(2))}</p>
      </div>
      <ButtonContainer product={product} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
