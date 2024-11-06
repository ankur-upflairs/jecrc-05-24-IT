import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import ListProduct from "../../Components/ListProduct/ListProduct";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Admin;
