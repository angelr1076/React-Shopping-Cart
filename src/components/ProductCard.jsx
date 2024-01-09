import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <Link to={`/shop/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className='product-image'
        />
      </Link>
      <div className='product-info'>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
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
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
