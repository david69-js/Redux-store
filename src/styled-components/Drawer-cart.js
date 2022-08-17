import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import CartStyle from './styles';
import { AddToCart, RemoveToCart } from "../redux/actions/AddToCartActions";
const Cart = ({ Open }) => {
    const CartProducts = useSelector((state) => state.AddToCart.products)
    const dispatch = useDispatch();
    const AddToTheCart = (data) =>{
        dispatch(AddToCart(data))
      }
      const RemoveToTheCart = (data) =>{
        dispatch(RemoveToCart(data))
      }
    return (
        <CartStyle Open={Open}>
            <div className="fill-cart" onClick={() => Open = false} ></div>
                <div className="cart_items gap-2">
                {
                    CartProducts.map((product) => {
                        const {id, title, price, qty, image} = product;
                        return(
                            <p key={id} className="flex flex-row-reverse justify-left border-zinc-800 border-2">
                                <span className="cart__item flex flex-col">
                                    <span>{title}</span>
                                    <span>${price}</span>
                                    <span className="flex flex-row cart_qty w-fit">
                                        <button onClick={() => AddToTheCart({id, title, price, image})}
                                                className="cart_qty-btn flex items-center btn-more px-2 py-1 bg-gray-900 rounded border-gray-800 border text-gray-50"><span>+</span></button>
                                            <span className="cart_qty-qty rounded border-gray-800 border px-5">{qty}</span>
                                        <button onClick={() => RemoveToTheCart({id, title, price, image})} 
                                                className="cart_qty-btn flex items-center btn-less px-2 py-1 bg-gray-900 rounded border-gray-800 border text-gray-50"><span>-</span></button>
                                    </span>
                                </span>
                                <img src={image} alt={title} className="p-10 cart_item-image"/>
                            </p>
                        )
                    })
                }
                <div className="checkout w-full py-3 bg-gray-900 text-center">
                <span className="btn checkout text-gray-50 text-xl">Checkout</span>
                </div>
            </div>
            
        </CartStyle>
    )
}

export default Cart