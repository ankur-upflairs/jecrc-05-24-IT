const e = require("express");
const Product = require("../models/product.js");

exports.getAllProducts = async (req, res) => {
    let { category } = req.query
    try {
        if (category) {
            const products = await Product.find({ category });
            res.status(200).json({
                status: "success",
                products: products
            });
        } else {
            const products = await Product.find();
            res.status(200).json({
                status: "success",
                products: products
            });
        }
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            status: "success",
            product: product
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}
exports.createProduct = async (req, res) => {
    try {
        const { name, newPrice, oldPrice, quantity, description, category, brand } = req.body;
        const image = req.file.filename
        // console.log(req.file, req.body);
        const product = await Product.create({ name, newPrice, oldPrice, quantity, description, image, category, brand });
        res.status(200).json({
            status: "success",
            message: "Product created successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            product: product
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            product: product
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}