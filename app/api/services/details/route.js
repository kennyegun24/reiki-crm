import connectMongoDb from "@/libs/mongodb";
import serviceSchema from "@/models/service_schema";
import { NextResponse } from "next/server";

// get services
export const dynamic = "force-dynamic";
export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  // const { id } = req.query;
  console.log(id);
  try {
    await connectMongoDb();
    const findProduct = await serviceSchema.findById(id);
    return NextResponse.json({ findProduct });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
