import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/getProductsActions';
import ProductCard from './ProductCard';

export default function ProductContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(useSelector((state) => state))

  useEffect(() => {
      getProducts(dispatch);
  }, []);
  return (
    <div>
      <h1>Product container</h1>
      <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.name} />
        ))}
        </div>
    </div>
  );
}
