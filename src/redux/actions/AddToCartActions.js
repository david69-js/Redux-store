import { ActionTypes } from "../constants/action-types";

export const AddToCart = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products
  }
}

export const AddOneItemToCart = (product) => {
    return {
      type: ActionTypes.ADD_ONE_ITEM_TO_CART,
      payload: product
    }
}

export const RemoveToCart = (product) => {
    return {
      type: ActionTypes.REMOVE_ITEM_CART,
      payload: product
    }
}