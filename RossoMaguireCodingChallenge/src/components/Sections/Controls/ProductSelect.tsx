/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const ProductSelect: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  const { setSelectedProduct, setSelectedMaxAmount } = useCartContext();

  useEffect(() => {
    fetch('../../../data/products.json')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  const handleChange = (productId: string) => {
    const productSelected = productData.find(
      (product) => product.id === productId
    ) || {
      id: 'none',
      productName: '',
      maxAmount: 0,
      taxRate: 0,
      price: 0,
    };
    setSelectedProduct(productSelected);
    setSelectedMaxAmount(productSelected.maxAmount);
  };

  return (
    <Select
      placeholder='Select a Product'
      color='black'
      onChange={(e) => handleChange(e.target.value)}
      defaultValue={'none'}
      fontWeight='bold'
    >
      {productData.map((product, index) => (
        <option key={`product-${index}`} value={product.id}>
          {`${product.productName} || €${product.price.toLocaleString(
            'en-US'
          )}`}
        </option>
      ))}
    </Select>
  );
};

export default ProductSelect;
