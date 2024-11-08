import React, { useContext } from "react";

import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  // console.log(product)
  const image = product.image; 
  async function addToCart(){
    
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={`http://localhost:3001/${image}`} alt="" />
          <img src={`http://localhost:3001/${image}`} alt="" />
          <img src={`http://localhost:3001/${image}`} alt="" />
          <img src={`http://localhost:3001/${image}`} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={`http://localhost:3001/${image}`} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{`\u20B9${product.oldPrice}`}</div>
          <div className="productdisplay-right-price-new">{`\u20B9${product.newPrice}`}</div>
        </div>
        <div className="productdisplay-right-description">
         {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart();
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span>Men, Women, T-Shirt, Crop Top, Jackets
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
