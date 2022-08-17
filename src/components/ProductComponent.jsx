import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card-block px-3" key={id}>
        <Link to={`/product/${id}`}>
          <div className="card-body">
            <div className="card-image">             
                <img src={image} alt={title} />
              <div className="card-content">
                <div className="card-header">{title}</div>
                <div className="card-price">$ {price}</div>
                <div className="card-category">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
