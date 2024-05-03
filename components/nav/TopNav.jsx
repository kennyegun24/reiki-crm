"use client";
import React from "react";
import styles from "./top_nav.module.css";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const pathname = usePathname()
    .split("/")
    .filter((each) => each !== "");
  const capFirst =
    pathname.length > 0 ? pathname[0].charAt(0).toUpperCase() : "D";
  const remainingStr =
    pathname.length > 0 ? pathname[0].substring(1) : "ashboard";
  const capSec =
    pathname.length > 1 ? pathname[1].charAt(0).toUpperCase() : "H";
  const remainingSecStr =
    pathname.length > 1 ? pathname[1].substring(1) : "ome";
  const firstPath = capFirst + remainingStr;
  const secondPath = capSec + remainingSecStr;
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.search_container}>
          <FaBars color="#6F747F" size={20} />
          <div className={styles.input_container}>
            <CiSearch size={20} color="#3C4754" />
            <input
              className={styles.search_input}
              placeholder="Search..."
              type="search"
              id=""
            />
          </div>
        </div>

        <div className={styles.search_container}>
          <GoSun color="#6F747F" size={20} />
          <div className={styles.img} />
        </div>
      </div>

      <div className={styles.tab_text}>
        <h5>Home</h5>
        <MdOutlineKeyboardArrowRight />
        <h5>{firstPath}</h5>
        <MdOutlineKeyboardArrowRight />
        <h5>{secondPath}</h5>
      </div>
    </div>
  );
};

export default TopNav;
