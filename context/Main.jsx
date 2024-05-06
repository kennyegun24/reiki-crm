"use client";
import Nav from "@/components/nav/Nav";
import TopNav from "@/components/nav/TopNav";
import { createContext, useContext, useState } from "react";
import { SettingsContext } from "./Settings";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const { ltr } = useContext(SettingsContext);
  return (
    <MainContext.Provider>
      <section className={`app_container ${ltr}`}>
        <div className="app_nav">
          <Nav />
        </div>
        <div
          className={`app_children ${
            fullScreen && ltr != "ltr"
              ? "full_screen"
              : fullScreen && ltr === "ltr"
              ? "full_screen_reverse"
              : "half_screen"
          }`}
        >
          <div className="app_top_nav">
            <TopNav setFullScreen={setFullScreen} />
          </div>
          {children}
        </div>
      </section>
    </MainContext.Provider>
  );
};
