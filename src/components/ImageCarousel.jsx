import { useState, useEffect } from 'react';
import '../styles/ImageCarousel.css';
import fetchBoards from '../services/ProductService';

function ImageCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadBoards = async () => {
      try {
        const boards = await fetchBoards();
        const boardImages = boards.data.map(board => {
          return {
            name: board[6].value, // Name of image
            src: board[14].value, // URL of image
          };
        });
        setImages(boardImages);
      } catch (error) {
        console.error('Failed to fetch boards:', error);
      }
    };

    loadBoards();
  }, []);

  return (
    <div className='carousel'>
      {images.map((image, index) => (
        <div className='carousel-image' key={index}>
          <img src={image.src} alt={image.name} />
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel;
