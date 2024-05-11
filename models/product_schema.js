import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    product_name: { type: String },
    product_image: { type: String },
    product_description: { type: String },
    in_stock: { type: Number, default: 1 },
    sold: { type: Number, default: 0 },
    price: { type: Number },
  },
  { timestamps: true }
);

const ProductSchema =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default ProductSchema;
