import connectMongoDb from "@/libs/mongodb";
import ProductSchema from "@/models/product_schema";
import { NextResponse } from "next/server";

// get products
export const POST = async (req, res) => {
  const data = await req.json();
  const newProduct = new ProductSchema(data);
  try {
    await connectMongoDb();
    const savedProduct = await newProduct.save();
    return NextResponse.json("Created");
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
