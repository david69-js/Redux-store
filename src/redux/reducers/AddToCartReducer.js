import { ActionTypes } from "../constants/action-types";

const InitialState = {
    products:[],
};

export const CartReducer = (state = InitialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const AddNewProduct = state.products?.find(product => product.id === payload.id);
            const productInCart = state.products?.find(product => product.id === payload.id);
            return productInCart ?  {
                ...state,
                products: state.products.map((item) => 
                    item.id === AddNewProduct.id
                    ? {...item, qty: item.qty + 1}
                    : item
                )
            }
            : {
                ...state,
                products: [...state.products, {...AddNewProduct, id: payload.id, title: payload.title, price: payload.price, image: payload.image, qty: 1}]
            }
  

        case ActionTypes.REMOVE_ITEM_CART:
            const productToRemove = state.products?.find(product => product.id === payload.id);
            return productToRemove.qty > 1
            ? {
                ...state,
                products: state.products.map((item) =>
                  item.id === payload.id
                    ? { ...item, qty: item.qty - 1 }
                    : item
                ),
              }
            : {
                ...state,
                products: state.products.filter((item) => item.id !== payload.id),
              };
        
        default:
            return state;
    }
};