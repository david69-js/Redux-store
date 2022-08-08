import { combineReducers } from "redux";
import { CartReducer } from "./AddToCartReducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  AddToCart: CartReducer
});
export default reducers;
