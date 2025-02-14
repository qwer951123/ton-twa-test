import type { Metadata } from "next";
import "./globals.css";
import TWAProvider from "../components/providers/twa-provider";
import MainLayout from "../components/layout/main-layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    <html lang="en">
      <body>
        <TWAProvider>
          <MainLayout>{children}</MainLayout>
        </TWAProvider>
      </body>
    </html>
  );
}
