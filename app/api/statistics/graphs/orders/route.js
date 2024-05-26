import connectMongoDb from "@/libs/mongodb";
import OrderSchema from "@/models/order_schema";
import { NextResponse } from "next/server";
import {
  subDays,
  startOfDay,
  format,
  eachDayOfInterval,
  eachMonthOfInterval,
  startOfYear,
} from "date-fns";

const generateWeekDays = () => {
  const now = new Date();
  const startOfWeek = startOfDay(subDays(now, 6));
  return eachDayOfInterval({ start: startOfWeek, end: now }).map((date) => ({
    date: format(date, "yyyy-MM-dd"),
    dayName: format(date, "EEEE"),
  }));
};

const generateMonthDays = () => {
  const now = new Date();
  const startOfPastMonth = startOfDay(subDays(now, 29));
  return eachDayOfInterval({ start: startOfPastMonth, end: now }).map(
    (date) => ({
      date: format(date, "yyyy-MM-dd"),
      dayName: format(date, "EEEE"),
    })
  );
};

const generateYearMonths = () => {
  const now = new Date();
  const startOfPastYear = startOfYear(now);
  return eachMonthOfInterval({ start: startOfPastYear, end: now }).map(
    (date) => ({
      date: format(date, "yyyy-MM"),
      monthName: format(date, "MMM"),
    })
  );
};

const aggregateOrders = async (startDate, groupBy) => {
  return await OrderSchema.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate },
      },
    },
    {
      $group: {
        _id: {
          [groupBy]: {
            $dateToString: {
              format: groupBy === "day" ? "%Y-%m-%d" : "%Y-%m",
              date: "$createdAt",
            },
          },
        },
        totalSales: { $sum: { $toDouble: "$price" } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
};

const fillMissingData = (data, referenceData, groupBy) => {
  const dataMap = data.reduce((map, item) => {
    map[item._id[groupBy]] = item;
    return map;
  }, {});

  return referenceData.map((ref) => {
    const id = ref.date;
    return {
      date: id,
      name: groupBy === "day" ? ref.dayName : ref.monthName,
      totalSales: dataMap[id] ? dataMap[id].totalSales : 0,
      count: dataMap[id] ? dataMap[id].count : 0,
    };
  });
};

export const GET = async (req, res) => {
  try {
    await connectMongoDb();

    const weekDays = generateWeekDays();
    const monthDays = generateMonthDays();
    const yearMonths = generateYearMonths();

    const startOfWeek = startOfDay(subDays(new Date(), 6));
    const startOfPastMonth = startOfDay(subDays(new Date(), 29));
    const startOfPastYear = startOfYear(new Date());

    const currentWeekData = await aggregateOrders(startOfWeek, "day");
    const pastMonthData = await aggregateOrders(startOfPastMonth, "day");
    const pastYearData = await aggregateOrders(startOfPastYear, "month");

    const filledWeekData = fillMissingData(currentWeekData, weekDays, "day");
    const filledMonthData = fillMissingData(pastMonthData, monthDays, "day");
    const filledYearData = fillMissingData(pastYearData, yearMonths, "month");

    return NextResponse.json({
      currentWeekData: filledWeekData,
      pastMonthData: filledMonthData,
      pastYearData: filledYearData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};

// I have been listening to Kota the Friend for sometime now...
// Listening to his songs kinda remind me about you... like so much about you...
// I just want to say thank you for all that you have done for me...
// I kinda feel like you've been there for me more times than I have ever been there for you...
// Thanks...
// Honestly, you are literally a once in a life time type of lady...
// Thanks for crossing paths with me three times already... I guess this third time will be the charm :)
// We are still friends rii? This seems like a corny way to say things....
// But do you think we can just kick things back to what it was?
// I don't know why, but I feel that a part of me is still missing, and that part is you :)
// I can't promise you that I will not annoy you anymore... c'mon, I am kenny,
// I am not promising you that my moods won't come periodically,
// I am promising you that I won't let anything come inbetween us anymore...
// If I am moody, I'll open up immediately without keeping you in the dark...
// I just want you back... I am tired of acting...
// You are the rainbow that comes after the storm...
// The clear clouds on a bright sunny day...
// You are literally everything good...
// And I am running out of patience

// Seeing Kota story and how he came up, I am kinda understanding the whole concept of process...
// Not that I didn't understand it before, it's just that it now looks clearer than ever
