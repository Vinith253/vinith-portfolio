import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinith S. | Senior Mobile Engineer",
  description:
    "Senior Mobile Engineer specializing in React Native, mobile architecture, native iOS, and AI-powered engineering solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}