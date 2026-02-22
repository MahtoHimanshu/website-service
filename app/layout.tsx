import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: siteConfig.site.name,
  description: siteConfig.site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}