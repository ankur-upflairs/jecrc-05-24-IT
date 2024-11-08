import React, { useContext, useEffect, useState } from "react";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item"

import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const ShopCategory = (props) => {
    const [products,setProducts]=useState([])
  useEffect(()=>{
    async function getProducts(){
         let res=await axios.get('http://localhost:3001/product/')
         
        if(res.data.status=='success'){
            setProducts(res.data.products)
        }
    }
    getProducts()
  },[])
//   console.log(products)
  return (
    <>
    <Navbar/>
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item) => {            
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
    </>
  );
};

export default ShopCategory;
