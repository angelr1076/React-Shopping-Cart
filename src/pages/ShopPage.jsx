import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import fetchBoards from '../services/ProductService';
import '../styles/ShopPage.css';

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchBoards().then(data => {
      const transformedProducts = data.data.map(item => ({
        id: item['3']?.value,
        title: item['6']?.value,
        description: item['7']?.value,
        price: Number(item['8']?.value.toFixed(2)),
        rating: item['9']?.value,
        imageUrl: item['14']?.value,
        delivery: item['11']?.value,
        seller: item['12']?.value,
      }));
      setProducts(transformedProducts);
    });
  }, []);

  return (
    <div className='product-page'>
      <h2 className='product-page__title'>Our Products</h2>
      <div className='products'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
