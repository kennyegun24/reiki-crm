import React from "react";
import styles from "./styles.module.css";
import "./style.css";

const DashboardSalesCards = ({ ind }) => {
  return (
    <div key={ind} className={`sales_card ${(ind + 1) % 3 === 0 && "diff"}`}>
      <h2 className={"card_header"}>Daily Sales</h2>
      <p className={"card_price"}>$234.99</p>
      <div className={"text"}>
        <p>You made an extra $45 today!</p>
        <div className={"prog_bar"}>
          <div className={"prog_bar_color"} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSalesCards;
