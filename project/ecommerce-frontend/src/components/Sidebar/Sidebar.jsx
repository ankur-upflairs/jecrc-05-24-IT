import React from "react";
import { Link } from "react-router-dom";
import productcart from "../Assets/Admin/Product_Cart.svg";
import productlist from "../Assets/Admin/Product_list_icon.svg";
import "./Sidebar.css";

const Sidebar = () => {
  function logout(){
    localStorage.removeItem('adminToken')
  }
  return (
    <div className="sidebar">
      <Link to="/admin/create" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={productcart} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/admin/listproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={productlist} />
          <p>Product List</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidebar-item" onClick={logout}>
          <p>log out</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
