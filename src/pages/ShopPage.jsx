import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import fetchBoards from '../services/ProductService';
import '../styles/ShopPage.css';

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchBoards().then(data => {
      const transformedProducts = data.data.map(item => ({
        title: item['6']?.value,
        description: item['7']?.value,
        price: item['8']?.value,
        rating: item['9']?.value,
        imageUrl: item['10']?.value.versions[0].fileName,
        delivery: item['11']?.value,
        seller: item['12']?.value,
      }));
      console.log(data.data);
      setProducts(transformedProducts);
    });
  }, []);

  return (
    <div className='products'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ShopPage;
