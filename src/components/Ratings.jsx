import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../styles/Ratings.css';

const Ratings = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;

  return (
    <div className='ratings' style={{ marginBottom: '10px' }}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className='star' />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className='star' />
      ))}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

export default Ratings;
