"use client";
import Orders from "@/components/charts/Orders";
import React from "react";
import "./style.css";
import useSWR from "swr";

// const res = {
//   currentWeekData: [
//     {
//       date: "2024-05-18",
//       name: "Saturday",
//       totalSales: 190,
//       count: 1,
//     },
//     {
//       date: "2024-05-19",
//       name: "Sunday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-20",
//       name: "Monday",
//       totalSales: 84.5,
//       count: 1,
//     },
//     {
//       date: "2024-05-21",
//       name: "Tuesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-22",
//       name: "Wednesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-23",
//       name: "Thursday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-24",
//       name: "Friday",
//       totalSales: 0,
//       count: 0,
//     },
//   ],
//   pastMonthData: [
//     {
//       date: "2024-04-25",
//       name: "Thursday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-04-26",
//       name: "Friday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-04-27",
//       name: "Saturday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-04-28",
//       name: "Sunday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-04-29",
//       name: "Monday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-04-30",
//       name: "Tuesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-01",
//       name: "Wednesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-02",
//       name: "Thursday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-03",
//       name: "Friday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-04",
//       name: "Saturday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-05",
//       name: "Sunday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-06",
//       name: "Monday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-07",
//       name: "Tuesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-08",
//       name: "Wednesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-09",
//       name: "Thursday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-10",
//       name: "Friday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-11",
//       name: "Saturday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-12",
//       name: "Sunday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-13",
//       name: "Monday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-14",
//       name: "Tuesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-15",
//       name: "Wednesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-16",
//       name: "Thursday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-17",
//       name: "Friday",
//       totalSales: 1919.99,
//       count: 1,
//     },
//     {
//       date: "2024-05-18",
//       name: "Saturday",
//       totalSales: 190,
//       count: 1,
//     },
//     {
//       date: "2024-05-19",
//       name: "Sunday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-20",
//       name: "Monday",
//       totalSales: 84.5,
//       count: 1,
//     },
//     {
//       date: "2024-05-21",
//       name: "Tuesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-22",
//       name: "Wednesday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-23",
//       name: "Thursday",
//       totalSales: 0,
//       count: 0,
//     },
//     {
//       date: "2024-05-24",
//       name: "Friday",
//       totalSales: 0,
//       count: 0,
//     },
//   ],
//   pastYearData: [
//     {
//       date: "2024-01",
//       name: "Jan",
//       totalSales: 250,
//       count: 0,
//     },
//     {
//       date: "2024-02",
//       name: "Feb",
//       totalSales: 349,
//       count: 0,
//     },
//     {
//       date: "2024-03",
//       name: "Mar",
//       totalSales: 195,
//       count: 0,
//     },
//     {
//       date: "2024-04",
//       name: "Apr",
//       totalSales: 22,
//       count: 1,
//     },
//     {
//       date: "2024-05",
//       name: "May",
//       totalSales: 2194.49,
//       count: 3,
//     },
//   ],
// };

const Page = () => {
  const fetcher = async () => {
    const fetchData = await fetch("/api/statistics/graphs/orders");
    const data = await fetchData.json();
    return data;
  };
  const { data, error, isLoading } = useSWR("fetchCharts", fetcher, {
    refreshInterval: null,
    errorRetryInterval: 500,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    errorRetryCount: 1,
    revalidateOnMount: true,
  });

  return (
    <div className="order_chart">
      <Orders
        data={data}
        label={"Amount($)"}
        type={"amount"}
        text={"Orders Amount ($)"}
      />
      <Orders
        data={data}
        label={"Orders count"}
        type={"count"}
        text={"Number of Orders"}
      />
    </div>
  );
};

export default Page;
