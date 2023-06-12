import Toast from "./components/atoms/Toast";
import Header from "./components/organisms/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className="font-pretendard">
      <body className="relative">
        <Toast text={`E-mail Copied!`} />
        <Header />
        {children}
      </body>
    </html>
  );
}
