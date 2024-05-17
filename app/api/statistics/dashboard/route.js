import connectMongoDb from "@/libs/mongodb";
import OrderSchema from "@/models/order_schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const GET = async (req, res) => {
  await connectMongoDb();

  try {
    const now = new Date();

    // Dates for the current periods
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Dates for the previous periods
    const startOfPreviousDay = new Date(startOfDay);
    startOfPreviousDay.setDate(startOfPreviousDay.getDate() - 1);

    const startOfPreviousMonth = new Date(startOfMonth);
    startOfPreviousMonth.setMonth(startOfPreviousMonth.getMonth() - 1);

    const startOfPreviousYear = new Date(startOfYear);
    startOfPreviousYear.setFullYear(startOfPreviousYear.getFullYear() - 1);

    const dailySalesPromise = OrderSchema.aggregate([
      { $match: { createdAt: { $gte: startOfDay } } },
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const previousDailySalesPromise = OrderSchema.aggregate([
      { $match: { createdAt: { $gte: startOfPreviousDay, $lt: startOfDay } } },
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const monthlySalesPromise = OrderSchema.aggregate([
      { $match: { createdAt: { $gte: startOfMonth } } },
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const previousMonthlySalesPromise = OrderSchema.aggregate([
      {
        $match: {
          createdAt: { $gte: startOfPreviousMonth, $lt: startOfMonth },
        },
      },
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const yearlySalesPromise = OrderSchema.aggregate([
      { $match: { createdAt: { $gte: startOfYear } } },
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const previousYearlySalesPromise = OrderSchema.aggregate([
      {
        $match: { createdAt: { $gte: startOfPreviousYear, $lt: startOfYear } },
      },
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const totalSalesPromise = OrderSchema.aggregate([
      { $group: { _id: null, totalSales: { $sum: { $toDouble: "$price" } } } },
    ]);

    const [
      dailySales,
      previousDailySales,
      monthlySales,
      previousMonthlySales,
      yearlySales,
      previousYearlySales,
      totalSales,
    ] = await Promise.all([
      dailySalesPromise,
      previousDailySalesPromise,
      monthlySalesPromise,
      previousMonthlySalesPromise,
      yearlySalesPromise,
      previousYearlySalesPromise,
      totalSalesPromise,
    ]);

    const formatDouble = (value) => {
      return parseFloat(value).toFixed(2);
    };

    return NextResponse.json({
      totalSales: formatDouble(totalSales[0]?.totalSales || 0),
      dashboardSalesCards: [
        {
          sales: formatDouble(dailySales[0]?.totalSales || 0),
          prev: formatDouble(previousDailySales[0]?.totalSales || 0),
          prevText: "day",
        },
        {
          sales: formatDouble(monthlySales[0]?.totalSales || 0),
          prev: formatDouble(previousMonthlySales[0]?.totalSales || 0),
          prevText: "month",
        },
        {
          sales: formatDouble(yearlySales[0]?.totalSales || 0),
          prev: formatDouble(previousYearlySales[0]?.totalSales || 0),
          prevText: "year",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};
