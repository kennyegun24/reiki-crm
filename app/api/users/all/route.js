import connectMongoDb from "@/libs/mongodb";
import UserSchema from "@/models/user_schema";
import { NextResponse } from "next/server";

// get users
export const dynamic = "force-dynamic";

export const GET = async (req, res) => {
  try {
    await connectMongoDb();
    const allUsers = await UserSchema.find();
    return NextResponse.json({ allUsers });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
