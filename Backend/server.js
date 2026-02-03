import express from "express";
import connectDB from "./config/db.config.js";
import product from "./routes/product.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();


const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/products", product);


app.listen(PORT, "0.0.0.0", ()=> {
    console.log("server started successfully");
});