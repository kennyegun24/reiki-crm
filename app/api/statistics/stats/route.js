import connectMongoDb from "@/libs/mongodb";
import OrderSchema from "@/models/order_schema";
import UserSchema from "@/models/user_schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const GET = async (req, res) => {
  await connectMongoDb();

  try {
    // Fetch pending orders count
    const pendingOrdersCountPromise = OrderSchema.countDocuments({
      status: "Pending",
    });

    // Fetch delivered orders count
    const deliveredOrdersCountPromise = OrderSchema.countDocuments({
      status: "Delivered",
    });

    // Fetch users count
    const usersCountPromise = UserSchema.countDocuments();
    const ordersCountPromise = OrderSchema.countDocuments();

    // Resolve all promises concurrently
    const [pendingOrdersCount, deliveredOrdersCount, usersCount, ordersCount] =
      await Promise.all([
        pendingOrdersCountPromise,
        deliveredOrdersCountPromise,
        usersCountPromise,
        ordersCountPromise,
      ]);

    return NextResponse.json({
      stats: [
        {
          sales: `${pendingOrdersCount} Pending`,
          header: "Pending Orders",
          prevText: `${pendingOrdersCount} pending orders / ${ordersCount} total orders`,
          percentageDifference: (pendingOrdersCount / ordersCount) * 100,
        },
        {
          sales: `${deliveredOrdersCount} Delivered`,
          header: "Delivered Orders",
          prevText: `${deliveredOrdersCount} delivered orders / ${ordersCount} total orders`,
          percentageDifference: (deliveredOrdersCount / ordersCount) * 100,
        },
        {
          sales: `${ordersCount} Total Deliveries`,
          header: "Total Deliveries",
          prevText: `You have a total ${ordersCount} deliveries (orders) so far`,
        },
      ],
      usersCount: usersCount,
      ordersCount: ordersCount,
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
};
