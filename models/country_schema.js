import mongoose, { Schema } from "mongoose";

const country = new Schema({
  country: { type: String },
  count: { type: Number, default: 0 },
  country_code: { type: String, unique: true },
});

const countrySchema =
  mongoose.models.Country || mongoose.model("Country", country);

export default countrySchema;
