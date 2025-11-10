import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Fit By MR",
  description: "addict to gyms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
