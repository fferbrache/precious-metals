import React from 'react'
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product)  => {
        return (
          <div>
            <p>{product.title}</p>
            <img src={product.image} height="50" width="50" alt="" />
          </div>
        )
        })}
    </div>
  );
}
