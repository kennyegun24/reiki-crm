import mongoose, { Schema } from "mongoose";

const service = new Schema(
  {
    service_name: { type: String },
    service_image: { type: String },
    service_description: { type: String },
    price: { type: Number },
    timing: { type: String },
  },
  { timestamps: true }
);

const serviceSchema =
  mongoose.models.Services || mongoose.model("Services", service);

export default serviceSchema;
