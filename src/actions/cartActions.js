import { ADD_TO_CART } from '../action-types/cart-action-types';

export const addToCart = (dispatch, product) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};
