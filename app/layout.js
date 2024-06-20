import { Inter } from "next/font/google";
import "./globals.css";
import { MainProvider } from "@/context/Main";
import { SettingsProvider } from "@/context/Settings";
import { DashboardProvider } from "@/context/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "CRM to organize your reiki website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingsProvider>
          <DashboardProvider>
            <MainProvider>{children}</MainProvider>
          </DashboardProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
