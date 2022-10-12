/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useMemo, useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const ProductSelect: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  const { setSelectedProduct, setSelectedMaxAmount } = useCartContext();

  useEffect(() => {
    fetch('http://localhost:5173/data/products.json')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  const handleChange = useMemo(
    () => (productId: string) => {
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
    },
    [productData]
  );

  return (
    <Select
      placeholder='Select a Product'
      color='black'
      onChange={(e) => handleChange(e.target.value)}
      defaultValue={'none'}
      fontWeight='bold'
      data-testid='product-select'
    >
      {productData.map((product, index) => (
        <option
          key={`product-${index}`}
          value={product.id}
          data-testid='product-select-item'
        >
          {`${product.productName} || €${product.price.toLocaleString(
            'en-US'
          )}`}
        </option>
      ))}
    </Select>
  );
};

export default ProductSelect;
