import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/Admin/cross_icon.png";
import "./ListProduct.css";
import axios from "axios";
import { useNavigate } from "react-router";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate=useNavigate()

  const fetchInfo = async () => {
    const res =await axios.get('http://localhost:3001/product')
    setAllProducts(res.data.products);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    let res=await axios.delete(`http://localhost:3001/product/${id}`,{
      headers:{
        Authorization:localStorage.getItem('adminToken')
      }
    })
    if(res.data.status=='failed'){
      localStorage.removeItem('adminToken')
      navigate('/')
    }
    else{
      window.location.reload()
    }
  };

  return (
    <div className="list-product">
      <h1 style={{ padding: "30px 0", fontSize: "2em" }}>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => {
          // console.log(product._id)
          return (
            <>
              <div
                key={product._id}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={`http://localhost:3001/${product.image}`}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>{`\u20B9${product.oldPrice}`}</p>
                <p>{`\u20B9${product.newPrice}`}</p>
                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  alt=""
                  className="listproduct-remove-icon"
                  onClick={() => removeProduct(product._id)}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
