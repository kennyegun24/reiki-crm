import connectMongoDb from "@/libs/mongodb";
import countrySchema from "@/models/country_schema";
import { NextResponse } from "next/server";

// save country
export const GET = async (req, res) => {
  try {
    await connectMongoDb();
    const allCountries = await countrySchema.find();
    return NextResponse.json({ allCountries });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
