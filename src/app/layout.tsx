import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.css";
import AppNavbar from "./components/AppNavbar";

const k2D = K2D({
  subsets: ["thai"],
  weight:['100','200','300','400','500','600','700','800'],
  display:'swap'
});

export const metadata: Metadata = {
  title: "ระบบการขายสินค้า",
  description: "ขายสินค้าประจำปี2025",
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${k2D.className}`}
      >
        <AppNavbar/>
        <hr />
        {children}
      </body>
    </html>
  );
}
