import express from "express";
import { getProduct, newProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", newProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
