// ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchBoards from '../services/ProductService';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const numericId = Number(id);

  useEffect(() => {
    fetchBoards().then(data => {
      const item = data.data.find(item => item['3']?.value === numericId);
      if (item) {
        setProduct({
          id: item['3']?.value,
          title: item['6']?.value,
          description: item['7']?.value,
          price: item['8']?.value,
          rating: item['9']?.value,
          imageUrl: item['14']?.value,
          delivery: item['11']?.value,
          seller: item['12']?.value,
        });
      }
    });
  }, [numericId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-detail'>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <div className='product-details'>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Rating: {product.rating}</p>
        <p>Delivery: {product.delivery}</p>
        <p>Seller: {product.seller}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
