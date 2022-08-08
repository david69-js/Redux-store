import { ActionTypes } from "../constants/action-types";

const InitialState = {
    products:[],
};

export const CartReducer = (state = InitialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const AddNewProduct = state.products?.find(product => product.id === payload);
            const productInCart = state.products?.find(product => product.id === payload);

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
                products: [...state.products, {...AddNewProduct, id: payload, qty: 1}]
            }
  

        case ActionTypes.REMOVE_ITEM_CART:
            return{
                ...state, products: payload
            };
        default:
           return state;
    }
};