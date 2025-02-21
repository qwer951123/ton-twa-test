import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@repo/ui/theme";
import Providers from "../components/providers/providers";
import { Roboto } from "next/font/google";

const font = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Gluon Apps",
  description: "Gluon Apps",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-background text-text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
