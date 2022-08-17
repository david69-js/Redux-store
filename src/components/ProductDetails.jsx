import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { AddToCart } from "../redux/actions/AddToCartActions"

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description, id } = product;
  const dispatch = useDispatch();
  const AddToTheCart = (data) =>{
    dispatch(AddToCart(data))
  }
  
  const fetchProductDetail = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="pdp-container ui grid container pt-28 px-4 md:px-auto pb-10 ">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
            <div className="pdp-content md:flex">
              <div className="md:w-2/4 column1 p-5">
                <img className="pdp-image ui fluid image" alt={title} src={image} />
              </div>
              <div className="pdp-head md:w-2/4 column2 p-5">
                <h1 className="pdp-title">{title}</h1>
                <h2 className="pdp-price">
                  <span className="ui teal tag label">${price}</span>
                </h2>
                <h3 className="pdp-category">Category: {category}</h3>
                <p className="pdp-description">{description}</p>
                <button className="pdp-button" onClick={() => AddToTheCart({id, title, price, image})} tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div>Add to Cart</div>
                </button>
              </div>
            </div>
      )}
    </div>
  );
};

export default ProductDetails;
