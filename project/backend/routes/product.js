const express = require("express");
const { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/product");
const router=express.Router();
const upload = require("../utilities/multerSetup.js");
const { adminAuth } = require("../utilities/adminAuth.js");

router.get("/",getAllProducts);
router.post("/",adminAuth,upload.single("image"),createProduct);
router.get("/:id",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id",adminAuth,deleteProduct);
module.exports=router








