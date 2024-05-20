import connectMongoDb from "@/libs/mongodb";
import countrySchema from "@/models/country_schema";
import { NextResponse } from "next/server";

// Save country
export const POST = async (req, res) => {
  const data = await req.json();
  const { country_code, country } = data;

  try {
    await connectMongoDb();
    const existingCountry = await countrySchema.findOne({ country_code });

    if (existingCountry) {
      existingCountry.count += 1;
      console.log("start, 2");
      await existingCountry.save();
      console.log("created, 2");
      return NextResponse.json("Count incremented");
    } else {
      console.log("start, 1");
      const newCountry = new countrySchema({ country_code, country, count: 1 });
      await newCountry.save();
      console.log("created, 1");
      return NextResponse.json("Created");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
};
