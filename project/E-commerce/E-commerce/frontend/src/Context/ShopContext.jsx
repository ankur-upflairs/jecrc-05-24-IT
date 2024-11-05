import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [all_product, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });

      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart', {
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
          },
          body:"",
        }).then((response)=>response.json())
        .then((data)=>setCartItems(data));
      }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] ?? 0) + 1 }));
  
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart',{
          method:'POST',
          headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-type':'application/json',
          },
          body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));

    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));

    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === item);
        totalAmount += itemInfo.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
