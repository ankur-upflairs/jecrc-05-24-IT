import React, { useContext, useEffect, useState } from "react";

import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";
import axios from "axios";

const CartItems = () => {
  let [cart, setCart] = useState([])
  useEffect(() => {
    async function getCart() {
      let res = await axios.get('http://localhost:3001/cart/', {
        headers: { Authorization: localStorage.getItem('userToken') }
      })
      setCart(res.data.cart)
    }
    getCart()
  }, [])
  function getTotalCartAmount(){
    let amount=0
    cart.forEach(v=>{
      amount+=(v.product.newPrice * v.quantity)
    })
    return amount
  }
  async function removeFromCart(id){
    let res= await axios.delete(`http://localhost:3001/cart/${id}`,{
      headers:{
        Authorization:localStorage.getItem('userToken')
      }
    })
    console.log(res.data)
    window.location.reload()
  }


  if (cart.length == 0) {
    return <h1>NO item in cart</h1>
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cart.map((e) => {
        return (
          <div key={e.product._id}>
            <div className="cartitems-format cartitems-format-main">
              <img
                src={`http://localhost:3001/${e.product.image}`}
                alt=""
                className="carticon-product-icon"
              />
              <p>{e.name}</p>
              <p>{`\u20B9${e.product.newPrice}`}</p>
              <button className="cartitems-quantity">
                {e.quantity}
              </button>
              
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(e.product._id);
                }}
                alt=""
              />
            </div>
            <hr />


          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{`\u20B9${getTotalCartAmount()
                }`}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{`\u20B9${getTotalCartAmount()}`}</h3>
            </div>
          </div>
          <button onClick={() => alert("Your order has been placed!")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
