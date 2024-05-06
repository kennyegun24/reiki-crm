"use client";
import Settings from "@/components/Settings";
import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <SettingsContext.Provider value={{ setShowSettings, showSettings }}>
      {children}
      <Settings />
    </SettingsContext.Provider>
  );
};
