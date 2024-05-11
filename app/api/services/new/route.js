import connectMongoDb from "@/libs/mongodb";
import serviceSchema from "@/models/service_schema";
import { NextResponse } from "next/server";

// get products
export const POST = async (req, res) => {
  const data = await req.json();
  const newService = new serviceSchema(data);
  try {
    await connectMongoDb();
    const savedProduct = await newService.save();
    res.status(201).json(savedProduct);
    return NextResponse.json({ allProducts });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
