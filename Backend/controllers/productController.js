import mongoose from "mongoose";
import Product from "../models/products.model.js";

export async function getProduct(req, res){
  try {
    const product = await Product.find();
    res.status(200).json(product);
    if(!getProduct) res.status(404).json({message: "Product Not Found!"});  
  } catch (error) {
    res.status(500).json({message: "Internal Server Error!"}); 
    console.log("Server error", error)
  } 
};

export async function newProduct(req, res){
  const product = req.body;
if(!product.name || !product.price || !product.image) {
    return res.status(400).json({success:false, message: "Please enter all fields"}); 
  };

const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(200).json({success:true, data: newProduct, message: "created new product successfully"});
  } catch (error) {
        res.status(500).json({message: "Internal Server Error!"}); 
        console.log("Server error", error);
  }
};

export async function updateProduct(req, res){
  const {id} = req.params;
  const {product} = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({success:false, message: "Invalid Product Id"}); 
  };
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
    res.status(201).json({success: true, message: "product updated successfully", data: updatedProduct});
    
  } catch (error) {
    res.status(500).json({message: "Internal Server Error!"}); 
    console.log("Server error", error);
  } 
};

export async function deleteProduct(req, res){
  const {id} = req.params;
  const {product} = req.body;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id, product);
    if(!deletedProduct) return res.status(404).json({success: false, message: "Product Not Found!"});  
    res.status(200).json({message: "deleted products successfully"});
  } catch (error) {
    res.status(500).json({message: "Internal Server Error!"}); 
    console.log("Server error", error);
  }
};