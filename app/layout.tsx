import type { Metadata } from "next";

import "./globals.css";

import ScrollProgress from "@/src/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Vinith S. — React Native & Mobile Engineer",
  description:
    "Portfolio of Vinith S., a React Native and Mobile Engineer specializing in mobile architecture, native iOS, performance, AI-powered engineering, and production systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}