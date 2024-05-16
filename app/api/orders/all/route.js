import connectMongoDb from "@/libs/mongodb";
import OrderSchema from "@/models/order_schema";
import { NextResponse } from "next/server";

// get orders
export const dynamic = "force-dynamic";

export const GET = async (req, res) => {
  try {
    await connectMongoDb();
    const allOrders = await OrderSchema.find();
    return NextResponse.json({ allOrders });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
