import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import TopNav from "@/components/nav/TopNav";
import { MainProvider } from "@/context/Main";
import { SettingsProvider } from "@/context/Settings";
import { DashboardProvider } from "@/context/Dashboard";
import { CountryProvider } from "@/context/Country";

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
            <MainProvider>
              <CountryProvider>{children}</CountryProvider>
            </MainProvider>
          </DashboardProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
