import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    full_name: { type: String },
    mobile_number: { type: String },
    email_address: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const UserSchema = mongoose.models.Users || mongoose.model("Users", userSchema);

export default UserSchema;
