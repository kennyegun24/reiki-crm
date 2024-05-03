"use client";
import Nav from "@/components/nav/Nav";
import TopNav from "@/components/nav/TopNav";
import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <MainContext.Provider>
      <div className="app_nav">
        <Nav />
      </div>
      <div
        className={`app_children ${fullScreen ? "full_screen" : "half_screen"}`}
      >
        <div className="app_top_nav">
          <TopNav setFullScreen={setFullScreen} />
        </div>
        {children}
      </div>
    </MainContext.Provider>
  );
};
