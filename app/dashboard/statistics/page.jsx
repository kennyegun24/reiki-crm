import DashboardSalesCards from "@/components/cards/DashboardSalesCards";
import React from "react";
import "./style.css";
import OtherCards from "@/components/cards/stats/OtherCards";
import {
  FaUsersViewfinder,
  FaMoneyBill1Wave,
  FaChartLine,
} from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import {} from "react-icons/fa6";
const page = () => {
  const sales_card = Array.from({ length: 5 });
  return (
    <div className="stats_container">
      {sales_card.map((card, _) => (
        <DashboardSalesCards ind={_} key={_} />
      ))}

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <OtherCards
          text={"Income"}
          icon={<FaMoneyBill1Wave color="#22c63d" />}
          value={"$45k"}
          key={4283}
        />
        <OtherCards
          text={"Income this month"}
          icon={<FaChartLine color="#5ac2ff" />}
          value={"$2.3k"}
          key={78389}
        />
      </div>
      <OtherCards
        text={"Users"}
        icon={<FaUsersViewfinder color="#fff" />}
        value={"121"}
        key={4283233}
      />
    </div>
  );
};

export default page;

// PENDING ORDERS
// ONLINE ORDERS
// RETURN ORDERS
// USERS COUNT
// ITEMS ON THE WAY
// INCOME
// INCOME THIS MONTH
// TOTAL INCOME
