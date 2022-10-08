import { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';

const ProductSelect: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    fetch('../../../data/products.json')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <Select placeholder='Select a Product'>
      {productData.map((product, index) => (
        <option key={product.id} value={`product-${index}`}>
          {`${product.productName} || €${product.price.toString()}`}
        </option>
      ))}
    </Select>
  );
};

export default ProductSelect;
