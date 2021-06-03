import React from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

export default function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Title</h1>
      <p>{props.product.title}</p>
      <img src={props.product.image} height="200" width="200" alt="" /> 
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
      <button onClick={() => addToCart(dispatch, props.product)}>Add to Cart</button>
    </div>
  );
}
