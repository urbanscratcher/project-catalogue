import ClientOnly from "./common/ClientOnly";
import CopyToaster from "./common/feature/CopyToaster";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Providers from "./common/utils/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Providers>
        <body className="relative">
          <ClientOnly>
            <CopyToaster />
          </ClientOnly>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
