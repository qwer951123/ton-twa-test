import type { Metadata } from "next";
import "./globals.css";
import "@repo/ui/theme";
import MainLayout from "../components/layout/main-layout";
import Providers from "../components/providers/providers";
import { Roboto } from "next/font/google";

const font = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Gluon Apps",
  description: "Gluon Apps",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
