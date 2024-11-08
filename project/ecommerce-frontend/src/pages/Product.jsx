import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum.jsx";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import axios from "axios";


const Product = () => {  
  const { productId } = useParams();
  const [product,setProduct]=useState(null)
  useEffect(()=>{
    async function getProduct(){
        let res=await axios.get(`http://localhost:3001/product/${productId}`)
        // console.log(res.data)
        setProduct(res.data.product)
    }
    getProduct()
  },[])
  
  return (
    <div>
      <Breadcrum product={product} />
      {product && <ProductDisplay product={product} />}
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
