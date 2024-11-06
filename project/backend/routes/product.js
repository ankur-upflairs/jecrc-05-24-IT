const express = require("express");
const { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/product");
const router=express.Router();
const upload = require("../utilities/multerSetup.js");
const { auth } = require("../utilities/adminAuth.js");

router.get("/",getAllProducts);
router.post("/",auth,upload.single("image"),createProduct);
router.get("/:id",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
module.exports=router








