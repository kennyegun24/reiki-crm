import connectMongoDb from "@/libs/mongodb";
import UserSchema from "@/models/user_schema";
import { NextResponse } from "next/server";

// save user
export const POST = async (req, res) => {
  const data = await req.json();
  const newUser = new UserSchema(data);
  try {
    await connectMongoDb();
    const savedUser = await newUser.save();
    return NextResponse.json("Created");
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
