import { Metadata } from "next";
import './globals.css';

const metadata: Metadata = {
  title: "Fit By MR",
  description: "addict to gyms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
