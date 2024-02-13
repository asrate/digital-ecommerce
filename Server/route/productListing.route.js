import express from "express";
import {
  createProductListing,
  deleteProduct,
  allProduct,
} from "../controller/productList.contoller.js";
const router = express.Router();
router.post("/productlisting", createProductListing);
router.delete("/deleteproduct/:id", deleteProduct);
router.get("/allproducts", allProduct);
export default router;
