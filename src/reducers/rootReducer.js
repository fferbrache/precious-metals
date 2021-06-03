import { combineReducers } from "redux";
import cart from './cartReducer';
import products from './getProductsReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ products, cart});

export default rootReducer;