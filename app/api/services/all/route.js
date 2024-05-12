import connectMongoDb from "@/libs/mongodb";
import serviceSchema from "@/models/service_schema";
import { NextResponse } from "next/server";

// get services
export const dynamic = "force-dynamic";
export const GET = async (req, res) => {
  try {
    await connectMongoDb();
    const allServices = await serviceSchema.find();
    return NextResponse.json({ allServices });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
