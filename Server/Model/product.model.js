import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stackQuantity: {
    type: Number,
  },
  catagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Catagory",
  },
});
const product = mongoose.model("Product", productSchema);
export default product;