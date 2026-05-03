import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenParts — Marketplace for Open-Source Laptop Components",
  description: "Connect with component suppliers and design files for custom laptop builds. The marketplace for hardware makers, hobbyists, and repair shops."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="59a8094a-6d8c-4de5-b3a3-5c463c3509a4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
