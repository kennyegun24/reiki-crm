import connectMongoDb from "@/libs/mongodb";
import OrderSchema from "@/models/order_schema";
import { NextResponse } from "next/server";

// save order
export const POST = async (req, res) => {
  const data = await req.json();
  const newOrder = new OrderSchema(data);
  try {
    await connectMongoDb();
    const savedOrder = await newOrder.save();
    return NextResponse.json("Created");
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
