import Head from "next/head";
import Header from "./components/organisms/Header";
import "./globals.css";
import meta from "./(meta)/globalMeta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-pretendard">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
