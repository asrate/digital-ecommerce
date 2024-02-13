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
  discountPrice: {
    type: Number,
  },
  stackQuantity: {
    type: Number,
  },
  offer: {
    type: Boolean,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  pdf: {
    type: String,
  },
  catagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Catagory",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const product = mongoose.model("Product", productSchema);
export default product;
