"use client";
import Settings from "@/components/Settings";
import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [ltr, setLtr] = useState("rtl");
  const appDirection = (param) => {
    setLtr(param);
  };
  return (
    <SettingsContext.Provider
      value={{ setShowSettings, showSettings, appDirection, ltr }}
    >
      {children}
      <Settings />
    </SettingsContext.Provider>
  );
};
