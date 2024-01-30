import mongoose from "mongoose";
const orderSchema = new mongoose.OrderSchema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
      },
    },
  ],
  users: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
  },
});
const order = mongoose.model("Order", orderSchema);
export default order;
