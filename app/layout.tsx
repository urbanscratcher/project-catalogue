import React from "react";
import Header from "./components/organisms/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className="font-pretendard">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
