import ClientOnly from "./common/ClientOnly";
import CopyToaster from "./common/feature/CopyToaster";
import Footer from "./common/Footer";
import Header from "./common/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="relative">
        <ClientOnly>
          <CopyToaster />
        </ClientOnly>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
