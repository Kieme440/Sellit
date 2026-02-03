import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true

    },

    price:{
        type: String,
        require: true
    },

    image:{
        type: String,
        require: true
    },
},

{timestamps:true}

);

const Product = new mongoose.model("Product", productSchema);

export default Product;