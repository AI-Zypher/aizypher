import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Zypher",
  description: "Made with love by AIZYPHER Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/nav-logo.png"
        type="image/x-icon"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
