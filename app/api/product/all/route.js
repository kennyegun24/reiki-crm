import connectMongoDb from "@/libs/mongodb";
import ProductSchema from "@/models/product_schema";
import { NextResponse } from "next/server";

// get products
export const dynamic = "force-dynamic";

export const GET = async (req, res) => {
  // const {} = await req.json();
  try {
    await connectMongoDb();
    const allProducts = await ProductSchema.find();
    // res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    console.log(allProducts);
    return NextResponse.json({ allProducts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
