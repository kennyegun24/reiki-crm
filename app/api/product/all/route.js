import connectMongoDb from "@/libs/mongodb";
import ProductSchema from "@/models/product_schema";
import { NextResponse } from "next/server";

// get products
export const GET = async (req, res) => {
  // const {} = await req.json();
  try {
    await connectMongoDb();
    const allProducts = await ProductSchema.find();
    console.log(allProducts);
    return NextResponse.json({ allProducts });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
