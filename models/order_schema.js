import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    price: { type: String },
    products: { type: Array },
    customer_name: { type: String },
    customer_email_address: { type: String },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const OrderSchema =
  mongoose.models.Orders || mongoose.model("Orders", orderSchema);

export default OrderSchema;
